"use client";

import { motion, Variants } from "framer-motion";
import { Award } from "lucide-react";

export function Hero() {
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.15,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="inicio" className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-gradient-to-b from-[#FFFFFF] to-[#F5F2F2]">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#7F6DA5]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#74A8A4]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left mt-12 lg:mt-0">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="inline-block px-4 py-1.5 rounded-full bg-[#DFCECC] border border-[#7F6DA5]/40 text-[#74A8A4] text-sm font-medium tracking-wide mb-6"
          >
            Harmonia & Equilíbrio
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#544A49] leading-tight mb-6">
            <motion.span custom={1} initial="hidden" animate="visible" variants={textVariants} className="block">
              Desperte o seu
            </motion.span>
            <motion.span custom={2} initial="hidden" animate="visible" variants={textVariants} className="block text-[#74A8A4] italic">
              potencial curativo.
            </motion.span>
          </h1>
          
          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-lg md:text-xl text-[#726564] max-w-xl mb-10 leading-relaxed"
          >
            Medicina Tradicional Chinesa e terapias integrativas para realinhar sua energia vital, trazendo clareza, saúde e paz interior.
          </motion.p>
          
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="#contato"
              className="px-8 py-4 rounded-full bg-[#74A8A4] text-[#EDDFDD] font-medium text-lg text-center transition-all duration-300 shadow-xl shadow-[#74A8A4]/20 hover:shadow-2xl hover:shadow-[#74A8A4]/30 hover:-translate-y-1"
            >
              Agende sua consulta
            </a>
            <a
              href="#sobre"
              className="px-8 py-4 rounded-full bg-transparent border border-[#74A8A4]/30 text-[#74A8A4] font-medium text-lg text-center transition-all duration-300 hover:bg-[#74A8A4]/5"
            >
              Conheça minha história
            </a>
          </motion.div>
        </div>

        {/* Visual / Image Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="relative w-full aspect-[4/5] max-w-md mx-auto lg:ml-auto"
        >
          {/* Main Image Container */}
          <div className="absolute inset-0 rounded-[40px] overflow-hidden bg-[#DFCECC] border border-[#EDDFDD] shadow-2xl shadow-[#544A49]/5">
            <img 
              src="/img/fotos/principal.avif" 
              alt="Cibele Nadalon" 
              fetchPriority="high"
              className="w-full h-full object-cover object-center saturate-[1.15] contrast-[1.1] brightness-[1.05]"
            />
          </div>
          
          {/* Floating Element - Badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-[#FFFFFF] p-4 rounded-2xl shadow-xl shadow-[#544A49]/5 border border-[#DFCECC] flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-[#DFCECC] flex items-center justify-center text-[#7F6DA5]">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#544A49]">+20 Anos</p>
              <p className="text-xs text-[#726564]">de experiência</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
