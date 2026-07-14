"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion"

/* ----------------------------- palette ----------------------------- */

const SAGE = "#C3CDBA" // ethereal body silhouette
const LAVENDER = "#B49FD8" // nerves / muscular tension (soft neon lilac)
const GOLD = "#E6C591" // energy meridians, acupoints, needle

/* --------------- high-fidelity full-body silhouette ---------------- */
/* Right half only; mirrored around x=100 for perfect symmetry.        */

const SILHOUETTE =
  "M100 16 C118 16 131 29 131 47 C131 61 123 69 115 73 L113 82 C131 84 146 88 153 99 C160 124 161 158 158 189 C157 205 155 216 151 218 C148 219 146 215 145 207 C144 182 140 145 133 120 C131 138 128 154 126 170 C127 188 132 202 138 217 C143 262 141 342 133 402 C132 431 131 448 128 455 C127 460 119 460 115 457 C112 452 114 402 112 362 C110 322 107 307 100 303"

const MIRROR = "translate(200,0) scale(-1,1)"

/* Frosted-glass wrapper that makes each layer read as a floating panel */
function GlassPanel({
  children,
  tint,
}: {
  children: React.ReactNode
  tint: string
}) {
  return (
    <div className="relative flex h-full items-center justify-center px-8 py-6">
      <div
        className="absolute inset-0 rounded-[2.5rem] border backdrop-blur-md"
        style={{
          borderColor: `${tint}22`,
          background: `linear-gradient(150deg, ${tint}14 0%, ${tint}06 45%, transparent 100%)`,
          boxShadow: `inset 0 1px 0 ${tint}22, 0 24px 60px -30px ${tint}55`,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  )
}

function BodyLayer() {
  return (
    <svg viewBox="0 0 200 470" className="h-full w-auto" aria-hidden="true">
      <defs>
        <linearGradient id="bodyFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={SAGE} stopOpacity={0.22} />
          <stop offset="100%" stopColor={SAGE} stopOpacity={0.06} />
        </linearGradient>
      </defs>
      <path d={`${SILHOUETTE} Z`} fill="url(#bodyFill)" />
      <path d={`${SILHOUETTE} Z`} fill="url(#bodyFill)" transform={MIRROR} />
      <g fill="none" stroke={SAGE} strokeWidth={0.9} strokeOpacity={0.7} strokeLinecap="round" strokeLinejoin="round">
        <path d={SILHOUETTE} />
        <path d={SILHOUETTE} transform={MIRROR} />
      </g>
    </svg>
  )
}

/* --------------- nervous / muscular layer (lavender) --------------- */

const NERVE_LINES = [
  "M100 90 C122 94 138 104 150 122",
  "M100 118 C120 128 129 148 131 172",
  "M100 156 C118 168 124 190 122 214",
  "M100 300 C118 332 124 384 120 440",
]

function NerveLayer() {
  return (
    <svg
      viewBox="0 0 200 470"
      className="h-full w-auto"
      aria-hidden="true"
      style={{ filter: `drop-shadow(0 0 6px ${LAVENDER}66)` }}
    >
      <path d="M100 58 C99 160 99 250 100 306" fill="none" stroke={LAVENDER} strokeWidth={1.5} strokeOpacity={0.95} />
      <g fill="none" stroke={LAVENDER} strokeWidth={1} strokeOpacity={0.8} strokeLinecap="round">
        {NERVE_LINES.map((d, i) => (
          <path key={`r${i}`} d={d} />
        ))}
        {NERVE_LINES.map((d, i) => (
          <path key={`l${i}`} d={d} transform={MIRROR} />
        ))}
      </g>
      <g fill={LAVENDER}>
        {[
          [150, 122],
          [131, 172],
          [122, 214],
          [120, 440],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r={2.1} />
            <circle cx={200 - cx} cy={cy} r={2.1} />
          </g>
        ))}
      </g>
    </svg>
  )
}

/* -------------------- energy meridian layer (gold) ------------------ */

const MERIDIAN_LINES = [
  "M104 80 C114 140 112 224 118 314",
  "M116 86 C142 104 152 146 149 202",
  "M118 320 C121 374 120 414 117 452",
]

function MeridianLayer() {
  const acupointsCenter = [
    [100, 46],
    [100, 120],
    [100, 186],
    [100, 252],
    [100, 312],
  ]
  const acupointsRight = [
    [149, 202],
    [142, 122],
    [118, 314],
    [117, 452],
    [112, 250],
  ]
  return (
    <svg
      viewBox="0 0 200 470"
      className="h-full w-auto"
      aria-hidden="true"
      style={{ filter: `drop-shadow(0 0 8px ${GOLD}80)` }}
    >
      <path d="M100 42 C97 150 97 250 100 322" fill="none" stroke={GOLD} strokeWidth={1.3} strokeOpacity={0.98} />
      <g fill="none" stroke={GOLD} strokeWidth={1} strokeOpacity={0.9} strokeLinecap="round">
        {MERIDIAN_LINES.map((d, i) => (
          <path key={`r${i}`} d={d} />
        ))}
        {MERIDIAN_LINES.map((d, i) => (
          <path key={`l${i}`} d={d} transform={MIRROR} />
        ))}
      </g>
      <g fill={GOLD}>
        {acupointsCenter.map(([cx, cy], i) => (
          <circle key={`c${i}`} cx={cx} cy={cy} r={2.6} />
        ))}
        {acupointsRight.map(([cx, cy], i) => (
          <g key={`p${i}`}>
            <circle cx={cx} cy={cy} r={2.6} />
            <circle cx={200 - cx} cy={cy} r={2.6} />
          </g>
        ))}
      </g>
    </svg>
  )
}

/* ----------------------------- text panel ----------------------------- */

function Panel({
  opacity,
  y,
  index,
  title,
  subtitle,
  body,
}: {
  opacity: MotionValue<number>
  y: MotionValue<number>
  index: string
  title: string
  subtitle: string
  body: string
}) {
  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0 flex flex-col justify-center">
      <span className="font-mono text-sm tracking-[0.3em]" style={{ color: GOLD }}>
        {index}
      </span>
      <h3 className="mt-3 font-serif text-3xl leading-tight text-zinc-100 sm:text-4xl text-balance">{title}</h3>
      <p className="mt-2 text-lg font-medium" style={{ color: LAVENDER }}>
        {subtitle}
      </p>
      <p className="mt-4 max-w-md leading-relaxed text-zinc-400 text-pretty">{body}</p>
    </motion.div>
  )
}

/* ----------------------------- section ----------------------------- */

export function ExplodedView() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

  // Layer separation
  const bodyY = useTransform(scrollYProgress, [0, 1], [0, -175])
  const bodyOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [1, 0.95, 0.95, 0.85])
  const nerveY = useTransform(scrollYProgress, [0, 1], [0, 12])
  const nerveOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.35, 1, 1, 0.9])
  const meridianY = useTransform(scrollYProgress, [0, 1], [0, 175])
  const meridianOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [0.2, 0.75, 1])

  // Needle travels top -> bottom, connecting the layers
  const needleY = useTransform(scrollYProgress, [0, 1], ["-46%", "46%"])
  const needleOpacity = useTransform(scrollYProgress, [0, 0.08, 0.95, 1], [0, 1, 1, 0.9])

  // Text panels
  const p1 = useTransform(scrollYProgress, [0, 0.05, 0.26, 0.34], [0, 1, 1, 0])
  const p1y = useTransform(scrollYProgress, [0, 0.05, 0.34], [24, 0, -24])
  const p2 = useTransform(scrollYProgress, [0.34, 0.42, 0.6, 0.68], [0, 1, 1, 0])
  const p2y = useTransform(scrollYProgress, [0.34, 0.42, 0.68], [24, 0, -24])
  const p3 = useTransform(scrollYProgress, [0.68, 0.76, 0.98, 1], [0, 1, 1, 1])
  const p3y = useTransform(scrollYProgress, [0.68, 0.76, 1], [24, 0, 0])

  return (
    <section ref={ref} id="como-atua" className="relative h-[300vh]" style={{ backgroundColor: "#141210" }}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* ambient glows */}
        <div
          className="pointer-events-none absolute left-[62%] top-1/2 h-[75vh] w-[75vh] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ background: `radial-gradient(circle, ${GOLD}1f 0%, transparent 62%)` }}
        />
        <div
          className="pointer-events-none absolute left-[62%] top-[38%] h-[45vh] w-[45vh] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ background: `radial-gradient(circle, ${LAVENDER}1a 0%, transparent 65%)` }}
        />

        {/* section eyebrow */}
        <div className="absolute inset-x-0 top-24 z-10 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.35em]" style={{ color: LAVENDER }}>
            Como a acupuntura atua
          </span>
          <p className="mx-auto mt-2 max-w-sm px-6 text-sm text-zinc-500">
            Role para revelar as três camadas do tratamento
          </p>
        </div>

        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2">
          {/* Text panels */}
          <div className="relative order-2 h-[260px] lg:order-1">
            <Panel
              opacity={p1}
              y={p1y}
              index="01"
              title="A Superfície"
              subtitle="Alívio imediato"
              body="As agulhas finíssimas atuam na pele e nos receptores superficiais, estimulando a liberação de endorfinas para uma sensação de alívio quase instantânea."
            />
            <Panel
              opacity={p2}
              y={p2y}
              index="02"
              title="A Tensão Física"
              subtitle="Tratamento muscular"
              body="Em camadas mais profundas, os pontos-gatilho e as fibras musculares tensionadas são relaxados, restaurando a mobilidade e desfazendo dores crônicas."
            />
            <Panel
              opacity={p3}
              y={p3y}
              index="03"
              title="O Fluxo de Energia"
              subtitle="Equilíbrio duradouro"
              body="Nos meridianos, a energia vital (Qi) é reequilibrada. É aqui que o tratamento se torna duradouro, harmonizando corpo e mente por completo."
            />
          </div>

          {/* Exploded glass stage */}
          <div className="relative order-1 flex h-[66vh] items-center justify-center lg:order-2">
            <motion.div style={{ y: meridianY, opacity: meridianOpacity }} className="absolute h-full">
              <GlassPanel tint={GOLD}>
                <MeridianLayer />
              </GlassPanel>
            </motion.div>
            <motion.div style={{ y: nerveY, opacity: nerveOpacity }} className="absolute h-full">
              <GlassPanel tint={LAVENDER}>
                <NerveLayer />
              </GlassPanel>
            </motion.div>
            <motion.div style={{ y: bodyY, opacity: bodyOpacity }} className="absolute h-full">
              <GlassPanel tint={SAGE}>
                <BodyLayer />
              </GlassPanel>
            </motion.div>

            {/* Golden needle */}
            <motion.div
              style={{ y: needleY, opacity: needleOpacity }}
              className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="flex flex-col items-center">
                <div
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: GOLD, boxShadow: `0 0 16px 5px ${GOLD}cc` }}
                />
                <div
                  className="w-px"
                  style={{
                    height: "58vh",
                    background: `linear-gradient(to bottom, ${GOLD}, ${GOLD}55)`,
                    boxShadow: `0 0 10px 1px ${GOLD}aa`,
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
