"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { name: "Início", href: "#" },
  { name: "Sobre", href: "#sobre" },
  { name: "Terapêutica", href: "#terapeutica" },
  { name: "Serviços", href: "#servicos" },
  { name: "Depoimentos", href: "#depoimentos" },
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "py-4 bg-[#EDDFDD]/80 backdrop-blur-md shadow-sm border-b border-[#7F6DA5]/30"
          : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo Icon + HTML Text Layout */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 overflow-hidden rounded-full flex items-center justify-center">
            <img 
              src="/img/fotos/logo-transparente.png" 
              alt="Flor de Lótus" 
              className="absolute w-full h-full object-cover object-center scale-[2.8] brightness-[0.4] contrast-[1.5] mix-blend-multiply transition-transform duration-500 group-hover:scale-[3.0]"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-[1.4rem] leading-none text-[#544A49] tracking-wide">
              Cibele A. Nadalon
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#74A8A4] mt-1 font-medium">
              Acupuntura & Terapias
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#726564] hover:text-[#74A8A4] transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#7F6DA5] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contato"
            className="ml-4 px-6 py-2.5 rounded-full bg-[#74A8A4] text-[#EDDFDD] text-sm font-medium hover:bg-[#5B8683] transition-all duration-300 shadow-md shadow-[#74A8A4]/20 hover:shadow-lg hover:shadow-[#74A8A4]/30 hover:-translate-y-0.5"
          >
            Agendar Sessão
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#544A49] p-2 -mr-2"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed inset-0 z-50 bg-[#EDDFDD] flex flex-col px-6 py-8 md:hidden"
          >
            <div className="flex justify-between items-center mb-12">
              <a href="#" className="flex items-center gap-3 group mb-8" onClick={() => setMobileMenuOpen(false)}>
                <div className="relative w-10 h-10 overflow-hidden rounded-full flex items-center justify-center">
                  <img 
                    src="/img/fotos/logo-transparente.png" 
                    alt="Flor de Lótus" 
                    className="absolute w-full h-full object-cover object-center scale-[2.8] brightness-[0.4] contrast-[1.5] mix-blend-multiply"
                  />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-serif text-lg leading-none text-[#544A49] tracking-wide">
                    Cibele A. Nadalon
                  </span>
                  <span className="text-[8px] uppercase tracking-[0.2em] text-[#74A8A4] mt-1 font-medium">
                    Acupuntura & Terapias
                  </span>
                </div>
              </a>
              <button
                className="text-[#544A49] p-2 -mr-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-6 text-center">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-serif text-[#544A49] hover:text-[#74A8A4] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-8 px-8 py-4 rounded-full bg-[#74A8A4] text-[#EDDFDD] text-lg font-medium shadow-md mx-auto w-full max-w-xs"
              >
                Agendar Sessão
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
