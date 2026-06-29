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



  const statusUpper = match.status?.toUpperCase();
  const live = statusUpper === 'IN_PLAY' || statusUpper === 'PAUSED' || statusUpper === 'IN PLAY';

  return (
  <div className={`p-2 md:p-3 rounded-lg shadow-md flex flex-col gap-1.5 w-full max-w-[11rem] md:max-w-[14rem] relative z-10 transition-all ${
    isBrazilPath 
      ? 'bg-gradient-to-br from-white to-[#009B3A]/5 border-2 border-[#009B3A]/60 shadow-[0_0_15px_rgba(0,155,58,0.2)] md:scale-105' 
      : live
        ? 'bg-white border-2 border-red-400 shadow-[0_0_15px_rgba(239,68,68,0.2)]'
        : 'bg-white border border-gray-100 hover:border-brand-accent'
  }`}>
    <div className={`flex items-center justify-center gap-1.5 text-[9px] md:text-[10px] font-bold uppercase tracking-widest -mx-2 md:-mx-3 -mt-2 md:-mt-3 pt-1.5 pb-1 mb-1 rounded-t-lg border-b ${
      isBrazilPath 
        ? 'bg-[#009B3A] text-white border-[#009B3A]' 
        : live
          ? 'bg-red-50 text-red-600 border-red-200'
          : 'bg-gray-50 text-gray-400 border-gray-100'
    }`}>
      {live && (
        <span className="relative flex h-2 w-2" title="Jogo em andamento">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        </span>
      )}
      <span>{live ? `AO VIVO${match.minute ? ` • ${match.minute}` : ''}` : match.date}</span>
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
    <div className="w-full mx-auto px-2 py-10 md:py-20 flex flex-col items-center overflow-hidden">
      <h3 className="font-heading text-2xl md:text-3xl font-extrabold text-brand-primary text-center mb-4">
        Fase Final (Mata-Mata)
      </h3>
      
      <div className="flex justify-center items-center gap-2 mb-8 md:mb-12 text-center px-4">
        <div className="w-3 h-3 flex-shrink-0 rounded-full bg-[#009B3A] shadow-[0_0_8px_rgba(0,155,58,0.5)]"></div>
        <p className="text-xs md:text-sm text-gray-500 font-medium">
          Caminhos em destaque indicam possíveis cruzamentos do Brasil
        </p>
      </div>

      <div className="w-full overflow-x-auto pb-4">
        <div className="min-w-[1250px] flex justify-between gap-3 pb-10 px-4 mx-auto">
        
        {/* LADO ESQUERDO */}
        <div className="flex-1 flex flex-col justify-around relative gap-4 pt-10">
          <h4 className="absolute top-0 left-0 w-full text-center font-bold text-brand-primary uppercase tracking-wider text-[10px] md:text-sm bg-[#FAFAF9] z-20 py-2">16-Avos</h4>
          {knockout.roundOf32.slice(0, 8).map((match) => (
            <div key={match.id} className="relative flex justify-center">
              <MatchCard match={match} />
            </div>
          ))}
        </div>

        <div className="flex-1 flex flex-col justify-around relative gap-8 pt-10">
          <h4 className="absolute top-0 left-0 w-full text-center font-bold text-brand-primary uppercase tracking-wider text-[10px] md:text-sm bg-[#FAFAF9] z-20 py-2">Oitavas</h4>
          {knockout.roundOf16.slice(0, 4).map((match) => (
            <div key={match.id} className="relative flex justify-center">
              <MatchCard match={match} />
            </div>
          ))}
        </div>

        <div className="flex-1 flex flex-col justify-around relative gap-16 pt-10">
          <h4 className="absolute top-0 left-0 w-full text-center font-bold text-brand-primary uppercase tracking-wider text-[10px] md:text-sm bg-[#FAFAF9] z-20 py-2">Quartas</h4>
          {knockout.quarterFinals.slice(0, 2).map((match) => (
            <div key={match.id} className="relative flex justify-center">
              <MatchCard match={match} />
            </div>
          ))}
        </div>

        <div className="flex-1 flex flex-col justify-around relative gap-32 pt-10">
          <h4 className="absolute top-0 left-0 w-full text-center font-bold text-brand-primary uppercase tracking-wider text-[10px] md:text-sm bg-[#FAFAF9] z-20 py-2">Semi</h4>
          {knockout.semiFinals.slice(0, 1).map((match) => (
            <div key={match.id} className="relative flex justify-center">
              <MatchCard match={match} />
            </div>
          ))}
        </div>

        {/* CENTRO (Final e 3º Lugar) */}
        <div className="flex-[1.5] flex flex-col justify-center items-center relative gap-8 min-w-[280px]">
          
          {/* Caixa Isolada VIP para a Final usando Cores do Escritório */}
          <div className="bg-gradient-to-b from-brand-primary via-[#00112E] to-brand-primary p-6 md:p-8 rounded-3xl shadow-[0_0_40px_rgba(179,81,32,0.2)] border border-brand-accent/40 flex flex-col items-center justify-center relative w-full">
            {/* Efeitos de Luz de Fundo com as cores da marca */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-70"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(179,81,32,0.15)_0%,transparent_70%)] rounded-3xl pointer-events-none"></div>
            
            {/* Troféu SVG (Agora na cor Accent da marca) */}
            <svg className="w-10 h-10 md:w-12 md:h-12 text-brand-accent mb-3 drop-shadow-[0_0_15px_rgba(179,81,32,0.5)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
              <path d="M4 22h16"></path>
              <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
            </svg>

            <h4 className="text-center font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-300 via-brand-accent to-brand-orange-500 mb-6 uppercase tracking-[0.1em] text-md md:text-lg drop-shadow-sm">A Grande Final</h4>
            
            {knockout.final.map((match) => {
              const statusUpper = match.status?.toUpperCase();
              const live = statusUpper === 'IN_PLAY' || statusUpper === 'PAUSED' || statusUpper === 'IN PLAY';
              
              return (
              <motion.div 
                initial={{ scale: 0.8, opacity: 0, y: 30 }}
                whileInView={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ type: "spring", bounce: 0.5, duration: 1 }}
                key={match.id} 
                className="relative w-full z-10"
              >
                {/* Card Customizado da Final (Cores da Marca) */}
                <div className={`p-[1px] rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500 ${live ? 'bg-gradient-to-br from-red-500 to-red-900 animate-pulse' : 'bg-gradient-to-br from-brand-accent/40 to-[#00112E]'}`}>
                  <div className="bg-brand-primary rounded-xl p-3 md:p-4 flex flex-col gap-2 border border-brand-accent/20">
                    <div className="flex items-center justify-center gap-2 text-[10px] md:text-xs text-brand-orange-300 font-bold uppercase tracking-widest bg-black/30 -mx-3 md:-mx-4 -mt-3 md:-mt-4 pt-1.5 pb-1 mb-1.5 rounded-t-xl border-b border-brand-accent/20">
                      {live && (
                        <span className="relative flex h-2 w-2" title="Jogo em andamento">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </span>
                      )}
                      <span className={live ? "text-red-500" : ""}>{live ? `AO VIVO${match.minute ? ` • ${match.minute}` : ''}` : match.date}</span>
                    </div>
                    
                    <div className="flex justify-between items-center gap-3">
                      <span className={`font-black text-xs md:text-sm truncate ${match.team1 === 'Brasil' ? 'text-[#009B3A] drop-shadow-[0_0_5px_rgba(0,155,58,0.8)]' : 'text-gray-100'}`}>
                        {match.team1}
                      </span>
                      <span className="bg-[#00112E] border border-brand-accent/30 w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded font-black text-brand-orange-400 text-xs md:text-sm shadow-inner">
                        {match.score1 !== null ? match.score1 : '-'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center gap-3">
                      <span className={`font-black text-xs md:text-sm truncate ${match.team2 === 'Brasil' ? 'text-[#009B3A] drop-shadow-[0_0_5px_rgba(0,155,58,0.8)]' : 'text-gray-100'}`}>
                        {match.team2}
                      </span>
                      <span className="bg-[#00112E] border border-brand-accent/30 w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded font-black text-brand-orange-400 text-xs md:text-sm shadow-inner">
                        {match.score2 !== null ? match.score2 : '-'}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
              );
            })}
          </div>

          <div className="flex flex-col items-center justify-center w-full mt-4">
            <h4 className="text-center font-bold text-gray-500 mb-3 uppercase tracking-wider text-xs bg-[#FAFAF9] px-2">Disputa 3º Lugar</h4>
            {knockout.thirdPlace.map((match) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                key={match.id} 
                className="relative flex justify-center w-full"
              >
                <MatchCard match={match} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* LADO DIREITO */}
        <div className="flex-1 flex flex-col justify-around relative gap-32 pt-10">
          <h4 className="absolute top-0 left-0 w-full text-center font-bold text-brand-primary uppercase tracking-wider text-[10px] md:text-sm bg-[#FAFAF9] z-20 py-2">Semi</h4>
          {knockout.semiFinals.slice(1, 2).map((match) => (
            <div key={match.id} className="relative flex justify-center">
              <MatchCard match={match} />
            </div>
          ))}
        </div>

        <div className="flex-1 flex flex-col justify-around relative gap-16 pt-10">
          <h4 className="absolute top-0 left-0 w-full text-center font-bold text-brand-primary uppercase tracking-wider text-[10px] md:text-sm bg-[#FAFAF9] z-20 py-2">Quartas</h4>
          {knockout.quarterFinals.slice(2, 4).map((match) => (
            <div key={match.id} className="relative flex justify-center">
              <MatchCard match={match} />
            </div>
          ))}
        </div>

        <div className="flex-1 flex flex-col justify-around relative gap-4 pt-10">
          <h4 className="absolute top-0 left-0 w-full text-center font-bold text-brand-primary uppercase tracking-wider text-[10px] md:text-sm bg-[#FAFAF9] z-20 py-2">Oitavas</h4>
          {knockout.roundOf16.slice(4, 8).map((match) => (
            <div key={match.id} className="relative flex justify-center">
              <MatchCard match={match} />
            </div>
          ))}
        </div>

        <div className="flex-1 flex flex-col justify-around relative gap-2 pt-10">
          <h4 className="absolute top-0 left-0 w-full text-center font-bold text-brand-primary uppercase tracking-wider text-[10px] md:text-sm bg-[#FAFAF9] z-20 py-2">16-Avos</h4>
          {knockout.roundOf32.slice(8, 16).map((match) => (
            <div key={match.id} className="relative flex justify-center">
              <MatchCard match={match} />
            </div>
          ))}
        </div>

      </div>
      </div>
    </div>
  );
};

export default KnockoutBracket;
