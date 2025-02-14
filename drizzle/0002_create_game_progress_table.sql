CREATE TABLE IF NOT EXISTS "game_progress" (
  "id" SERIAL PRIMARY KEY,
  "phase" INT NOT NULL,
  "points" INT NOT NULL,
  "created_at" TIMESTAMP DEFAULT NOW()
);