"use client"

import { motion } from "framer-motion"
import { SERVICOS } from "@/lib/data"
import { ServicoIcon } from "@/components/icons"
import { Reveal } from "@/components/reveal"

export function Servicos() {
  return (
    <section id="servicos" className="bg-background py-24 md:py-28">
      <div className="mx-auto max-w-[1180px] px-6">
        <Reveal className="mb-14 max-w-2xl">
          <p className="mb-3 inline-block text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-roxo-dark">
            Serviços
          </p>
          <h2 className="text-balance text-3xl md:text-4xl">Como posso te ajudar</h2>
          <p className="mt-3 text-pretty text-ink-soft">
            Seis caminhos terapêuticos, sempre adaptados ao que você precisa agora.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICOS.map((servico, i) => (
            <motion.article
              key={servico.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.22, 0.61, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-bg-alt bg-surface p-7 shadow-[0_14px_34px_-18px_rgba(99,82,77,0.28)]"
              style={{ ["--accent" as string]: servico.accent }}
            >
              <span
                className="absolute inset-x-0 top-0 h-1"
                style={{ backgroundColor: servico.accent }}
                aria-hidden="true"
              />
              <div
                className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-surface transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: servico.accent }}
              >
                <ServicoIcon icon={servico.icon} />
              </div>
              <h3 className="mb-3 text-xl" style={{ color: servico.accentDark }}>
                {servico.title}
              </h3>
              <p className="text-pretty text-[0.95rem] leading-relaxed text-ink-soft">{servico.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
