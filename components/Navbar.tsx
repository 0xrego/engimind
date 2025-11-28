"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import QuickActions, { QuickAction } from "@/components/QuickActions";
import SearchSuggestions from "@/components/SearchSuggestions";
import { globalSearch, SearchResults } from "@/lib/search";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResults>({
    projects: [],
    services: [],
    news: [],
    total: 0,
  });
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Debounce search
  useEffect(() => {
    if (searchQuery.trim().length < 2) {
      setSearchResults({
        projects: [],
        services: [],
        news: [],
        total: 0,
      });
      setShowSuggestions(false);
      return;
    }

    const timeoutId = setTimeout(() => {
      const results = globalSearch(searchQuery, {
        maxResultsPerType: 3, // Máximo 3 por tipo
        maxTotalResults: 10, // Máximo 10 no total
      });
      setSearchResults(results);
      setShowSuggestions(true);
    }, 200); // Debounce de 200ms

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
  };

  // Handle search submit
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() && searchResults.total > 0) {
      // Navegar para o primeiro resultado ou página de pesquisa
      // Por agora, apenas fecha as sugestões
      setShowSuggestions(false);
    }
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        // Delay para permitir cliques nos resultados
        setTimeout(() => {
          setShowSuggestions(false);
        }, 200);
      }
    };

    if (showSuggestions) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [showSuggestions]);

  // Close suggestions on route change
  useEffect(() => {
    setShowSuggestions(false);
    setSearchQuery("");
  }, [pathname]);

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { name: "Projetos", href: "/projects" },
    { name: "Serviços", href: "/services" },
    { name: "Formação", href: "/courses" },
    { name: "Sobre", href: "/about" },
    { name: "Notícias", href: "/news" },
  ];

  // Atalhos rápidos - apenas botão destacado
  const quickActions: QuickAction[] = [
    { label: "Contactar", href: "/contacts", highlight: true },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isOpen
            ? "bg-white/99 backdrop-blur-md border-b border-[#d4d4d4] shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="container-editorial">
          <div className="flex justify-between items-center h-20 md:h-24 gap-4">
            {/* Logo */}
            <Link
              href="/"
              className={`relative z-50 transition-opacity hover:opacity-80 shrink-0 ${
                isScrolled || isOpen ? "opacity-100" : "opacity-100"
              }`}
            >
              <Image
                src="/logo-engimind.png"
                alt="ENGIMIND"
                width={140}
                height={40}
                className={`h-9 w-auto transition-all duration-300 ${
                  !isScrolled && !isOpen && pathname === "/"
                    ? "brightness-0 invert drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
                    : "drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]"
                }`}
                priority
              />
            </Link>

            {/* Desktop Navigation + Search + Contact Button */}
            <div className="hidden md:flex items-center flex-1 justify-end gap-6">
              {/* Desktop Navigation */}
              <nav className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-semibold transition-colors duration-200 link-underline tracking-normal ${
                      isActive(link.href)
                        ? "text-[#0a0a0a] font-bold"
                        : !isScrolled && pathname === "/"
                        ? "text-white hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
                        : "text-[#0a0a0a] hover:text-[#0a0a0a] font-semibold"
                    }`}
                    style={{ fontVariant: "normal", textRendering: "optimizeLegibility" }}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              {/* Search Field */}
              <div ref={searchContainerRef} className="relative">
                <form onSubmit={handleSearchSubmit} className="relative">
                  <input
                    ref={searchInputRef}
                    type="search"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onFocus={() => {
                      if (searchQuery.trim().length >= 2 && searchResults.total > 0) {
                        setShowSuggestions(true);
                      }
                    }}
                    placeholder="Pesquisar..."
                    className={`w-44 px-3 py-1.5 text-sm font-medium bg-transparent border-b-2 transition-all duration-200 focus:outline-none focus:w-52 ${
                      !isScrolled && pathname === "/"
                        ? "border-white/60 text-white placeholder:text-white/90 focus:border-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]"
                        : "border-[#0a0a0a]/30 text-[#0a0a0a] placeholder:text-[#525252] focus:border-[#2563eb]"
                    }`}
                  />
                  <button
                    type="submit"
                    className={`absolute right-2 top-1/2 -translate-y-1/2 transition-opacity ${
                      !isScrolled && pathname === "/"
                        ? "opacity-80 hover:opacity-100"
                        : "opacity-60 hover:opacity-100"
                    }`}
                    aria-label="Pesquisar"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </form>
                {/* Search Suggestions */}
                <SearchSuggestions
                  results={searchResults}
                  query={searchQuery}
                  isOpen={showSuggestions}
                  onClose={() => setShowSuggestions(false)}
                />
              </div>

              {/* Contact Button - Desktop */}
              <Link
                href="/contacts"
                className="px-5 py-2.5 text-sm font-bold bg-[#0a0a0a] text-white hover:bg-[#1a1a1a] transition-colors duration-200 shrink-0 shadow-sm"
              >
                Contactar
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50 md:hidden p-2 -mr-2 shrink-0"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 transition-all duration-300 origin-center ${
                    isOpen
                      ? "rotate-45 translate-y-2 bg-[#0a0a0a]"
                      : !isScrolled && pathname === "/"
                      ? "bg-white"
                      : "bg-[#0a0a0a]"
                  }`}
                />
                <span
                  className={`w-full h-0.5 transition-all duration-300 ${
                    isOpen
                      ? "opacity-0"
                      : !isScrolled && pathname === "/"
                      ? "bg-white"
                      : "bg-[#0a0a0a]"
                  }`}
                />
                <span
                  className={`w-full h-0.5 transition-all duration-300 origin-center ${
                    isOpen
                      ? "-rotate-45 -translate-y-2 bg-[#0a0a0a]"
                      : !isScrolled && pathname === "/"
                      ? "bg-white"
                      : "bg-[#0a0a0a]"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-500 md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col justify-center h-full px-8">
          <nav className="space-y-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block text-3xl font-bold transition-all duration-300 ${
                  isOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                } ${
                  isActive(link.href)
                    ? "text-[#0a0a0a]"
                    : "text-[#0a0a0a] hover:text-[#0a0a0a]"
                }`}
                style={{ transitionDelay: `${index * 50 + 100}ms` }}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Search Field - Mobile */}
          <form
            onSubmit={handleSearchSubmit}
            className={`relative mt-6 transition-all duration-300 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <input
              type="search"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Pesquisar..."
              className="w-full px-4 py-3 text-base font-medium bg-white border-2 border-[#0a0a0a]/20 text-[#0a0a0a] placeholder:text-[#525252] focus:outline-none focus:border-[#2563eb] transition-colors"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 opacity-50 hover:opacity-100 transition-opacity"
              aria-label="Pesquisar"
            >
              <svg
                className="w-5 h-5 text-[#0a0a0a]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </form>

          {/* Contact Button - Mobile */}
          <div
            className={`mt-6 transition-all duration-300 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "350ms" }}
          >
            <Link
              href="/contacts"
              className="block w-full text-center px-6 py-3.5 text-base font-bold bg-[#0a0a0a] text-white hover:bg-[#1a1a1a] transition-colors shadow-md"
              onClick={() => setIsOpen(false)}
            >
              Contactar
            </Link>
          </div>

          {/* Contact Info */}
          <div
            className={`mt-6 pt-6 border-t border-[#e5e5e5] transition-all duration-300 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <p className="text-sm text-[#a3a3a3] mb-2">Contacte-nos</p>
            <a
              href="mailto:engimind@engimind.com"
              className="text-lg font-medium text-[#0a0a0a]"
            >
              engimind@engimind.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
