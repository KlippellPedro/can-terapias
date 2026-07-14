import Image from "next/image"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { WhatsAppIcon, ClockIcon, PinIcon, FacebookIcon, InstagramIcon } from "@/components/icons"
import { Reveal } from "@/components/reveal"

export function Contato() {
  return (
    <section id="contato" className="relative overflow-hidden bg-background py-24 text-center md:py-28">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <Image
          src="/img/icons/lotus.png"
          alt=""
          width={560}
          height={560}
          className="absolute left-1/2 top-1/2 w-[520px] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-[0.05]"
        />
      </div>

      <div className="relative mx-auto flex max-w-2xl flex-col items-center px-6">
        <Reveal>
          <p className="mb-3 inline-block text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-roxo-dark">
            Contato
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-balance text-3xl md:text-4xl">Vamos conversar?</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 text-pretty text-lg text-ink-soft">
            Se você busca transformar a sua vida através do equilíbrio do seu corpo, mente e espírito, estou aqui para
            te ajudar.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <WhatsAppButton className="mt-8 inline-flex items-center gap-2 rounded-full bg-whatsapp px-8 py-4 text-lg font-semibold text-white shadow-[0_16px_38px_-18px_rgba(37,211,102,0.9)] transition-transform hover:scale-[1.03] hover:bg-whatsapp-dark">
            <WhatsAppIcon size={22} />
            <span>Agendar pelo WhatsApp</span>
          </WhatsAppButton>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-col items-center gap-3 text-sm text-ink-soft sm:flex-row sm:gap-6">
            <span className="inline-flex items-center gap-2">
              <ClockIcon size={18} /> Seg a Sex 8h–20h · Sáb 9h–12h
            </span>
            <span className="inline-flex items-center gap-2 text-center">
              <PinIcon size={18} /> Porto Alegre e Litoral Gaúcho
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=100055632515514"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook de Cibele A. Nadalon"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-roxo/40 text-roxo-dark transition-colors hover:bg-roxo hover:text-white"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/canterapias"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Cibele A. Nadalon"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-roxo/40 text-roxo-dark transition-colors hover:bg-roxo hover:text-white"
            >
              <InstagramIcon />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
