import Link from 'next/link'

export default function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-white/10 py-10 text-sm text-white/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p>© 2026 SIVERSE Labs™ — Advancement for the Age of Infinite™</p>
          <p className="mt-1">A SIVERSE Labs mission</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/packages" className="hover:text-white">Packages</Link>
          <Link href="/portfolio" className="hover:text-white">Portfolio</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
          <a href="https://siverse-labs.com" className="hover:text-white">SIVERSE Labs</a>
        </div>
      </div>
    </footer>
  )
}
