import React from 'react';

interface MetricCardProps {
    value: string;
    label: string;
}

export default function MetricCard({ value, label }: MetricCardProps) {
    return (
        <div className="flex flex-col items-center text-center p-4">
            <div className="text-4xl md:text-5xl font-semibold text-slate-900 mb-2 tracking-tight">
                {value}
            </div>
            <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                {label}
            </div>
        </div>
    );
}
