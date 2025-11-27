import Hero from "@/components/Hero";
import Section from "@/components/Section";

export default function News() {
    const newsItems = [
        {
            date: "14 Nov 2023",
            title: "ENGIMIND renova estatuto PME Líder 2023",
            excerpt:
                "Pelo sexto ano consecutivo, a ENGIMIND Traffic & Mobility Consultants renova o estatuto de PME Líder. Esta distinção do IAPMEI sinaliza desempenhos superiores e reconhece o sucesso da nossa estratégia empresarial.",
            category: "Institucional",
        },
        {
            date: "30 Out 2023",
            title: "Distinção PME Excelência 2022",
            excerpt:
                "A ENGIMIND foi novamente distinguida com o estatuto PME Excelência. Este selo de reputação visa distinguir a notoriedade das empresas que evidenciam os melhores desempenhos e indicadores de gestão.",
            category: "Prémios",
        },
        {
            date: "09 Out 2025",
            title: "Inauguração do novo Estádio do Juventude de Évora",
            excerpt:
                "Com Estudo de Tráfego da Engimind, foi inaugurado este moderno equipamento desportivo, a nova casa do Juventude de Évora, clube centenário da cidade.",
            category: "Projetos",
        },
        {
            date: "07 Out 2025",
            title: "Apresentação do PMUS de Coimbra",
            excerpt:
                "No âmbito da Semana Europeia da Mobilidade, foram apresentados os trabalhos do Plano de Mobilidade Urbana Sustentável de Coimbra, desenvolvidos pelo consórcio liderado pela Engimind.",
            category: "Eventos",
        },
        {
            date: "21 Fev 2019",
            title: "Engimind leciona curso de microssimulação no Rio de Janeiro",
            excerpt:
                "A Engimind lecionou um curso de microssimulação para técnicos da Invepar S/A, uma das maiores gestoras privadas de mobilidade urbana da América Latina.",
            category: "Formação",
        },
        {
            date: "07 Dez 2018",
            title: "Microssimulação para o Metro de São Paulo",
            excerpt:
                "A Engimind assinou contrato para realizar a microssimulação de passageiros da futura Estação São Joaquim da Linha 6 (Laranja), integrando com a Linha 1 (Azul).",
            category: "Novos Contratos",
        },
        {
            date: "11 Out 2018",
            title: "Somos PME Líder 2018",
            excerpt:
                "É com enorme satisfação que recebemos o estatuto de PME Líder 2018. Esta distinção sinaliza desempenhos superiores e reconhece o sucesso da nossa estratégia.",
            category: "Prémios",
        },
        {
            date: "15 Ago 2018",
            title: "Engimind na Semana de Tecnologia Metroferroviária",
            excerpt:
                "A Engimind apresentou o projeto 'Microsimulação de Pedestres em Estações de Metrô e CPTM de São Paulo' durante a 24ª Semana de Tecnologia Metroferroviária.",
            category: "Eventos",
        },
        {
            date: "07 Ago 2018",
            title: "Inauguração das Ecovias da Ria de Aveiro",
            excerpt:
                "O projeto desenvolvido pelo consórcio da Engimind foi inaugurado. Prevê a ampliação da rede de circuitos cicláveis na zona envolvente da Ria de Aveiro.",
            category: "Projetos",
        },
        {
            date: "30 Mai 2018",
            title: "Estudos de Tráfego para novas lojas LIDL",
            excerpt:
                "A Engimind desenvolveu Estudos de Tráfego e Projetos de Infraestruturas Rodoviárias para novas lojas LIDL em Linhó, Alfragide, Areosa e Fogueteiro.",
            category: "Projetos",
        },
        {
            date: "03 Dez 2017",
            title: "Estudo de Tráfego para Decathlon Madeira",
            excerpt:
                "Abertura ao público da primeira loja Decathlon na Madeira, cujo Estudo de Tráfego ficou a cargo da Engimind.",
            category: "Projetos",
        },
        {
            date: "03 Ago 2017",
            title: "Nova Rotunda da Lage em Oeiras",
            excerpt:
                "Projeto da Câmara Municipal de Oeiras e da Engimind visa melhor regulação de tráfego e mais segurança rodoviária numa das principais ligações viárias.",
            category: "Projetos",
        },
        {
            date: "18 Mai 2017",
            title: "Engimind dá curso em Nairobi",
            excerpt:
                "A Engimind foi convidada para dar um curso dos softwares Vissim e Viswalk a técnicos da Kenya Urban Roads Authority (KURA) em Nairobi, Quénia.",
            category: "Formação",
        },
    ];

    return (
        <main>
            <Hero
                title="Notícias e Atualidade"
                subtitle="Fique a par das últimas novidades, projetos e distinções da Engimind."
                backgroundImage="/images/hero-news.jpg"
            />

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {newsItems.map((item, index) => (
                        <article
                            key={index}
                            className="flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-md transition-shadow"
                        >
                            <div className="p-8 flex-1">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-sm font-bold text-brand-blue uppercase tracking-wider">
                                        {item.category}
                                    </span>
                                    <span className="text-sm text-slate-500">{item.date}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 hover:text-brand-blue transition-colors cursor-pointer">
                                    {item.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed">{item.excerpt}</p>
                            </div>
                            <div className="px-8 pb-8 pt-0">
                                <button className="text-brand-orange font-semibold hover:text-brand-orange-light transition-colors flex items-center">
                                    Ler notícia completa
                                    <svg
                                        className="w-4 h-4 ml-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </Section>
        </main>
    );
}
