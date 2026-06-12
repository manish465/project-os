use rusqlite::Connection;
use serde::Deserialize;

#[derive(Deserialize)]
pub struct CreateProjectRequest {
    pub name: String,
    pub description: String,
    pub current_state: String,
    pub next_action: String,
    pub blockers: String,
}

#[tauri::command]
pub fn create_project(request: CreateProjectRequest) -> Result<(), String> {
    let conn = Connection::open("project-os.db").map_err(|e| e.to_string())?;

    conn.execute(
        "
        INSERT INTO projects(
            name,
            description,
            current_state,
            next_action,
            blockers,
            created_at
        )
        VALUES(?1, ?2, ?3, ?4, ?5, strftime('%s','now'))
        ",
        (
            request.name,
            request.description,
            request.current_state,
            request.next_action,
            request.blockers,
        ),
    )
    .map_err(|e| e.to_string())?;

    Ok(())
}
