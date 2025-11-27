import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ServicesGrid from "@/components/ServicesGrid";

export default function Services() {
    const services = [
        {
            title: "Estudos de Tráfego",
            description:
                "Análise e previsão de tráfego para infraestruturas rodoviárias e empreendimentos urbanísticos. Avaliamos o impacto na rede viária e propomos soluções de mitigação.",
            features: [
                "Contagens de tráfego",
                "Análise de capacidade e níveis de serviço",
                "Estudos de impacto de tráfego",
                "Dimensionamento de interseções",
            ],
        },
        {
            title: "Microssimulação",
            description:
                "Utilização de software avançado (VISSIM, AIMSUN) para simular o comportamento individual de veículos e peões, permitindo validar soluções complexas e visualizar o funcionamento futuro.",
            features: [
                "Simulação dinâmica de tráfego",
                "Modelação de peões (Viswalk)",
                "Análise de interfaces de transporte",
                "Otimização semafórica",
            ],
        },
        {
            title: "Planos de Mobilidade",
            description:
                "Desenvolvimento de Planos de Mobilidade Urbana Sustentável (PMUS) e planos de transporte para empresas e grandes polos geradores de tráfego.",
            features: [
                "PMUS municipais e regionais",
                "Planos de mobilidade empresarial",
                "Estratégias de modos suaves",
                "Gestão da procura",
            ],
        },
        {
            title: "Transportes Públicos",
            description:
                "Planeamento e otimização de redes de transporte coletivo, desde a reestruturação de linhas de autocarro até ao planeamento de sistemas de metro e BRT.",
            features: [
                "Redesenho de redes",
                "Estudos de procura",
                "Integração intermodal",
                "Priorização viária",
            ],
        },
        {
            title: "Estacionamento",
            description:
                "Estudos de oferta e procura de estacionamento, definição de políticas de tarifação e gestão, e projeto funcional de parques de estacionamento.",
            features: [
                "Levantamentos de ocupação",
                "Políticas de gestão",
                "Projeto funcional de parques",
                "Sistemas de controlo de acessos",
            ],
        },
        {
            title: "Modos Suaves",
            description:
                "Planeamento e projeto de infraestruturas para peões e ciclistas, promovendo a mobilidade ativa e a humanização do espaço público.",
            features: [
                "Redes cicláveis",
                "Planos de acessibilidade pedonal",
                "Zonas de Coexistência",
                "Design urbano inclusivo",
            ],
        },
        {
            title: "Segurança Rodoviária",
            description:
                "Auditorias e inspeções de segurança rodoviária para identificar riscos e propor medidas corretivas que reduzam a sinistralidade.",
            features: [
                "Auditorias de segurança",
                "Análise de pontos negros",
                "Medidas de acalmia de tráfego",
                "Planos de segurança",
            ],
        },
        {
            title: "Logística Urbana",
            description:
                "Estudos para otimização da distribuição de mercadorias em meio urbano, cargas e descargas, e acessibilidade a zonas comerciais.",
            features: [
                "Planos de logística urbana",
                "Regulamentação de cargas e descargas",
                "Last mile delivery",
                "Centros de consolidação",
            ],
        },
        {
            title: "Rentabilidade Económica",
            description:
                "Análise custo-benefício de projetos de transportes para apoiar a tomada de decisão e fundamentar candidaturas a financiamento.",
            features: [
                "Análise Custo-Benefício (ACB)",
                "Estudos de viabilidade económica",
                "Análise multicritério",
                "Avaliação de investimentos",
            ],
        },
    ];

    return (
        <main>
            <Hero
                title="Os Nossos Serviços"
                subtitle="Soluções integradas e especializadas para todos os desafios da mobilidade."
                backgroundImage="/images/hero-services.jpg"
            />

            <Section>
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <p className="text-lg text-slate-600 leading-relaxed">
                        A equipa técnica da ENGIMIND tem desenvolvido competências em
                        diversas áreas relacionadas com os transportes e a mobilidade. Em
                        conjunto com parcerias estratégicas, oferecemos uma abordagem
                        multidisciplinar e completa.
                    </p>
                </div>
                <ServicesGrid services={services} />
            </Section>
        </main>
    );
}
