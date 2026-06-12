import React from 'react';
import { motion } from 'framer-motion';
import type { KnockoutMatch } from '../data/copa2026';
import { useTournament } from '../context/TournamentContext';

const MatchCard: React.FC<{ match: KnockoutMatch }> = ({ match }) => {
  // Destaca se o Brasil estiver jogando, ou se for um placeholder de chave que contenha o Grupo C
  const isBrazilPath = 
    match.team1 === 'Brasil' || match.team2 === 'Brasil' ||
    (match.team1.includes('º') && match.team1.includes('C')) ||
    (match.team2.includes('º') && match.team2.includes('C'));

  return (
  <div className={`p-2 md:p-3 rounded-lg shadow-md flex flex-col gap-1.5 w-full max-w-[11rem] md:max-w-[14rem] relative z-10 transition-all ${
    isBrazilPath 
      ? 'bg-gradient-to-br from-white to-[#009B3A]/5 border-2 border-[#009B3A]/60 shadow-[0_0_15px_rgba(0,155,58,0.2)] md:scale-105' 
      : 'bg-white border border-gray-100 hover:border-brand-accent'
  }`}>
    <div className={`text-[9px] md:text-[10px] text-center font-bold uppercase tracking-widest -mx-2 md:-mx-3 -mt-2 md:-mt-3 pt-1.5 pb-1 mb-1 rounded-t-lg border-b ${
      isBrazilPath ? 'bg-[#009B3A] text-white border-[#009B3A]' : 'bg-gray-50 text-gray-400 border-gray-100'
    }`}>
      {match.date}
    </div>
    
    <div className="flex justify-between items-center px-1">
      <span className={`font-medium text-xs truncate max-w-[80px] md:max-w-[120px] ${match.team1 === 'Brasil' ? 'font-extrabold text-[#009B3A]' : 'text-gray-800'}`}>
        {match.team1}
      </span>
      <span className={`w-5 h-5 md:w-6 md:h-6 flex items-center justify-center rounded font-bold text-xs md:text-sm ${
        isBrazilPath ? 'bg-[#FEDF00]/20 text-[#009B3A]' : 'bg-gray-100 text-brand-primary'
      }`}>
        {match.score1 !== null ? match.score1 : '-'}
      </span>
    </div>
    <div className="flex justify-between items-center px-1">
      <span className={`font-medium text-xs truncate max-w-[80px] md:max-w-[120px] ${match.team2 === 'Brasil' ? 'font-extrabold text-[#009B3A]' : 'text-gray-800'}`}>
        {match.team2}
      </span>
      <span className={`w-5 h-5 md:w-6 md:h-6 flex items-center justify-center rounded font-bold text-xs md:text-sm ${
        isBrazilPath ? 'bg-[#FEDF00]/20 text-[#009B3A]' : 'bg-gray-100 text-brand-primary'
      }`}>
        {match.score2 !== null ? match.score2 : '-'}
      </span>
    </div>
  </div>
)};

const KnockoutBracket: React.FC = () => {
  const { knockout } = useTournament();

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 overflow-x-auto">
      <h3 className="font-heading text-2xl md:text-3xl font-extrabold text-brand-primary text-center mb-4">
        Fase Final (Mata-Mata)
      </h3>
      
      <div className="flex justify-center items-center gap-2 mb-12">
        <div className="w-3 h-3 rounded-full bg-[#009B3A] shadow-[0_0_8px_rgba(0,155,58,0.5)]"></div>
        <p className="text-xs md:text-sm text-gray-500 font-medium">
          Caminhos em destaque indicam possíveis cruzamentos do Brasil
        </p>
      </div>

      <div className="min-w-[800px] md:min-w-[1100px] flex justify-between gap-2 md:gap-4 pb-10">
        
        {/* 16-Avos */}
        <div className="flex-1 flex flex-col gap-4 md:gap-6 justify-around relative">
          <h4 className="text-center font-bold text-brand-primary mb-4 uppercase tracking-wider text-sm bg-[#FAFAF9] sticky top-0 z-20">16-Avos de Final</h4>
          {knockout.roundOf32.map((match) => (
            <div key={match.id} className="relative flex justify-center">
              <MatchCard match={match} />
            </div>
          ))}
        </div>

        {/* Oitavas */}
        <div className="flex-1 flex flex-col gap-8 md:gap-14 justify-around relative">
          <h4 className="text-center font-bold text-brand-primary mb-4 uppercase tracking-wider text-sm bg-[#FAFAF9] sticky top-0 z-20">Oitavas de Final</h4>
          {knockout.roundOf16.map((match) => (
            <div key={match.id} className="relative flex justify-center">
              <MatchCard match={match} />
            </div>
          ))}
        </div>

        {/* Quartas */}
        <div className="flex-1 flex flex-col justify-around relative">
          <h4 className="text-center font-bold text-brand-primary mb-4 uppercase tracking-wider text-sm bg-[#FAFAF9] sticky top-0 z-20">Quartas de Final</h4>
          {knockout.quarterFinals.map((match) => (
            <div key={match.id} className="relative flex justify-center">
              <MatchCard match={match} />
            </div>
          ))}
        </div>

        {/* Semis */}
        <div className="flex-1 flex flex-col justify-around relative">
          <h4 className="text-center font-bold text-brand-primary mb-4 uppercase tracking-wider text-sm bg-[#FAFAF9] sticky top-0 z-20">Semifinais</h4>
          {knockout.semiFinals.map((match) => (
            <div key={match.id} className="relative flex justify-center">
              <MatchCard match={match} />
            </div>
          ))}
        </div>

        {/* Final e 3º Lugar */}
        <div className="flex-1 flex flex-col justify-center gap-16 relative">
          
          <div className="relative mt-8 md:mt-0">
            <h4 className="text-center font-bold text-brand-primary mb-4 uppercase tracking-wider text-sm bg-[#FAFAF9] sticky top-0 z-20">Final</h4>
            {knockout.final.map((match) => (
              <motion.div 
                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                whileInView={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
                key={match.id} 
                className="relative flex justify-center mt-2"
              >
                {/* Glow Effect Back */}
                <div className="absolute inset-0 bg-brand-accent/30 blur-lg rounded-full animate-pulse scale-125"></div>
                
                <div className="bg-gradient-to-tr from-yellow-500 via-brand-accent to-yellow-400 p-[2px] rounded-xl shadow-lg relative z-10 hover:-translate-y-1 transition-transform duration-300">
                  <div className="bg-white rounded-lg w-full max-w-[13rem] md:max-w-[16rem] overflow-hidden">
                    <MatchCard match={match} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div>
            <h4 className="text-center font-bold text-gray-500 mb-4 uppercase tracking-wider text-sm bg-[#FAFAF9] sticky top-0 z-20">Disputa 3º Lugar</h4>
            {knockout.thirdPlace.map((match) => (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                key={match.id} 
                className="relative flex justify-center"
              >
                <MatchCard match={match} />
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};

export default KnockoutBracket;
