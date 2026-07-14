import Image from "next/image"

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-bg-alt py-10">
      <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-3 px-6 text-center">
        <Image src="/img/icons/lotus.png" alt="" width={32} height={32} className="h-8 w-8 opacity-80" aria-hidden />
        <p className="text-sm text-ink-soft">
          &copy; {year} CAN Terapias — Cibele A. Nadalon
        </p>
      </div>
    </footer>
  )
}
