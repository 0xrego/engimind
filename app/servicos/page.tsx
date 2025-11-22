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
        <main className="flex-grow bg-slate-50">
            {/* Hero Section */}
            <section className="bg-brand-blue py-20 md:py-28 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue-light to-brand-blue opacity-50"></div>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <Badge className="mb-6 bg-white/10 text-white border border-white/20 backdrop-blur-md">
                        Soluções Integradas
                    </Badge>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                        Serviços de Engenharia e Consultoria
                    </h1>
                    <p className="text-xl text-brand-light/90 max-w-3xl mx-auto font-light leading-relaxed">
                        Oferecemos uma abordagem multidisciplinar aos desafios da mobilidade, combinando know-how técnico, tecnologia de ponta e uma visão estratégica do território.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <Section className="bg-white">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group flex flex-col h-full">
                            <div className="w-14 h-14 bg-brand-light rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300 shadow-sm">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-brand-blue mb-4 min-h-[3.5rem] group-hover:text-brand-orange transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-brand-gray leading-relaxed flex-grow">
                                {service.description}
                            </p>
                            <div className="mt-6 pt-6 border-t border-slate-50">
                                <Link href="/contactos" className="inline-flex items-center text-sm font-bold text-brand-blue hover:text-brand-orange transition-colors uppercase tracking-wide">
                                    Pedir cotação <span className="ml-2">→</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* CTA Section */}
            <Section className="bg-brand-blue text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/4"></div>
                <div className="relative z-10 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6">Precisa de uma solução à medida?</h2>
                    <p className="text-brand-light/80 text-lg mb-8">
                        Cada projeto tem as suas especificidades. A nossa equipa está preparada para analisar o seu caso e propor a metodologia mais adequada.
                    </p>
                    <Link
                        href="/contactos"
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-brand-blue transition-all duration-200 bg-white rounded-xl hover:bg-brand-light shadow-lg hover:-translate-y-1"
                    >
                        Fale com um Especialista
                    </Link>
                </div>
            </Section>
        </main>
    );
}
