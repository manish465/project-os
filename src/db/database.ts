import Database from "@tauri-apps/plugin-sql";

let database: Database | null = null;

export async function getDatabase() {
    if (database) {
        return database;
    }

    database = await Database.load("sqlite:project-os.db");

    return database;
}
