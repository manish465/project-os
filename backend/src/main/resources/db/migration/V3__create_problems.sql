CREATE TABLE problems
(
    id UUID PRIMARY KEY,

    project_id UUID NOT NULL,

    title VARCHAR(255) NOT NULL,

    description TEXT,

    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,

    CONSTRAINT fk_problem_project
        FOREIGN KEY (project_id)
            REFERENCES projects(id)
            ON DELETE CASCADE
);

CREATE INDEX idx_problem_project
    ON problems(project_id);