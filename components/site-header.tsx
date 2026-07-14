"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion"
import { NAV_LINKS } from "@/lib/data"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { WhatsAppIcon } from "@/components/icons"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <motion.div
        style={{ scaleX: progress }}
        className="fixed left-0 top-0 z-[1100] h-[3px] w-full origin-left bg-gradient-to-r from-roxo to-verde"
        aria-hidden="true"
      />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-0 focus:top-0 focus:z-[999] focus:rounded-br-lg focus:bg-roxo focus:px-5 focus:py-3 focus:font-medium focus:text-white"
      >
        Pular para o conteúdo
      </a>

      <header
        className={`fixed left-0 top-0 z-[1000] w-full transition-all duration-300 ${
          scrolled
            ? "bg-background/95 shadow-[0_8px_30px_-18px_rgba(99,82,77,0.45)] backdrop-blur-md"
            : "bg-background/70 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-6 px-6 py-3">
          <a href="#hero" className="flex items-center" aria-label="Cibele A. Nadalon — início">
            <Image
              src="/img/icons/can.png"
              alt="Cibele A. Nadalon — Acupuntura e Terapias Integrativas"
              width={170}
              height={113}
              priority
              className="h-12 w-auto"
            />
          </a>

          <nav className="hidden items-center md:flex" aria-label="Navegação principal">
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[0.95rem] font-medium text-ink transition-colors hover:text-roxo-dark"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <WhatsAppButton className="hidden items-center gap-2 rounded-full bg-whatsapp px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.03] hover:bg-whatsapp-dark sm:flex">
              <WhatsAppIcon size={18} />
              <span>WhatsApp</span>
            </WhatsAppButton>

            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full text-ink md:hidden"
            >
              <span
                className={`h-[2px] w-6 rounded-full bg-current transition-transform duration-300 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[2px] w-6 rounded-full bg-current transition-opacity duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-[2px] w-6 rounded-full bg-current transition-transform duration-300 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden border-t border-bg-alt bg-background/98 backdrop-blur-md md:hidden"
              aria-label="Navegação mobile"
            >
              <ul className="mx-auto flex max-w-[1180px] flex-col px-6 py-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block border-b border-bg-alt py-3 font-medium text-ink last:border-none"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
