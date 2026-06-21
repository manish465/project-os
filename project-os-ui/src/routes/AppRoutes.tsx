import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import ProjectListPage from "../features/projects/pages/ProjectListPage";
import CreateProjectPage from "../features/projects/pages/CreateProjectPage";
import MainLayout from "../shared/layouts/MainLayout";
import ProjectDetailsPage from "../features/projects/pages/ProjectDetailsPage";
import ResearchTopicDetailsPage from "../features/research/pages/ResearchTopicDetailsPage";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Navigate to="/projects" />} />
                    <Route path="/projects" element={<ProjectListPage />} />
                    <Route
                        path="/projects/new"
                        element={<CreateProjectPage />}
                    />
                    <Route
                        path="/projects/:projectId"
                        element={<ProjectDetailsPage />}
                    />
                    <Route
                        path="/projects/:projectId/research/:researchId"
                        element={<ResearchTopicDetailsPage />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
