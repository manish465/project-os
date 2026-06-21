export interface Project {
    id: string;
    name: string;
    description: string;
    status: "ACTIVE" | "ON_HOLD" | "COMPLETED" | "ARCHIVED";
}
