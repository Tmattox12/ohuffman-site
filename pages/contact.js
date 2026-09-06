import Header from '../components/Header'

export default function Contact(){
  return (
    <div className="container">
      <Header />
      <main style={{padding:'48px 24px',maxWidth:680}}>
        <h1>Contact</h1>
        <p>For partnerships or press, reach out via the contact form:</p>
        <form id="contact-form" onSubmit={async (e)=>{e.preventDefault(); const form=new FormData(e.target); const res=await fetch('/api/contact',{method:'POST',body:form}); if(res.ok) alert('Thanks — message sent.'); else alert('Error sending message.')}}>
          <input name="name" placeholder="Name" required />
          <input name="email" placeholder="Email" type="email" required />
          <textarea name="message" placeholder="Message" required />
          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  )
}
