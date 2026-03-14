import express from 'express';
import cors from 'cors';
import { healthRouter } from './routes/health.js';
import { templatesRouter } from './routes/templates.js';
import { plansRouter } from './routes/plans.js';
import { contactRouter } from './routes/contact.js';
import { authRouter } from './routes/auth.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api', healthRouter);
app.use('/api', templatesRouter);
app.use('/api', plansRouter);
app.use('/api', contactRouter);
app.use('/api', authRouter);

app.listen(PORT, () => {
  console.log(`ClawEasy server running on http://localhost:${PORT}`);
});
