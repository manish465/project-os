package com.manish.projectos.researchfinding.domain;

import com.manish.projectos.common.domain.BaseEntity;
import com.manish.projectos.research.domain.ResearchTopicEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "research_findings")
public class ResearchFindingEntity extends BaseEntity {
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(
            name = "research_topic_id",
            nullable = false
    )
    private ResearchTopicEntity researchTopic;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ResearchFindingType type;

    @Column(nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String content;

    @Column(columnDefinition = "TEXT")
    private String sourceUrl;
}
