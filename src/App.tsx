import { useEffect, useState } from "react";
import { Project } from "./types/project";
import { ProjectList } from "./components/ProjectList";

function App() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [projectName, setProjectName] = useState("");

    async function loadProjects() {
        const data = await window.projectApi.getProjects();
        setProjects(data);
    }

    async function createProject() {
        if (!projectName.trim()) {
            return;
        }

        await window.projectApi.createProject(projectName);
        setProjectName("");
        await loadProjects();
    }

    useEffect(() => {
        loadProjects();
    }, []);

    return (
        <div style={{ padding: "2rem" }}>
            <h1>Project OS</h1>
            <h2>Create Project</h2>
            <input
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
            />
            <button onClick={createProject}>Create</button>
            <h2>Projects</h2>
            <ProjectList projects={projects} />
        </div>
    );
}

export default App;
