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
          <svg className="brand-mark" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
            <g fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round">
              <path d="M35.82 10.33 A22 22 0 0 1 52.10 40.95"/>
              <path d="M48.85 46.14 A22 22 0 0 1 14.20 44.93"/>
              <path d="M11.33 39.52 A22 22 0 0 1 29.70 10.12"/>
            </g>
            <circle cx="32" cy="32" r="5.5" fill="currentColor"/>
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
