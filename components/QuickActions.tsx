"use client";

import React from "react";
import Link from "next/link";

export interface QuickAction {
  label: string;
  href: string;
  highlight?: boolean; // Para botões destacados como "Contactar"
}

interface QuickActionsProps {
  actions: QuickAction[];
  isScrolled?: boolean;
  pathname?: string;
  variant?: "desktop" | "mobile";
}

const QuickActions: React.FC<QuickActionsProps> = ({
  actions,
  isScrolled = false,
  pathname = "/",
  variant = "desktop",
}) => {
  if (variant === "mobile") {
    // Versão mobile: apenas ações destacadas ou reduzidas
    const highlightedActions = actions.filter((a) => a.highlight);
    const mainActions = highlightedActions.length > 0 
      ? highlightedActions 
      : actions.slice(0, 2); // Se não houver destacados, mostra as 2 primeiras

    return (
      <div className="space-y-3 pt-6 border-t border-[#e5e5e5] mt-6">
        <p className="text-xs font-medium text-[#a3a3a3] uppercase tracking-wider mb-3">
          Atalhos rápidos
        </p>
        {mainActions.map((action, index) => (
          <Link
            key={index}
            href={action.href}
            className={`block text-lg font-medium transition-colors ${
              pathname === action.href
                ? "text-[#0a0a0a]"
                : "text-[#0a0a0a]/70 hover:text-[#0a0a0a]"
            }`}
          >
            {action.label}
          </Link>
        ))}
      </div>
    );
  }

  // Versão desktop
  return (
    <div className="hidden md:flex items-center gap-2 ml-4 pl-4 border-l border-[#e5e5e5]/50">
      {actions.map((action, index) => {
        if (action.highlight) {
          return (
            <Link
              key={index}
              href={action.href}
              className="px-4 py-2 text-sm font-medium bg-[#0a0a0a] text-white hover:bg-[#525252] transition-colors duration-200"
            >
              {action.label}
            </Link>
          );
        }

        return (
          <Link
            key={index}
            href={action.href}
            className={`text-xs font-medium transition-colors duration-200 relative group ${
              pathname === action.href
                ? "text-[#0a0a0a]"
                : !isScrolled && pathname === "/"
                ? "text-white/70 hover:text-white"
                : "text-[#525252] hover:text-[#0a0a0a]"
            }`}
          >
            <span className="relative">
              {action.label}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-[#2563eb] transition-all duration-300 ${
                  pathname === action.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default QuickActions;

