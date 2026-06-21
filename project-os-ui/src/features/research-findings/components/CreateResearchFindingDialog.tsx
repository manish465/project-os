import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    MenuItem,
    Stack,
    TextField,
} from "@mui/material";

import { Controller, useForm } from "react-hook-form";

interface Props {
    open: boolean;
    onClose: () => void;
    onSubmit: (data: any) => void;
}

export default function CreateResearchFindingDialog({
    open,
    onClose,
    onSubmit,
}: Props) {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            type: "NOTE",
            title: "",
            content: "",
            sourceUrl: "",
        },
    });

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <DialogTitle>Add Finding</DialogTitle>

            <form onSubmit={handleSubmit(onSubmit)}>
                <DialogContent>
                    <Stack spacing={2}>
                        <Controller
                            name="type"
                            control={control}
                            render={({ field }) => (
                                <TextField {...field} select label="Type">
                                    <MenuItem value="NOTE">NOTE</MenuItem>
                                    <MenuItem value="ARTICLE">ARTICLE</MenuItem>
                                    <MenuItem value="VIDEO">VIDEO</MenuItem>
                                    <MenuItem value="DOCUMENTATION">
                                        DOCUMENTATION
                                    </MenuItem>
                                    <MenuItem value="EXPERIMENT">
                                        EXPERIMENT
                                    </MenuItem>
                                    <MenuItem value="BENCHMARK">
                                        BENCHMARK
                                    </MenuItem>
                                </TextField>
                            )}
                        />
                        <Controller
                            name="title"
                            control={control}
                            render={({ field }) => (
                                <TextField {...field} label="Title" />
                            )}
                        />
                        <Controller
                            name="content"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Content"
                                    multiline
                                    rows={5}
                                />
                            )}
                        />
                        <Controller
                            name="sourceUrl"
                            control={control}
                            render={({ field }) => (
                                <TextField {...field} label="Source URL" />
                            )}
                        />
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button variant="contained" type="submit">
                        Save
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}
