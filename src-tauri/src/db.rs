use rusqlite::{Connection, Result};

pub fn init_db() -> Result<()> {
    let conn = Connection::open("project-os.db")?;

    conn.execute(
        "
        CREATE TABLE IF NOT EXISTS projects (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            description TEXT,
            current_state TEXT,
            next_action TEXT,
            blockers TEXT,
            created_at INTEGER NOT NULL
        )
        ",
        [],
    )?;

    Ok(())
}
