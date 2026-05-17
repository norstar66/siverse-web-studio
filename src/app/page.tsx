const packages = [
  {
    name: 'Starter Site',
    price: '$600',
    description: 'A clean one-page website for a small business or solo professional who needs a credible online presence fast.',
    items: ['Hero section', 'About section', 'Services or menu section', 'Contact section', 'Mobile-friendly layout', 'Basic SEO metadata', 'Vercel deployment'],
  },
  {
    name: 'Standard Site',
    price: '$1,200',
    description: 'A 3–5 page website for businesses ready for a fuller presence with clearer structure and stronger trust.',
    items: ['Home, About, Services, Contact', 'Optional FAQ, gallery, menu, or booking link', 'Mobile-first design', 'Basic SEO setup', 'Vercel deployment'],
  },
  {
    name: 'Website Refresh',
    price: '$300+',
    description: 'For sites that already exist but feel outdated, confusing, slow, or rough on mobile.',
    items: ['Visual cleanup', 'Copy tightening', 'CTA improvement', 'Mobile improvements', 'Performance cleanup where practical'],
  },
]

const niches = [
  'Restaurants and cafes',
  'Food trucks',
  'Tattoo artists',
  'Barbers and salons',
  'Contractors and cleaners',
  'Therapists and coaches',
  'Artists and musicians',
  'Local shops and community groups',
]

const processSteps = [
  ['1. Quick fit check', 'You tell us what you need, what is broken, and how fast you need it.'],
  ['2. Tight scope', 'We define the smallest useful version that solves the real problem.'],
  ['3. Build fast', 'We design, write, and deploy without turning the project into a giant ordeal.'],
  ['4. Launch cleanly', 'You get a site that works on phones, looks credible, and is easy to share.'],
]

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14 md:py-20">
      <section className="grid gap-10 md:grid-cols-[1.15fr,0.85fr] md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200/80">
            SIVERSE Web Studio
          </p>
          <h1 className="mt-4 text-5xl font-bold leading-tight md:text-6xl">
            Fast, professional websites for <span className="gradient-text">small businesses</span>
          </h1>
          <div className="mt-6 max-w-2xl space-y-4 text-lg text-white/80">
            <p>
              We build clean, mobile-friendly websites for small businesses, founders, freelancers, and local brands who need to look more credible online.
            </p>
            <p>
              No giant agency theater. No endless process. Just clear offers, fast deployment, and sites that help people contact you, trust you, and buy from you.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#packages" className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300">
              See packages
            </a>
            <a href="#contact" className="rounded-xl border border-white/15 px-5 py-3 font-medium transition hover:bg-white/10">
              Get a quote
            </a>
            <a href="https://siverse-labs.com" className="rounded-xl border border-white/15 px-5 py-3 font-medium transition hover:bg-white/10">
              Visit SIVERSE Labs
            </a>
          </div>

          <div className="mt-8 card p-5 text-sm text-white/75">
            <p className="font-semibold text-white">Best first win:</p>
            <p className="mt-2">Sell one $600 starter site. Then reuse the system, tighten delivery, and attach a care plan.</p>
          </div>
        </div>

        <div className="card p-6 md:p-8">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-200/75">Good fit</p>
          <h2 className="mt-3 text-2xl font-semibold">Who we build for</h2>
          <ul className="mt-5 grid gap-3 text-white/75 sm:grid-cols-2">
            {niches.map((niche) => (
              <li key={niche} className="rounded-xl border border-white/10 bg-black/20 px-4 py-3">{niche}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="packages" className="mt-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200/80">Packages</p>
          <h2 className="mt-4 text-4xl font-bold">Simple offers people can actually buy</h2>
          <p className="mt-4 text-lg text-white/75">
            We keep the pricing understandable and the scope tight so projects get finished.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {packages.map((pkg) => (
            <article key={pkg.name} className="card p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl font-semibold">{pkg.name}</h3>
                <span className="rounded-full bg-cyan-400/15 px-3 py-1 text-sm font-semibold text-cyan-200">{pkg.price}</span>
              </div>
              <p className="mt-4 text-white/75">{pkg.description}</p>
              <ul className="mt-5 space-y-3 text-sm text-white/70">
                {pkg.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20 grid gap-6 lg:grid-cols-[1fr,0.9fr]">
        <div className="card p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200/80">Process</p>
          <h2 className="mt-4 text-3xl font-bold">Build small. Sell clearly. Deploy fast.</h2>
          <div className="mt-6 space-y-5">
            {processSteps.map(([title, body]) => (
              <div key={title}>
                <h3 className="font-semibold text-white">{title}</h3>
                <p className="mt-1 text-white/75">{body}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="contact" className="card p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200/80">Start here</p>
          <h2 className="mt-4 text-3xl font-bold">Need a site or a relaunch?</h2>
          <p className="mt-4 text-white/75">
            Email <a className="underline decoration-white/30 underline-offset-4 hover:decoration-white/60" href="mailto:contact@siverse-labs.com">contact@siverse-labs.com</a>
          </p>
          <p className="mt-4 text-white/75">
            Best first message: what you do, what you need, whether you already have a site, and how fast you want it live.
          </p>
          <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/70">
            <p className="font-semibold text-white">Care plan path</p>
            <p className="mt-2">After launch, we can offer monthly support for edits, upkeep, and small ongoing improvements.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
