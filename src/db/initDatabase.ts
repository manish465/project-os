import { getDatabase } from "./database";

export async function initDatabase() {
    const db = await getDatabase();
    console.log("DB Loaded", db);

    await db.execute(`
    CREATE TABLE IF NOT EXISTS projects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT,
      current_state TEXT,
      next_action TEXT,
      blockers TEXT,
      created_at INTEGER NOT NULL
    )
  `);
}
