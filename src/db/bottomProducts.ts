import { integer, pgTable, smallint, varchar } from "drizzle-orm/pg-core";
import { timestamps } from "./timestamps";

export const bottomProducts = pgTable("bottomProducts", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  size: integer().notNull(),
  colour: varchar({ length: 255 }).notNull(),
  material: varchar({ length: 255 }),
  state: smallint().notNull(),
  brand: varchar({ length: 255 }),
  gender: smallint().notNull(),
  tags: varchar({ length: 255 }).array(),
  ...timestamps
});
