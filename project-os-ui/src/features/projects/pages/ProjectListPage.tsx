import {
    Button,
    Card,
    CardContent,
    Container,
    Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { Link, useNavigate } from "react-router-dom";
import { useProjects } from "../hooks/useProjects";

export default function ProjectListPage() {
    const { data, isLoading, error } = useProjects();
    const navigate = useNavigate();

    if (isLoading) {
        return <Typography>Loading...</Typography>;
    }

    if (error) {
        return <Typography>Error loading projects</Typography>;
    }

    return (
        <Container maxWidth="lg">
            <Grid
                container
                sx={{
                    mb: 3,
                    mt: 3,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Typography variant="h4">Projects</Typography>

                <Button component={Link} to="/projects/new" variant="contained">
                    New Project
                </Button>
            </Grid>

            <Grid container spacing={2}>
                {data?.map((project: any) => (
                    <Grid size={{ xs: 12, md: 6 }} key={project.id}>
                        <Card
                            sx={{ cursor: "pointer" }}
                            onClick={() => navigate(`/projects/${project.id}`)}
                        >
                            <CardContent>
                                <Typography variant="h6">
                                    {project.name}
                                </Typography>

                                <Typography
                                    color="text.secondary"
                                    sx={{ mb: 1 }}
                                >
                                    {project.status}
                                </Typography>

                                <Typography>{project.description}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
