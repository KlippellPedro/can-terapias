"use client";

import { motion } from "framer-motion";
import { TiltCard } from "./tilt-card";
import { cn } from "@/lib/utils";
import { Sparkles, Flower2, HeartPulse, Brain, Sun, Activity } from "lucide-react";

const services = [
  {
    title: "Acupuntura Sistêmica",
    description: "Reequilíbrio físico e energético através da inserção de agulhas em pontos específicos dos meridianos.",
    icon: <Sparkles className="w-6 h-6" />,
    colSpan: "md:col-span-2",
    image: "/img/fotos/ventosa.png",
  },
  {
    title: "Mandalas Cristalinas",
    description: "Geometria sagrada e cristais para ancorar frequências de cura profunda no campo sutil.",
    icon: <Flower2 className="w-6 h-6" />,
    colSpan: "md:col-span-1",
    image: "/img/fotos/auriculoterapia.png",
  },
  {
    title: "Alinhamento Energético e Radiestesia",
    description: "Limpeza de bloqueios e traumas passados, harmonizando o fluxo vital.",
    icon: <HeartPulse className="w-6 h-6" />,
    colSpan: "md:col-span-1",
    image: "/img/fotos/massagem_2.jpg",
  },
  {
    title: "Consultoria Sistêmica",
    description: "Abordagem terapêutica para identificar padrões inconscientes familiares e promover a liberação sistêmica.",
    icon: <Brain className="w-6 h-6" />,
    colSpan: "md:col-span-2",
    image: "/img/fotos/constelacao-familiar.jpeg",
  },
  {
    title: "Reiki",
    description: "Canalização de energia universal para restaurar o equilíbrio do corpo e da mente, promovendo bem-estar.",
    icon: <Sun className="w-6 h-6" />,
    colSpan: "md:col-span-2",
    image: "/img/fotos/massagem_3.jpg",
  },
  {
    title: "Ginástica Laboral",
    description: "Programas personalizados de saúde corporativa, focados em ergonomia, prevenção de LER/DORT e alívio de tensões.",
    icon: <Activity className="w-6 h-6" />,
    colSpan: "md:col-span-1",
    image: "/img/fotos/massagem_1.jpg",
  },
  {
    title: "Quick Massage",
    description: "Massagem rápida e revitalizante focada em aliviar tensões musculares, ideal para o ambiente corporativo.",
    icon: <HeartPulse className="w-6 h-6" />,
    colSpan: "md:col-span-1",
    image: "/img/fotos/massagem_1.jpg",
  },
  {
    title: "Atendimento em Eventos",
    description: "Apoio terapêutico especializado para esportistas, atletas e artistas em corridas, maratonas, torneios de beach tennis e grandes produções (ex: Paleta Atlântida, Endurance Brasil, Sul Special Cup de Beach Tennis, Maratona Internacional de Porto Alegre, entre outros).",
    icon: <Sun className="w-6 h-6" />,
    colSpan: "md:col-span-2",
    image: "/img/fotos/massagem_4.png",
  },
];

export function Servicos() {
  return (
    <section id="servicos" className="py-32 bg-[#DFCECC]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-[#74A8A4] font-medium tracking-widest uppercase text-sm mb-4 block">
            Nossos Serviços
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#544A49] mb-6">
            Terapias Oferecidas
          </h2>
          <p className="text-[#726564] text-lg max-w-2xl mx-auto">
            Abordagens integrativas projetadas para cuidar de você de forma única, respeitando seu momento e sua história.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.01 }}
              className={service.colSpan}
            >
              <TiltCard className={cn(
                "group relative p-8 md:p-10 rounded-[32px] bg-[#EDDFDD] border border-[#7F6DA5]/30 flex flex-col justify-between transition-all duration-500 h-full",
                "hover:shadow-2xl hover:shadow-[#74A8A4]/20"
              )}>
                {/* Background Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#74A8A4]/0 to-[#74A8A4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px] pointer-events-none" />
                
                <div className="relative z-20">
                  <div className="w-14 h-14 rounded-2xl bg-[#DFCECC] text-[#74A8A4] flex items-center justify-center mb-8 border border-[#7F6DA5]/20 group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-serif text-[#544A49] mb-4 group-hover:text-[#74A8A4] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#726564] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
