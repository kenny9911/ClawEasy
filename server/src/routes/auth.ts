import { Router } from 'express';

export const authRouter = Router();

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID ?? process.env.VITE_GOOGLE_CLIENT_ID ?? '';
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET ?? process.env.VITE_GOOGLE_CLIENT_SECRET ?? '';

// OAuth 2.0 callback — exchanges authorization code for user info
authRouter.get('/auth/google/callback', async (req, res) => {
  const code = typeof req.query.code === 'string' ? req.query.code : '';
  const error = typeof req.query.error === 'string' ? req.query.error : '';

  if (error) {
    console.error('Google OAuth error:', error);
    res.redirect('/?auth_error=' + encodeURIComponent(error));
    return;
  }

  if (!code) {
    res.redirect('/?auth_error=missing_code');
    return;
  }

  if (!CLIENT_ID || !CLIENT_SECRET) {
    console.error('Missing GOOGLE_CLIENT_ID or GOOGLE_CLIENT_SECRET env vars');
    res.redirect('/?auth_error=server_config');
    return;
  }

  // Build redirect URI matching what the client sent to Google
  const proto = req.headers['x-forwarded-proto'] || req.protocol;
  const host = req.headers['x-forwarded-host'] || req.headers.host || '';
  const origin = `${proto}://${host}`;
  const redirectUri = `${origin}/api/auth/google/callback`;

  try {
    // Exchange authorization code for tokens
    const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        code,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        redirect_uri: redirectUri,
        grant_type: 'authorization_code',
      }),
    });

    if (!tokenRes.ok) {
      const errBody = await tokenRes.text();
      console.error('Token exchange failed:', tokenRes.status, errBody);
      res.redirect('/?auth_error=token_exchange');
      return;
    }

    const tokens = (await tokenRes.json()) as { access_token: string };

    // Fetch user info
    const userInfoRes = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: { Authorization: `Bearer ${tokens.access_token}` },
    });

    if (!userInfoRes.ok) {
      console.error('Failed to fetch user info:', userInfoRes.status);
      res.redirect('/?auth_error=userinfo');
      return;
    }

    const profile = (await userInfoRes.json()) as {
      name?: string;
      email?: string;
      picture?: string;
    };

    if (!profile.email) {
      res.redirect('/?auth_error=no_email');
      return;
    }

    const user = {
      name: profile.name ?? profile.email,
      email: profile.email,
      picture: profile.picture ?? '',
    };

    // Redirect back to the frontend with user data
    // In local dev, Vite runs on a different port — redirect to the Vite origin
    const frontendOrigin = process.env.NODE_ENV === 'production' ? origin : 'http://localhost:5173';
    const userParam = encodeURIComponent(JSON.stringify(user));
    res.redirect(`${frontendOrigin}/?google_user=${userParam}`);
  } catch (err) {
    console.error('OAuth callback error:', err);
    res.redirect('/?auth_error=server_error');
  }
});
