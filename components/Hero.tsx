import React from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  align?: "left" | "center";
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  align = "center",
}) => {
  return (
    <section
      className={`relative flex items-center justify-center min-h-[60vh] overflow-hidden bg-slate-900 text-white ${
        align === "left" ? "text-left" : "text-center"
      }`}
    >
      {backgroundImage && (
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-900/80 to-slate-900/90" />

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className={`max-w-4xl ${align === "center" ? "mx-auto" : ""}`}>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
