import Header from '../components/Header'
import Footer from '../components/Footer'

const VENTURES = [
  {
    name: 'AI Job Website',
    category: 'Career Platform',
    logo: '/ai-job.png',
    tone: 'on-black',
    status: 'Coming Soon',
    statusKind: 'soon',
    summary: 'An AI-driven job site and matching experience currently in pre-launch. We will announce the product name at launch.',
    points: [
      'AI-assisted matching that looks past keyword overlap to what a role actually asks for',
      'Guidance through the search itself — not just another list of postings',
      'Built for people changing direction, not only those climbing a ladder',
    ],
  },
  {
    name: 'Veritas',
    category: 'Legal Financial Intelligence',
    logo: '/veritas.jpg',
    tone: 'on-white',
    status: 'Under development',
    statusKind: 'dev',
    summary: 'Powerful software that transforms financial data into clear, actionable insights for legal and professional teams.',
    points: [
      'Turns raw financial records into summaries a team can actually present',
      'Built for legal and professional teams who need defensible numbers quickly',
      'Cuts the manual spreadsheet work that consumes case-preparation hours',
    ],
  },
  {
    name: 'EmpowerMeHealth',
    category: 'Healthcare Connection App',
    logo: '/empowermehealth.png',
    tone: 'on-white',
    status: 'Under development',
    statusKind: 'dev',
    summary: 'Connecting people to the care they need with clarity, compassion, and confidence.',
    points: [
      'Helps people find and reach the right care without guesswork',
      'Plain-language guidance in place of insurance and referral jargon',
      'Designed out of lived experience navigating complex care systems',
    ],
  },
]

export default function Ventures(){
  return (
    <div>
      <Header />

      <main>
        <section className="hero-bleed page-hero">
          <div className="hero-inner">
            <div className="hero-divider" />
            <h1 className="hero-title">Ventures</h1>
            <div className="hero-sub">Three products, one thread — software that gives people clarity when the system does not.</div>
          </div>
        </section>

        <section className="ventures">
          <div className="container">
            <div className="products-head">
              <div className="products-sub">OUR PRODUCTS</div>
              <h2>Purpose-built. People-focused.</h2>
            </div>

            <div className="venture-list">
              {VENTURES.map(v => (
                <article className="venture-card" key={v.name}>
                  <div className={'product-logo-wrap ' + v.tone}>
                    <img src={v.logo} alt={v.name} className="product-logo" />
                  </div>

                  <div className="venture-body">
                    <div className="venture-head">
                      <h3>{v.name}</h3>
                      <span className={v.statusKind === 'soon' ? 'badge-soon' : 'learn disabled'}>{v.status}</span>
                    </div>
                    <div className="subtitle">{v.category}</div>
                    <p>{v.summary}</p>
                    <ul className="venture-points">
                      {v.points.map(p => <li key={p}>{p}</li>)}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="nico">
          <div className="container">
            <div className="nico-inner">
              <h2 style={{marginTop:0}}>Why these three</h2>
              <p>Every product here started with the same frustration: watching capable people get lost inside systems that were never built to be understood. A job search that hides what a role really wants. Financial records that take weeks to make sense of. A care network that expects you to already know the rules.</p>
              <p>The success of The O‑Huffman Group helps fund the future of <strong>Nico’s Place</strong> — a space built to honor his story and provide families with the clarity, care, and resources they deserve.</p>
              <p style={{marginTop:12}}>
                <a className="cta secondary" href="/contact">Get in touch</a>
                <a className="cta" href="https://nicosplace.org" target="_blank" rel="noopener noreferrer" style={{marginLeft:12}}>Learn about Nico’s Place</a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
