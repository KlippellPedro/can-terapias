import { Reveal } from "@/components/reveal"

const CREDENCIAIS = [
  { num: "2009", label: "Início da prática clínica" },
  { num: "2013", label: "Pós-graduação em Acupuntura (CBA-MTC)" },
  { num: "CREF", label: "004536-G/RS" },
  { num: "3", label: "Modalidades: presencial, domiciliar e online" },
]

export function Sobre() {
  return (
    <section id="sobre" className="bg-surface py-24 md:py-28">
      <div className="mx-auto max-w-[1180px] px-6">
        <Reveal className="mb-14 max-w-2xl">
          <p className="mb-3 inline-block text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-roxo-dark">
            Sobre
          </p>
          <h2 className="text-balance text-3xl md:text-4xl">Uma jornada dedicada ao cuidado integral</h2>
        </Reveal>

        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr] md:gap-16">
          <Reveal className="space-y-5 text-pretty text-ink-soft">
            <p>
              Formada em Educação Física em 2002 pelo Instituto Porto Alegre (IPA), CREF 004536-G/RS, Cibele dedica-se
              desde 2009 à reabilitação integral da saúde — do corpo à mente. Um caminho que passou por Roma, onde viveu
              e atendeu, e pela especialização em shiatsu com o mestre Hisayuki Yasui, aprofundando-se em neck therapy,
              shiatsu laboral e tui-ná.
            </p>
            <p>
              Buscando os fundamentos da Medicina Tradicional Chinesa, especializou-se em auriculoterapia (método Huang
              Li Chun) e craniopuntura japonesa. Em 2013, concluiu a pós-graduação em Acupuntura pelo Colégio Brasileiro
              de Acupuntura e Medicina Chinesa, reconhecida pela Faculdade São Judas Tadeu, além de cursos de moxabustão
              japonesa e técnicas avançadas de acupuntura japonesa. É também consteladora familiar e reikiana.
            </p>
            <blockquote className="mt-8 border-l-4 border-roxo pl-6 font-serif text-lg italic leading-relaxed text-marrom">
              &ldquo;Talvez você esteja abatido(a) ou ansioso(a), talvez não tenha certeza sobre o futuro, ou
              simplesmente sinta que não está vivendo a vida que gostaria. Estou aqui para te acompanhar no seu processo
              de autoconhecimento — um caminho de crescimento e elevação da consciência.&rdquo;
            </blockquote>
          </Reveal>

          <Reveal className="flex flex-col gap-4" delay={0.15}>
            <ul className="flex flex-col gap-4">
              {CREDENCIAIS.map((c) => (
                <li
                  key={c.label}
                  className="flex items-center gap-4 rounded-2xl border border-bg-alt bg-background p-5"
                >
                  <span className="min-w-[64px] font-serif text-2xl font-semibold text-roxo-dark">{c.num}</span>
                  <span className="text-sm leading-snug text-ink-soft">{c.label}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
