"use client";

import { MapPin, Mail, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-[#EDDFDD] pt-24 pb-12 border-t border-[#7F6DA5]/30 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute -top-[20%] -right-[10%] w-[400px] h-[400px] rounded-full bg-[#74A8A4]/5 blur-[100px] mix-blend-multiply pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & About */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3 group mb-8 w-fit">
              <div className="relative w-14 h-14 overflow-hidden rounded-full flex items-center justify-center">
                <img 
                  src="/img/fotos/logo-transparente.png" 
                  alt="Flor de Lótus" 
                  className="absolute w-full h-full object-cover object-center scale-[2.8] brightness-[0.4] contrast-[1.5] mix-blend-multiply transition-transform duration-500 group-hover:scale-[3.0]"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl leading-none text-[#544A49] tracking-wide">
                  Cibele A. Nadalon
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#74A8A4] mt-1 font-medium">
                  Acupuntura & Terapias
                </span>
              </div>
            </a>
            <p className="text-[#726564] text-sm leading-relaxed mb-6">
              Um espaço de acolhimento e transformação focado em tratar a raiz do desequilíbrio e resgatar a sua saúde integral.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/canterapias" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#DFCECC] flex items-center justify-center text-[#74A8A4] hover:bg-[#74A8A4] hover:text-[#EDDFDD] transition-colors border border-[#7F6DA5]/20">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://www.facebook.com/canterapias/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#DFCECC] flex items-center justify-center text-[#74A8A4] hover:bg-[#74A8A4] hover:text-[#EDDFDD] transition-colors border border-[#7F6DA5]/20">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-[#544A49] text-lg mb-6">Navegação</h4>
            <ul className="space-y-4">
              {["Início", "Sobre", "Terapêutica", "Serviços", "Depoimentos"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace("ê", "e")}`} className="text-[#726564] text-sm hover:text-[#74A8A4] transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7F6DA5] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-serif text-[#544A49] text-lg mb-6">Terapias</h4>
            <ul className="space-y-4">
              {["Acupuntura", "Mandalas Cristalinas", "Reiki", "Alinhamento Energético e Radiestesia", "Ginástica Laboral"].map((item) => (
                <li key={item}>
                  <a href="#servicos" className="text-[#726564] text-sm hover:text-[#74A8A4] transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7F6DA5] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-[#544A49] text-lg mb-6">Contato</h4>
            <ul className="space-y-4 text-sm text-[#726564]">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#74A8A4] shrink-0 mt-0.5" />
                <span>Porto Alegre e Litoral Gaúcho, RS (Atendimento presencial e online)</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#74A8A4] shrink-0" />
                <span>(51) 99561-2876</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#74A8A4] shrink-0" />
                <span>canterapias@hotmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[#7F6DA5]/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#726564]">
          <p>© {new Date().getFullYear()} Cibele A. Nadalon - Terapias Integrativas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
