"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const layers = [
  {
    id: "physical",
    title: "Camada Física",
    subtitle: "Estrutura e Músculos",
    description:
      "A acupuntura age diretamente no sistema nervoso, liberando endorfina e cortisol. Isso alivia dores crônicas, tensões musculares e melhora a circulação local.",
    points: [
      { id: "p1", cx: 120, cy: 120 }, // Ombro Esq
      { id: "p2", cx: 180, cy: 120 }, // Ombro Dir
      { id: "p3", cx: 150, cy: 260 }, // Lombar
      { id: "p4", cx: 120, cy: 350 }, // Joelho Esq
      { id: "p5", cx: 180, cy: 350 }, // Joelho Dir
    ],
  },
  {
    id: "energetic",
    title: "Camada Energética",
    subtitle: "Meridianos e Qi",
    description:
      "Restabelecemos o fluxo da energia vital (Qi) que percorre os meridianos do corpo. O desbloqueio promove vitalidade, imunidade e previne o surgimento de doenças.",
    points: [
      { id: "e1", cx: 150, cy: 180 }, // Centro do peito
      { id: "e2", cx: 150, cy: 280 }, // Dan Tian
      { id: "e3", cx: 150, cy: 60 },  // Terceiro olho
      { id: "e4", cx: 95, cy: 190 },  // Braço Esq
      { id: "e5", cx: 205, cy: 190 }, // Braço Dir
    ],
  },
  {
    id: "emotional",
    title: "Camada Emocional",
    subtitle: "Mente e Espírito",
    description:
      "A regulação sistêmica acalma a mente, reduz a ansiedade e estabiliza emoções. O tratamento resgata a clareza mental e a paz interior profunda.",
    points: [
      { id: "em1", cx: 150, cy: 40 },  // Topo da cabeça
      { id: "em2", cx: 150, cy: 150 }, // Coração
      { id: "em3", cx: 80, cy: 240 },  // Mão Esq
      { id: "em4", cx: 220, cy: 240 }, // Mão Dir
    ],
  },
];

export function ExplodedView() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeLayer, setActiveLayer] = useState<string>("physical");

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const cards = document.querySelectorAll(".layer-card");
      let current = "physical";
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        // If the card is in the middle of the viewport
        if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
          current = card.getAttribute("data-layer") || "physical";
        }
      });
      setActiveLayer(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="terapeutica" className="relative bg-[#EDDFDD] py-32" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-[#74A8A4] font-medium tracking-widest uppercase text-sm mb-4 block">
            Acupuntura Integrativa
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#544A49] mb-6">
            Como a Acupuntura Atua
          </h2>
          <p className="text-[#726564] text-lg">
            Role a página para descobrir as três camadas de cura. Um tratamento completo que integra corpo, energia e emoções.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 relative items-start">
          
          {/* Sticky Visual / Silhouette (Left Side on Desktop) */}
          <div className="hidden lg:flex lg:w-1/2 lg:sticky lg:top-32 h-[500px] items-center justify-center bg-[#DFCECC]/50 rounded-[40px] border border-[#7F6DA5]/30 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#EDDFDD]/50 pointer-events-none" />
            
            {/* Elegant SVG Silhouette - Continuous Line */}
            <svg
              viewBox="0 0 300 500"
              className="w-full h-full max-h-[450px] text-[#7F6DA5]/60 drop-shadow-sm"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Minimalist Continuous Human Silhouette Path */}
              <path d="M150 40 C 130 40, 130 80, 150 80 C 150 80, 120 90, 100 120 C 80 150, 70 200, 70 240 C 70 260, 90 260, 90 240 C 90 190, 100 150, 120 120 C 120 120, 120 200, 120 260 C 120 340, 110 400, 110 440 C 110 460, 130 460, 130 440 C 130 380, 140 300, 150 280 C 160 300, 170 380, 170 440 C 170 460, 190 460, 190 440 C 190 400, 180 340, 180 260 C 180 200, 180 120, 180 120 C 200 150, 210 190, 210 240 C 210 260, 230 260, 230 240 C 230 200, 220 150, 200 120 C 180 90, 150 80, 150 80 C 170 80, 170 40, 150 40 Z" />
              
              {/* Acupoints mapped dynamically */}
              {layers.map((layer) => (
                <g
                  key={layer.id}
                  className={cn(
                    "transition-all duration-700",
                    activeLayer === layer.id ? "opacity-100" : "opacity-0"
                  )}
                >
                  {layer.points.map((point) => (
                    <circle
                      key={point.id}
                      cx={point.cx}
                      cy={point.cy}
                      r="4"
                      fill="#74A8A4"
                      className="origin-center"
                    >
                      <animate
                        attributeName="r"
                        values="4;6;4"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0.6;1;0.6"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  ))}
                  {/* Subtle Glow around points */}
                  {layer.points.map((point) => (
                    <circle
                      key={`${point.id}-glow`}
                      cx={point.cx}
                      cy={point.cy}
                      r="12"
                      fill="#7F6DA5"
                      className="opacity-20 blur-sm"
                    />
                  ))}
                </g>
              ))}
            </svg>
          </div>

          {/* Scrolling Content (Right Side on Desktop) */}
          <div className="lg:w-1/2 w-full flex flex-col gap-[30vh] lg:pb-[30vh] pt-12 lg:pt-32">
            {layers.map((layer, index) => (
              <motion.div
                key={layer.id}
                data-layer={layer.id}
                className="layer-card p-8 md:p-12 rounded-[32px] bg-[#FFFFFF]/60 backdrop-blur-md border border-[#7F6DA5]/20 shadow-xl shadow-[#544A49]/5 transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-20% 0px -20% 0px", once: false }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="w-12 h-12 rounded-full bg-[#EDDFDD] text-[#74A8A4] flex items-center justify-center font-serif text-xl mb-6 shadow-sm border border-[#DFCECC]">
                  {index + 1}
                </div>
                <h3 className="text-3xl font-serif text-[#544A49] mb-2">{layer.title}</h3>
                <h4 className="text-sm uppercase tracking-widest text-[#74A8A4] mb-6">{layer.subtitle}</h4>
                <p className="text-[#726564] leading-relaxed text-lg">{layer.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
