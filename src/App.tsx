import { useEffect, useState } from "react";
import { Project } from "./types/project";
import { ProjectList } from "./components/ProjectList";
import { ProjectDetails } from "./components/ProjectDetails";

function App() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null,
    );

    const [name, setName] = useState("");
    const [problem, setProblem] = useState("");
    const [goal, setGoal] = useState("");

    async function loadProjects() {
        const data = await window.projectApi.getProjects();
        setProjects(data);

        if (!selectedProject && data.length > 0) {
            setSelectedProject(data[0]);
        }
    }

    async function createProject() {
        if (!name.trim()) {
            return;
        }

        await window.projectApi.createProject(name, problem, goal);

        setName("");
        setProblem("");
        setGoal("");

        await loadProjects();
    }

    useEffect(() => {
        loadProjects();
    }, []);

    return (
        <div
            style={{
                padding: "2rem",
            }}
        >
            <h1>Project OS</h1>
            <div
                style={{
                    marginBottom: "2rem",
                }}
            >
                <h2>Create Project</h2>
                <input
                    placeholder="Project Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                <br />
                <textarea
                    placeholder="Problem"
                    value={problem}
                    onChange={(e) => setProblem(e.target.value)}
                />
                <br />
                <br />
                <textarea
                    placeholder="Goal"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                />
                <br />
                <br />
                <button onClick={createProject}>Create Project</button>
            </div>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "300px 1fr",
                    gap: "2rem",
                }}
            >
                <ProjectList
                    projects={projects}
                    selectedProjectId={selectedProject?.id ?? null}
                    onSelect={setSelectedProject}
                />
                <ProjectDetails project={selectedProject} />
            </div>
        </div>
    );
}

export default App;
