mod db;
mod project_commands;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    db::init_db().expect("database initialization failed");

    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![project_commands::create_project])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
