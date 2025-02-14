CREATE TABLE IF NOT EXISTS "game_progress" (
  "id" SERIAL PRIMARY KEY,
  "phase" INTEGER NOT NULL,
  "points" INTEGER NOT NULL,
  "created_at" TIMESTAMP DEFAULT NOW()
);