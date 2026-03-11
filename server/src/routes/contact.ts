import { Router } from 'express';

export const contactRouter = Router();

contactRouter.post('/contact', (req, res) => {
  const { name, email, company, message } = req.body;
  console.log('Contact form submission:', { name, email, company, message });
  res.json({ success: true, message: 'Thank you for reaching out. We will get back to you shortly.' });
});
