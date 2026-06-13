/// <reference types="vite/client" />

interface Window {
    projectApi: {
        createProject(name: string): Promise<void>;

        getProjects(): Promise<
            {
                id: string;
                name: string;
                createdAt: string;
            }[]
        >;
    };
}
