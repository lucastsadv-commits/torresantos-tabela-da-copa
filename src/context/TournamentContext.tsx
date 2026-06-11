import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { supabase } from '../lib/supabase';
import { groupsData as initialGroupsData, knockoutData as initialKnockoutData, type Group, type KnockoutMatch, type Match } from '../data/copa2026';
import { calculateGroups, updateKnockout } from '../utils/tableCalculations';

interface TournamentContextData {
  groups: Group[];
  knockout: Record<string, KnockoutMatch[]>;
  loading: boolean;
}

const TournamentContext = createContext<TournamentContextData>({
  groups: initialGroupsData,
  knockout: initialKnockoutData,
  loading: true,
});

export const useTournament = () => useContext(TournamentContext);

export const TournamentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchMatches = async () => {
    try {
      const { data, error } = await supabase.from('matches').select('*');
      if (error) {
        console.error('Erro ao buscar jogos do Supabase:', error);
        return;
      }
      if (data) {
        setMatches(data as Match[]);
      }
    } catch (err) {
      console.error('Erro de conexão:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMatches();

    const subscription = supabase
      .channel('public:matches')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'matches' }, (payload) => {
        console.log('Realtime Match Update:', payload);
        // Atualiza a lista local de jogos com a nova alteração do banco
        setMatches((prev) => {
          const updatedMatch = payload.new as Match;
          const index = prev.findIndex(m => m.id === updatedMatch.id);
          if (index !== -1) {
            const newMatches = [...prev];
            newMatches[index] = updatedMatch;
            return newMatches;
          }
          return [...prev, updatedMatch];
        });
      })
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);

  const computedGroups = useMemo(() => {
    if (matches.length === 0) return initialGroupsData;
    return calculateGroups(matches, initialGroupsData);
  }, [matches]);

  const computedKnockout = useMemo(() => {
    if (matches.length === 0) return initialKnockoutData;
    return updateKnockout(matches, initialKnockoutData);
  }, [matches]);

  return (
    <TournamentContext.Provider value={{ groups: computedGroups, knockout: computedKnockout, loading }}>
      {children}
    </TournamentContext.Provider>
  );
};
