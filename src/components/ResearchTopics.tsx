import { useEffect, useState } from "react";

import { Project } from "../types/project";
import { ResearchTopic } from "../types/research-topic";

interface Props {
    project: Project;
}

export function ResearchTopics({ project }: Props) {
    const [topics, setTopics] = useState<ResearchTopic[]>([]);
    const [topicName, setTopicName] = useState("");

    async function loadTopics() {
        const data = await window.researchApi.getTopics(project.id);
        setTopics(data);
    }

    async function createTopic() {
        if (!topicName.trim()) {
            return;
        }

        await window.researchApi.createTopic(project.id, topicName);

        setTopicName("");

        await loadTopics();
    }

    useEffect(() => {
        loadTopics();
    }, [project.id]);

    return (
        <div>
            <h3>Research Topics</h3>

            <input
                placeholder="Topic Name"
                value={topicName}
                onChange={(e) => setTopicName(e.target.value)}
            />

            <button onClick={createTopic}>Add Topic</button>

            <ul>
                {topics.map((topic) => (
                    <li key={topic.id}>{topic.name}</li>
                ))}
            </ul>
        </div>
    );
}
