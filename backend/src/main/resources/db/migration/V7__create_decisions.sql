CREATE TABLE decisions
(
    id UUID PRIMARY KEY,
    project_id UUID NOT NULL,
    title VARCHAR(255) NOT NULL,
    problem TEXT,
    chosen_option TEXT NOT NULL,
    rationale TEXT,
    tradeoffs TEXT,
    confidence_level VARCHAR(50) NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,

    CONSTRAINT fk_decision_project
        FOREIGN KEY (project_id)
            REFERENCES projects(id)
            ON DELETE CASCADE
);

CREATE INDEX idx_decision_project
    ON decisions(project_id);