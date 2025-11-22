import Section from "@/components/Section";
import Badge from "@/components/Badge";
import Link from "next/link";

export default function Servicos() {
    const services = [
        {
            title: "Estudos de Procura de Tráfego, Circulação e Estacionamento",
            description: "Analisamos os padrões de mobilidade atuais e futuros para fundamentar decisões de planeamento. Realizamos contagens de tráfego, inquéritos origem-destino e estudos de estacionamento para otimizar a circulação urbana e o dimensionamento de infraestruturas.",
            icon: "🚗"
        },
        {
            title: "Estudos e Planos de Mobilidade e Transportes",
            description: "Desenvolvemos Planos de Mobilidade Urbana Sustentável (PMUS) e Planos de Mobilidade para Empresas e Polos Geradores de Tráfego. O nosso foco é a integração de modos suaves, transportes públicos e a promoção de uma mobilidade mais eficiente e ecológica.",
            icon: "🗺️"
        },
        {
            title: "Projetos de Infraestruturas Rodoviárias e de Transportes",
            description: "Elaboramos projetos de execução para estradas, arruamentos urbanos, interfaces de transportes e terminais rodoviários. A nossa engenharia garante soluções geométricas seguras, funcionais e integradas na malha urbana existente.",
            icon: "🏗️"
        },
        {
            title: "Microssimulação Dinâmica de Tráfego",
            description: "Utilizamos software avançado (Vissim, Aimsun) para simular cenários complexos de tráfego viário e pedonal. A microssimulação permite testar soluções antes da sua implementação, visualizando impactos e validando o desempenho da rede em 3D.",
            icon: "💻"
        },
        {
            title: "Estudos de Sinalização e Segurança Rodoviária",
            description: "Projetamos sistemas de sinalização vertical, horizontal e semafórica. Realizamos auditorias de segurança rodoviária para identificar pontos negros e propor medidas de acalmia de tráfego que salvam vidas e reduzem a sinistralidade.",
            icon: "🚦"
        },
        {
            title: "Estudos de Rentabilidade Económica e Financeira",
            description: "Avaliamos a viabilidade de projetos de infraestruturas de transporte através de análises Custo-Benefício (ACB). Apoiamos a estruturação de parcerias público-privadas e concessões, garantindo a sustentabilidade financeira dos investimentos.",
            icon: "📊"
        }
    ];

    return (
        <main className="flex-grow bg-white">
            {/* Hero Section */}
            <section className="pt-32 pb-16 md:pt-48 md:pb-32 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold tracking-wide uppercase mb-8">
                        O que fazemos
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-slate-900 mb-8 tracking-tight leading-[1.05]">
                        Serviços de Engenharia e Consultoria.
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
                        Oferecemos uma abordagem multidisciplinar aos desafios da mobilidade, combinando know-how técnico, tecnologia de ponta e uma visão estratégica do território.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <Section className="bg-white border-t border-slate-100 section-padding">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24">
                    {services.map((service, idx) => (
                        <div key={idx} className="group">
                            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-500">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-semibold text-slate-900 mb-4 min-h-[3.5rem]">
                                {service.title}
                            </h3>
                            <p className="text-slate-500 text-lg leading-relaxed mb-8">
                                {service.description}
                            </p>
                            <Link href="/contactos" className="text-slate-900 font-medium hover:text-brand-blue transition-colors">
                                Pedir cotação <span className="ml-2">→</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </Section>

            {/* CTA Section */}
            <Section className="bg-slate-50 section-padding">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-8">Precisa de uma solução à medida?</h2>
                    <p className="text-slate-500 text-xl mb-12 leading-relaxed">
                        Cada projeto tem as suas especificidades. A nossa equipa está preparada para analisar o seu caso e propor a metodologia mais adequada.
                    </p>
                    <Link
                        href="/contactos"
                        className="btn-primary"
                    >
                        Fale com um Especialista
                    </Link>
                </div>
            </Section>
        </main>
    );
}
