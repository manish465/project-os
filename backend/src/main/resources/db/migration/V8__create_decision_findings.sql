CREATE TABLE decision_findings
(
    decision_id UUID NOT NULL,
    finding_id UUID NOT NULL,

    PRIMARY KEY (
                 decision_id,
                 finding_id
        ),

    CONSTRAINT fk_df_decision
        FOREIGN KEY (decision_id)
            REFERENCES decisions(id)
            ON DELETE CASCADE,

    CONSTRAINT fk_df_finding
        FOREIGN KEY (finding_id)
            REFERENCES research_findings(id)
            ON DELETE CASCADE
);