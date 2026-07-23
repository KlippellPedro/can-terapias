import { useEffect, useRef } from "react"

type Crystal = {
  x: number
  y: number
  size: number
  rotation: number
  rotationSpeed: number
  driftSpeed: number
  swayAmp: number
  swaySpeed: number
  swayPhase: number
  depth: number
  color: string
}

function rand(min: number, max: number) {
  return min + Math.random() * (max - min)
}

/**
 * Slow-drifting ambient crystal particles, contained to the parent element.
 * Deliberately sparse/low-opacity — this is background texture, not a focal effect.
 */
export function CrystalField({
  colors,
  count = 14,
  className,
}: {
  colors: string[]
  count?: number
  className?: string
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvasEl = canvasRef.current
    const ctx2d = canvasEl?.getContext("2d")
    if (!canvasEl || !ctx2d) return

    // Re-bind as non-null for the closures below — TS doesn't retain the
    // narrowing from the guard above across nested function declarations.
    const canvas: HTMLCanvasElement = canvasEl
    const ctx: CanvasRenderingContext2D = ctx2d

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    let width = 0
    let height = 0
    let crystals: Crystal[] = []
    let raf = 0
    let lastTime: number | null = null

    function makeCrystal(): Crystal {
      const size = rand(5, 13)
      return {
        x: rand(0, width),
        y: rand(0, height),
        size,
        rotation: rand(0, Math.PI * 2),
        rotationSpeed: rand(-0.12, 0.12),
        driftSpeed: rand(1.5, 4) * (size / 13),
        swayAmp: rand(5, 14),
        swaySpeed: rand(0.15, 0.32),
        swayPhase: rand(0, Math.PI * 2),
        depth: rand(0.3, 1),
        color: colors[Math.floor(Math.random() * colors.length)],
      }
    }

    function drawCrystal(c: Crystal) {
      const s = c.size
      const pts: [number, number][] = [
        [0, -s],
        [s * 0.55, -s * 0.35],
        [s * 0.4, s * 0.55],
        [0, s],
        [-s * 0.4, s * 0.55],
        [-s * 0.55, -s * 0.35],
      ]
      ctx.save()
      ctx.translate(c.x, c.y)
      ctx.rotate(c.rotation)
      ctx.globalAlpha = 0.08 + c.depth * 0.14
      ctx.beginPath()
      ctx.moveTo(pts[0][0], pts[0][1])
      for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1])
      ctx.closePath()
      ctx.fillStyle = c.color
      ctx.fill()
      ctx.restore()
    }

    function resize() {
      const parent = canvas.parentElement
      width = parent ? parent.clientWidth : window.innerWidth
      height = parent ? parent.clientHeight : window.innerHeight
      const dpr = Math.max(1, window.devicePixelRatio || 1)
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = width + "px"
      canvas.style.height = height + "px"
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      crystals = Array.from({ length: count }, makeCrystal)
    }

    function frame(timestamp: number) {
      if (lastTime === null) lastTime = timestamp
      const dt = Math.min(0.05, (timestamp - lastTime) / 1000)
      lastTime = timestamp
      const elapsed = timestamp / 1000

      ctx.clearRect(0, 0, width, height)
      for (const c of crystals) {
        if (!prefersReducedMotion) {
          c.y -= c.driftSpeed * dt
          c.rotation += c.rotationSpeed * dt
          c.x += Math.sin(elapsed * c.swaySpeed + c.swayPhase) * c.swayAmp * dt * 0.3
          if (c.y + c.size < 0) {
            c.y = height + c.size
            c.x = rand(0, width)
          }
        }
        drawCrystal(c)
      }
      raf = requestAnimationFrame(frame)
    }

    resize()
    raf = requestAnimationFrame(frame)

    const ro = new ResizeObserver(resize)
    if (canvas.parentElement) ro.observe(canvas.parentElement)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [colors, count])

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />
}
