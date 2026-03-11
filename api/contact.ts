import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  const { name, email, company, message } = req.body;
  console.log('Contact form submission:', { name, email, company, message });
  res.json({ success: true, message: 'Thank you for reaching out. We will get back to you shortly.' });
}
