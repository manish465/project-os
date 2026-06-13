import { useEffect } from "react";
import "./App.css";
import { projectRepository } from "./db/repositories/projectRepository";

function App() {
    useEffect(() => {
        async function load() {
            const projects = await projectRepository.findAll();

            console.log(projects);
        }

        load();
    }, []);

    return <h1>Project OS</h1>;
}

export default App;
