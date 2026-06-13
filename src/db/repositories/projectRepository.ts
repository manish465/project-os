import { getDatabase } from "../database";
import {
    CreateProjectRequest,
    Project,
} from "../../features/projects/types/Project";

export const projectRepository = {
    async create(request: CreateProjectRequest): Promise<void> {
        const db = await getDatabase();

        await db.execute(
            `
      INSERT INTO projects (
        name,
        description,
        current_state,
        next_action,
        blockers,
        created_at
      )
      VALUES (?, ?, ?, ?, ?, ?)
      `,
            [
                request.name,
                request.description,
                request.currentState,
                request.nextAction,
                request.blockers,
                Date.now(),
            ],
        );
    },

    async findAll(): Promise<Project[]> {
        const db = await getDatabase();

        return await db.select<Project[]>(
            `
      SELECT *
      FROM projects
      ORDER BY created_at DESC
      `,
        );
    },

    async findById(id: number): Promise<Project | null> {
        const db = await getDatabase();

        const rows = await db.select<Project[]>(
            `
      SELECT *
      FROM projects
      WHERE id = ?
      `,
            [id],
        );

        return rows.length > 0 ? rows[0] : null;
    },
};
