import Header from '../components/Header'

export default function Home() {
  return (
    <div className="container">
      <Header />
      <main>
        <section className="hero" style={{padding:'72px 24px',textAlign:'center',background:'linear-gradient(180deg,#e6f7fb,white)'}}>
          <h1>The O‑Huffman Group LLC</h1>
          <p style={{fontStyle:'italic',maxWidth:760,margin:'8px auto'}}>Building intelligent products that simplify real‑world problems.</p>
          <p style={{marginTop:6}}>Tucson‑rooted. Founder‑led. Human‑centered.</p>
          <div style={{marginTop:18,display:'flex',gap:12,justifyContent:'center'}}>
            <a className="cta" href="/ventures">Explore Our Work</a>
            <a className="cta secondary" href="/contact">Contact Us</a>
          </div>
        </section>

        <section className="mission" style={{padding:'36px 24px',maxWidth:920}}>
          <h2>Mission Statement</h2>
          <p>We build digital products that make life easier, clearer, and more efficient. Our focus is practical innovation — tools that solve real problems for real people.</p>
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

        <section className="featured" style={{padding:'24px',maxWidth:920}}>
          <h2>Featured Project — LoveYourNextJob</h2>
          <p>A modern job‑search app built to eliminate stale listings, automate resume tailoring, and help people apply faster.</p>
          <div style={{display:'flex',gap:12,marginTop:12}}>
            <a className="cta" href="/projects/loveyournextjob">View Project</a>
            <a className="cta secondary" href="#">Download on the App Store</a>
          </div>
        </section>

        <section id="ventures" className="ventures" style={{padding:'36px 24px'}}>
          <h2>Ventures</h2>
          <div className="cards">
            <div className="card">
              <h3>AI-Powered Job Search</h3>
              <p>PRE-LAUNCH</p>
            </div>
            <div className="card">
              <h3>Venture Two</h3>
              <p>Product &amp; Growth</p>
            </div>
            <div className="card">
              <h3>Venture Three</h3>
              <p>Operations &amp; Strategy</p>
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
        .hero{padding:72px 24px;text-align:center;background:linear-gradient(180deg,#e6f7fb,white)}
        .cta{display:inline-block;margin-top:16px;padding:10px 20px;background:#0b2545;color:#fff;border-radius:6px}
        .cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:16px}
        .card{padding:16px;background:#fff;border-radius:8px;box-shadow:0 1px 4px rgba(11,37,69,0.06)}
        footer{padding:24px;text-align:center;color:#6b7280}
      `}</style>
    </div>
  )
}
