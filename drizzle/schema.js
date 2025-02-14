import { pgTable, serial, integer, timestamp } from 'drizzle-orm/pg-core';

export const gameProgress = pgTable('game_progress', {
  id: serial('id').primaryKey(),
  phase: integer('phase').notNull(),
  points: integer('points').notNull(),
  createdAt: timestamp('created_at').defaultNow()
});