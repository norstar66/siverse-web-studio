const examples = [
  {
    title: 'Restaurant starter site',
    blurb: 'A clean one-page site with menu highlights, location, hours, and a strong call to order or visit.',
  },
  {
    title: 'Local contractor relaunch',
    blurb: 'A trust-focused site refresh with clearer services, mobile cleanup, and easier contact flow.',
  },
  {
    title: 'Artist or freelancer profile site',
    blurb: 'A lightweight site that makes the work legible, shareable, and easier to book or commission.',
  },
]

export default function PortfolioPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14 md:py-20">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200/80">Portfolio direction</p>
        <h1 className="mt-4 text-5xl font-bold">What we&apos;re aiming to ship more of</h1>
        <p className="mt-5 text-lg text-white/75">
          This studio is new, so the first public examples are being assembled now. For the moment, here&apos;s the kind of work we&apos;re optimizing for.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {examples.map((example) => (
          <article key={example.title} className="card p-6">
            <h2 className="text-2xl font-semibold text-white">{example.title}</h2>
            <p className="mt-4 text-white/75">{example.blurb}</p>
          </article>
        ))}
      </div>

      <section className="mt-14 card p-6 md:p-8">
        <h2 className="text-3xl font-bold">Need a proof-of-fit conversation?</h2>
        <p className="mt-4 max-w-3xl text-white/75">
          If you&apos;re not sure whether your business fits, that&apos;s okay. The best projects are usually practical: clear offer, clear audience, and a site that helps people take the next step.
        </p>
      </section>
    </main>
  )
}
