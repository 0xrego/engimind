import React from "react";

interface CardProps {
    title: string;
    description?: string;
    icon?: React.ReactNode;
    image?: string;
    className?: string;
    tags?: string[];
}

const Card: React.FC<CardProps> = ({
    title,
    description,
    icon,
    image,
    className = "",
    tags,
}) => {
    return (
        <div
            className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 flex flex-col h-full ${className}`}
        >
            {image && (
                <div className="h-48 overflow-hidden relative">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
            )}
            <div className="p-6 flex-1 flex flex-col">
                {icon && <div className="mb-4 text-brand-orange text-3xl">{icon}</div>}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-blue transition-colors">
                    {title}
                </h3>
                {description && (
                    <p className="text-slate-600 leading-relaxed mb-4 flex-1">
                        {description}
                    </p>
                )}
                {tags && tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-auto pt-4">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 text-slate-600"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card;
