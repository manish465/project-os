export type DecisionConfidenceLevel = "LOW" | "MEDIUM" | "HIGH";

export interface Decision {
    id: string;
    projectId: string;
    title: string;
    problem?: string;
    chosenOption: string;
    rationale?: string;
    tradeoffs?: string;
    confidenceLevel: DecisionConfidenceLevel;
    findingIds: string[];
}

export interface DecisionFormData {
    title: string;
    chosenOption: string;
    rationale: string;
    tradeoffs: string;
    confidenceLevel: "LOW" | "MEDIUM" | "HIGH";
    findingIds: string[];
}
