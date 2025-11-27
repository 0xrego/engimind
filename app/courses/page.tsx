import Hero from "@/components/Hero";
import Section from "@/components/Section";

export default function Courses() {
    const courses = [
        {
            title: "PTV Visum",
            description:
                "Software líder mundial para planeamento de transportes. Integra todos os modos de transporte num único modelo de análise, permitindo projeções futuras e manipulação de dados SIG.",
            features: [
                "Macrossimulação de transportes",
                "Planeamento de transporte coletivo",
                "Análise de redes multimodais",
                "Integração com SIG",
            ],
        },
        {
            title: "PTV Vissim",
            description:
                "Software de microssimulação de tráfego mais avançado do mercado. Permite simular interações complexas entre veículos e peões ao nível microscópico.",
            features: [
                "Microssimulação de tráfego",
                "Comportamento de veículos",
                "Veículos autónomos",
                "Integração com Visum",
            ],
        },
        {
            title: "PTV Viswalk",
            description:
                "Software para microssimulação dinâmica de peões e multidões. Ideal para analisar evacuações, estações de transporte e grandes eventos.",
            features: [
                "Comportamento humano",
                "Evacuação de emergência",
                "Análise de espaços",
                "Interação com transportes",
            ],
        },
        {
            title: "PTV Vistro",
            description:
                "Software completo de engenharia de tráfego para análise de desempenho, otimização semafórica e estudos de impacto de tráfego.",
            features: [
                "Análise de interseções",
                "Otimização semafórica",
                "Estudos de impacto",
                "Gestão de cenários",
            ],
        },
    ];

    return (
        <main>
            <Hero
                title="Formação e Cursos"
                subtitle="Capacitação certificada em software líder mundial de planeamento de transportes."
                backgroundImage="/images/hero-courses.jpg"
            />

            <Section>
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                        A <strong>ENGIMIND</strong> é certificada pela <strong>PTV Group</strong> para ministrar formação nos seus softwares. A formação é válida e reconhecida em todo o mundo, garantindo aos formandos competências de excelência na utilização destas ferramentas.
                    </p>
                    <a
                        href="mailto:cursos@engimind.com"
                        className="btn-primary"
                    >
                        Inscreva-se ou peça mais informações
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {courses.map((course, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all"
                        >
                            <h3 className="text-2xl font-bold text-brand-blue mb-4">
                                {course.title}
                            </h3>
                            <p className="text-slate-600 mb-6">{course.description}</p>
                            <ul className="space-y-2">
                                {course.features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-slate-500">
                                        <svg
                                            className="w-5 h-5 text-brand-orange mr-3"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Section>
        </main>
    );
}
