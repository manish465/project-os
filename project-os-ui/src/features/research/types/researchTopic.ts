export interface ResearchTopic {
    id: string;
    projectId: string;
    title: string;
    description: string;
    status: "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";
}
