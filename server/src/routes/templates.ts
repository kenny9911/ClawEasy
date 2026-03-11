import { Router } from 'express';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const templatesRouter = Router();

templatesRouter.get('/templates', (_req, res) => {
  const data = JSON.parse(readFileSync(join(__dirname, '../data/templates.json'), 'utf-8'));
  res.json(data);
});
