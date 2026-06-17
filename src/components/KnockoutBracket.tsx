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



  const now = new Date();

  const isMatchLive = () => {
    if (!match.date || !match.time || match.time === "A definir") return false;
    const [day, month] = match.date.split('/');
    const [hour, minute] = match.time.split(':');
    let matchStart = new Date(2026, parseInt(month) - 1, parseInt(day), parseInt(hour), parseInt(minute));
    
    if (match.id === 'J1') {
      matchStart = new Date(now.getTime() - 89 * 60000);
    }
    
    const matchEnd = new Date(matchStart.getTime() + 2 * 60 * 60 * 1000);
    return now >= matchStart && now <= matchEnd;
  };
  
  const live = isMatchLive();

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
      <span>{live ? "AO VIVO" : match.date}</span>
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

        {/* Disputa 3º Lugar (Isolado em sua própria coluna) */}
        <div className="flex-1 flex flex-col justify-center ml-4 md:ml-8 relative min-w-[200px]">
          <h4 className="text-center font-bold text-gray-500 mb-6 uppercase tracking-wider text-xs md:text-sm bg-[#FAFAF9] sticky top-0 z-20">Disputa 3º Lugar</h4>
          {knockout.thirdPlace.map((match) => (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              key={match.id} 
              className="relative flex justify-center"
            >
              <MatchCard match={match} />
            </motion.div>
          ))}
        </div>

        {/* Final (Isolada em sua própria coluna com Cores da Marca) */}
        <div className="flex-1 flex flex-col justify-center ml-6 md:ml-12 relative">
          
          {/* Caixa Isolada VIP para a Final usando Cores do Escritório */}
          <div className="bg-gradient-to-b from-brand-primary via-[#00112E] to-brand-primary p-6 md:p-10 rounded-3xl shadow-[0_0_40px_rgba(179,81,32,0.2)] border border-brand-accent/40 flex flex-col items-center justify-center relative min-w-[280px]">
            {/* Efeitos de Luz de Fundo com as cores da marca */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-70"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(179,81,32,0.15)_0%,transparent_70%)] rounded-3xl pointer-events-none"></div>
            
            {/* Troféu SVG (Agora na cor Accent da marca) */}
            <svg className="w-12 h-12 md:w-16 md:h-16 text-brand-accent mb-4 drop-shadow-[0_0_15px_rgba(179,81,32,0.5)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
              <path d="M4 22h16"></path>
              <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
            </svg>

            <h4 className="text-center font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-300 via-brand-accent to-brand-orange-500 mb-8 uppercase tracking-[0.2em] text-lg md:text-xl drop-shadow-sm">A Grande Final</h4>
            
            {knockout.final.map((match) => {
              const isMatchLive = () => {
                if (!match.date || !match.time || match.time === "A definir") return false;
                const [day, month] = match.date.split('/');
                const [hour, minute] = match.time.split(':');
                const matchStart = new Date(2026, parseInt(month) - 1, parseInt(day), parseInt(hour), parseInt(minute));
                const matchEnd = new Date(matchStart.getTime() + 2 * 60 * 60 * 1000);
                const now = new Date();
                return now >= matchStart && now <= matchEnd;
              };
              const live = isMatchLive() || match.id === 'FINAL';
              
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
                  <div className="bg-brand-primary rounded-xl p-4 md:p-5 flex flex-col gap-3 border border-brand-accent/20">
                    <div className="flex items-center justify-center gap-2 text-[10px] md:text-xs text-brand-orange-300 font-bold uppercase tracking-widest bg-black/30 -mx-4 md:-mx-5 -mt-4 md:-mt-5 pt-2 pb-1.5 mb-2 rounded-t-xl border-b border-brand-accent/20">
                      {live && (
                        <span className="relative flex h-2 w-2" title="Jogo em andamento">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </span>
                      )}
                      <span className={live ? "text-red-500" : ""}>{live ? "AO VIVO" : match.date}</span>
                    </div>
                    
                    <div className="flex justify-between items-center gap-4">
                      <span className={`font-black text-sm md:text-base truncate ${match.team1 === 'Brasil' ? 'text-[#009B3A] drop-shadow-[0_0_5px_rgba(0,155,58,0.8)]' : 'text-gray-100'}`}>
                        {match.team1}
                      </span>
                      <span className="bg-[#00112E] border border-brand-accent/30 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded font-black text-brand-orange-400 text-sm md:text-lg shadow-inner">
                        {match.score1 !== null ? match.score1 : '-'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center gap-4">
                      <span className={`font-black text-sm md:text-base truncate ${match.team2 === 'Brasil' ? 'text-[#009B3A] drop-shadow-[0_0_5px_rgba(0,155,58,0.8)]' : 'text-gray-100'}`}>
                        {match.team2}
                      </span>
                      <span className="bg-[#00112E] border border-brand-accent/30 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded font-black text-brand-orange-400 text-sm md:text-lg shadow-inner">
                        {match.score2 !== null ? match.score2 : '-'}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </div>
  );
};

export default KnockoutBracket;
