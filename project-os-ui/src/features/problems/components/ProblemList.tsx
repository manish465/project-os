import { Stack } from "@mui/material";

import type { Problem } from "../types/problem";
import ProblemCard from "./ProblemCard";

interface Props {
    projectId: string;
    problems: Problem[];
}

export default function ProblemList({ projectId, problems }: Props) {
    return (
        <Stack spacing={2}>
            {problems.map((problem) => (
                <ProblemCard
                    key={problem.id}
                    projectId={projectId}
                    problem={problem}
                />
            ))}
        </Stack>
    );
}
