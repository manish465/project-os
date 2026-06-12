import { invoke } from "@tauri-apps/api/core";
import { CreateProjectRequest } from "../types/Project";

export async function createProject(
    request: CreateProjectRequest,
): Promise<void> {
    await invoke("create_project", {
        request: {
            name: request.name,
            description: request.description,
            current_state: request.currentState,
            next_action: request.nextAction,
            blockers: request.blockers,
        },
    });
}
