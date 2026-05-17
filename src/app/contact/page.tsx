const intakeQuestions = [
  'What do you do, and who do you serve?',
  'Do you already have a website, or is this a new build?',
  'What feels broken, missing, outdated, or urgent?',
  'What do you want the site to help people do?',
  'Do you already have a domain, hosting, or repo?',
  'What timeline are you hoping for?',
]

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14 md:py-20">
      <div className="grid gap-8 lg:grid-cols-[1fr,0.9fr]">
        <section>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200/80">Contact</p>
          <h1 className="mt-4 text-5xl font-bold">Let&apos;s talk about your site</h1>
          <p className="mt-5 text-lg text-white/75">
            If you need a clean website, a relaunch, or a faster path to getting something credible online, email us. Simple is fine.
          </p>

          <div className="mt-8 card p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-200/75">Best contact</p>
            <p className="mt-3 text-2xl font-semibold text-white">
              <a href="mailto:contact@siverse-labs.com" className="underline decoration-white/30 underline-offset-4 hover:decoration-white/60">contact@siverse-labs.com</a>
            </p>
            <p className="mt-4 text-white/70">Subject line suggestion: <span className="text-white">Website inquiry — [Your business name]</span></p>
          </div>

          <div className="mt-8 card p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-200/75">Launch offer</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">15% off for good-fit early clients</h2>
            <p className="mt-4 text-white/75">
              We&apos;re offering a limited early-launch discount while we build the first public wave of SIVERSE Web Studio projects.
            </p>
          </div>
        </section>

        <section className="card p-6 md:p-8">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-200/75">What to send</p>
          <h2 className="mt-4 text-3xl font-bold">Use this quick intake</h2>
          <ul className="mt-6 space-y-4 text-white/75">
            {intakeQuestions.map((question) => (
              <li key={question}>• {question}</li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5 text-sm text-white/70">
            <p className="font-semibold text-white">Copy-ready first message</p>
            <div className="mt-3 whitespace-pre-line rounded-xl border border-white/10 bg-[#0a1120] p-4 text-white/75">{`Hi SIVERSE Web Studio,\n\nI need help with my website. I run [business name / type of work].\n\nWhat I need: [new site / refresh / landing page / help getting live]\nWhat feels broken or missing: [brief description]\nCurrent website (if any): [URL]\nTimeline: [when you want it done]\n\nThanks,\n[Your name]`}</div>
          </div>
        </section>
      </div>
    </main>
  )
}
