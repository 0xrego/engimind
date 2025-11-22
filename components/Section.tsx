import React from 'react';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    title?: string;
    subtitle?: string;
    id?: string;
}

export default function Section({ children, className = "", title, subtitle, id }: SectionProps) {
    return (
        <section id={id} className={`py-16 md:py-24 ${className}`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {(title || subtitle) && (
                    <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
                        {title && (
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4 tracking-tight">
                                {title}
                            </h2>
                        )}
                        {subtitle && (
                            <p className="text-lg text-brand-gray leading-relaxed">
                                {subtitle}
                            </p>
                        )}
                    </div>
                )}
                {children}
            </div>
        </section>
    );
}
