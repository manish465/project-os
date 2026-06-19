import { eq } from "drizzle-orm";
import { db } from "./index";
import { researchTopics } from "./schema";

export async function createTopic(projectId: string, topicName: string) {
    await db.insert(researchTopics).values({
        id: crypto.randomUUID(),
        projectId,
        name: topicName,
        createdAt: new Date().toISOString(),
    });
}

export async function getTopicsByProject(projectId: string) {
    return db
        .select()
        .from(researchTopics)
        .where(eq(researchTopics.projectId, projectId));
}
