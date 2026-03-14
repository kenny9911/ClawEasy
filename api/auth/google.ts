import type { VercelRequest, VercelResponse } from '@vercel/node';

// This endpoint is no longer used — kept as a health check for auth config
export default function handler(_req: VercelRequest, res: VercelResponse) {
  const clientId = process.env.GOOGLE_CLIENT_ID ?? process.env.VITE_GOOGLE_CLIENT_ID;
  res.json({ configured: Boolean(clientId) });
}
