export default function Home() {
  return (
    <div className="container">
      <header className="site-header">
        <div className="logo">
          <img src="/logo.svg" alt="O-Huffman Group" className="logo-img" />
        </div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#ventures">Ventures</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>The O-Huffman Group, LLC</h1>
          <p>Strategy, partnerships, and ventures built for the future.</p>
          <a className="cta" href="#contact">Get in touch</a>
        </section>

        <section id="ventures" className="ventures">
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
            <div className="card">
              <h3>Venture Four</h3>
              <p>Partnerships</p>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <h2>About</h2>
          <p>We build and invest in companies that transform markets.</p>
        </section>

        <section id="contact" className="contact">
          <h2>Contact</h2>
          <form id="contact-form" onSubmit={async (e) => {
            e.preventDefault();
            const form = new FormData(e.target);
            const res = await fetch('/api/contact', { method: 'POST', body: form });
            if (res.ok) alert('Thanks — message sent.');
            else alert('Error sending message.');
          }}>
            <input name="name" placeholder="Name" required />
            <input name="email" placeholder="Email" type="email" required />
            <textarea name="message" placeholder="Message" required />
            <button type="submit">Send</button>
          </form>
        </section>
      </main>

      <footer className="footer">© {new Date().getFullYear()} The O-Huffman Group, LLC</footer>

      <style jsx>{`
        .container { font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; color:#0b2545; }
        .site-header{display:flex;justify-content:space-between;align-items:center;padding:16px 24px;background:#fff}
        .hero{padding:72px 24px;text-align:center;background:linear-gradient(180deg,#e6f7fb,white)}
        .cta{display:inline-block;margin-top:16px;padding:10px 20px;background:#0b2545;color:#fff;border-radius:6px}
        .cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:16px}
        .card{padding:16px;background:#fff;border-radius:8px;box-shadow:0 1px 4px rgba(11,37,69,0.06)}
        .contact form{display:flex;flex-direction:column;gap:8px;max-width:480px}
        input,textarea{padding:8px;border:1px solid #ddd;border-radius:6px}
        button{padding:10px 14px;background:#0b2545;color:#fff;border-radius:6px;border:0}
        footer{padding:24px;text-align:center;color:#6b7280}
      `}</style>
    </div>
  )
}
