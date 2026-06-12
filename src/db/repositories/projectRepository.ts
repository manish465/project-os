import {
    CreateProjectRequest,
    Project,
} from "../../features/projects/types/Project";

export interface ProjectRepository {
    create(project: CreateProjectRequest): Promise<void>;
    findAll(): Promise<Project[]>;
    findById(id: number): Promise<Project | null>;
}
