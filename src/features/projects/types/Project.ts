export interface Project {
    id: number;
    name: string;
    description: string;
    currentState: string;
    nextAction: string;
    blockers: string;
    createdAt: number;
}

export interface CreateProjectRequest {
    name: string;
    description: string;
    currentState: string;
    nextAction: string;
    blockers: string;
}
