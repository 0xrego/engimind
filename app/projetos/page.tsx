"use client";

import Image from "next/image";
import Section from "@/components/Section";
import Link from "next/link";
import { useState } from "react";

export default function Projetos() {
    const [filter, setFilter] = useState("Todos");

    const projects = [
        {
            id: 1,
            title: "Expansão da Rede de Metro do Porto",
            category: "Transportes",
            location: "Porto, Portugal",
            image: "/images/projeto-metro.jpg",
            description: "Estudo de inserção urbana, traçado e avaliação de impacto para a nova linha de metro."
        },
        {
            id: 2,
            title: "Novo Aeroporto Internacional de Lisboa",
            category: "Aeroportos",
            location: "Lisboa, Portugal",
            image: "/images/projeto-aeroporto.jpg",
            description: "Planeamento estratégico de acessibilidades e dimensionamento dos terminais de passageiros."
        },
        {
            id: 3,
            title: "PMUS de São Paulo",
            category: "Mobilidade",
            location: "São Paulo, Brasil",
            image: "/images/projeto-mobilidade.jpg",
            description: "Desenvolvimento do Plano de Mobilidade Urbana Sustentável para a próxima década."
        },
        {
            id: 4,
            title: "Requalificação da Marginal de Luanda",
            category: "Infraestruturas",
            location: "Luanda, Angola",
            image: "/images/projeto-metro.jpg", // Placeholder
            description: "Projeto de execução para a requalificação viária e paisagística da frente ribeirinha."
        },
        {
            id: 5,
            title: "Terminal Intermodal de Campanhã",
            category: "Transportes",
            location: "Porto, Portugal",
            image: "/images/projeto-aeroporto.jpg", // Placeholder
            description: "Estudo de tráfego e circulação para o novo interface de transportes da cidade."
        },
        {
            id: 6,
            title: "Rede Ciclável de Aveiro",
            category: "Mobilidade",
            location: "Aveiro, Portugal",
            image: "/images/projeto-mobilidade.jpg", // Placeholder
            description: "Planeamento e projeto da rede de vias dedicadas a modos suaves em ambiente urbano."
        }
    ];

    const filteredProjects = filter === "Todos"
        ? projects
        : projects.filter(p => p.category === filter);

    const categories = ["Todos", "Transportes", "Aeroportos", "Mobilidade", "Infraestruturas"];

    return (
        <main className="flex-grow bg-white">
            {/* Hero Section */}
            <section className="pt-32 pb-16 md:pt-48 md:pb-32 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold tracking-wide uppercase mb-8">
                        Portfolio
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-slate-900 mb-8 tracking-tight leading-[1.05]">
                        Projetos que transformam.
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
                        Conheça alguns dos nossos trabalhos mais emblemáticos e o impacto que geramos nas comunidades onde atuamos.
                    </p>
                </div>
            </section>

            {/* Filters */}
            <section className="sticky top-20 z-30 bg-white/80 backdrop-blur-md border-b border-slate-100 py-4">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto">
                    <div className="flex justify-center gap-2 min-w-max">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat
                                    ? "bg-slate-900 text-white shadow-md"
                                    : "bg-transparent text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <Section className="bg-white section-padding">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="group cursor-pointer">
                            <div className="relative h-80 rounded-[2rem] overflow-hidden mb-8 bg-slate-100">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                            </div>
                            <div>
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-xs font-bold text-slate-900 uppercase tracking-wider bg-slate-100 px-2 py-1 rounded-md">
                                        {project.category}
                                    </span>
                                    <span className="text-xs text-slate-400 font-medium">
                                        {project.location}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-semibold text-slate-900 mb-3 group-hover:text-brand-blue transition-colors leading-tight">
                                    {project.title}
                                </h3>
                                <p className="text-slate-500 text-lg leading-relaxed mb-4">
                                    {project.description}
                                </p>
                                <span className="inline-flex items-center text-sm font-medium text-slate-900 group-hover:underline">
                                    Ver detalhes <span className="ml-1">→</span>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </main>
    );
}
