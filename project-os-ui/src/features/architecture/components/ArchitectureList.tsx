import { Stack } from "@mui/material";
import ArchitectureCard from "./ArchitectureCard";
import type { Architecture } from "../types/architecture";

interface Props {
    architectures: Architecture[];
}

export default function ArchitectureList({ architectures }: Props) {
    return (
        <Stack spacing={2}>
            {architectures.map((architecture) => (
                <ArchitectureCard
                    key={architecture.id}
                    architecture={architecture}
                />
            ))}
        </Stack>
    );
}
