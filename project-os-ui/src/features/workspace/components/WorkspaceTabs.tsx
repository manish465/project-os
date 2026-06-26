import { Tab, Tabs, Box } from "@mui/material";
import { useState } from "react";
import OverviewTab from "./OverviewTab";
import ProblemsTab from "./ProblemsTab";
import ResearchTab from "./ResearchTab";
import NotesTab from "./NotesTab";

import type { Workspace } from "../types/workspace";
import DecisionsTab from "./DecisionsTab";
import ArchitectureTab from "./ArchitectureTab";

interface Props {
    projectId: string;
    workspace: Workspace;
}

export default function WorkspaceTabs({ projectId, workspace }: Props) {
    const [tab, setTab] = useState(0);

    return (
        <>
            <Tabs value={tab} onChange={(_, value) => setTab(value)}>
                <Tab label="Overview" />
                <Tab label="Problems" />
                <Tab label="Research" />
                <Tab label="Decisions" />
                <Tab label="Architecture" />
                <Tab label="Notes" />
            </Tabs>

            <Box sx={{ mt: 3 }}>
                {tab === 0 && <OverviewTab workspace={workspace} />}
                {tab === 1 && (
                    <ProblemsTab projectId={projectId} workspace={workspace} />
                )}
                {tab === 2 && <ResearchTab projectId={projectId} />}
                {tab === 3 && <DecisionsTab projectId={projectId} />}
                {tab === 4 && <ArchitectureTab projectId={projectId} />}
                {tab === 5 && <NotesTab />}
            </Box>
        </>
    );
}
