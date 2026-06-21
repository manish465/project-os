import { Stack } from "@mui/material";
import type { ResearchFinding } from "../types/researchFinding";
import ResearchFindingCard from "./ResearchFindingCard";

interface Props {
    findings: ResearchFinding[];
}

export default function ResearchFindingList({ findings }: Props) {
    return (
        <Stack spacing={2}>
            {findings.map((finding) => (
                <ResearchFindingCard key={finding.id} finding={finding} />
            ))}
        </Stack>
    );
}
