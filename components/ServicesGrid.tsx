import React from "react";

interface ServiceItemProps {
    title: string;
    description: string;
    features?: string[];
    icon?: React.ReactNode;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
    title,
    description,
    features,
    icon,
}) => {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-brand-blue/20 hover:shadow-md transition-all duration-300 h-full flex flex-col">
            <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-blue/5 text-brand-blue text-2xl">
                {icon || (
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                    </svg>
                )}
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
            <p className="text-slate-600 leading-relaxed mb-6 flex-1">
                {description}
            </p>
            {features && features.length > 0 && (
                <ul className="space-y-2 mt-auto">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start text-sm text-slate-600">
                            <span className="mr-2 text-brand-orange mt-1">•</span>
                            {feature}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

interface ServicesGridProps {
    services: ServiceItemProps[];
}

const ServicesGrid: React.FC<ServicesGridProps> = ({ services }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
                <ServiceItem key={index} {...service} />
            ))}
        </div>
    );
};

export default ServicesGrid;
