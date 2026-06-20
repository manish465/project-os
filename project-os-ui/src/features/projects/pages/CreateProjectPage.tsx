import {
    Button,
    Container,
    Paper,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useCreateProject } from "../hooks/useCreateProject";

interface CreateProjectForm {
    name: string;
    description: string;
}

export default function CreateProjectPage() {
    const navigate = useNavigate();
    const mutation = useCreateProject();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateProjectForm>({
        defaultValues: {
            name: "",
            description: "",
        },
    });

    const onSubmit = (data: CreateProjectForm) => {
        mutation.mutate(data, {
            onSuccess: () => {
                navigate("/projects");
            },
        });
    };

    return (
        <Container maxWidth="md">
            <Paper sx={{ p: 4, mt: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Create Project
                </Typography>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={3}>
                        <Controller
                            name="name"
                            control={control}
                            rules={{
                                required: "Project name is required",
                            }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Project Name"
                                    fullWidth
                                    error={!!errors.name}
                                    helperText={errors.name?.message}
                                />
                            )}
                        />

                        <Controller
                            name="description"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Description"
                                    fullWidth
                                    multiline
                                    minRows={4}
                                />
                            )}
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            disabled={mutation.isPending}
                        >
                            {mutation.isPending
                                ? "Creating..."
                                : "Create Project"}
                        </Button>
                    </Stack>
                </form>
            </Paper>
        </Container>
    );
}
