import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Stack,
    TextField,
} from "@mui/material";

import { Controller, useForm } from "react-hook-form";

interface Props {
    open: boolean;
    onClose: () => void;
    onSubmit: (data: { title: string; content: string }) => void;
}

export default function CreateArchitectureDialog({
    open,
    onClose,
    onSubmit,
}: Props) {
    const { control, handleSubmit, reset } = useForm({
        defaultValues: {
            title: "",
            content: "",
        },
    });

    const submit = (data: any) => {
        onSubmit(data);

        reset();
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <DialogTitle>Add Architecture</DialogTitle>

            <form onSubmit={handleSubmit(submit)}>
                <DialogContent>
                    <Stack spacing={2}>
                        <Controller
                            name="title"
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field }) => (
                                <TextField {...field} label="Title" fullWidth />
                            )}
                        />

                        <Controller
                            name="content"
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Content"
                                    multiline
                                    rows={10}
                                    fullWidth
                                />
                            )}
                        />
                    </Stack>
                </DialogContent>

                <DialogActions>
                    <Button onClick={onClose}>Cancel</Button>

                    <Button type="submit" variant="contained">
                        Save
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}
