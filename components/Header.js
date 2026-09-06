import Link from 'next/link'

export default function Header(){
  return (
    <header className="site-header">
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
