"use client";

import React from "react";
import Image from "next/image";

interface BigHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  overlay?: boolean;
  align?: "left" | "center";
  size?: "default" | "large" | "full";
  caption?: string;
}

const BigHero: React.FC<BigHeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  overlay = true,
  align = "left",
  size = "default",
  caption,
}) => {
  const sizeClasses = {
    default: "min-h-[60vh]",
    large: "min-h-[80vh]",
    full: "min-h-screen",
  };

  return (
    <section
      className={`relative flex items-end ${sizeClasses[size]} overflow-hidden bg-[#0a0a0a]`}
    >
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover"
            priority
            quality={90}
          />
          {overlay && (
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
          )}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 container-editorial w-full pb-12 md:pb-16 lg:pb-20 pt-24">
        <div
          className={`max-w-4xl ${
            align === "center" ? "mx-auto text-center" : ""
          }`}
        >
          {caption && (
            <p className="text-caption text-white/60 mb-6 fade-in-up">
              {caption}
            </p>
          )}
          <h1 className="text-display text-white mb-6 fade-in-up fade-in-delay-1">
            {title}
          </h1>
          {subtitle && (
            <p className="text-subheadline text-white/80 max-w-2xl fade-in-up fade-in-delay-2">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default BigHero;

