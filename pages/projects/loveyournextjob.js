import Header from '../../components/Header'

export default function LoveYourNextJob(){
  return (
    <div className="container">
      <Header />
      <main style={{padding:'36px 24px',maxWidth:920}}>
        <h1>LoveYourNextJob</h1>
        <p><em>LoveYourNextJob</em> is a modern job‑search app built to eliminate stale listings, automate resume tailoring, and help people apply faster.</p>

        <h2>Overview</h2>
        <p>The app uses intelligent matching to surface relevant roles, keeps listings fresh, and provides workflow tools that reduce time‑to‑apply.</p>

        <h2>Features</h2>
        <ul>
          <li>Smart matching and filtering</li>
          <li>Resume tailoring templates</li>
          <li>One‑tap apply workflows</li>
          <li>Privacy‑first design</li>
        </ul>

        <h2>Status</h2>
        <p>PRE‑LAUNCH — sign up for updates or contact us to learn more.</p>

      </main>
    </div>
  )
}
