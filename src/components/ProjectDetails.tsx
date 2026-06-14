import { Project } from "../types/project";

interface Props {
    project: Project | null;
}

export function ProjectDetails({ project }: Props) {
    if (!project) {
        return (
            <div>
                <h2>No Project Selected</h2>
                <p>Select a project to view details.</p>
            </div>
        );
    }

    return (
        <div>
            <h2>{project.name}</h2>
            <div>
                <h3>Problem</h3>
                <p>{project.problem}</p>
            </div>
            <div>
                <h3>Goal</h3>
                <p>{project.goal}</p>
            </div>
        </div>
    );
}
