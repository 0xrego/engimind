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
        <main className="flex-grow bg-white">
            {/* Hero Section */}
            <section className="pt-32 pb-16 md:pt-48 md:pb-32 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold tracking-wide uppercase mb-8">
                        Atualidade
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-slate-900 mb-8 tracking-tight leading-[1.05]">
                        Notícias e Distinções.
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
                        Acompanhe as novidades da ENGIMIND, os novos projetos ganhos e o reconhecimento público do nosso trabalho.
                    </p>
                </div>
            </section>

            {/* News Grid */}
            <Section className="bg-white border-t border-slate-100 section-padding">
                <div className="grid gap-20 max-w-4xl mx-auto">
                    {newsItems.map((item) => (
                        <article key={item.id} className="group flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                            <div className="flex-shrink-0 w-full md:w-64 h-48 bg-slate-50 rounded-[2rem] flex items-center justify-center text-6xl group-hover:scale-[1.02] transition-transform duration-500">
                                {item.image}
                            </div>
                            <div className="flex-grow pt-2">
                                <div className="flex flex-wrap items-center gap-3 mb-4">
                                    <span className="text-xs font-bold text-slate-900 uppercase tracking-wider bg-slate-100 px-2 py-1 rounded-md">
                                        {item.category}
                                    </span>
                                    <span className="text-xs text-slate-400 font-medium">
                                        {item.date}
                                    </span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4 group-hover:text-brand-blue transition-colors cursor-pointer leading-tight">
                                    <Link href="#">{item.title}</Link>
                                </h2>
                                <p className="text-slate-500 text-lg leading-relaxed mb-6">
                                    {item.summary}
                                </p>
                                <Link
                                    href="#"
                                    className="inline-flex items-center text-sm font-medium text-slate-900 hover:text-brand-blue transition-colors"
                                >
                                    Ler artigo completo <span className="ml-2">→</span>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </Section>
        </main>
    );
}
