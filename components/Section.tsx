"use client";

import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "light" | "dark";
  spacing?: "default" | "large" | "small" | "none";
  container?: "default" | "narrow" | "full";
}

const Section: React.FC<SectionProps> = ({
  children,
  className = "",
  id,
  background = "white",
  spacing = "default",
  container = "default",
}) => {
  const bgClasses = {
    white: "bg-white",
    light: "bg-[#fafafa]",
    dark: "bg-[#0a0a0a] text-white",
  };

  const spacingClasses = {
    default: "section-spacing",
    large: "py-16 md:py-24 lg:py-32",
    small: "py-12 md:py-16",
    none: "",
  };

  const containerClasses = {
    default: "container-editorial",
    narrow: "container-narrow",
    full: "px-0",
  };

  return (
    <section
      id={id}
      className={`${bgClasses[background]} ${spacingClasses[spacing]} ${className}`}
    >
      <div className={containerClasses[container]}>{children}</div>
    </section>
  );
};

export default Section;
