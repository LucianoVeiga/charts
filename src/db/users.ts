import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { timestamps } from "./timestamps";

export const users = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  username: varchar({ length: 255 }).notNull(),
  password: varchar({ length: 255 }).notNull(),
  ...timestamps,
});
