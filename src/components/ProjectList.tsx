import { Project } from "../types/project";

interface Props {
    projects: Project[];
    selectedProjectId: string | null;
    onSelect: (project: Project) => void;
}

export function ProjectList({ projects, selectedProjectId, onSelect }: Props) {
    return (
        <div>
            {projects.map((project) => (
                <div
                    key={project.id}
                    onClick={() => onSelect(project)}
                    style={{
                        border:
                            project.id === selectedProjectId
                                ? "2px solid black"
                                : "1px solid #ddd",

                        padding: "1rem",
                        marginBottom: "0.5rem",
                        cursor: "pointer",
                    }}
                >
                    <strong>{project.name}</strong>
                </div>
            ))}
        </div>
    );
}
