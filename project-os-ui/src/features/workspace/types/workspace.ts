export interface GoalWorkspace {
    id: string;
    title: string;
    description: string;
}

export interface ProblemWorkspace {
    id: string;
    title: string;
    description: string;
    goals: GoalWorkspace[];
}

export interface Workspace {
    projectId: string;
    projectName: string;
    description: string;
    problems: ProblemWorkspace[];
}
