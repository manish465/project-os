import {
    Button,
    Card,
    CardContent,
    Divider,
    Stack,
    Typography,
} from "@mui/material";

import { useState } from "react";

import type { Problem } from "../types/problem";

import GoalList from "../../goals/components/GoalList";
import CreateGoalDialog from "../../goals/components/CreateGoalDialog";

import { useGoals } from "../../goals/hooks/useGoals";
import { useCreateGoal } from "../../goals/hooks/useCreateGoal";

interface Props {
    projectId: string;
    problem: Problem;
}

export default function ProblemCard({ projectId, problem }: Props) {
    const [open, setOpen] = useState(false);

    const goalsQuery = useGoals(projectId, problem.id);

    const createGoal = useCreateGoal(projectId, problem.id);

    return (
        <>
            <Card>
                <CardContent>
                    <Stack spacing={2}>
                        <Typography variant="h6">{problem.title}</Typography>

                        <Typography color="text.secondary">
                            {problem.description}
                        </Typography>

                        <Divider />

                        <Stack
                            sx={{
                                direction: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Typography variant="subtitle1">Goals</Typography>
                            <Button
                                size="small"
                                variant="outlined"
                                onClick={() => setOpen(true)}
                            >
                                Add Goal
                            </Button>
                        </Stack>

                        <GoalList goals={goalsQuery.data ?? []} />
                    </Stack>
                </CardContent>
            </Card>

            <CreateGoalDialog
                open={open}
                onClose={() => setOpen(false)}
                onSubmit={(data) => {
                    createGoal.mutate(data, {
                        onSuccess: () => setOpen(false),
                    });
                }}
            />
        </>
    );
}
