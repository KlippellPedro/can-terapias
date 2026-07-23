import type { ReactNode, MouseEvent } from "react"
import { WHATSAPP_URL } from "@/lib/data"

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

export function WhatsAppButton({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  function handleClick(_e: MouseEvent<HTMLAnchorElement>) {
    // Defensive Meta Pixel conversion tracking — script may be blocked/fail.
    if (typeof window.fbq === "function") {
      window.fbq("track", "Contact")
    }
  }

  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
