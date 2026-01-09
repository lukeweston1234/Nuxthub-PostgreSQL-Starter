import {
  pgTable,
  uuid,
  varchar,
  timestamp,
  boolean,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { email } from "zod";

export const users = pgTable("users", {
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  email: varchar("email", { length: 512 }).notNull(),
});

export const profiles = pgTable("profiles", {
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),

  userId: uuid("user_id")
    .notNull()
    .unique()
    .references(() => users.id, { onDelete: "cascade" }),

  name: varchar("name", { length: 255 }).notNull(),
  picture: varchar("picture", { length: 512 }),
  bio: varchar("bio", { length: 4096 }),
});

export const todos = pgTable("todos", {
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  userId: uuid().references(() => users.id, { onDelete: "cascade" }),
  title: varchar("title", { length: 255 }).notNull(),
  completed: boolean().notNull().default(false),
  createdAt: timestamp().defaultNow().notNull(),
});
