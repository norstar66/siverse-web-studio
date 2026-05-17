import Image from 'next/image'
import Link from 'next/link'

export default function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-white/10 py-10 text-sm text-white/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/branding/CLEARbgLogo.png"
            alt="SIVERSE Web Studio logo"
            width={36}
            height={36}
            className="h-9 w-9 rounded-lg object-contain"
          />
          <div>
          <p>© 2026 SIVERSE Labs™ — Advancement for the Age of Infinite™</p>
          <p className="mt-1">Web Advancement for the Age of Infinite Business</p>
          </div>
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
