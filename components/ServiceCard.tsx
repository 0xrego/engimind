"use client";

import React from "react";
import Link from "next/link";

interface ServiceCardProps {
  slug?: string;
  title: string;
  description: string;
  features?: string[];
  index?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  slug,
  title,
  description,
  features,
  index = 0,
}) => {
  const content = (
    <article className="group service-item">
      <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
        {/* Number */}
        <div className="shrink-0">
          <span className="text-4xl md:text-5xl font-medium text-[#e5e5e5] group-hover:text-[#0a0a0a] transition-colors duration-300">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-medium text-[#0a0a0a] mb-3 group-hover:text-[#525252] transition-colors duration-300">
            {title}
          </h3>
          <p className="text-body mb-4 max-w-2xl">{description}</p>

          {/* Features */}
          {features && features.length > 0 && (
            <ul className="flex flex-wrap gap-2">
              {features.map((feature, i) => (
                <li
                  key={i}
                  className="text-sm text-[#a3a3a3] px-3 py-1 bg-[#fafafa] rounded-full"
                >
                  {feature}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Arrow */}
        <div className="hidden md:block shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg
            className="w-6 h-6 text-[#0a0a0a]"
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
        </div>
      </div>
    </article>
  );

  if (slug) {
    return (
      <Link href={`/servicos/${slug}`} className="block">
        {content}
      </Link>
    );
  }

  return content;
};

export default ServiceCard;

