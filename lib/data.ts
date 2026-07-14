export const WHATSAPP_URL = "https://wa.me/5551995612876"
export const PHONE_DISPLAY = "(51) 9 9561-2876"

export const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
]

export type Servico = {
  title: string
  description: string
  accent: string
  accentDark: string
  icon: "acupuntura" | "energia" | "sistemica" | "mandala" | "reiki" | "shiatsu"
}

export const SERVICOS: Servico[] = [
  {
    title: "Acupuntura e Medicina Chinesa",
    description:
      "Agulhas finíssimas em pontos específicos dos meridianos reequilibram o fluxo de Qi, tratando a causa do desequilíbrio — física, emocional ou mental — e não só o sintoma.",
    accent: "var(--color-roxo)",
    accentDark: "var(--color-roxo-dark)",
    icon: "acupuntura",
  },
  {
    title: "Alinhamento Energético e Radiestesia",
    description:
      "Radiestesia (leitura de vibrações sutis com o pêndulo) combinada à radiônica, buscando alinhamento emocional, fluxo energético e clareza — para pessoas, animais e ambientes.",
    accent: "var(--color-verde)",
    accentDark: "var(--color-verde-dark)",
    icon: "energia",
  },
  {
    title: "Consultoria Sistêmica e Constelação Familiar",
    description:
      "Método criado por Bert Hellinger: identifica padrões ocultos herdados de gerações anteriores para trazê-los à luz e dissolvê-los — em contextos pessoais, familiares e organizacionais.",
    accent: "var(--color-rosa-accent)",
    accentDark: "var(--color-rosa-accent-dark)",
    icon: "sistemica",
  },
  {
    title: "Mandalas Cristalinas",
    description:
      "Grades de cristais dispostas em padrões de geometria sagrada, com a intenção de manifestar proteção, amor, cura ou prosperidade através da prática contemplativa.",
    accent: "var(--color-dourado)",
    accentDark: "var(--color-dourado-dark)",
    icon: "mandala",
  },
  {
    title: "Reiki",
    description:
      "Canalização de energia através da imposição das mãos, sistematizada no Japão por Mikao Usui, buscando reequilíbrio físico, mental, emocional e espiritual.",
    accent: "var(--color-azul)",
    accentDark: "var(--color-azul-dark)",
    icon: "reiki",
  },
  {
    title: "Shiatsu e Quickmassage",
    description:
      "Pressão dos dedos e polegares nos mesmos meridianos da Medicina Chinesa — a origem da prática da Cibele, terapeuta desde 2009. Alivia tensão e dor do corpo todo (shiatsu) ou em sessões rápidas e localizadas (quickmassage).",
    accent: "var(--color-terracota)",
    accentDark: "var(--color-terracota-dark)",
    icon: "shiatsu",
  },
]

export type Depoimento = {
  quote: string
  author: string
  meta: string
}

export const DEPOIMENTOS: Depoimento[] = [
  {
    quote:
      "Faz 3 anos ou mais que a Cibele vem atendendo a minha família a distância com alinhamento energético, mesa radiônica e Reiki, especialmente meu filho de 5 anos e eu. Tem sido um trabalho muito importante para nós (especialmente após a perda do pai do meu filho) e que eu vejo um resultado imenso na harmonização do lar. Recentemente fiz um tratamento mais intenso para o meu filho e o seu comportamento melhorou 100% após o tratamento. Gratidão, Cibele, que Deus te ilumine e continue te dando condição de auxiliar mais pessoas.",
    author: "Danielle",
    meta: "Avaliação no Google",
  },
  {
    quote:
      "Conheci a Cibele quando aplicava shiatsu no local em que eu trabalhava por volta de 2008. Depois ela montou um cantinho para seguir com os atendimentos de shiatsu, acupuntura, auriculoterapia, moxabustão, reiki, ventosa, etc. Nem tinha me dado conta que me trato há mais de 10 anos, nem preciso falar o bem que me faz. Sempre trabalhando o emocional e o físico. Já tratamos crises alérgicas, refluxo, zumbido e várias tendinites. Muito obrigada pelo carinho e dedicação durante todo este tempão.",
    author: "Karem Padua",
    meta: "Avaliação no Google · Local Guide",
  },
  {
    quote:
      "Cibele! Que energia incrível você tem! Te conheci em 2014 e na hora senti toda a força que você tem!! Foram dois trabalhos com você, um em 2019 e outro em 2022... e nos dois tivemos respostas IMEDIATAS!!! Acredito que tudo está conectado e não foi o acaso... foi ENERGIA!!!! Muito obrigada por me amparar mesmo a distância, sempre estaremos conectados com você!!! Gratidão e meu muito obrigada sempre.",
    author: "Carol Tauceda",
    meta: "Avaliação no Google",
  },
]
