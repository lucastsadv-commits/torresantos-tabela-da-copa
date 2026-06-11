import React from 'react';
import { motion } from 'framer-motion';
import GroupStage from './GroupStage';
import KnockoutBracket from './KnockoutBracket';
import { TournamentProvider } from '../context/TournamentContext';

const TabelaGallery: React.FC = () => {
  return (
    <section id="tabela" className="py-10 md:py-20 bg-[#FAFAF9]">
        <div className="max-w-[1600px] mx-auto px-2 sm:px-6 lg:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-primary mb-3 md:mb-4 leading-tight">
              Tabela Dinâmica
            </h2>
            <div className="w-16 md:w-24 h-1 bg-brand-accent mx-auto rounded-full mb-4 md:mb-6 shadow-sm"></div>
            <p className="text-base md:text-lg text-brand-blue-500 max-w-2xl mx-auto font-medium">
              Confira as pontuações em tempo real e todo o chaveamento interativo da Copa.
            </p>
          </motion.div>

          {/* Fase de Grupos */}
          <GroupStage />

          {/* Separador */}
          <div className="w-full max-w-4xl mx-auto border-t border-gray-200 my-10 md:my-20"></div>

          {/* Fase Final (Mata-Mata) */}
          <KnockoutBracket />

        </div>
      </section>
  );
};

export default TabelaGallery;
