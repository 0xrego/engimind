"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import type { Project } from "@/content/projects";

interface ProjectGridProps {
  projects: Project[];
  columns?: 2 | 3;
  showFilters?: boolean;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({
  projects,
  columns = 3,
  showFilters = false,
}) => {
  const gridClasses = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  };

  return (
    <div className={`grid ${gridClasses[columns]} gap-6 md:gap-8`}>
      {projects.map((project, index) => (
        <div
          key={project.id}
          className="fade-in-up"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <ProjectCard
            id={project.id}
            title={project.title}
            subtitle={project.subtitle}
            location={project.location}
            image={project.image}
            category={project.category}
            year={project.year}
            size={index === 0 && columns === 3 ? "large" : "default"}
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;

