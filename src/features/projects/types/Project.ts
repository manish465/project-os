export interface Project {
    id: number;
    name: string;
    description: string | null;
    currentState: string | null;
    nextAction: string | null;
    blockers: string | null;
    createdAt: number;
}

export interface CreateProjectRequest {
    name: string;
    description: string;
    currentState: string;
    nextAction: string;
    blockers: string;
}
