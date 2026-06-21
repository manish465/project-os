import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    MenuItem,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import type { ResearchFinding } from "../../research-findings/types/researchFinding";
import type { DecisionFormData } from "../types/decision";

interface Props {
    open: boolean;
    onClose: () => void;
    findings: ResearchFinding[];
    onSubmit: (data: DecisionFormData) => void;
}

export default function CreateDecisionDialog({
    open,
    onClose,
    findings,
    onSubmit,
}: Props) {
    const { control, handleSubmit, reset } = useForm<DecisionFormData>({
        defaultValues: {
            title: "",
            chosenOption: "",
            rationale: "",
            tradeoffs: "",
            confidenceLevel: "MEDIUM",
            findingIds: [],
        },
    });

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <DialogTitle>Create Decision</DialogTitle>
            <form
                onSubmit={handleSubmit((data) => {
                    onSubmit(data);
                    reset();
                })}
            >
                <DialogContent>
                    <Stack spacing={2}>
                        <Controller
                            name="findingIds"
                            control={control}
                            render={({ field }) => (
                                <>
                                    <TextField
                                        {...field}
                                        select
                                        label="Supporting Findings"
                                        slotProps={{
                                            select: {
                                                multiple: true,
                                            },
                                        }}
                                    >
                                        {findings.map((finding) => (
                                            <MenuItem
                                                key={finding.id}
                                                value={finding.id}
                                            >
                                                [{finding.type}] {finding.title}
                                            </MenuItem>
                                        ))}
                                    </TextField>

                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        Selected: {field.value?.length ?? 0}{" "}
                                        findings
                                    </Typography>
                                </>
                            )}
                        />
                        <Controller
                            name="title"
                            control={control}
                            rules={{
                                required: "Decision title is required",
                            }}
                            render={({ field }) => (
                                <TextField {...field} label="Decision" />
                            )}
                        />
                        <Controller
                            name="chosenOption"
                            control={control}
                            rules={{
                                required: "Decision Option is required",
                            }}
                            render={({ field }) => (
                                <TextField {...field} label="Chosen Option" />
                            )}
                        />
                        <Controller
                            name="rationale"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Rationale"
                                    multiline
                                    rows={4}
                                />
                            )}
                        />
                        <Controller
                            name="tradeoffs"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Tradeoffs"
                                    multiline
                                    rows={4}
                                />
                            )}
                        />
                        <Controller
                            name="confidenceLevel"
                            control={control}
                            rules={{
                                required: "Decision Confidence is required",
                            }}
                            render={({ field }) => (
                                <TextField {...field} select label="Confidence">
                                    <MenuItem value="LOW">LOW</MenuItem>
                                    <MenuItem value="MEDIUM">MEDIUM</MenuItem>
                                    <MenuItem value="HIGH">HIGH</MenuItem>
                                </TextField>
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
