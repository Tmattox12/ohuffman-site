import Header from '../components/Header'

export default function Ventures(){
  return (
    <div className="container">
      <Header />
      <main style={{padding:'48px 24px',maxWidth:1000}}>
        <h1>Ventures</h1>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:16}}>
          <div className="card">
            <h3>AI-Powered Job Search</h3>
            <p>PRE-LAUNCH — Personalized job discovery powered by AI.</p>
          </div>
          <div className="card">
            <h3>Venture Two</h3>
            <p>Product &amp; Growth</p>
          </div>
          <div className="card">
            <h3>Venture Three</h3>
            <p>Operations &amp; Strategy</p>
          </div>
        </div>
      </main>
    </div>
  )
}
