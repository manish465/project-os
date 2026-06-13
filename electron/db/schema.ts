import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const projects = sqliteTable("projects", {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    problem: text("problem").notNull().default(""),
    goal: text("goal").notNull().default(""),
    createdAt: text("created_at").notNull(),
});
