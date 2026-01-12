import { integer, pgTable, text, varchar } from "drizzle-orm/pg-core";
import { timestamps } from "./timestamps";

export const posts = pgTable("posts", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: integer().notNull(),
  description: text(),
  price: integer().notNull(),
  image: text().notNull(),
  owner: integer().notNull(),
  status: varchar({ length: 255 }).notNull(),
  product: integer().notNull(),
  category: integer().notNull(),
  ...timestamps,
});