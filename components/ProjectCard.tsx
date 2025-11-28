"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  id: string;
  title: string;
  subtitle?: string;
  location: string;
  image: string;
  category?: string;
  year?: string;
  size?: "default" | "large" | "featured";
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  subtitle,
  location,
  image,
  category,
  year,
  size = "default",
}) => {
  const sizeClasses = {
    default: "aspect-[4/3]",
    large: "aspect-[3/2]",
    featured: "aspect-[16/10]",
  };

  return (
    <Link href={`/projects/${id}`} className="group block">
      <article className="relative overflow-hidden bg-[#fafafa]">
        {/* Image Container */}
        <div className={`relative ${sizeClasses[size]} overflow-hidden`}>
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-[#0a0a0a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Hover Content */}
          <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              {category && (
                <span className="text-caption text-white/70 block mb-2">
                  {category}
                </span>
              )}
              <h3 className="text-xl md:text-2xl font-medium mb-1">{title}</h3>
              {subtitle && (
                <p className="text-sm text-white/80">{subtitle}</p>
              )}
            </div>
          </div>
        </div>

        {/* Info Below Image (visible on mobile, hidden on hover for desktop) */}
        <div className="p-4 md:p-5 bg-white md:group-hover:opacity-0 transition-opacity duration-300">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-medium text-[#0a0a0a] mb-1 line-clamp-1">
                {title}
              </h3>
              <p className="text-sm text-[#a3a3a3]">{location}</p>
            </div>
            {year && (
              <span className="text-sm text-[#a3a3a3] shrink-0">{year}</span>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProjectCard;

