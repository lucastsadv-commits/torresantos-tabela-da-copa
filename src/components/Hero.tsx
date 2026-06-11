import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#00112E] to-brand-primary min-h-[calc(100vh-80px)] flex flex-col justify-center py-10 overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] mb-4 md:mb-6">
              Tabela da Copa do Mundo 2026
            </h1>
            <div className="w-16 md:w-24 h-1 bg-brand-accent mx-auto lg:mx-0 rounded-full mb-4 md:mb-6 shadow-[0_0_15px_rgba(179,81,32,0.6)]"></div>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0">
              Acompanhe todos os jogos da Copa de 2026 com exclusividade. Uma cortesia da <strong className="text-brand-orange-400">Torresantos Advocacia</strong>. Trabalhamos com excelência na defesa dos seus direitos, enquanto você aproveita cada lance.
            </p>
          </motion.div>

          {/* Image Content (Page 1) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-lg lg:max-w-none px-2 sm:px-0"
          >
            <div className="relative rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden border border-white/20 p-1 md:p-2 bg-white/5 backdrop-blur-lg">
              <img
                src="/images/nova-capa-hero.png"
                alt="Capa da Tabela da Copa 2026"
                className="w-full max-h-[50vh] md:max-h-[60vh] object-contain rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-accent/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-blue-700/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3"></div>
    </section>
  );
};

export default Hero;
