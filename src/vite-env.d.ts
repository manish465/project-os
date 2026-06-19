/// <reference types="vite/client" />

interface Window {
    projectApi: {
        createProject(
            name: string,
            problem: string,
            goal: string,
        ): Promise<void>;
        getProjects(): Promise<
            {
                id: string;
                name: string;
                problem: string;
                goal: string;
                createdAt: string;
            }[]
        >;
    };
    researchApi: {
        createTopic(projectId: string, topicName: string): Promise<void>;
        getTopics(projectId: string): Promise<
            {
                id: string;
                projectId: string;
                name: string;
                createdAt: string;
            }[]
        >;
    };
}
