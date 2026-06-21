import { List, ListItem, Typography } from "@mui/material";

import type { Goal } from "../types/goal";

interface Props {
    goals: Goal[];
}

export default function GoalList({ goals }: Props) {
    return (
        <List>
            {goals.map((goal) => (
                <ListItem
                    sx={{
                        display: "block",
                        borderRadius: 1,
                        bgcolor: "background.default",
                    }}
                >
                    <Typography sx={{ fontWeight: 600 }}>
                        {goal.title}
                    </Typography>
                    {goal.description && (
                        <Typography variant="body2" color="text.secondary">
                            {goal.description}
                        </Typography>
                    )}
                </ListItem>
            ))}
        </List>
    );
}
