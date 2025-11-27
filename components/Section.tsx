import React from "react";

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    background?: "white" | "light" | "dark";
}

const Section: React.FC<SectionProps> = ({
    children,
    className = "",
    id,
    background = "white",
}) => {
    const bgClasses = {
        white: "bg-white text-slate-900",
        light: "bg-slate-50 text-slate-900",
        dark: "bg-slate-900 text-white",
    };

    return (
        <section
            id={id}
            className={`py-16 md:py-24 ${bgClasses[background]} ${className}`}
        >
            <div className="container mx-auto px-6">{children}</div>
        </section>
    );
};

export default Section;
