import * as Sentry from '@sentry/node';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { gameProgress } from '../drizzle/schema.js';

Sentry.init({
  dsn: process.env.VITE_PUBLIC_SENTRY_DSN,
  environment: process.env.VITE_PUBLIC_APP_ENV,
  initialScope: {
    tags: {
      type: 'backend',
      projectId: process.env.VITE_PUBLIC_APP_ID
    }
  }
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Método não permitido' });
    return;
  }
  
  try {
    const { phase, points } = req.body;
    if (typeof phase !== 'number' || typeof points !== 'number') {
      res.status(400).json({ error: 'Dados inválidos' });
      return;
    }
    
    const client = postgres(process.env.COCKROACH_DB_URL);
    const db = drizzle(client);
    
    await db.insert(gameProgress).values({ phase, points });
    
    res.status(200).json({ sucesso: true });
  } catch (error) {
    Sentry.captureException(error);
    console.error('Erro ao salvar progresso do jogo:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}