import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header(){
  const [scrolled, setScrolled] = useState(false)
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
        <nav className="nav" style={{display:'flex',gap:18}}>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/ventures">Ventures</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
