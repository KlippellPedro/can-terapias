"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion"

/* ----------------------------- palette ----------------------------- */

const SAGE = "#C3CDBA" // ethereal body silhouette
const LAVENDER = "#9B8CB9" // nerves / muscular tension (brand lilac)
const GOLD = "#E3C18A" // energy meridians, acupoints, needle

/* --------------------- continuous line-art body --------------------- */
/* Right half only (x >= 100); mirrored around x=100 for symmetry.       */

const SILHOUETTE =
  "M100 22 C113 22 123 33 123 46 C123 57 116 63 110 65 C108 69 109 73 113 76 C126 78 137 84 144 97 C150 112 151 145 150 175 C150 198 148 212 146 223 C145 229 140 229 139 223 C137 210 136 197 133 177 C131 155 130 133 127 114 C125 133 122 152 120 168 C124 183 129 196 131 214 C131 248 127 280 124 312 C122 352 120 400 118 440 C117 448 122 452 123 455 C124 460 113 460 107 457 C104 456 101 452 100 444 C100 402 100 360 100 330"

const MIRROR = "translate(200,0) scale(-1,1)"

function BodyLayer() {
  return (
    <svg viewBox="0 0 200 470" className="h-full w-auto" aria-hidden="true">
      {/* soft ethereal fill */}
      <path d={`${SILHOUETTE} Z`} fill={SAGE} fillOpacity={0.09} />
      <path d={`${SILHOUETTE} Z`} fill={SAGE} fillOpacity={0.09} transform={MIRROR} />
      {/* delicate thin outline */}
      <g fill="none" stroke={SAGE} strokeWidth={0.9} strokeOpacity={0.6} strokeLinecap="round" strokeLinejoin="round">
        <path d={SILHOUETTE} />
        <path d={SILHOUETTE} transform={MIRROR} />
      </g>
    </svg>
  )
}

/* --------------- muscular / nervous layer (lavender) --------------- */
/* Fine curved threads that follow the body contour.                   */

const NERVE_LINES = [
  "M100 88 C120 92 133 101 139 120", // shoulder -> arm
  "M100 116 C118 124 126 144 126 168", // upper ribs
  "M100 150 C116 160 122 186 120 208", // lower ribs / oblique
  "M100 300 C116 330 121 382 118 434", // thigh -> shin
]

function NerveLayer() {
  return (
    <svg
      viewBox="0 0 200 470"
      className="h-full w-auto"
      aria-hidden="true"
      style={{ filter: `drop-shadow(0 0 4px ${LAVENDER}55)` }}
    >
      {/* central spine */}
      <path d="M100 58 C99 160 99 250 100 306" fill="none" stroke={LAVENDER} strokeWidth={1.4} strokeOpacity={0.9} />
      <g fill="none" stroke={LAVENDER} strokeWidth={1} strokeOpacity={0.75} strokeLinecap="round">
        {NERVE_LINES.map((d, i) => (
          <path key={`r${i}`} d={d} />
        ))}
        {NERVE_LINES.map((d, i) => (
          <path key={`l${i}`} d={d} transform={MIRROR} />
        ))}
      </g>
      {/* muscle nodes */}
      <g fill={LAVENDER} fillOpacity={0.95}>
        {[
          [139, 120],
          [126, 168],
          [120, 208],
          [118, 434],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r={2} />
            <circle cx={200 - cx} cy={cy} r={2} />
          </g>
        ))}
      </g>
    </svg>
  )
}

/* -------------------- energy meridian layer (gold) ------------------ */

const MERIDIAN_LINES = [
  "M104 80 C114 140 112 224 118 314", // torso channel
  "M116 86 C140 102 149 142 147 198", // arm channel
  "M118 320 C121 372 120 412 116 452", // leg channel
]

function MeridianLayer() {
  const acupointsRight = [
    [147, 198],
    [140, 120],
    [118, 314],
    [116, 452],
    [112, 250],
  ]
  const acupointsCenter = [
    [100, 48],
    [100, 120],
    [100, 186],
    [100, 252],
    [100, 312],
  ]
  return (
    <svg
      viewBox="0 0 200 470"
      className="h-full w-auto"
      aria-hidden="true"
      style={{ filter: `drop-shadow(0 0 6px ${GOLD}66)` }}
    >
      {/* central governing channel */}
      <path d="M100 42 C97 150 97 250 100 322" fill="none" stroke={GOLD} strokeWidth={1.2} strokeOpacity={0.95} />
      <g fill="none" stroke={GOLD} strokeWidth={1} strokeOpacity={0.85} strokeLinecap="round">
        {MERIDIAN_LINES.map((d, i) => (
          <path key={`r${i}`} d={d} />
        ))}
        {MERIDIAN_LINES.map((d, i) => (
          <path key={`l${i}`} d={d} transform={MIRROR} />
        ))}
      </g>
      {/* acupoints (Qi) */}
      <g fill={GOLD}>
        {acupointsCenter.map(([cx, cy], i) => (
          <circle key={`c${i}`} cx={cx} cy={cy} r={2.4} />
        ))}
        {acupointsRight.map(([cx, cy], i) => (
          <g key={`p${i}`}>
            <circle cx={cx} cy={cy} r={2.4} />
            <circle cx={200 - cx} cy={cy} r={2.4} />
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
  const bodyY = useTransform(scrollYProgress, [0, 1], [0, -170])
  const bodyOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [1, 0.9, 0.9, 0.75])
  const nerveY = useTransform(scrollYProgress, [0, 1], [0, 15])
  const nerveOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.4, 1, 1, 0.85])
  const meridianY = useTransform(scrollYProgress, [0, 1], [0, 170])
  const meridianOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [0.2, 0.7, 1])

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
    <section ref={ref} id="como-atua" className="relative h-[300vh]" style={{ backgroundColor: "#1A1816" }}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* soft radial glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[70vh] w-[70vh] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ background: `radial-gradient(circle, ${GOLD}18 0%, transparent 65%)` }}
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

          {/* Exploded stage */}
          <div className="relative order-1 flex h-[64vh] items-center justify-center lg:order-2">
            <motion.div style={{ y: meridianY, opacity: meridianOpacity }} className="absolute h-full">
              <MeridianLayer />
            </motion.div>
            <motion.div style={{ y: nerveY, opacity: nerveOpacity }} className="absolute h-full">
              <NerveLayer />
            </motion.div>
            <motion.div style={{ y: bodyY, opacity: bodyOpacity }} className="absolute h-full">
              <BodyLayer />
            </motion.div>

            {/* Golden needle */}
            <motion.div
              style={{ y: needleY, opacity: needleOpacity }}
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="flex flex-col items-center">
                <div
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: GOLD, boxShadow: `0 0 14px 4px ${GOLD}b3` }}
                />
                <div
                  className="w-px"
                  style={{
                    height: "56vh",
                    background: `linear-gradient(to bottom, ${GOLD}, ${GOLD}66)`,
                    boxShadow: `0 0 8px 1px ${GOLD}99`,
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
