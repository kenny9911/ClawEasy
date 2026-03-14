import { Router } from 'express';
import { OAuth2Client } from 'google-auth-library';

export const authRouter = Router();

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID ?? process.env.VITE_GOOGLE_CLIENT_ID;
const googleClient = GOOGLE_CLIENT_ID ? new OAuth2Client(GOOGLE_CLIENT_ID) : null;

authRouter.post('/auth/google', async (req, res) => {
  const credential = typeof req.body?.credential === 'string' ? req.body.credential : '';

  if (!credential) {
    res.status(400).json({ error: 'Missing Google credential' });
    return;
  }

  if (!googleClient || !GOOGLE_CLIENT_ID) {
    res.status(500).json({ error: 'Google auth is not configured on the server' });
    return;
  }

  try {
    const ticket = await googleClient.verifyIdToken({
      idToken: credential,
      audience: GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();

    if (!payload?.email || !payload.email_verified) {
      res.status(401).json({ error: 'Google account email is not verified' });
      return;
    }

    res.json({
      user: {
        name: payload.name ?? payload.email,
        email: payload.email,
        picture: payload.picture ?? '',
      },
    });
  } catch (error) {
    console.error('Failed to verify Google credential:', error);
    res.status(401).json({ error: 'Invalid Google credential' });
  }
});
