import { useEffect, useState } from "react";
import { Project } from "./types/project";
import { ProjectList } from "./components/ProjectList";

function App() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [name, setName] = useState("");
    const [problem, setProblem] = useState("");
    const [goal, setGoal] = useState("");

    async function loadProjects() {
        const data = await window.projectApi.getProjects();
        setProjects(data);
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
        <div style={{ padding: "2rem" }}>
            <h1>Project OS</h1>
            <h2>Create Project</h2>
            <div>
                <input
                    placeholder="Project Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <br />
            <div>
                <textarea
                    placeholder="Problem"
                    value={problem}
                    onChange={(e) => setProblem(e.target.value)}
                    rows={4}
                    cols={60}
                />
            </div>
            <br />
            <div>
                <textarea
                    placeholder="Goal"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    rows={4}
                    cols={60}
                />
            </div>
            <br />
            <button onClick={createProject}>Create Project</button>
            <hr />
            <ProjectList projects={projects} />
        </div>
    );
}

export default App;
