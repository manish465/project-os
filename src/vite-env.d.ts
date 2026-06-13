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
}
