import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Sobre } from "@/components/sobre"
import { ExplodedView } from "@/components/exploded-view"
import { Servicos } from "@/components/servicos"
import { Galeria } from "@/components/galeria"
import { Depoimentos } from "@/components/depoimentos"
import { Contato } from "@/components/contato"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { SmoothScroll } from "@/components/smooth-scroll"

export default function App() {
  return (
    <SmoothScroll>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Sobre />
        <ExplodedView />
        <Servicos />
        <Galeria />
        <Depoimentos />
        <Contato />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </SmoothScroll>
  )
}
