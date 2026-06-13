import { Project } from "../types/project";

interface Props {
    projects: Project[];
}

export function ProjectList({ projects }: Props) {
    return (
        <ul>
            {projects.map((project) => (
                <li key={project.id}>{project.name}</li>
            ))}
        </ul>
    );
}
