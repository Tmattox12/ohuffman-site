export default function Footer(){
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="footer-rule" />
          <div className="footer-name">The O‑Huffman Group, LLC.</div>
        </div>

        <div className="footer-col">
          <div className="footer-item">
            <span className="footer-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z"/><circle cx="12" cy="10" r="2.6"/></svg>
            </span>
            <div>
              <div className="footer-strong">Tucson, AZ</div>
              <div className="footer-muted">Proudly rooted. Future focused.</div>
            </div>
          </div>
        </div>

        <div className="footer-col">
          <div className="footer-item">
            <span className="footer-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 6.5 8.5 6 8.5-6"/></svg>
            </span>
            <a href="mailto:hello@ohuffmangroup.com">hello@ohuffmangroup.com</a>
          </div>
          <div className="footer-item">
            <span className="footer-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18"/></svg>
            </span>
            <a href="https://ohuffmangroup.com">ohuffmangroup.com</a>
          </div>
        </div>
      </div>

      <div className="footer-legal">© {new Date().getFullYear()} The O‑Huffman Group, LLC.</div>
    </footer>
  )
}
