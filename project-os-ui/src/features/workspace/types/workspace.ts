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
    status: string;
    problemCount: number;
    goalCount: number;
    researchTopicCount: number;
    decisionCount: number;
    noteCount: number;
    problems: ProblemWorkspace[];
}
