"use client";

import React, { useRef, useEffect } from "react";

interface HeroVideoProps {
  videoSrc: string;
  children?: React.ReactNode;
}

const HeroVideo: React.FC<HeroVideoProps> = ({ videoSrc, children }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Garantir que o vídeo está em loop contínuo
    const handleEnded = () => {
      video.currentTime = 0;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Ignorar erros de autoplay
        });
      }
    };

    const handleTimeUpdate = () => {
      // Se o vídeo chegou ao fim (com pequena margem), reiniciar
      if (video.currentTime >= video.duration - 0.1) {
        video.currentTime = 0;
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Ignorar erros de autoplay
          });
        }
      }
    };

    const handleLoadedMetadata = () => {
      video.loop = true; // Garantir que o atributo loop está definido
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Ignorar erros de autoplay
        });
      }
    };

    const handleCanPlay = () => {
      video.loop = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Ignorar erros de autoplay
        });
      }
    };

    // Adicionar todos os event listeners
    video.addEventListener("ended", handleEnded);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("canplay", handleCanPlay);

    // Definir loop programaticamente
    video.loop = true;

    // Tentar reproduzir quando o vídeo estiver pronto
    if (video.readyState >= 2) {
      video.loop = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Ignorar erros de autoplay
        });
      }
    }

    return () => {
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-end bg-[#0a0a0a] overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 container-editorial w-full pb-12 md:pb-16 lg:pb-20 pt-24">
        {children}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;

