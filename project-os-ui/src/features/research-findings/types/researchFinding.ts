export type ResearchFindingType =
    | "NOTE"
    | "ARTICLE"
    | "VIDEO"
    | "DOCUMENTATION"
    | "EXPERIMENT"
    | "BENCHMARK";

export interface ResearchFinding {
    id: string;
    researchTopicId: string;
    type: ResearchFindingType;
    title: string;
    content?: string;
    sourceUrl?: string;
}
