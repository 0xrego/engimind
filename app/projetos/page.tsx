import Section from "@/components/Section";
import Badge from "@/components/Badge";
import Image from "next/image";

export default function Projetos() {
    const filters = [
        "Todos",
        "Planos de Mobilidade",
        "BRT e Metro Ligeiro",
        "Aeroportos",
        "Empreendimentos Comerciais",
        "Infraestruturas Rodoviárias"
    ];

    const projects = [
        {
            title: "Expansão da Rede de Metro do Porto",
            category: "BRT e Metro Ligeiro",
            location: "Porto, Portugal",
            image: "/images/projeto-metro.jpg",
            description: "Estudo de inserção urbana, traçado e procura para as novas linhas de Metro Ligeiro e BRT na Área Metropolitana do Porto."
        },
        {
            title: "Novo Aeroporto Internacional de Lisboa",
            category: "Aeroportos",
            location: "Lisboa, Portugal",
            image: "/images/projeto-aeroporto.jpg",
            description: "Estudos de acessibilidades, dimensionamento de terminais e simulação de fluxos de passageiros para a nova infraestrutura aeroportuária."
        },
        {
            title: "PMUS de Coimbra",
            category: "Planos de Mobilidade",
            location: "Coimbra, Portugal",
            image: "/images/projeto-mobilidade.jpg",
            description: "Elaboração do Plano de Mobilidade Urbana Sustentável, definindo a estratégia para a descarbonização e promoção dos modos suaves."
        },
        {
            title: "Centro Comercial Colombo - Expansão",
            category: "Empreendimentos Comerciais",
            location: "Lisboa, Portugal",
            image: "/images/hero-mobility.jpg", // Placeholder reuse
            description: "Estudo de Impacto de Tráfego e redefinição dos acessos e parqueamento para o projeto de expansão do centro comercial."
        },
        {
            title: "Corredor BRT Salvador",
            category: "BRT e Metro Ligeiro",
            location: "Salvador, Brasil",
            image: "/images/projeto-metro.jpg", // Placeholder reuse
            description: "Projeto funcional e operacional para o novo sistema de Bus Rapid Transit, integrando com a rede de metro existente."
        },
        {
            title: "Requalificação da EN125",
            category: "Infraestruturas Rodoviárias",
            location: "Algarve, Portugal",
            image: "/images/projeto-mobilidade.jpg", // Placeholder reuse
            description: "Projeto de execução para a requalificação da estrada nacional, com foco na segurança rodoviária e fluidez de tráfego."
        }
    ];

    return (
        <main className="flex-grow bg-slate-50">
            {/* Hero Section */}
            <section className="bg-brand-blue py-20 md:py-28 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue-light to-brand-blue opacity-50"></div>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <Badge className="mb-6 bg-white/10 text-white border border-white/20 backdrop-blur-md">
                        Portefólio Global
                    </Badge>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                        Projetos que Transformam
                    </h1>
                    <p className="text-xl text-brand-light/90 max-w-3xl mx-auto font-light leading-relaxed">
                        Da escala local à grande infraestrutura, deixamos a nossa marca em projetos que melhoram a vida das pessoas e a eficiência das cidades.
                    </p>
                </div>
            </section>

            {/* Filters & Grid */}
            <Section className="bg-white">
                {/* Filter Bar (Static UI) */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {filters.map((filter, idx) => (
                        <button
                            key={idx}
                            className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${idx === 0
                                    ? "bg-brand-blue text-white shadow-md"
                                    : "bg-slate-100 text-brand-gray hover:bg-brand-light hover:text-brand-blue"
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                            <div className="relative h-56 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute top-4 left-4">
                                    <Badge className="bg-white/90 backdrop-blur text-xs font-bold shadow-sm text-brand-blue">
                                        {project.category}
                                    </Badge>
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="text-xs font-bold text-brand-orange uppercase tracking-wider mb-2 flex items-center gap-1">
                                    <span>📍</span> {project.location}
                                </div>
                                <h3 className="text-xl font-bold text-brand-blue mb-3 group-hover:text-brand-orange transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-brand-gray text-sm leading-relaxed mb-4 flex-grow">
                                    {project.description}
                                </p>
                                <div className="pt-4 border-t border-slate-50">
                                    <span className="text-sm font-bold text-brand-blue group-hover:underline">Ver detalhes →</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </main>
    );
}
