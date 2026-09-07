import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Header />

      <main>
        <section className="hero-bleed">
          <img src="/tucson-skyline.svg" alt="Tucson skyline" className="hero-bg" />
          <div className="hero-inner">
            <div className="hero-divider" />
            <h1 className="hero-title">Building products.<br/>Empowering people.</h1>
            <div className="hero-sub">Software solutions that drive better decisions, healthier lives, and stronger futures.</div>
            <div className="hero-ctas">
              <a className="cta" href="/ventures">Explore our products</a>
              <a className="cta secondary" href="/contact">Contact</a>
            </div>
          </div>
        </section>

        <section className="products">
          <div className="container">
            <div className="products-head">
              <div className="products-sub">OUR PRODUCTS</div>
              <h2>Purpose-built. People-focused.</h2>
            </div>

            <div className="product-grid">
              <div className="product-card">
                <div className="product-logo-wrap on-black">
                  <img src="/ai-job.png" alt="AI Job Website" className="product-logo" />
                </div>
                <div className="product-body">
                  <h3>AI Job Website</h3>
                  <div className="subtitle">Career Platform (Pre-Launch)</div>
                  <p>An AI-driven job site and matching experience currently in pre-launch. We'll announce the product name at launch.</p>
                  <div className="status"><span className="badge-soon">Coming Soon</span></div>
                </div>
              </div>

              <div className="product-card">
                <div className="product-logo-wrap on-white">
                  <img src="/veritas.jpg" alt="Veritas" className="product-logo" />
                </div>
                <div className="product-body">
                  <h3>Veritas</h3>
                  <div className="subtitle">Legal Financial Intelligence</div>
                  <p>Powerful software that transforms financial data into clear, actionable insights for legal and professional teams.</p>
                  <div className="status"><span className="learn disabled">Under development</span></div>
                </div>
              </div>

              <div className="product-card">
                <div className="product-logo-wrap on-white">
                  <img src="/empowermehealth.png" alt="EmpowerMeHealth" className="product-logo" />
                </div>
                <div className="product-body">
                  <h3>EmpowerMeHealth</h3>
                  <div className="subtitle">Healthcare Connection App</div>
                  <p>Connecting people to the care they need with clarity, compassion, and confidence.</p>
                  <div className="status"><span className="learn disabled">Under development</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mission-bridge">
          <div className="container" style={{maxWidth:900, margin:'0 auto 18px', textAlign:'center'}}>
            <p style={{margin:0, color:'#9fded0', fontWeight:700}}>From product to purpose — our products fund Nico’s Place. <a href="https://nicosplace.org" target="_blank" rel="noopener noreferrer" style={{color:'var(--accent)'}}>Learn how Nico’s Place helps families →</a></p>
          </div>
        </section>

        <section className="nico">
          <div className="container">
            <div className="nico-inner">
              <h2 style={{marginTop:0}}>Nico’s Place — The Heart Behind Our Work</h2>
              <p>Nico’s journey taught me what clarity, support, and compassion really mean. When systems failed us, I learned firsthand how overwhelming life can feel when you’re navigating complex challenges without the right tools. Our work has a purpose beyond the product.</p>
              <p>The success of The O‑Huffman Group helps fund the future of <strong>Nico’s Place</strong> — a space built to honor his story and provide families with the clarity, care, and resources they deserve.</p>
              <p><em>Nico inspired the mission. Our products make it possible.</em></p>
              <p style={{marginTop:12}}><a className="cta secondary" href="https://nicosplace.org" target="_blank" rel="noopener noreferrer">Learn about Nico’s Place</a></p>
            </div>
          </div>
        </section>

        <section className="founder">
          <div className="container founder-inner">
            <div className="founder-photo">
              <img src="/tamara.jpg" alt="Tamara Huffman" />
            </div>

            <div className="founder-content">
              <div className="eyebrow">FOUNDER &amp; PRODUCT STRATEGIST</div>
              <h3>Tamara Huffman</h3>
              <div className="founder-place">Tucson, Arizona</div>
              <p>With 25+ years of experience in product strategy, legal technology, and operational leadership, Tamara is passionate about building software that solves real problems and improves lives.</p>
              <a className="founder-cta" href="/about">MEET TAMARA</a>
            </div>

            <ul className="values">
              <li>
                <span className="value-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.5.4.8 1 .8 1.6h5.4c0-.6.3-1.2.8-1.6A6 6 0 0 0 12 3Z"/></svg>
                </span>
                <div>
                  <div className="value-title">Strategic Vision</div>
                  <div className="value-copy">Turning ideas into scalable, impactful products.</div>
                </div>
              </li>

              <li>
                <span className="value-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="3.2"/><path d="M5.5 19a6.5 6.5 0 0 1 13 0"/></svg>
                </span>
                <div>
                  <div className="value-title">People First</div>
                  <div className="value-copy">Empowering teams and customers to thrive.</div>
                </div>
              </li>

              <li>
                <span className="value-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 19h14"/><path d="M7.5 19v-6M12 19V7M16.5 19v-9"/></svg>
                </span>
                <div>
                  <div className="value-title">Proven Experience</div>
                  <div className="value-copy">Decades of leadership across industries and disciplines.</div>
                </div>
              </li>
            </ul>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
