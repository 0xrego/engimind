import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Card from "@/components/Card";

export default function Projects() {
    const projects = [
        {
            title: "BRT de Campinas",
            location: "Campinas, Brasil",
            description:
                "Projeto do sistema Bus Rapid Transit para a cidade de Campinas. O novo sistema transformará a mobilidade de mais de 1 milhão de habitantes, com corredores exclusivos e estações modernas.",
            tags: ["BRT", "Transporte Público", "Brasil"],
            image: "/images/project-brt.jpg",
        },
        {
            title: "Novo Aeroporto de Lisboa",
            location: "Lisboa, Portugal",
            description:
                "Estudo de acessibilidade e microssimulação do curbside (zonas de tomada e largada de passageiros) para o projeto do Novo Aeroporto de Lisboa.",
            tags: ["Aeroportos", "Microssimulação", "Portugal"],
            image: "/images/project-airport.jpg",
        },
        {
            title: "Metro de São Paulo - Linha 6",
            location: "São Paulo, Brasil",
            description:
                "Estudo de procura e desenvolvimento de modelo de simulação de transportes para a Linha 6 (Laranja) do Metro de São Paulo, integrando com a rede existente.",
            tags: ["Metro", "Modelação", "Brasil"],
            image: "/images/project-metro.jpg",
        },
        {
            title: "Plano de Mobilidade de Coimbra",
            location: "Coimbra, Portugal",
            description:
                "Desenvolvimento do Plano de Mobilidade Urbana Sustentável (PMUS) de Coimbra, definindo metas ambiciosas para o aumento dos modos suaves e transporte público.",
            tags: ["PMUS", "Mobilidade Urbana", "Portugal"],
            image: "/images/project-coimbra.jpg",
        },
        {
            title: "Nó de Infias - Braga",
            location: "Braga, Portugal",
            description:
                "Projeto de reformulação geométrica e microssimulação do Nó de Infias, um ponto crítico da rede rodoviária de Braga, para melhorar a fluidez e segurança.",
            tags: ["Rodoviário", "Microssimulação", "Portugal"],
            image: "/images/project-infias.jpg",
        },
        {
            title: "Aeroporto de Nova Deli",
            location: "Nova Deli, Índia",
            description:
                "Estudo de layout e acessibilidade para o Novo Terminal do Aeroporto Internacional Indira Gandhi, o mais movimentado da Índia.",
            tags: ["Aeroportos", "Internacional", "Índia"],
            image: "/images/project-delhi.jpg",
        },
        {
            title: "Ecovias da Ria de Aveiro",
            location: "Aveiro, Portugal",
            description:
                "Projeto de execução de ecovias nas margens da Ria de Aveiro, numa extensão de 62km, promovendo a mobilidade suave e o turismo de natureza.",
            tags: ["Modos Suaves", "Turismo", "Portugal"],
            image: "/images/project-aveiro.jpg",
        },
        {
            title: "Metro Ligeiro de Brasília",
            location: "Brasília, Brasil",
            description:
                "Estudo de inserção viária e microssimulação para o Metro Ligeiro de Brasília, avaliando o impacto na circulação automóvel e gestão de cruzamentos.",
            tags: ["Metro Ligeiro", "Microssimulação", "Brasil"],
            image: "/images/project-brasilia.jpg",
        },
        {
            title: "Centros Comerciais Sonae Sierra",
            location: "Vários, Portugal/Internacional",
            description:
                "Estudos de tráfego e acessibilidades para diversos centros comerciais (Colombo, Vasco da Gama, NorteShopping) em Portugal e no estrangeiro.",
            tags: ["Estudos de Tráfego", "Comércio", "Privado"],
            image: "/images/project-shopping.jpg",
        },
        {
            title: "Complexo Desportivo Olímpico de Deodoro",
            location: "Rio de Janeiro, Brasil",
            description:
                "Desenvolvimento do Projeto Executivo Geométrico, Terraplanagens, Drenagem e Sinalização para os Jogos Olímpicos de 2016.",
            tags: ["Infraestruturas", "Olímpicos", "Brasil"],
            image: "/images/project-rio2016.jpg",
        },
        {
            title: "Nova Praça do Saldanha",
            location: "Lisboa, Portugal",
            description:
                "Projeto de infraestruturas rodoviárias no âmbito do programa 'Uma Praça em Cada Bairro', devolvendo o espaço público aos peões.",
            tags: ["Requalificação Urbana", "Lisboa", "Portugal"],
            image: "/images/project-saldanha.jpg",
        },
        {
            title: "Requalificação da EN10",
            location: "Vila Franca de Xira, Portugal",
            description:
                "Projeto de requalificação urbana e criação de rede pedonal e ciclável ao longo da EN10.",
            tags: ["Rodoviário", "Modos Suaves", "Portugal"],
            image: "/images/project-en10.jpg",
        },
        {
            title: "Centro Empresarial Quinta da Fonte",
            location: "Oeiras, Portugal",
            description:
                "Estudo de tráfego e projeto rodoviário para novos acessos e viaduto, melhorando a fluidez no parque empresarial.",
            tags: ["Rodoviário", "Estudos de Tráfego", "Portugal"],
            image: "/images/project-quintafonte.jpg",
        },
        {
            title: "Novas Lojas Lidl",
            location: "Vários locais, Portugal",
            description:
                "Estudos de Tráfego e Projetos de Infraestruturas Rodoviárias para novas lojas em Linhó, Alfragide, Areosa e Fogueteiro.",
            tags: ["Comércio", "Estudos de Tráfego", "Portugal"],
            image: "/images/project-lidl.jpg",
        },
        {
            title: "Aeroporto Internacional de Luanda",
            location: "Luanda, Angola",
            description:
                "Estudo de acessibilidade e microssimulação do curbside para o Novo Aeroporto Internacional de Luanda.",
            tags: ["Aeroportos", "Internacional", "Angola"],
            image: "/images/project-luanda.jpg",
        },
    ];

    return (
        <main>
            <Hero
                title="Projetos de Referência"
                subtitle="Um portfólio global que demonstra a nossa capacidade técnica e inovação."
                backgroundImage="/images/hero-projects.jpg"
            />

            <Section>
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <button className="px-6 py-2 rounded-full bg-brand-blue text-white font-medium">
                        Todos
                    </button>
                    <button className="px-6 py-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 font-medium transition-colors">
                        Transportes Públicos
                    </button>
                    <button className="px-6 py-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 font-medium transition-colors">
                        Rodoviário
                    </button>
                    <button className="px-6 py-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 font-medium transition-colors">
                        Aeroportos
                    </button>
                    <button className="px-6 py-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 font-medium transition-colors">
                        Modos Suaves
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            tags={project.tags}
                        />
                    ))}
                </div>
            </Section>
        </main>
    );
}
