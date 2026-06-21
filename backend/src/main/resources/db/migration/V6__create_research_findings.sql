CREATE TABLE research_findings
(
    id UUID PRIMARY KEY,
    research_topic_id UUID NOT NULL,
    type VARCHAR(50) NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT,
    source_url TEXT,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,

    CONSTRAINT fk_research_finding_topic
        FOREIGN KEY (research_topic_id)
            REFERENCES research_topics(id)
            ON DELETE CASCADE
);

CREATE INDEX idx_research_finding_topic
    ON research_findings(research_topic_id);

CREATE INDEX idx_research_finding_type
    ON research_findings(type);