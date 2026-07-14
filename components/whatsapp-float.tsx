"use client"

import { motion } from "framer-motion"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { WhatsAppIcon } from "@/components/icons"

export function WhatsAppFloat() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-[900]"
    >
      <WhatsAppButton className="flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.7)] transition-transform hover:scale-110 hover:bg-whatsapp-dark">
        <span className="sr-only">Fale com Cibele no WhatsApp</span>
        <WhatsAppIcon size={28} />
      </WhatsAppButton>
    </motion.div>
  )
}
