import Link from 'next/link'

export default function Header(){
  return (
    <header className="site-header">
      <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <Link href="/"><a style={{display:'flex',alignItems:'center',gap:12}}>
          <img src="/logo.svg" alt="O-Huffman Group" className="logo-img"/>
        </a></Link>
        <nav className="nav">
          <Link href="/about"><a>About</a></Link>
          <Link href="/ventures"><a style={{marginLeft:16}}>Ventures</a></Link>
          <Link href="/contact"><a style={{marginLeft:16}}>Contact</a></Link>
        </nav>
      </div>
    </header>
  )
}
