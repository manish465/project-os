package com.manish.projectos.goal.domain;

import com.manish.projectos.common.domain.BaseEntity;
import com.manish.projectos.problem.domain.ProblemEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "goals")
public class GoalEntity extends BaseEntity {
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(
            name = "problem_id",
            nullable = false
    )
    private ProblemEntity problem;

    @Column(nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String description;
}
