"use client";

import { useState } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "A acupuntura com a Cibele mudou minha vida. As dores crônicas que eu sentia nas costas desapareceram completamente após algumas sessões.",
    name: "Mariana Silva",
    role: "Paciente de Acupuntura",
  },
  {
    text: "O alinhamento energético me trouxe uma paz e clareza que eu não sentia há anos. O espaço é acolhedor e a Cibele é uma profissional incrível.",
    name: "Rafael Costa",
    role: "Paciente de Terapias Integrativas",
  },
  {
    text: "Fiz o tratamento com Mandalas Cristalinas e foi uma experiência transformadora. Recomendo de olhos fechados!",
    name: "Ana Luísa",
    role: "Paciente de Mandalas",
  },
  {
    text: "Excelente profissional. A consultoria sistêmica me ajudou a destravar áreas da minha vida que eu nem percebia estarem bloqueadas.",
    name: "Carlos Eduardo",
    role: "Paciente de Consultoria",
  },
  {
    text: "Sessões de Reiki maravilhosas. Saio de lá me sentindo leve, renovada e pronta para enfrentar a semana. Gratidão!",
    name: "Juliana Mendes",
    role: "Paciente de Reiki",
  },
];

export function Depoimentos() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="depoimentos" className="py-32 bg-[#EDDFDD] overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center">
        <span className="text-[#74A8A4] font-medium tracking-widest uppercase text-sm mb-4 block">
          Relatos
        </span>
        <h2 className="text-4xl md:text-5xl font-serif text-[#544A49] mb-6">
          O que dizem nossos pacientes
        </h2>
      </div>

      {/* Infinite Marquee Container */}
      <div 
        className="relative w-full max-w-[100vw] overflow-hidden flex flex-col items-center justify-center cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left/Right Fade Masks */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#EDDFDD] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#EDDFDD] to-transparent z-10 pointer-events-none" />

        {/* 
          Using inline styles to control animation state directly. 
          Duplicating the list 4 times ensures we never see a gap on ultra-wide screens.
        */}
        <div 
          className="flex w-fit animate-marquee transition-all duration-300"
          style={{ animationPlayState: isHovered ? 'paused' : 'running' }}
        >
          {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="w-[350px] md:w-[450px] shrink-0 p-8 mx-4 rounded-[32px] bg-[#FFFFFF] border border-[#7F6DA5]/30 shadow-xl shadow-[#544A49]/5 flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02]"
            >
              <div>
                <Quote className="w-10 h-10 text-[#7F6DA5]/50 mb-6" />
                <p className="text-[#726564] text-lg leading-relaxed mb-8 italic">
                  "{t.text}"
                </p>
              </div>
              <div>
                <h4 className="font-serif text-[#544A49] text-xl">{t.name}</h4>
                <p className="text-sm text-[#74A8A4]">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
