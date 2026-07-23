"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/5551995612876?text=Olá, gostaria de agendar uma consulta com a Cibele."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25d366] text-white shadow-lg shadow-[#25d366]/30 transition-shadow hover:shadow-xl hover:shadow-[#25d366]/40 group"
      aria-label="Agendar via WhatsApp"
    >
      {/* Pulse effect for subtle attention */}
      <div className="absolute inset-0 rounded-full border-2 border-[#25d366] opacity-0 group-hover:animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite]" />
      <MessageCircle className="w-7 h-7 relative z-10" />
    </motion.a>
  );
}
