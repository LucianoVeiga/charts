import { sql } from 'drizzle-orm';
import { timestamp } from 'drizzle-orm/pg-core';

export const timestamps = {
  created: timestamp("created").default(sql`now()`).notNull(),
  updated: timestamp("updated").default(sql`now()`).notNull(),
  deleted: timestamp("updated"),
};