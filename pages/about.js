import Header from '../components/Header'

export default function About(){
  return (
    <div className="container">
      <Header />
      <main style={{padding:'48px 24px',maxWidth:900}}>
        <h1>Our Story</h1>
        <p>The O‑Huffman Group LLC was founded by <strong>Tamara Huffman</strong>, a Tucson‑based product leader with a passion for building tools that make everyday life easier.</p>
        <p>After two decades in corporate environments, Tamara saw firsthand how many systems — job searching, workflows, digital tools — were outdated and frustrating. She created The O‑Huffman Group to build products that feel modern, intuitive, and human.</p>

        <h2 style={{marginTop:24}}>Our Values</h2>
        <ul>
          <li><strong>Clarity</strong> — Products should reduce confusion, not add to it.</li>
          <li><strong>Efficiency</strong> — Time is precious; our tools respect it.</li>
          <li><strong>Human‑Centered Design</strong> — Technology should feel supportive, not overwhelming.</li>
          <li><strong>Integrity</strong> — We build with honesty, transparency, and purpose.</li>
          <li><strong>Community</strong> — Tucson roots, global reach.</li>
        </ul>

        <h2 style={{marginTop:24}}>Founder</h2>
        <p><strong>Tamara Huffman</strong><br/>Founder & Chief Product Officer<br/>The O‑Huffman Group LLC<br/>Tucson, Arizona</p>
      </main>
    </div>
  )
}
