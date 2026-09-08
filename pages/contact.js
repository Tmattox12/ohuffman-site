import Header from '../components/Header'
import Footer from '../components/Footer'
import Seo from '../components/Seo'

const EMAIL = 'hello@o-huffmangroup.com'
const LINKEDIN = 'https://www.linkedin.com/company/143682019/'

export default function Contact(){
  return (
    <div>
      <Seo
        title="Contact"
        description="Get in touch with The O-Huffman Group, LLC by email or on LinkedIn. Based in Tucson, Arizona."
      />
      <Header />

      <main>
        <section className="hero-bleed page-hero">
          <div className="hero-inner">
            <div className="hero-divider" />
            <h1 className="hero-title">Contact</h1>
            <div className="hero-sub">Partnerships, press, or just a good question — we read every message.</div>
          </div>
        </section>

        <section className="contact">
          <div className="container contact-inner">
            <div className="contact-panel">
              <h2>Let’s talk</h2>
              <p className="contact-lead">The quickest way to reach us is email. We are also on LinkedIn.</p>

              <div className="contact-links">
                <a className="contact-link" href={`mailto:${EMAIL}`}>
                  <span className="contact-link-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 6.5 8.5 6 8.5-6"/></svg>
                  </span>
                  <span>
                    <span className="contact-link-label">Email us</span>
                    <span className="contact-link-value">{EMAIL}</span>
                  </span>
                </a>

                <a className="contact-link" href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                  <span className="contact-link-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.76-1.95C21.6 8.75 23 10.9 23 14.3V21h-4v-5.9c0-1.4-.03-3.2-2-3.2s-2.3 1.52-2.3 3.1V21h-4V9Z"/></svg>
                  </span>
                  <span>
                    <span className="contact-link-label">Connect on LinkedIn</span>
                    <span className="contact-link-value">The O‑Huffman Group, LLC</span>
                  </span>
                </a>
              </div>

              <p className="contact-note">Based in Tucson, Arizona. Curious what we are building first? Take a look at our <a href="/ventures">ventures</a>.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
