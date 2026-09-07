import Header from '../components/Header'
import Footer from '../components/Footer'
import Seo from '../components/Seo'

const VALUES = [
  { title: 'Clarity', copy: 'Products should reduce confusion, not add to it.' },
  { title: 'Efficiency', copy: 'Time is precious; our tools respect it.' },
  { title: 'Human‑Centered Design', copy: 'Technology should feel supportive, not overwhelming.' },
  { title: 'Integrity', copy: 'We build with honesty, transparency, and purpose.' },
  { title: 'Community', copy: 'Tucson roots, global reach.' },
]

export default function About(){
  return (
    <div>
      <Seo
        title="About"
        description="The O-Huffman Group, LLC was founded by Tamara Huffman, a Tucson-based product leader building software that makes everyday systems clearer and more human."
      />
      <Header />

      <main>
        <section className="hero-bleed page-hero">
          <div className="hero-inner">
            <div className="hero-divider" />
            <h1 className="hero-title">Our Story</h1>
            <div className="hero-sub">Built in Tucson, for people the systems keep leaving behind.</div>
          </div>
        </section>

        <section className="about">
          <div className="container about-inner">
            <div className="about-panel">
              <p className="about-lead">The O‑Huffman Group, LLC was founded by <strong>Tamara Huffman</strong>, a Tucson‑based product leader with a passion for building tools that make everyday life easier.</p>
              <p>After two decades in corporate environments, Tamara saw firsthand how many systems — job searching, workflows, digital tools — were outdated and frustrating. She created The O‑Huffman Group to build products that feel modern, intuitive, and human.</p>
            </div>

            <aside className="about-card">
              <div className="founder-photo">
                <img src="/tamara.jpg" alt="Tamara Huffman" />
              </div>
              <div className="eyebrow">FOUNDER &amp; CHIEF PRODUCT OFFICER</div>
              <h2>Tamara Huffman</h2>
              <div className="founder-place">Tucson, Arizona</div>
              <a className="founder-cta" href="/contact">GET IN TOUCH</a>
            </aside>
          </div>

          <div className="container about-values">
            <div className="products-head">
              <div className="products-sub">WHAT WE STAND FOR</div>
              <h2>Our Values</h2>
            </div>

            <div className="value-grid">
              {VALUES.map(v => (
                <div className="value-tile" key={v.title}>
                  <div className="value-title">{v.title}</div>
                  <div className="value-copy">{v.copy}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
