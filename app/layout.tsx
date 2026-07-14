import type { Metadata, Viewport } from "next"
import { Playfair_Display, Jost } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
})

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jost",
  display: "swap",
})

const description =
  "Acupuntura, Medicina Chinesa, Alinhamento Energético, Consultoria Sistêmica, Mandalas Cristalinas e Reiki com Cibele A. Nadalon. Atendimento presencial, domiciliar e online em Porto Alegre e Litoral Gaúcho. Agende pelo WhatsApp."

export const metadata: Metadata = {
  metadataBase: new URL("https://cibelenadalon.com.br"),
  title: "Cibele A. Nadalon | Acupuntura e Terapias Integrativas",
  description,
  icons: {
    icon: "/img/icons/lotus.png",
    apple: "/img/icons/lotus.png",
  },
  openGraph: {
    type: "website",
    title: "Cibele A. Nadalon | Acupuntura e Terapias Integrativas",
    description,
    locale: "pt_BR",
    images: [{ url: "/img/icons/can.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cibele A. Nadalon | Acupuntura e Terapias Integrativas",
    description: "Acupuntura, Medicina Chinesa e Terapias Integrativas. Agende pelo WhatsApp.",
    images: ["/img/icons/can.png"],
  },
}

export const viewport: Viewport = {
  themeColor: "#AB96C1",
  width: "device-width",
  initialScale: 1,
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "CAN Terapias — Cibele A. Nadalon",
  image: "/img/icons/can.png",
  telephone: "+5551995612876",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "20:00",
    },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "12:00" },
  ],
  sameAs: [
    "https://www.facebook.com/profile.php?id=100055632515514",
    "https://www.instagram.com/canterapias",
  ],
  areaServed: "Porto Alegre e Litoral Gaúcho, RS",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${jost.variable} bg-background`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  )
}
