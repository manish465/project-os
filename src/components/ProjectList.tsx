import { Project } from "../types/project";

interface Props {
    projects: Project[];
}

export function ProjectList({ projects }: Props) {
    return (
        <div>
            {projects.map((project) => (
                <div
                    key={project.id}
                    style={{
                        border: "1px solid #ddd",
                        padding: "1rem",
                        marginBottom: "1rem",
                    }}
                >
                    <h3>{project.name}</h3>

                    <p>
                        <strong>Problem:</strong> {project.problem}
                    </p>

                    <p>
                        <strong>Goal:</strong> {project.goal}
                    </p>
                </div>
            ))}
        </div>
    );
}
