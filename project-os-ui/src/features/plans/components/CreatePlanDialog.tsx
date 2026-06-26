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
    onSubmit: (data: {
        title: string;
        description: string;
        sequence: number;
    }) => void;
}

export default function CreatePlanDialog({ open, onClose, onSubmit }: Props) {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            title: "",
            description: "",
            sequence: 1,
        },
    });

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle>Create Plan</DialogTitle>

            <form onSubmit={handleSubmit(onSubmit)}>
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
                            name="description"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Description"
                                    multiline
                                    rows={4}
                                    fullWidth
                                />
                            )}
                        />

                        <Controller
                            name="sequence"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    type="number"
                                    label="Phase"
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
