"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface HeroCarouselProps {
  images: string[];
  title: React.ReactNode;
  subtitle?: string;
  caption?: string;
  interval?: number; // tempo em ms entre transições
  children?: React.ReactNode;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({
  images,
  title,
  subtitle,
  caption,
  interval = 5000, // 5 segundos por padrão
  children,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <section className="relative min-h-screen flex items-end bg-[#0a0a0a] overflow-hidden">
      {/* Background Images with Crossfade */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt=""
              fill
              className="object-cover"
              priority={index === 0}
              quality={90}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 container-editorial w-full pb-20 md:pb-32 pt-40">
        <div className="max-w-5xl">
          {caption && (
            <p className="text-caption text-white/60 mb-6 fade-in-up">
              {caption}
            </p>
          )}
          <h1 className="text-display text-white mb-8 fade-in-up fade-in-delay-1">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl leading-relaxed mb-12 fade-in-up fade-in-delay-2">
              {subtitle}
            </p>
          )}
          {children && (
            <div className="fade-in-up fade-in-delay-3">{children}</div>
          )}
        </div>
      </div>

      {/* Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-white"
                  : "w-1.5 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default HeroCarousel;

