import Database from "better-sqlite3";
const sqlite = new Database("project-os.db");

import { drizzle } from "drizzle-orm/better-sqlite3";
export const db = drizzle(sqlite);
