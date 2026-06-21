CREATE TABLE goals
(
    id UUID PRIMARY KEY,
    problem_id UUID NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,

    CONSTRAINT fk_goal_problem
        FOREIGN KEY (problem_id)
            REFERENCES problems(id)
            ON DELETE CASCADE
);

CREATE INDEX idx_goal_problem
    ON goals(problem_id);