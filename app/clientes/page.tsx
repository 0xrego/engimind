import Section from "@/components/Section";
import Badge from "@/components/Badge";

export default function Clientes() {
    const clientCategories = [
        {
            title: "Administração Central",
            description: "Apoiamos organismos governamentais e institutos públicos na definição de políticas nacionais de mobilidade, planeamento estratégico de infraestruturas e regulação do setor dos transportes. A nossa consultoria técnica fundamenta decisões de investimento público de grande escala.",
            icon: "🏛️"
        },
        {
            title: "Administração Local",
            description: "Trabalhamos lado a lado com Câmaras Municipais e Comunidades Intermunicipais no desenvolvimento de Planos de Mobilidade Urbana Sustentável (PMUS), estudos de tráfego locais e requalificação de espaço público, promovendo cidades mais humanas e eficientes.",
            icon: "🏘️"
        },
        {
            title: "Gestores de Infraestruturas",
            description: "Colaboramos com concessionárias rodoviárias e gestores de infraestruturas ferroviárias e aeroportuárias. Realizamos estudos de procura, previsões de tráfego para concessões e projetos de melhoria da segurança e capacidade da rede.",
            icon: "🛣️"
        },
        {
            title: "Operadores de Transporte",
            description: "Auxiliamos operadores de transportes públicos (rodoviários, ferroviários e fluviais) na otimização de redes, estudos de reestruturação de carreiras, análise operacional e planeamento de interfaces intermodais para melhorar a experiência do passageiro.",
            icon: "🚌"
        },
        {
            title: "Projetistas e Consultores",
            description: "Integramos equipas multidisciplinares em parceria com gabinetes de arquitetura e engenharia, fornecendo a componente especializada de tráfego e mobilidade em grandes projetos de urbanismo, edifícios e infraestruturas.",
            icon: "📐"
        },
        {
            title: "Promotores e Operadores Comerciais",
            description: "Desenvolvemos Estudos de Impacto de Tráfego (EIT) para grandes empreendimentos imobiliários, centros comerciais, plataformas logísticas e loteamentos, garantindo a viabilidade dos acessos e o licenciamento junto das entidades competentes.",
            icon: "🏗️"
        }
    ];

    return (
        <main className="flex-grow bg-slate-50">
            {/* Hero Section */}
            <section className="bg-brand-blue py-20 md:py-28 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue-light to-brand-blue opacity-50"></div>
                <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.png')]"></div>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <Badge className="mb-6 bg-white/10 text-white border border-white/20 backdrop-blur-md">
                        Parcerias de Confiança
                    </Badge>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                        Quem confia na ENGIMIND
                    </h1>
                    <p className="text-xl text-brand-light/90 max-w-3xl mx-auto font-light leading-relaxed">
                        A nossa versatilidade permite-nos responder aos desafios de um vasto leque de clientes, desde o setor público ao privado, sempre com o mesmo rigor e compromisso.
                    </p>
                </div>
            </section>

            {/* Client Categories Grid */}
            <Section className="bg-white">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {clientCategories.map((category, idx) => (
                        <div key={idx} className="flex gap-6 p-6 rounded-2xl hover:bg-slate-50 transition-all duration-300 border border-transparent hover:border-slate-100 hover:-translate-y-1">
                            <div className="flex-shrink-0 w-16 h-16 bg-brand-light rounded-xl flex items-center justify-center text-3xl shadow-sm text-brand-blue">
                                {category.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-brand-blue mb-3">{category.title}</h3>
                                <p className="text-brand-gray leading-relaxed">
                                    {category.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* CTA Section */}
            <Section className="bg-brand-light/30 border-t border-slate-100">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-brand-blue mb-6">Junte-se à nossa lista de parceiros</h2>
                    <p className="text-brand-gray mb-8 text-lg">
                        Independentemente da dimensão ou natureza da sua entidade, temos a experiência necessária para acrescentar valor ao seu projeto.
                    </p>
                    <a
                        href="/contactos"
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-brand-orange rounded-xl hover:bg-brand-orange/90 shadow-lg hover:-translate-y-1"
                    >
                        Agendar Reunião
                    </a>
                </div>
            </Section>
        </main>
    );
}
