export default function handler(req, res) {
  if (req.method === 'POST') {
    // Placeholder: integrate real email provider later
    return res.status(200).json({ ok: true })
  }
  res.setHeader('Allow', ['POST'])
  res.status(405).end('Method Not Allowed')
}
