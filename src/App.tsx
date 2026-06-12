import "./App.css";
import { createProject } from "./features/projects/api/projectApi";

function App() {
    async function testInsert() {
        await createProject({
            name: "Project OS",
            description: "Testing",
            currentState: "Database setup",
            nextAction: "CRUD",
            blockers: "",
        });

        alert("Saved");
    }

    return <button onClick={testInsert}>Insert Project</button>;
}

export default App;
