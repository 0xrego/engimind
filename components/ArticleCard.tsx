"use client";

import React from "react";
import Link from "next/link";

interface ArticleCardProps {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  category: string;
  featured?: boolean;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  id,
  date,
  title,
  excerpt,
  category,
  featured = false,
}) => {
  return (
    <Link href={`/news/${id}`} className="group block">
      <article
        className={`flex flex-col h-full ${
          featured ? "md:flex-row md:gap-8" : ""
        }`}
      >
        {/* Content */}
        <div className={`flex-1 ${featured ? "md:py-8" : ""}`}>
          {/* Meta */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-caption text-[#2563eb]">{category}</span>
            <span className="w-1 h-1 rounded-full bg-[#e5e5e5]" />
            <span className="text-meta">{date}</span>
          </div>

          {/* Title */}
          <h3
            className={`font-medium text-[#0a0a0a] mb-3 group-hover:text-[#525252] transition-colors duration-300 ${
              featured ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
            }`}
          >
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-body line-clamp-3 mb-4">{excerpt}</p>

          {/* Read More */}
          <span className="inline-flex items-center text-sm font-medium text-[#0a0a0a] group-hover:text-[#2563eb] transition-colors duration-300">
            Ler artigo
            <svg
              className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </div>
      </article>

      {/* Divider */}
      <div className="divider mt-8" />
    </Link>
  );
};

export default ArticleCard;

