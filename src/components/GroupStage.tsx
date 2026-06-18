import React from 'react';
import { motion } from 'framer-motion';
import type { Group } from '../data/copa2026';
import { useTournament } from '../context/TournamentContext';

const GroupStage: React.FC = () => {
  const { groups } = useTournament();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h3 className="font-heading text-2xl md:text-3xl font-extrabold text-brand-primary text-center mb-10">
        Fase de Grupos
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {groups.map((group: Group, idx: number) => {
          const isBrazilGroup = group.name === 'Grupo C';
          
          return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: (idx % 3) * 0.1 }}
            key={group.name}
            className={`bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all ${
              isBrazilGroup 
                ? 'border-2 border-[#009B3A]/60 ring-4 ring-[#009B3A]/10 md:scale-[1.02] z-10' 
                : 'border border-gray-100'
            }`}
          >
            {/* Cabecalho do Grupo */}
            <div className={`py-2 px-3 text-center font-bold text-base tracking-wide flex justify-center items-center gap-2 ${
              isBrazilGroup ? 'bg-[#009B3A] text-white shadow-inner' : 'bg-brand-primary text-white'
            }`}>
              {group.name}
              {isBrazilGroup && (
                <span className="bg-[#FEDF00] text-[#009B3A] text-[9px] md:text-[10px] px-1.5 py-0.5 rounded-sm uppercase tracking-widest font-black shadow-sm">
                  Brasil
                </span>
              )}
            </div>

            {/* Tabela de Classificação */}
            <div className="overflow-x-auto">
              <table className="w-full text-xs md:text-sm text-left">
                <thead className="bg-gray-50 text-gray-500 font-semibold border-b border-gray-200">
                  <tr>
                    <th className="px-2 py-1.5 md:px-3 md:py-2">Seleção</th>
                    <th className="px-1 py-1.5 md:px-2 text-center" title="Pontos">PTS</th>
                    <th className="px-1 py-1.5 md:px-2 text-center" title="Partidas Jogadas">J</th>
                    <th className="px-1 py-1.5 md:px-2 text-center" title="Vitórias">V</th>
                    <th className="px-1 py-1.5 md:px-2 text-center" title="Empates">E</th>
                    <th className="px-1 py-1.5 md:px-2 text-center" title="Derrotas">D</th>
                    <th className="px-1 py-1.5 md:px-2 text-center" title="Saldo de Gols">SG</th>
                  </tr>
                </thead>
                <tbody>
                  {group.teams
                    .map((team, teamIdx) => {
                      const isBrazil = team.name === 'Brasil';
                      return (
                      <tr 
                        key={team.name} 
                        className={`border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors ${
                          isBrazil 
                            ? 'bg-[#009B3A]/10 font-bold border-[#009B3A]/30' 
                            : (teamIdx < 2 ? 'bg-blue-50/30' : '')
                        }`}
                      >
                        <td className={`px-2 py-1.5 md:px-3 md:py-2 whitespace-nowrap ${isBrazil ? 'text-[#009B3A] font-extrabold' : 'font-medium text-gray-800'}`}>
                          {teamIdx + 1}. {team.name}
                        </td>
                        <td className="px-1 py-1.5 md:px-2 text-center font-bold text-brand-primary">{team.points}</td>
                        <td className="px-1 py-1.5 md:px-2 text-center text-gray-600">{team.played}</td>
                        <td className="px-1 py-1.5 md:px-2 text-center text-gray-600">{team.won}</td>
                        <td className="px-1 py-1.5 md:px-2 text-center text-gray-600">{team.drawn}</td>
                        <td className="px-1 py-1.5 md:px-2 text-center text-gray-600">{team.lost}</td>
                        <td className="px-1 py-1.5 md:px-2 text-center text-gray-600">{team.goalsFor - team.goalsAgainst}</td>
                      </tr>
                    )})}
                </tbody>
              </table>
            </div>

            {/* Jogos do Grupo */}
            <div className={`p-2 md:p-4 border-t flex-1 ${isBrazilGroup ? 'bg-[#009B3A]/5 border-[#009B3A]/20' : 'bg-gray-50 border-gray-200'}`}>
              <h4 className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 md:mb-3">Confrontos</h4>
              <div className="space-y-2">
                {group.matches.map((match) => {
                  const isBrazilMatch = match.team1 === 'Brasil' || match.team2 === 'Brasil';
                  
                  const live = match.status === 'IN_PLAY' || match.status === 'PAUSED';

                  return (
                  <div key={match.id} className={`p-2 rounded shadow-sm flex flex-col gap-0.5 md:gap-1 transition-colors ${
                    isBrazilMatch 
                      ? 'bg-white border-2 border-[#009B3A]/60 shadow-[0_2px_8px_rgba(0,155,58,0.15)]' 
                      : live 
                        ? 'bg-red-50/30 border border-red-200' 
                        : 'bg-white border border-gray-100'
                  }`}>
                    <div className="text-[9px] md:text-[10px] text-gray-400 text-center font-semibold uppercase tracking-widest flex items-center justify-center gap-1.5">
                      {live && (
                        <span className="relative flex h-2 w-2" title="Jogo em andamento">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </span>
                      )}
                      <span className={live ? "text-red-500 font-bold" : ""}>
                        {live ? 'AO VIVO' : `${match.date} • ${match.time}`}
                      </span>
                    </div>
                    <div className="flex justify-between items-center px-1 md:px-2">
                      <div className={`flex-1 text-right text-xs truncate ${match.team1 === 'Brasil' ? 'font-extrabold text-[#009B3A]' : 'font-medium text-gray-800'}`}>
                        {match.team1}
                      </div>
                      
                      <div className={`mx-2 flex items-center gap-1 rounded px-1.5 py-0.5 ${isBrazilMatch ? 'bg-[#FEDF00]/20' : 'bg-gray-100'}`}>
                        <span className={`w-3 md:w-4 text-center text-xs font-bold ${isBrazilMatch ? 'text-[#009B3A]' : 'text-brand-primary'}`}>
                          {match.score1 !== null ? match.score1 : '-'}
                        </span>
                        <span className="text-gray-400 text-[10px]">x</span>
                        <span className={`w-3 md:w-4 text-center text-xs font-bold ${isBrazilMatch ? 'text-[#009B3A]' : 'text-brand-primary'}`}>
                          {match.score2 !== null ? match.score2 : '-'}
                        </span>
                      </div>

                      <div className={`flex-1 text-left text-xs truncate ${match.team2 === 'Brasil' ? 'font-extrabold text-[#009B3A]' : 'font-medium text-gray-800'}`}>
                        {match.team2}
                      </div>
                    </div>
                  </div>
                )})}
              </div>
            </div>

          </motion.div>
        )})}
      </div>
    </div>
  );
};

export default GroupStage;
