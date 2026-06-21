import {
    Card,
    CardContent,
    Chip,
    Link,
    Stack,
    Typography,
} from "@mui/material";
import type { ResearchFinding } from "../types/researchFinding";

interface Props {
    finding: ResearchFinding;
}

export default function ResearchFindingCard({ finding }: Props) {
    return (
        <Card>
            <CardContent>
                <Stack spacing={2}>
                    <Chip label={finding.type} />

                    <Typography variant="h6">{finding.title}</Typography>

                    {finding.content && (
                        <Typography>{finding.content}</Typography>
                    )}

                    {finding.sourceUrl && (
                        <Link href={finding.sourceUrl} target="_blank">
                            Source
                        </Link>
                    )}
                </Stack>
            </CardContent>
        </Card>
    );
}
