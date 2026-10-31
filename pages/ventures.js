import Header from '../components/Header'
import Footer from '../components/Footer'
import Seo from '../components/Seo'
import { LYNJ_SITE_URL, LYNJ_APP_STORE_URL } from '../lib/links'

const VENTURES = [
  {
    name: 'LoveYourNextJob',
    category: 'AI Career Platform',
    logo: '/ai-job.png',
    tone: 'on-black',
    status: 'Live',
    statusKind: 'live',
    links: [
      { label: 'Visit loveyournextjob.com', href: LYNJ_SITE_URL },
      { label: 'Download on the App Store', href: LYNJ_APP_STORE_URL },
    ].filter(l => l.href),
    summary: 'An AI career platform for the ambitious generation. Real jobs, real control, real impact.',
    points: [
      'Verified openings pulled directly from company career pages',
      'A résumé and cover letter tailored to each job you pursue',
      'Applications are prepared for you and sent only after you approve them',
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
      <Seo
        title="Ventures"
        description="Three products from The O-Huffman Group: the LoveYourNextJob AI career platform, Veritas legal financial intelligence, and the EmpowerMeHealth care connection app."
      />
      <Header />

      <main>
        <section className="hero-bleed page-hero">
          <div className="hero-inner">
            <div className="hero-divider" />
            <h1 className="hero-title">Ventures</h1>
            <div className="hero-sub">Three products with one goal: software that gives people clarity when the system does not.</div>
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
                    {v.links && v.links.length > 0 && (
                      <div className="venture-links">
                        {v.links.map(l => <a className="learn" key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>)}
                      </div>
                    )}
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
              <p>The success of The O‑Huffman Group helps fund the future of <strong>Nico’s Place</strong>, a space built to honor his story and provide families with the clarity, care, and resources they deserve.</p>
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
