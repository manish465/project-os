import { db } from "./index";
import { researchTopics, questions } from "./schema";

export async function createTopic(projectId: string, topicName: string) {
    await db.insert(researchTopics).values({
        id: crypto.randomUUID(),
        projectId,
        name: topicName,
        createdAt: new Date().toISOString(),
    });
}

export async function getTopics() {
    return db.select().from(researchTopics);
}

export async function createQuestion(topicId: string, text: string) {
    await db.insert(questions).values({
        id: crypto.randomUUID(),
        topicId,
        text,
        status: "OPEN",
        createdAt: new Date().toISOString(),
    });
}

export async function getQuestions() {
    return db.select().from(questions);
}
