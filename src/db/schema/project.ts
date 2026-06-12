import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const projects = sqliteTable("projects", {
    id: integer("id").primaryKey(),
    name: text("name").notNull(),
    description: text("description"),
    currentState: text("current_state"),
    nextAction: text("next_action"),
    blockers: text("blockers"),
    createdAt: integer("created_at"),
});
