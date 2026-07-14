"use client"

import { motion } from "framer-motion"
import { DEPOIMENTOS } from "@/lib/data"
import { QuoteIcon } from "@/components/icons"
import { Reveal } from "@/components/reveal"

export function Depoimentos() {
  return (
    <section id="depoimentos" className="bg-bg-alt py-24 md:py-28">
      <div className="mx-auto max-w-[1180px] px-6">
        <Reveal className="mb-14 max-w-2xl">
          <p className="mb-3 inline-block text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-roxo-dark">
            Depoimentos
          </p>
          <h2 className="text-balance text-3xl md:text-4xl">Quem já viveu essa transformação</h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {DEPOIMENTOS.map((d, i) => (
            <motion.blockquote
              key={d.author}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 0.61, 0.36, 1] }}
              className="flex flex-col rounded-3xl border border-surface/60 bg-surface p-7 shadow-[0_14px_34px_-18px_rgba(99,82,77,0.28)]"
            >
              <span className="mb-4 text-roxo" aria-hidden="true">
                <QuoteIcon />
              </span>
              <p className="text-pretty text-[0.95rem] leading-relaxed text-ink-soft">{d.quote}</p>
              <footer className="mt-6 border-t border-bg-alt pt-4">
                <span className="text-dourado" aria-label="5 de 5 estrelas">
                  ★★★★★
                </span>
                <cite className="mt-1 block font-serif text-lg not-italic text-marrom">{d.author}</cite>
                <span className="text-xs uppercase tracking-wide text-ink-soft">{d.meta}</span>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
