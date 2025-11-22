import React from 'react';

interface MetricCardProps {
    value: string;
    label: string;
    icon?: React.ReactNode;
}

export default function MetricCard({ value, label, icon }: MetricCardProps) {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            {icon && <div className="text-3xl mb-3 text-brand-orange">{icon}</div>}
            <div className="text-3xl md:text-4xl font-bold text-brand-blue mb-1">
                {value}
            </div>
            <div className="text-sm font-medium text-brand-gray uppercase tracking-wide">
                {label}
            </div>
        </div>
    );
}
