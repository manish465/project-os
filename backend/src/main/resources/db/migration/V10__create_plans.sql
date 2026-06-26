CREATE TABLE plans
(
    id UUID PRIMARY KEY,
    project_id UUID NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    sequence INTEGER NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,

    CONSTRAINT fk_plan_project
        FOREIGN KEY (project_id)
            REFERENCES projects(id)
            ON DELETE CASCADE
);

CREATE INDEX idx_plan_project
    ON plans(project_id);

CREATE INDEX idx_plan_sequence
    ON plans(sequence);