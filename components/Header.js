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
        <Link href="/" style={{display:'flex',alignItems:'center',gap:12}}>
          <img src="/logo.svg" alt="O-Huffman Group" className="logo-img"/>
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
