import Header from '../components/Header'

export default function Home() {
  return (
    <div className="container">
      <Header />
      <main>
        <section className="hero-bleed">
          <img src="/tucson-skyline.svg" alt="Tucson skyline" className="hero-bg" />
          <div className="hero-inner">
            <div className="hero-divider" />
            <h1 className="hero-title">The O‑Huffman Group LLC</h1>
            <div className="hero-meta">Founder · Product Strategist · Tucson, AZ</div>
            <div className="hero-sub">Building intelligent products that simplify real‑world problems.</div>
            <div className="hero-ctas">
              <a className="cta" href="/ventures">Explore Our Work</a>
              <a className="cta secondary" href="/contact">Contact Us</a>
            </div>
          </div>
        </section>

        <section className="what-we-do" style={{padding:'24px',maxWidth:920}}>
          <h2>What We Do</h2>
          <div style={{display:'grid',gridTemplateColumns:'1fr',gap:12}}>
            <div><strong>iOS App Development</strong><br/>From concept to App Store launch — UX, compliance, product strategy, and user‑centered design.</div>
            <div><strong>AI‑Driven Product Design</strong><br/>Automation, intelligent workflows, and smart matching systems.</div>
            <div><strong>Launch Strategy & Positioning</strong><br/>Product Hunt, App Store, social media, and multi‑platform launch orchestration.</div>
            <div><strong>Branding & Messaging</strong><br/>Clean, professional identity systems with a Tucson aesthetic.</div>
            <div><strong>Founder Advisory</strong><br/>Helping new founders build, launch, and scale their first product.</div>
          </div>
        </section>

        <section id="ventures" className="ventures" style={{padding:'36px 24px'}}>
          <h2>Ventures</h2>
          <div className="cards">
            <div className="card">
              <img src="/loveyournextjob.svg" alt="Career Platform" style={{height:36,marginBottom:12}} />
              <h3>Career Platform</h3>
              <p>A purpose-built career product focused on job matching and application automation. We're preparing this offering for a future launch.</p>
              <div style={{marginTop:12}}><span style={{display:'inline-block',padding:'6px 10px',borderRadius:20,background:'#111827',color:'#fca5a5',fontWeight:700}}>Coming Soon</span></div>
            </div>
              <div className="card">
                <img src="/verital.svg" alt="Verital" style={{height:36,marginBottom:12}} />
                <h3>Verital</h3>
                <p>Legal Financial Intelligence<br/>Powerful software that transforms financial data into clear, actionable insights for legal and professional teams.</p>
                <a className="learn" href="#">Learn More</a>
              </div>
              <div className="card">
                <h3>Other Products</h3>
                <p>We build a portfolio of purpose‑driven software — product strategy, design, and growth support for founders and teams.</p>
                <a className="learn" href="/ventures">Explore</a>
              </div>
          </div>
        </section>

        <section id="about" className="about" style={{padding:'24px'}}>
          <h2>About</h2>
          <p>We build and invest in companies that transform markets.</p>
        </section>
      </main>

      <footer className="footer">© {new Date().getFullYear()} The O‑Huffman Group LLC — Tucson, Arizona • info@ohuffmangroup.com</footer>

      <style jsx>{`
        .container { font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; color:#0b2545; }
        .cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:16px}
        .card{padding:16px;background:#fff;border-radius:8px;box-shadow:0 1px 4px rgba(11,37,69,0.06)}
        footer{padding:24px;text-align:center;color:#6b7280}
      `}</style>
    </div>
  )
}
