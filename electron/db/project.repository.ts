import { db } from "./index";
import { projects } from "./schema";

export async function createProject(
    id: string,
    name: string,
    problem: string,
    goal: string,
) {
    await db.insert(projects).values({
        id,
        name,
        problem,
        goal,
        createdAt: new Date().toISOString(),
    });
}

export async function getProjects() {
    return db.select().from(projects);
}
