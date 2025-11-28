"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SearchResult, SearchResults, getResultUrl } from "@/lib/search";

interface SearchSuggestionsProps {
  results: SearchResults;
  query: string;
  isOpen: boolean;
  onClose: () => void;
  onSelect?: (result: SearchResult) => void;
}

const SearchSuggestions: React.FC<SearchSuggestionsProps> = ({
  results,
  query,
  isOpen,
  onClose,
  onSelect,
}) => {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  // Flatten all results into a single array for keyboard navigation
  const allResults: SearchResult[] = [
    ...results.projects,
    ...results.services,
    ...results.news,
  ];

  // Reset selected index when results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [results]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen || allResults.length === 0) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < allResults.length - 1 ? prev + 1 : 0
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev > 0 ? prev - 1 : allResults.length - 1
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (allResults[selectedIndex]) {
          handleSelect(allResults[selectedIndex]);
        }
      } else if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, allResults, selectedIndex, onClose]);

  // Scroll selected item into view
  useEffect(() => {
    if (containerRef.current && selectedIndex >= 0) {
      const selectedElement = containerRef.current.querySelector(
        `[data-index="${selectedIndex}"]`
      );
      if (selectedElement) {
        selectedElement.scrollIntoView({
          block: "nearest",
          behavior: "smooth",
        });
      }
    }
  }, [selectedIndex]);

  const handleSelect = (result: SearchResult) => {
    if (onSelect) {
      onSelect(result);
    }
    const url = getResultUrl(result);
    router.push(url);
    onClose();
  };

  const getTypeLabel = (type: SearchResult["type"]): string => {
    switch (type) {
      case "project":
        return "Projetos";
      case "service":
        return "Serviços";
      case "news":
        return "Notícias";
      default:
        return "";
    }
  };

  if (!isOpen || results.total === 0) {
    if (isOpen && query.trim().length >= 2) {
      return (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-[#e5e5e5] shadow-lg rounded-md overflow-hidden z-50">
          <div className="px-4 py-6 text-center text-sm text-[#a3a3a3]">
            Sem resultados para &quot;{query}&quot;
          </div>
        </div>
      );
    }
    return null;
  }

  let currentIndex = 0;

  return (
    <div
      ref={containerRef}
      className="absolute top-full left-0 right-0 mt-2 bg-white border border-[#e5e5e5] shadow-lg rounded-md overflow-hidden z-50 max-h-[400px] overflow-y-auto"
    >
      {/* Projects */}
      {results.projects.length > 0 && (
        <div>
          <div className="px-4 py-2 bg-[#fafafa] border-b border-[#e5e5e5]">
            <span className="text-xs font-medium text-[#a3a3a3] uppercase tracking-wider">
              Projetos
            </span>
          </div>
          {results.projects.map((result) => {
            const index = currentIndex++;
            return (
              <button
                key={result.id}
                data-index={index}
                onClick={() => handleSelect(result)}
                className={`w-full text-left px-4 py-3 hover:bg-[#fafafa] transition-colors ${
                  selectedIndex === index ? "bg-[#fafafa]" : ""
                }`}
              >
                <div className="font-medium text-sm text-[#0a0a0a] mb-1">
                  {result.title}
                </div>
                {result.subtitle && (
                  <div className="text-xs text-[#525252] mb-1">
                    {result.subtitle}
                  </div>
                )}
                <div className="text-xs text-[#a3a3a3] line-clamp-1">
                  {result.description}
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* Services */}
      {results.services.length > 0 && (
        <div>
          <div className="px-4 py-2 bg-[#fafafa] border-b border-[#e5e5e5]">
            <span className="text-xs font-medium text-[#a3a3a3] uppercase tracking-wider">
              Serviços
            </span>
          </div>
          {results.services.map((result) => {
            const index = currentIndex++;
            return (
              <button
                key={result.id}
                data-index={index}
                onClick={() => handleSelect(result)}
                className={`w-full text-left px-4 py-3 hover:bg-[#fafafa] transition-colors ${
                  selectedIndex === index ? "bg-[#fafafa]" : ""
                }`}
              >
                <div className="font-medium text-sm text-[#0a0a0a] mb-1">
                  {result.title}
                </div>
                <div className="text-xs text-[#a3a3a3] line-clamp-1">
                  {result.description}
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* News */}
      {results.news.length > 0 && (
        <div>
          <div className="px-4 py-2 bg-[#fafafa] border-b border-[#e5e5e5]">
            <span className="text-xs font-medium text-[#a3a3a3] uppercase tracking-wider">
              Notícias
            </span>
          </div>
          {results.news.map((result) => {
            const index = currentIndex++;
            return (
              <button
                key={result.id}
                data-index={index}
                onClick={() => handleSelect(result)}
                className={`w-full text-left px-4 py-3 hover:bg-[#fafafa] transition-colors ${
                  selectedIndex === index ? "bg-[#fafafa]" : ""
                }`}
              >
                <div className="font-medium text-sm text-[#0a0a0a] mb-1">
                  {result.title}
                </div>
                <div className="text-xs text-[#a3a3a3] line-clamp-1">
                  {result.description}
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchSuggestions;

