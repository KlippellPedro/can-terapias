"use client";

import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone, CalendarHeart } from "lucide-react";

export function Contato() {
  return (
    <section id="contato" className="py-32 bg-[#DFCECC] relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7F6DA5]/20 rounded-full blur-[100px] mix-blend-multiply pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#74A8A4]/10 rounded-full blur-[100px] mix-blend-multiply pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-[#74A8A4] font-medium tracking-widest uppercase text-sm mb-4 block">
            Agendamento
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#544A49] mb-6">
            Dê o primeiro passo
          </h2>
          <p className="text-[#726564] text-lg max-w-2xl mx-auto">
            Seja para tirar dúvidas ou agendar uma sessão, estou aqui para ouvir você. Escolha a melhor forma de entrar em contato.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Informações de Contato Direto */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-10 rounded-[40px] bg-[#EDDFDD] border border-[#7F6DA5]/30 shadow-xl shadow-[#544A49]/5 h-full flex flex-col justify-center"
          >
            <h3 className="text-3xl font-serif text-[#544A49] mb-8">Informações de Atendimento</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#DFCECC] flex items-center justify-center text-[#74A8A4] shrink-0 border border-[#7F6DA5]/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[#544A49] font-medium mb-1">Localização</h4>
                  <p className="text-[#726564] leading-relaxed">Atendimento presencial em Porto Alegre e no Litoral Gaúcho. Atendimentos online disponíveis para qualquer lugar do Brasil.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#DFCECC] flex items-center justify-center text-[#74A8A4] shrink-0 border border-[#7F6DA5]/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[#544A49] font-medium mb-1">WhatsApp / Telefone</h4>
                  <p className="text-[#726564] leading-relaxed">(51) 99561-2876</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#DFCECC] flex items-center justify-center text-[#74A8A4] shrink-0 border border-[#7F6DA5]/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[#544A49] font-medium mb-1">E-mail</h4>
                  <p className="text-[#726564] leading-relaxed">canterapias@hotmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-[#7F6DA5]/30">
              <a
                href="https://wa.me/5551995612876?text=Olá, Cibele! Gostaria de mais informações sobre as sessões."
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#25d366] text-white font-medium text-lg transition-all duration-300 hover:bg-[#1da851] shadow-lg shadow-[#25d366]/20 hover:-translate-y-1"
              >
                <CalendarHeart className="w-5 h-5" />
                Agendar via WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Formulário Elegante em Glassmorphism */}
          <motion.form 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-10 rounded-[40px] bg-[#FFFFFF]/60 backdrop-blur-md border border-[#7F6DA5]/30 shadow-xl shadow-[#544A49]/5 h-full"
            onSubmit={(e) => { e.preventDefault(); alert("Formulário meramente ilustrativo. Para agendamentos reais, use o botão de WhatsApp."); }}
          >
            <h3 className="text-3xl font-serif text-[#544A49] mb-8">Envie uma mensagem</h3>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#74A8A4] mb-2">Seu Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-5 py-4 rounded-2xl bg-[#EDDFDD] border border-[#7F6DA5]/40 focus:border-[#74A8A4] focus:ring-1 focus:ring-[#74A8A4] outline-none transition-all text-[#544A49] placeholder:text-[#7F6DA5]"
                  placeholder="Como prefere ser chamado(a)?"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#74A8A4] mb-2">E-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-5 py-4 rounded-2xl bg-[#EDDFDD] border border-[#7F6DA5]/40 focus:border-[#74A8A4] focus:ring-1 focus:ring-[#74A8A4] outline-none transition-all text-[#544A49] placeholder:text-[#7F6DA5]"
                  placeholder="seu@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#74A8A4] mb-2">Sua Mensagem</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-5 py-4 rounded-2xl bg-[#EDDFDD] border border-[#7F6DA5]/40 focus:border-[#74A8A4] focus:ring-1 focus:ring-[#74A8A4] outline-none transition-all text-[#544A49] placeholder:text-[#7F6DA5] resize-none"
                  placeholder="Como posso te ajudar hoje?"
                  required
                />
              </div>

              <button 
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#74A8A4] text-[#EDDFDD] font-medium text-lg transition-all duration-300 hover:bg-[#5B8683] shadow-lg shadow-[#74A8A4]/20 hover:-translate-y-1"
              >
                Enviar Mensagem
                <Send className="w-5 h-5" />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
