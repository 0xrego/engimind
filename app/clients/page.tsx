import Hero from "@/components/Hero";
import Section from "@/components/Section";

export default function Clients() {
    const clientCategories = [
        {
            title: "Administração Central",
            description:
                "Colaboramos com organismos governamentais na definição e execução de políticas nacionais de transportes.",
        },
        {
            title: "Administração Local",
            description:
                "Apoiamos Câmaras Municipais e autarquias no desenvolvimento de Planos de Mobilidade e gestão de tráfego urbano.",
        },
        {
            title: "Gestores de Infraestruturas",
            description:
                "Trabalhamos com concessionárias de autoestradas, aeroportos e portos para otimizar a operação e segurança.",
        },
        {
            title: "Operadores de Transportes",
            description:
                "Auxiliamos empresas de transporte público na reestruturação de redes e otimização da oferta.",
        },
        {
            title: "Promotores Imobiliários",
            description:
                "Realizamos estudos de tráfego e acessibilidades para centros comerciais, loteamentos e grandes empreendimentos.",
        },
    ];

    return (
        <main>
            <Hero
                title="Clientes e Parceiros"
                subtitle="A confiança de quem constrói o futuro connosco."
                backgroundImage="/images/hero-clients.jpg"
            />

            <Section>
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <p className="text-lg text-slate-600 leading-relaxed">
                        A ENGIMIND trabalha com uma significativa diversidade de clientes,
                        públicos e privados, desenvolvendo soluções desenhadas para dar
                        resposta às especificações de cada situação. Combinamos inovação com
                        a experiência adquirida em centenas de projetos.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {clientCategories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all"
                        >
                            <h3 className="text-xl font-bold text-slate-900 mb-4">
                                {category.title}
                            </h3>
                            <p className="text-slate-600">{category.description}</p>
                        </div>
                    ))}
                </div>

                {/* Placeholder for Client Logos Grid - In a real scenario, we would map through logo images */}
                <div className="bg-slate-50 rounded-3xl p-12 text-center">
                    <h2 className="text-2xl font-bold mb-8 text-slate-900">
                        Alguns dos nossos clientes
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 opacity-60 grayscale">
                        {/* Placeholder items for logos */}
                        {[...Array(12)].map((_, i) => (
                            <div
                                key={i}
                                className="h-16 bg-slate-200 rounded-lg flex items-center justify-center text-xs text-slate-500 font-medium"
                            >
                                LOGO CLIENTE {i + 1}
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </main>
    );
}
