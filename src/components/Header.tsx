import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-white/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/logo-header.png"
              alt="Logo Torresantos Advocacia"
              className="h-10 sm:h-12 md:h-16 w-auto"
            />
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#tabela" className="text-gray-600 hover:text-brand-accent transition-colors font-bold tracking-wide">
              Tabela Completa
            </a>
            <a href="#contato" className="text-gray-600 hover:text-brand-accent transition-colors font-bold tracking-wide">
              Informações
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
