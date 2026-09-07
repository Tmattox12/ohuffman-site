import Header from '../components/Header'
import Footer from '../components/Footer'
import Seo from '../components/Seo'

export default function Services() {
  return (
    <div>
      <Seo
        title="Services"
        description="Product strategy, legal technology, design and UX, and technical advisory services from The O-Huffman Group, LLC."
      />
      <Header />

      <main>
        <section className="hero-bleed">
          <div className="hero-inner" style={{padding: '64px 24px'}}>
            <div className="hero-divider" />
            <h1 className="hero-title">Services</h1>
            <div className="hero-sub">Product strategy, legal-technology, and design services that move ideas to impact.</div>
          </div>
        </section>

        <section className="container" style={{maxWidth:1100,padding:'36px 24px'}}>
          <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:20}}>
            <div style={{background:'linear-gradient(180deg, rgba(18,44,70,0.6), rgba(9,30,50,0.5))',padding:20,borderRadius:12}}>
              <h3>Product Strategy</h3>
              <p style={{color:'var(--muted)'}}>Roadmaps, discovery, and go-to-market planning for early-stage and scaling ventures.</p>
            </div>

            <div style={{background:'linear-gradient(180deg, rgba(18,44,70,0.6), rgba(9,30,50,0.5))',padding:20,borderRadius:12}}>
              <h3>Legal Technology</h3>
              <p style={{color:'var(--muted)'}}>Case management, data integrations, and tools that make legal work more efficient and defensible.</p>
            </div>

            <div style={{background:'linear-gradient(180deg, rgba(18,44,70,0.6), rgba(9,30,50,0.5))',padding:20,borderRadius:12}}>
              <h3>Design & UX</h3>
              <p style={{color:'var(--muted)'}}>Human-centered design, prototyping, and usability work to build delightful, useful products.</p>
            </div>

            <div style={{background:'linear-gradient(180deg, rgba(18,44,70,0.6), rgba(9,30,50,0.5))',padding:20,borderRadius:12}}>
              <h3>Technical Advisory</h3>
              <p style={{color:'var(--muted)'}}>Architecture reviews, vendor selection, and technical roadmapping to reduce risk and accelerate delivery.</p>
            </div>
          </div>

          <div style={{marginTop:28,textAlign:'center'}}>
            <a className="cta" href="/contact">Work with us</a>
            <a className="cta secondary" href="/ventures" style={{marginLeft:12}}>Explore Ventures</a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
