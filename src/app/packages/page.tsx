const packages = [
  {
    name: 'Starter Website',
    price: '$600',
    bestFor: 'Best for solo professionals, local businesses, restaurants, and anyone who needs a clean first site fast.',
    items: ['One-page website', 'Hero, about, services/menu, contact', 'Mobile-friendly design', 'Basic SEO metadata', 'Vercel deployment'],
  },
  {
    name: 'Standard Website',
    price: '$1,200',
    bestFor: 'Best for businesses that need a fuller web presence with multiple pages and stronger trust signals.',
    items: ['3–5 pages', 'Home, About, Services, Contact', 'Optional gallery, FAQ, menu, or booking link', 'Basic SEO setup', 'Vercel deployment'],
  },
  {
    name: 'Website Refresh',
    price: '$300+',
    bestFor: 'Best for businesses with an existing site that feels dated, messy, or weak on mobile.',
    items: ['Visual cleanup', 'Copy tightening', 'CTA improvement', 'Mobile improvements', 'Performance cleanup where practical'],
  },
  {
    name: 'Monthly Care Plan',
    price: 'Custom',
    bestFor: 'Best for clients who want someone to help keep the site current after launch.',
    items: ['Small content edits', 'Basic upkeep', 'Simple analytics review', 'SEO/content suggestions', 'Light support for ongoing changes'],
  },
]

export default function PackagesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14 md:py-20">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200/80">Packages</p>
        <h1 className="mt-4 text-5xl font-bold">Simple website packages with sane scope</h1>
        <p className="mt-5 text-lg text-white/75">
          The goal is not to sell confusing bundles. The goal is to help people buy the smallest useful version, get it live, and improve from there.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {packages.map((pkg) => (
          <article key={pkg.name} className="card p-6">
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-2xl font-semibold text-white">{pkg.name}</h2>
              <span className="rounded-full bg-cyan-400/15 px-3 py-1 text-sm font-semibold text-cyan-200">{pkg.price}</span>
            </div>
            <p className="mt-4 text-white/75">{pkg.bestFor}</p>
            <ul className="mt-5 space-y-3 text-white/70">
              {pkg.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <section className="mt-14 card p-6 md:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200/80">Launch offer</p>
        <h2 className="mt-4 text-3xl font-bold">15% off for early launch clients</h2>
        <p className="mt-4 max-w-3xl text-white/75">
          We&apos;re building this studio in public and reopening client work with a tight, practical scope. Early clients who are a good fit may qualify for a 15% launch offer while we finalize the first wave of portfolio examples.
        </p>
      </section>
    </main>
  )
}
