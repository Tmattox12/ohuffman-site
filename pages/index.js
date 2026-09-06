import Header from '../components/Header'

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
            <div style={{textAlign:'center',maxWidth:720,margin:'18px auto 28px'}}>
              <div className="products-sub">OUR PRODUCTS</div>
              <h2 style={{margin:'8px 0 6px'}}>Purpose-built. People-focused.</h2>
            </div>

            <div className="product-grid">
              <div className="product-card">
                <img src="/loveyournextjob.svg" alt="LoveYourNextJob" style={{height:44,marginBottom:12}} />
                <h3>LoveYourNextJob.com</h3>
                <div style={{color:'var(--muted)',fontSize:13,fontWeight:700,marginBottom:8}}>Career Platform (Pre-Launch)</div>
                <p>A next-generation career platform designed to help people discover meaningful work and build futures they love.</p>
                <div style={{marginTop:12}}><span style={{display:'inline-block',padding:'8px 12px',borderRadius:18,background:'#071828',color:'#9fe5dd',fontWeight:700}}>Coming Soon</span></div>
              </div>

              <div className="product-card">
                <img src="/verital.svg" alt="Verital" style={{height:44,marginBottom:12}} />
                <h3>Verital</h3>
                <div style={{color:'var(--muted)',fontSize:13,fontWeight:700,marginBottom:8}}>Legal Financial Intelligence</div>
                <p>Powerful software that transforms financial data into clear, actionable insights for legal and professional teams.</p>
                <a className="learn" href="#">Learn More</a>
              </div>

              <div className="product-card">
                <img src="/empowermehealth.svg" alt="EmpowerMeHealth" style={{height:44,marginBottom:12}} />
                <h3>EmpowerMeHealth</h3>
                <div style={{color:'var(--muted)',fontSize:13,fontWeight:700,marginBottom:8}}>Healthcare Connection App</div>
                <p>Connecting people to the care they need with clarity, compassion, and confidence.</p>
                <a className="learn" href="#">Learn More</a>
              </div>
            </div>
          </div>
        </section>

        <section className="founder">
          <div className="container" style={{display:'flex',alignItems:'center',gap:24}}>
            <div className="founder-photo">
              <img src="/tamara.jpg" alt="Tamara O-Huffman" />
            </div>

            <div className="founder-content" style={{flex:1}}>
              <div style={{color:'var(--muted)',fontSize:12,fontWeight:700}}>FOUNDER & PRODUCT STRATEGIST</div>
              <h3 style={{margin:'6px 0 6px'}}>Tamara O‑Huffman</h3>
              <div style={{color:'var(--muted)',marginBottom:12}}>Tucson, Arizona</div>
              <p style={{color:'var(--muted)'}}>With 25+ years of experience in product strategy, legal technology, and operational leadership, Tamara is passionate about building software that solves real problems and improves lives.</p>
              <div style={{marginTop:12}}><a className="founder-cta" href="/about">Meet Tamara</a></div>
            </div>

            <div style={{width:300}}>
              <ul style={{listStyle:'none',padding:0,margin:0,color:'var(--muted)'}}>
                <li style={{display:'flex',gap:12,alignItems:'flex-start',marginBottom:14}}>
                  <div style={{width:44,height:44,borderRadius:44,background:'rgba(255,255,255,0.03)',display:'inline-flex',alignItems:'center',justifyContent:'center',fontSize:18}}>✓</div>
                  <div>
                    <div style={{color:'#fff',fontWeight:700}}>Strategic Vision</div>
                    <div style={{fontSize:13}}>Turning ideas into scalable, impactful products.</div>
                  </div>
                </li>

                <li style={{display:'flex',gap:12,alignItems:'flex-start',marginBottom:14}}>
                  <div style={{width:44,height:44,borderRadius:44,background:'rgba(255,255,255,0.03)',display:'inline-flex',alignItems:'center',justifyContent:'center',fontSize:18}}>♥</div>
                  <div>
                    <div style={{color:'#fff',fontWeight:700}}>People First</div>
                    <div style={{fontSize:13}}>Empowering teams and customers to thrive.</div>
                  </div>
                </li>

                <li style={{display:'flex',gap:12,alignItems:'flex-start'}}>
                  <div style={{width:44,height:44,borderRadius:44,background:'rgba(255,255,255,0.03)',display:'inline-flex',alignItems:'center',justifyContent:'center',fontSize:18}}>★</div>
                  <div>
                    <div style={{color:'#fff',fontWeight:700}}>Proven Experience</div>
                    <div style={{fontSize:13}}>Decades of leadership across industries and disciplines.</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

      </main>

      <footer className="footer">© {new Date().getFullYear()} The O‑Huffman Group LLC — Tucson, Arizona • hello@ohuffmangroup.com</footer>
    </div>
  )
}
