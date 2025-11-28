"use client";

import React from "react";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  isDirector?: boolean;
  image?: string;
}

interface TeamGridProps {
  members: TeamMember[] | string[];
  type?: "directors" | "team";
}

const TeamGrid: React.FC<TeamGridProps> = ({ members, type = "team" }) => {
  if (type === "directors") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {(members as TeamMember[]).map((member, index) => (
          <div
            key={index}
            className="group fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Photo */}
            <div className="aspect-[3/4] bg-[#fafafa] mb-6 overflow-hidden relative">
              {member.image ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-6xl font-medium text-[#e5e5e5] group-hover:text-[#a3a3a3] transition-colors duration-300">
                  {member.name.charAt(0)}
                </div>
              )}
            </div>

            {/* Info */}
            <h4 className="text-lg font-medium text-[#0a0a0a] mb-1">
              {member.name}
            </h4>
            <p className="text-sm text-[#a3a3a3]">{member.role}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {(members as string[]).map((name, index) => (
        <div
          key={index}
          className="py-4 px-5 bg-[#fafafa] hover:bg-[#f0f0f0] transition-colors duration-200 fade-in-up"
          style={{ animationDelay: `${index * 0.02}s` }}
        >
          <span className="text-sm font-medium text-[#0a0a0a]">{name}</span>
        </div>
      ))}
    </div>
  );
};

export default TeamGrid;

