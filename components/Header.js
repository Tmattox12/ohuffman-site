import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header(){
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(()=>{
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  },[])

  return (
    <header className={"site-header" + (scrolled ? ' scrolled' : '')}>
      <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <Link href="/" className="brand-link" aria-label="The O‑Huffman Group, LLC — home">
          <svg className="brand-mark" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
            <circle cx="50" cy="50" r="47.5" fill="#0b1739" stroke="#ffffff" strokeWidth="5"/>
            <g transform="translate(50 50) scale(0.9) translate(-50 -50)">
              <circle cx="50" cy="50" r="38" fill="none" stroke="#1fbdd1" strokeWidth="5"/>
              <circle cx="50" cy="50" r="32.4" fill="none" stroke="#cf9b26" strokeWidth="1.3"/>
              <line x1="25" y1="52.6" x2="75" y2="52.6" stroke="#cf9b26" strokeWidth="1.9"/>
              <text
                x="50" y="62" textAnchor="middle"
                fontFamily="Archivo, 'Segoe UI', Helvetica, Arial, sans-serif"
                fontSize="32" fontWeight="800" fill="#ffffff" letterSpacing="-0.5"
              >OHG</text>
            </g>
          </svg>
          <span className="brand-type">
            <span className="brand-name">The O‑Huffman Group, LLC</span>
            <span className="brand-sub">Tucson, Arizona</span>
          </span>
        </Link>

        <button
          aria-label="Toggle menu"
          className="menu-toggle"
          onClick={() => setOpen(o => !o)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 7h16M4 12h16M4 17h16" stroke="#dbeafe" strokeWidth="1.6" strokeLinecap="round"/></svg>
        </button>

        <nav className={"nav" + (open ? ' open' : '')}>
          <Link href="/about">About</Link>
          <Link href="/ventures">Ventures</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
