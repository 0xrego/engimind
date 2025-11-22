import React from 'react';

interface BadgeProps {
    children: React.ReactNode;
    className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
    return (
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-brand-light text-brand-blue ${className}`}>
            {children}
        </span>
    );
}
