import type { Servico } from "@/lib/data"

export function WhatsAppIcon({ className, size = 20 }: { className?: string; size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.27 4.9L2 22l5.25-1.38A9.94 9.94 0 0 0 12.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10zm5.84 14.13c-.25.7-1.45 1.34-2 1.42-.53.08-1.2.11-1.94-.12-.45-.14-1.02-.33-1.76-.64-3.1-1.34-5.12-4.46-5.27-4.67-.15-.21-1.26-1.68-1.26-3.2 0-1.53.8-2.28 1.09-2.59.29-.31.62-.39.83-.39h.6c.19 0 .45-.02.7.53.25.55.85 1.9.93 2.03.08.14.13.3.02.5-.1.2-.15.31-.3.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.61.17.3.76 1.25 1.63 2.02 1.12.99 2.06 1.31 2.36 1.46.3.15.48.13.66-.07.19-.2.79-.86 1-1.16.21-.3.42-.24.7-.14.28.1 1.79.85 2.1 1 .3.15.5.23.58.35.07.13.07.72-.18 1.42z" />
    </svg>
  )
}

export function ClockIcon({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  )
}

export function PinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  )
}

export function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7.6h2.55l.38-2.96h-2.93V8.53c0-.86.24-1.44 1.47-1.44h1.57V4.46c-.27-.04-1.2-.12-2.28-.12-2.26 0-3.8 1.38-3.8 3.9v2.18H8v2.96h2.46V21h3.04z" />
    </svg>
  )
}

export function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function QuoteIcon({ size = 26 }: { size?: number }) {
  return (
    <svg viewBox="0 0 32 24" width={size} height={size * (24 / 32)} fill="currentColor" aria-hidden="true">
      <path d="M0 24V15.4C0 6.9 5.3 1.3 13.6 0l1.1 3.5C9.6 4.9 7 8 7 12.2h6V24H0zm18 0V15.4C18 6.9 23.3 1.3 31.6 0l1.1 3.5c-5.1 1.4-7.7 4.5-7.7 8.7h6V24H18z" />
    </svg>
  )
}

export function ServicoIcon({ icon, size = 26 }: { icon: Servico["icon"]; size?: number }) {
  const common = {
    viewBox: "0 0 48 48",
    width: size,
    height: size,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.2,
    "aria-hidden": true as const,
  }
  switch (icon) {
    case "acupuntura":
      return (
        <svg {...common} strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 24h6l3-8 6 16 3-8h18" />
          <circle cx="40" cy="24" r="2" fill="currentColor" stroke="none" />
        </svg>
      )
    case "energia":
      return (
        <svg {...common} strokeLinecap="round" strokeLinejoin="round">
          <path d="M24 6v6" />
          <path d="M12 12h24" />
          <path d="M24 12v14" />
          <path d="M24 26l-4 10h8l-4-10z" />
        </svg>
      )
    case "sistemica":
      return (
        <svg {...common} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="10" r="4" />
          <circle cx="10" cy="34" r="4" />
          <circle cx="38" cy="34" r="4" />
          <path d="M24 14v10M24 24l-11 6M24 24l11 6" />
        </svg>
      )
    case "mandala":
      return (
        <svg {...common} strokeLinejoin="round">
          <circle cx="24" cy="24" r="4" />
          <circle cx="24" cy="24" r="10" />
          <circle cx="24" cy="24" r="16" />
          <path strokeLinecap="round" d="M24 8v4M24 36v4M8 24h4M36 24h4M13 13l3 3M32 32l3 3M35 13l-3 3M16 32l-3 3" />
        </svg>
      )
    case "reiki":
      return (
        <svg {...common} strokeLinecap="round">
          <circle cx="24" cy="24" r="6" />
          <path d="M24 4v6M24 38v6M4 24h6M38 24h6M9.5 9.5l4.2 4.2M34.3 34.3l4.2 4.2M38.5 9.5l-4.2 4.2M13.7 34.3l-4.2 4.2" />
        </svg>
      )
    case "shiatsu":
      return (
        <svg {...common} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="13" r="5" />
          <path d="M14 40v-9a10 10 0 0 1 20 0v9" />
          <path d="M8 40h32" />
        </svg>
      )
  }
}
