import Image from 'next/image'
import Link from 'next/link'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/packages', label: 'Packages' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
]

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3 text-lg font-semibold text-white">
            <Image
              src="/branding/CLEARbgLogo.png"
              alt="SIVERSE Web Studio logo"
              width={44}
              height={44}
              className="h-11 w-11 rounded-xl object-contain"
              priority
            />
            <span>SIVERSE Web Studio™</span>
          </Link>
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">A SIVERSE Labs mission</p>
        </div>

        <nav className="hidden gap-3 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
