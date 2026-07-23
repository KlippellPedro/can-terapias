"use client";

import { motion } from "framer-motion";

export function Sobre() {
  return (
    <section id="sobre" className="py-32 bg-[#FFFFFF]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Asymmetrical Image Layout */}
          <div className="relative grid grid-cols-2 gap-4 lg:gap-6 h-[500px] lg:h-[600px]">
            {/* Image 1 (Taller, Left) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full h-[85%] mt-auto rounded-[40px] overflow-hidden bg-[#DFCECC] border border-[#7F6DA5]/30 shadow-lg"
            >
              <img 
                src="/img/fotos/shiatsu.png" 
                alt="Sessão de Shiatsu" 
                className="w-full h-full object-cover saturate-[1.15] contrast-[1.1]"
              />
            </motion.div>

            {/* Image 2 (Shorter, Right, Offset) */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative w-full h-[70%] rounded-[40px] overflow-hidden bg-[#EDDFDD] border border-[#7F6DA5]/30 shadow-lg"
            >
              <img 
                src="/img/fotos/massagem_1.jpg" 
                alt="Consultório acolhedor" 
                className="w-full h-full object-cover saturate-[1.15] contrast-[1.1]"
              />
            </motion.div>

            {/* Decorative Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#FFFFFF]/80 backdrop-blur-md rounded-full border border-[#7F6DA5]/50 shadow-xl flex items-center justify-center"
            >
              <span className="font-serif text-[#74A8A4] text-center leading-tight">
                Essência<br/>Integrativa
              </span>
            </motion.div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[#74A8A4] font-medium tracking-widest uppercase text-sm mb-6 block"
            >
              Sobre mim
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif text-[#544A49] mb-8 leading-tight"
            >
              Cuidando da sua saúde de forma integral e consciente.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-[#726564] space-y-6 mb-10 leading-relaxed font-light"
            >
              <p>
                Sou mulher, mãe, buscadora e apaixonada pelo mar — o contato com a natureza renova minhas energias. Minha jornada no cuidado com o corpo e movimento começou em 2002, com a formação em <strong>Educação Física pela ESEF/IPA (CREF: 004536-G/RS)</strong>, onde construí sólida experiência em atividades aquáticas e <strong>Ginástica Laboral</strong> corporativa.
              </p>
              <p>
                Desde 2009, atuo para a reabilitação da saúde integral. Comecei especializando-me em Shiatsu (método do mestre Hisayuki Yasui) e, após anos de prática clínica — inclusive morando na Itália —, mergulhei na Medicina Tradicional Chinesa. Em 2013, concluí a <strong>Pós-Graduação em Acupuntura</strong> (ABACO-CBA), agregando técnicas como auriculoterapia, moxabustão e craniopuntura japonesa.
              </p>
              <p>
                Hoje, além da acupuntura e shiatsu, íntegro ferramentas terapêuticas como <strong>Constelação Familiar, Reiki e Radiestesia</strong>. A vida pode, por vezes, ser exaustiva, mas estou aqui para auxiliar você nas dores físicas e da alma, guiando-o em possíveis obstáculos e repetições ancestrais para que você alcance o seu verdadeiro estado de equilíbrio.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10"
            >
              <a
                href="#contato"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#EDDFDD] border border-[#7F6DA5] text-[#74A8A4] font-medium transition-all hover:bg-[#74A8A4] hover:text-[#EDDFDD] hover:border-transparent group"
              >
                Falar comigo
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
