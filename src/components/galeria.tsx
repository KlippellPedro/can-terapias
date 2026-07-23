"use client";

import { motion } from "framer-motion";

const images = [
  { src: "/img/fotos/ventosa.png", title: "Ventosaterapia" },
  { src: "/img/fotos/massagem_4.png", title: "Atendimento em Eventos Esportivos" },
  { src: "/img/fotos/constelacao-familiar.jpeg", title: "Constelação Familiar" },
  { src: "/img/fotos/auriculoterapia.png", title: "Auriculoterapia" },
  { src: "/img/fotos/massagem_2.jpg", title: "Quick Massage" },
];

export function Galeria() {
  return (
    <section id="galeria" className="py-32 bg-[#FFFFFF]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#74A8A4] font-medium tracking-widest uppercase text-sm mb-4 block">
            Instantes
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#544A49] mb-6">
            A Prática do Cuidado
          </h2>
          <p className="text-[#726564] text-lg max-w-2xl mx-auto">
            Alguns registros dos nossos atendimentos, do consultório aos eventos esportivos, levando bem-estar integral por onde passamos.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="break-inside-avoid relative group rounded-[24px] overflow-hidden shadow-lg border border-[#7F6DA5]/10 bg-[#EDDFDD]"
            >
              <img 
                src={img.src} 
                alt={img.title}
                loading="lazy"
                className="w-full h-auto object-cover saturate-[1.2] contrast-[1.15] brightness-[1.1] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#544A49]/80 via-[#544A49]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-[#FFFFFF] font-medium tracking-wide text-sm">{img.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
