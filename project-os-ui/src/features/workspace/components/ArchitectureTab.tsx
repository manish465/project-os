import { Button, Stack } from "@mui/material";
import { useState } from "react";
import { useArchitectures } from "../../architecture/hooks/useArchitectures";
import { useCreateArchitecture } from "../../architecture/hooks/useCreateArchitecture";
import ArchitectureList from "../../architecture/components/ArchitectureList";
import CreateArchitectureDialog from "../../architecture/components/CreateArchitectureDialog";

interface Props {
    projectId: string;
}

export default function ArchitectureTab({ projectId }: Props) {
    const [open, setOpen] = useState(false);

    const architectures = useArchitectures(projectId);

    const createArchitecture = useCreateArchitecture(projectId);

    return (
        <Stack spacing={3}>
            <Button variant="contained" onClick={() => setOpen(true)}>
                Add Architecture
            </Button>

            <ArchitectureList architectures={architectures.data ?? []} />

            <CreateArchitectureDialog
                open={open}
                onClose={() => setOpen(false)}
                onSubmit={(data) => {
                    createArchitecture.mutate(data, {
                        onSuccess: () => setOpen(false),
                    });
                }}
            />
        </Stack>
    );
}
