CREATE TABLE research_topics
(
    id UUID PRIMARY KEY,
    project_id UUID NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(50) NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,

    CONSTRAINT fk_research_topic_project
        FOREIGN KEY (project_id)
            REFERENCES projects(id)
            ON DELETE CASCADE
);

CREATE INDEX idx_research_topic_project
    ON research_topics(project_id);

CREATE INDEX idx_research_topic_status
    ON research_topics(status);