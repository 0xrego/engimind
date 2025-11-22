import Section from "@/components/Section";
import Badge from "@/components/Badge";
import Link from "next/link";

export default function Noticias() {
    const newsItems = [
        {
            id: 1,
            title: "ENGIMIND selecionada para o PMUS de Coimbra",
            date: "15 Nov 2025",
            category: "Novos Projetos",
            summary: "A Câmara Municipal de Coimbra adjudicou à ENGIMIND a elaboração do novo Plano de Mobilidade Urbana Sustentável. O projeto visa redefinir a estratégia de mobilidade da cidade para a próxima década, com foco na integração do Metrobus.",
            image: "🏙️"
        },
        {
            id: 2,
            title: "Distinção PME Líder 2023",
            date: "22 Out 2025",
            category: "Prémios",
            summary: "Pelo 5º ano consecutivo, a ENGIMIND vê renovado o seu estatuto de PME Líder. Esta distinção do IAPMEI reconhece a solidez financeira e o perfil de risco da empresa, reforçando a confiança dos nossos parceiros e clientes.",
            image: "🏆"
        },
        {
            id: 3,
            title: "Inauguração do novo Estádio com estudo da ENGIMIND",
            date: "10 Set 2025",
            category: "Eventos",
            summary: "Foi inaugurado este fim de semana o novo complexo desportivo, cujo estudo de impacto de tráfego e acessibilidades foi desenvolvido pela nossa equipa. O plano de evacuação e estacionamento funcionou conforme o previsto.",
            image: "🏟️"
        },
        {
            id: 4,
            title: "PME Excelência 2022: O reconhecimento do mérito",
            date: "05 Fev 2025",
            category: "Prémios",
            summary: "A ENGIMIND foi galardoada com o estatuto PME Excelência 2022, integrando o restrito grupo de empresas nacionais que demonstram os melhores desempenhos económico-financeiros e de gestão.",
            image: "⭐"
        }
    ];

    return (
        <main className="flex-grow bg-slate-50">
            {/* Hero Section */}
            <section className="bg-brand-blue py-20 md:py-28 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue-light to-brand-blue opacity-50"></div>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <Badge className="mb-6 bg-white/10 text-white border border-white/20 backdrop-blur-md">
                        Atualidade
                    </Badge>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                        Notícias e Distinções
                    </h1>
                    <p className="text-xl text-brand-light/90 max-w-3xl mx-auto font-light leading-relaxed">
                        Acompanhe as novidades da ENGIMIND, os novos projetos ganhos e o reconhecimento público do nosso trabalho.
                    </p>
                </div>
            </section>

            {/* News Grid */}
            <Section className="bg-white">
                <div className="grid gap-8 max-w-4xl mx-auto">
                    {newsItems.map((item) => (
                        <article key={item.id} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group flex flex-col md:flex-row gap-8 items-start">
                            <div className="flex-shrink-0 w-full md:w-48 h-48 bg-brand-light/30 rounded-2xl flex items-center justify-center text-6xl border border-brand-light/50">
                                {item.image}
                            </div>
                            <div className="flex-grow">
                                <div className="flex flex-wrap items-center gap-3 mb-4">
                                    <span className="px-3 py-1 bg-brand-orange/10 text-brand-orange text-xs font-bold rounded-full uppercase tracking-wide">
                                        {item.category}
                                    </span>
                                    <span className="text-sm text-brand-gray font-medium">
                                        {item.date}
                                    </span>
                                </div>
                                <h2 className="text-2xl font-bold text-brand-blue mb-3 group-hover:text-brand-orange transition-colors cursor-pointer">
                                    <Link href="#">{item.title}</Link>
                                </h2>
                                <p className="text-brand-gray leading-relaxed mb-6">
                                    {item.summary}
                                </p>
                                <Link
                                    href="#"
                                    className="inline-flex items-center text-brand-blue font-bold hover:text-brand-orange transition-colors group/link"
                                >
                                    Ler artigo completo <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </Section>
        </main>
    );
}
