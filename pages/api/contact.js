const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ ok: false, error: 'Method not allowed' })
  }

  const { name = '', email = '', message = '', company = '' } = req.body || {}

  // honeypot: real people leave this hidden field empty
  if (company) return res.status(200).json({ ok: true })

  if (!name.trim() || !message.trim()) {
    return res.status(400).json({ ok: false, error: 'Please fill in your name and a message.' })
  }
  if (!EMAIL_RE.test(email.trim())) {
    return res.status(400).json({ ok: false, error: 'Please enter a valid email address.' })
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO
  const from = process.env.CONTACT_FROM

  // No mail provider wired up yet — say so instead of reporting a false success.
  if (!apiKey || !to || !from) {
    console.warn('[contact] submission received but no mail provider configured:', {
      name: name.trim(),
      email: email.trim(),
    })
    return res.status(503).json({
      ok: false,
      error: 'The contact form is not connected yet. Please email us directly.',
    })
  }

  try {
    const send = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: email.trim(),
        subject: `Website contact — ${name.trim()}`,
        text: `From: ${name.trim()} <${email.trim()}>\n\n${message.trim()}`,
      }),
    })

    if (!send.ok) {
      const detail = await send.text()
      console.error('[contact] provider rejected the message:', send.status, detail)
      return res.status(502).json({ ok: false, error: 'We could not send that just now. Please email us directly.' })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('[contact] send failed:', err)
    return res.status(502).json({ ok: false, error: 'We could not send that just now. Please email us directly.' })
  }
}
