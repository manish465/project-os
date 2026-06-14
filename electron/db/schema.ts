import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const projects = sqliteTable("projects", {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    problem: text("problem").notNull().default(""),
    goal: text("goal").notNull().default(""),
    createdAt: text("created_at").notNull(),
});

export const researchTopics = sqliteTable("research_topics", {
    id: text("id").primaryKey(),
    projectId: text("project_id").notNull(),
    name: text("name").notNull(),
    createdAt: text("created_at").notNull(),
});

export const questions = sqliteTable("questions", {
    id: text("id").primaryKey(),
    topicId: text("topic_id").notNull(),
    text: text("text").notNull(),
    status: text("status").notNull(),
    createdAt: text("created_at").notNull(),
});
