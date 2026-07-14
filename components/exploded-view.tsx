"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion"

/* ----------------------------- SVG layers ----------------------------- */

const BODY_PATH =
  "M 82 58 Q 70 72 52 84 Q 44 92 46 108 L 50 168 Q 51 180 58 182 Q 64 182 64 170 L 70 100 Q 72 90 78 90 L 80 130 L 78 190 Q 74 215 74 240 L 70 350 Q 69 380 74 402 Q 78 408 84 402 L 90 320 Q 94 298 100 292 Q 106 298 110 320 L 116 402 Q 122 408 126 402 Q 131 380 130 350 L 126 240 Q 126 215 122 190 L 120 130 L 122 90 Q 128 90 130 100 L 136 170 Q 136 182 142 182 Q 149 180 150 168 L 154 108 Q 156 92 148 84 Q 130 72 118 58 Q 100 66 82 58 Z"

function BodyLayer() {
  return (
    <svg viewBox="0 0 200 430" className="h-full w-auto" aria-hidden="true">
      {/* neck */}
      <path d="M92 58 L94 44 L106 44 L108 58 Z" fill="currentColor" opacity="0.9" />
      {/* head */}
      <circle cx="100" cy="30" r="20" fill="currentColor" opacity="0.9" />
      {/* body */}
      <path d={BODY_PATH} fill="currentColor" opacity="0.9" />
    </svg>
  )
}

function MuscleLayer() {
  const stroke = "#B9A88F"
  return (
    <svg viewBox="0 0 200 430" className="h-full w-auto" aria-hidden="true">
      <g fill="none" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" opacity="0.85">
        {/* spine */}
        <path d="M100 54 L100 300" strokeWidth="2" />
        {/* rib / muscle branches (mirrored) */}
        <path d="M100 96 Q78 104 66 128" />
        <path d="M100 96 Q122 104 134 128" />
        <path d="M100 120 Q76 130 62 158" />
        <path d="M100 120 Q124 130 138 158" />
        <path d="M100 150 Q80 162 74 196" />
        <path d="M100 150 Q120 162 126 196" />
        {/* shoulders to arms */}
        <path d="M100 84 Q70 84 52 120 L50 168" />
        <path d="M100 84 Q130 84 148 120 L150 168" />
        {/* legs */}
        <path d="M100 300 Q86 320 80 400" />
        <path d="M100 300 Q114 320 120 400" />
      </g>
      {/* muscle nodes */}
      <g fill={stroke} opacity="0.9">
        {[
          [66, 128],
          [134, 128],
          [74, 196],
          [126, 196],
          [80, 400],
          [120, 400],
          [100, 120],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="2.4" />
        ))}
      </g>
    </svg>
  )
}

function MeridianLayer() {
  const gold = "#E9C893"
  const points = [
    [100, 40],
    [100, 96],
    [100, 150],
    [100, 210],
    [82, 250],
    [118, 250],
    [78, 340],
    [122, 340],
    [76, 402],
    [124, 402],
    [60, 150],
    [140, 150],
  ]
  return (
    <svg
      viewBox="0 0 200 430"
      className="h-full w-auto"
      aria-hidden="true"
      style={{ filter: "drop-shadow(0 0 6px rgba(233,200,147,0.55))" }}
    >
      <g fill="none" stroke={gold} strokeWidth="1.2" strokeLinecap="round" opacity="0.9">
        {/* central channels */}
        <path d="M100 30 C96 120 96 220 100 300 C102 350 100 380 100 410" />
        <path d="M92 34 C70 120 74 240 82 402" />
        <path d="M108 34 C130 120 126 240 118 402" />
        {/* arm channels */}
        <path d="M96 88 C70 100 56 130 52 170" />
        <path d="M104 88 C130 100 144 130 148 170" />
      </g>
      {/* acupoints */}
      <g fill={gold}>
        {points.map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="2.6" />
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
      <span className="font-mono text-sm tracking-[0.3em] text-[#E9C893]">{index}</span>
      <h3 className="mt-3 font-serif text-3xl leading-tight text-zinc-100 sm:text-4xl text-balance">{title}</h3>
      <p className="mt-2 text-lg font-medium text-[#B9A88F]">{subtitle}</p>
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
  const bodyOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [1, 0.85, 0.85, 0.7])
  const muscleY = useTransform(scrollYProgress, [0, 1], [0, 15])
  const meridianY = useTransform(scrollYProgress, [0, 1], [0, 170])
  const meridianOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [0.25, 0.7, 1])

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
    <section ref={ref} id="como-atua" className="relative h-[300vh] bg-zinc-950">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* soft radial glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[70vh] w-[70vh] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(233,200,147,0.10) 0%, transparent 65%)" }}
        />

        {/* section eyebrow */}
        <div className="absolute inset-x-0 top-24 z-10 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#B9A88F]">
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
          <div className="relative order-1 flex h-[62vh] items-center justify-center text-zinc-200 lg:order-2">
            <motion.div style={{ y: meridianY, opacity: meridianOpacity }} className="absolute h-full">
              <MeridianLayer />
            </motion.div>
            <motion.div style={{ y: muscleY }} className="absolute h-full">
              <MuscleLayer />
            </motion.div>
            <motion.div style={{ y: bodyY, opacity: bodyOpacity }} className="absolute h-full text-[#3F4A3A]">
              <BodyLayer />
            </motion.div>

            {/* Golden needle */}
            <motion.div
              style={{ y: needleY, opacity: needleOpacity }}
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="flex flex-col items-center">
                <div className="h-3 w-3 rounded-full bg-[#E9C893] shadow-[0_0_14px_4px_rgba(233,200,147,0.7)]" />
                <div
                  className="w-px bg-gradient-to-b from-[#E9C893] to-[#E9C893]/40"
                  style={{ height: "56vh", boxShadow: "0 0 8px 1px rgba(233,200,147,0.6)" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
