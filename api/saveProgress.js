import * as Sentry from "@sentry/node";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { game_progress } from "../drizzle/schema.js";

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
  try {
    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Método não permitido' });
      return;
    }

    const { phase, points } = req.body;
    if (typeof phase !== 'number' || typeof points !== 'number') {
      res.status(400).json({ error: 'Dados inválidos' });
      return;
    }

    console.log('Conectando ao banco de dados para salvar progresso');
    const sql = postgres(process.env.COCKROACH_DB_URL);
    const db = drizzle(sql);

    const insertResult = await db
      .insert(game_progress)
      .values({ phase, points })
      .returning();

    console.log('Progresso salvo:', insertResult);
    res.status(200).json({ success: true, data: insertResult });
  } catch (error) {
    console.error('Erro na API saveProgress:', error);
    Sentry.captureException(error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}