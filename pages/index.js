import Header from '../components/Header'

export default function Home() {
  return (
    <div className="container">
      <Header />
      <main>
        <section className="hero">
          <h1>The O-Huffman Group, LLC</h1>
          <p>Strategy, partnerships, and ventures built for the future.</p>
          <a className="cta" href="/contact">Get in touch</a>
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

      <footer className="footer">© {new Date().getFullYear()} The O-Huffman Group, LLC</footer>

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
