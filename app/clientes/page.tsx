import Section from "@/components/Section";
import Link from "next/link";

export default function Clientes() {
    const sectors = [
        {
            title: "Administração Central",
            description: "Apoiamos organismos governamentais e institutos públicos na definição de políticas nacionais de mobilidade, planeamento estratégico de infraestruturas e regulação do setor dos transportes. A nossa consultoria técnica fundamenta decisões de investimento público de grande escala.",
            icon: "🏛️"
        },
        {
            title: "Operadores de Transportes",
            description: "Empresas de transporte rodoviário, ferroviário e fluvial. Otimizamos redes, horários e frotas para um serviço mais eficiente.",
            icon: "🚌"
        },
        {
            title: "Promotores Imobiliários",
            description: "Desenvolvedores de projetos residenciais, comerciais e turísticos. Garantimos a acessibilidade e o cumprimento dos requisitos legais.",
            icon: "🏗️"
        },
        {
            title: "Gestores de Infraestruturas",
            description: "Concessionárias de autoestradas, aeroportos e terminais logísticos. Estudos de tráfego e receitas para maximizar o valor dos ativos.",
            icon: "🛣️"
        },
        {
            title: "Indústria e Logística",
            description: "Grandes unidades industriais e plataformas logísticas. Planos de circulação interna e acessibilidades para veículos pesados.",
            icon: "🏭"
        },
        {
            title: "Retalho e Serviços",
            description: "Centros comerciais, hospitais e campus universitários. Estudos de estacionamento e acessibilidade para clientes e utentes.",
            icon: "🛒"
        }
    ];

    return (
        <main className="flex-grow bg-white">
            {/* Hero Section */}
            <section className="pt-32 pb-16 md:pt-48 md:pb-32 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold tracking-wide uppercase mb-8">
                        Parceiros
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-slate-900 mb-8 tracking-tight leading-[1.05]">
                        Quem confia em nós.
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
                        Construímos relações duradouras baseadas na confiança, rigor técnico e entrega de valor. Trabalhamos com os principais atores do setor.
                    </p>
                </div>
            </section>

            {/* Sectors Grid */}
            <Section className="bg-white border-t border-slate-100 section-padding">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24">
                    {sectors.map((sector, idx) => (
                        <div key={idx} className="group">
                            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-500">
                                {sector.icon}
                            </div>
                            <h3 className="text-2xl font-semibold text-slate-900 mb-4 min-h-[3.5rem]">
                                {sector.title}
                            </h3>
                            <p className="text-slate-500 text-lg leading-relaxed">
                                {sector.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* CTA Section */}
            <Section className="bg-slate-50 section-padding">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-8">Junte-se à nossa lista de clientes satisfeitos</h2>
                    <p className="text-slate-500 text-xl mb-12 leading-relaxed">
                        Estamos prontos para enfrentar o seu próximo desafio de mobilidade.
                    </p>
                    <Link
                        href="/contactos"
                        className="btn-primary"
                    >
                        Contacte-nos
                    </Link>
                </div>
            </Section>
        </main>
    );
}
