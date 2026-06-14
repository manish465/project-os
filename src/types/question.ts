export type QuestionStatus = "OPEN" | "INVESTIGATING" | "ANSWERED" | "REJECTED";

export interface Question {
    id: string;
    topicId: string;
    text: string;
    status: QuestionStatus;
    createdAt: string;
}
