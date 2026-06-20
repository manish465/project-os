import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import ProjectListPage from "../features/projects/pages/ProjectListPage";
import CreateProjectPage from "../features/projects/pages/CreateProjectPage";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/projects" />} />
                <Route path="/projects" element={<ProjectListPage />} />
                <Route path="/projects/new" element={<CreateProjectPage />} />
            </Routes>
        </BrowserRouter>
    );
}
