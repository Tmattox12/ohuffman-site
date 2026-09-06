import Header from '../components/Header'

export default function About(){
  return (
    <div className="container">
      <Header />
      <main style={{padding:'48px 24px',maxWidth:900}}>
        <h1>About The O-Huffman Group, LLC</h1>
        <p>We build and invest in companies that transform markets. Our focus areas include AI-enabled talent platforms, strategic partnerships, and early-stage venture support.</p>
        <p>Founded to bring operators and founders together, we provide capital, product guidance, and go-to-market support.</p>
      </main>
    </div>
  )
}
