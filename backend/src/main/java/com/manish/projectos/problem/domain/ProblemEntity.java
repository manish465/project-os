package com.manish.projectos.problem.domain;

import com.manish.projectos.common.domain.BaseEntity;
import com.manish.projectos.project.domain.ProjectEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "problems")
public class ProblemEntity extends BaseEntity {
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(
            name = "project_id",
            nullable = false
    )
    private ProjectEntity project;

    @Column(nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String description;
}
