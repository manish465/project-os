package com.manish.projectos.decision.domain;

import com.manish.projectos.common.domain.BaseEntity;
import com.manish.projectos.project.domain.ProjectEntity;
import com.manish.projectos.researchfinding.domain.ResearchFindingEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "decisions")
public class DecisionEntity extends BaseEntity {
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(
            name = "project_id",
            nullable = false
    )
    private ProjectEntity project;

    @Column(nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String problem;

    @Column(
            name = "chosen_option",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String chosenOption;

    @Column(columnDefinition = "TEXT")
    private String rationale;

    @Column(columnDefinition = "TEXT")
    private String tradeoffs;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private DecisionConfidenceLevel confidenceLevel;

    @ManyToMany
    @JoinTable(
            name = "decision_findings",
            joinColumns = @JoinColumn(
                    name = "decision_id"
            ),
            inverseJoinColumns = @JoinColumn(
                    name = "finding_id"
            )
    )
    private Set<ResearchFindingEntity> findings = new HashSet<>();
}
