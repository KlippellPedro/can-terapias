"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { WhatsAppIcon, ClockIcon, PinIcon } from "@/components/icons"

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pb-20 pt-28 md:pb-28 md:pt-36">
      {/* watermark */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <Image
          src="/img/icons/lotus.png"
          alt=""
          width={520}
          height={520}
          className="absolute -right-24 top-10 w-[420px] max-w-none opacity-[0.06] md:w-[520px]"
        />
      </div>

      <div className="relative mx-auto grid max-w-[1180px] items-center gap-12 px-6 md:grid-cols-2 md:gap-8">
        <div className="order-2 md:order-1">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-block text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-roxo-dark"
          >
            Acupuntura e Terapias Integrativas
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-balance text-4xl md:text-5xl lg:text-6xl"
          >
            Cibele A. Nadalon
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-5 max-w-md text-pretty text-lg text-ink-soft"
          >
            Se você busca transformar a sua vida através do equilíbrio do seu corpo, mente e espírito, estou aqui para te
            ajudar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <WhatsAppButton className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 font-semibold text-white shadow-[0_14px_34px_-18px_rgba(37,211,102,0.9)] transition-transform hover:scale-[1.03] hover:bg-whatsapp-dark">
              <WhatsAppIcon size={20} />
              <span>Agendar pelo WhatsApp</span>
            </WhatsAppButton>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 rounded-full border border-roxo/50 px-6 py-3.5 font-medium text-marrom transition-colors hover:border-roxo hover:bg-roxo/10"
            >
              Conhecer os serviços
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.36 }}
            className="mt-8 flex flex-col gap-2 text-sm text-ink-soft sm:flex-row sm:flex-wrap sm:gap-6"
          >
            <span className="inline-flex items-center gap-2">
              <ClockIcon /> Seg a Sex 8h–20h · Sáb 9h–12h
            </span>
            <span className="inline-flex items-center gap-2">
              <PinIcon /> Presencial, domiciliar e online
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
          className="order-1 flex justify-center md:order-2"
        >
          <div className="relative">
            <div
              className="absolute -inset-4 -z-10 rounded-[36px] bg-roxo/15 blur-2xl"
              aria-hidden="true"
            />
            <div className="overflow-hidden rounded-[28px] border-4 border-surface shadow-[0_20px_45px_-20px_rgba(99,82,77,0.45)]">
              <Image
                src="/img/fotos/img_1.avif"
                alt="Cibele A. Nadalon em ambiente de atendimento terapêutico"
                width={463}
                height={813}
                priority
                className="h-full w-full max-w-[360px] object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
