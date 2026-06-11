import React from 'react';
import { motion } from 'framer-motion';
import { groupsData, type Group } from '../data/copa2026';

const GroupStage: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h3 className="text-2xl md:text-3xl font-extrabold text-brand-primary text-center mb-10">
        Fase de Grupos
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {groupsData.map((group: Group, idx: number) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: (idx % 3) * 0.1 }}
            key={group.name}
            className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden flex flex-col"
          >
            {/* Cabecalho do Grupo */}
            <div className="bg-brand-primary text-white py-2 px-3 text-center font-bold text-base tracking-wide">
              {group.name}
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
                    // Ordenação simples por pontos (isso pode ser melhorado na lógica de negócio)
                    .sort((a, b) => b.points - a.points)
                    .map((team, teamIdx) => (
                      <tr 
                        key={team.name} 
                        className={`border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors ${teamIdx < 2 ? 'bg-blue-50/30' : ''}`}
                      >
                        <td className="px-2 py-1.5 md:px-3 md:py-2 font-medium text-gray-800 whitespace-nowrap">
                          {teamIdx + 1}. {team.name}
                        </td>
                        <td className="px-1 py-1.5 md:px-2 text-center font-bold text-brand-primary">{team.points}</td>
                        <td className="px-1 py-1.5 md:px-2 text-center text-gray-600">{team.played}</td>
                        <td className="px-1 py-1.5 md:px-2 text-center text-gray-600">{team.won}</td>
                        <td className="px-1 py-1.5 md:px-2 text-center text-gray-600">{team.drawn}</td>
                        <td className="px-1 py-1.5 md:px-2 text-center text-gray-600">{team.lost}</td>
                        <td className="px-1 py-1.5 md:px-2 text-center text-gray-600">{team.goalsFor - team.goalsAgainst}</td>
                      </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Jogos do Grupo */}
            <div className="bg-gray-50 p-2 md:p-4 border-t border-gray-200 flex-1">
              <h4 className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 md:mb-3">Confrontos</h4>
              <div className="space-y-2">
                {group.matches.map((match) => (
                  <div key={match.id} className="bg-white p-2 rounded shadow-sm border border-gray-100 flex flex-col gap-0.5 md:gap-1">
                    <div className="text-[9px] md:text-[10px] text-gray-400 text-center font-semibold uppercase tracking-widest">
                      {match.date} • {match.time}
                    </div>
                    <div className="flex justify-between items-center px-1 md:px-2">
                      <div className="flex-1 text-right font-medium text-gray-800 text-xs truncate">{match.team1}</div>
                      
                      <div className="mx-2 flex items-center gap-1 bg-gray-100 rounded px-1.5 py-0.5">
                        <span className="w-3 md:w-4 text-center font-bold text-brand-primary text-xs">
                          {match.score1 !== null ? match.score1 : '-'}
                        </span>
                        <span className="text-gray-400 text-[10px]">x</span>
                        <span className="w-3 md:w-4 text-center font-bold text-brand-primary text-xs">
                          {match.score2 !== null ? match.score2 : '-'}
                        </span>
                      </div>

                      <div className="flex-1 text-left font-medium text-gray-800 text-xs truncate">{match.team2}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GroupStage;
