import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Achievements from "@/components/Achievements";

export default function Quality() {
    return (
        <main>
            <Hero
                title="Qualidade e Certificações"
                subtitle="O nosso compromisso com a excelência e a satisfação dos nossos clientes."
                backgroundImage="/images/hero-quality.jpg"
            />

            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">
                            Política da Qualidade
                        </h2>
                        <div className="prose text-slate-600">
                            <p className="mb-4">
                                A ENGIMIND assume a Qualidade como um vetor estratégico da sua
                                atuação. O nosso Sistema de Gestão da Qualidade está certificado
                                segundo a norma <strong>ISO 9001</strong>, o que reflete o nosso
                                compromisso em cumprir os mais elevados padrões internacionais.
                            </p>
                            <p className="mb-4">
                                A nossa política assenta na melhoria contínua dos processos, na
                                valorização dos nossos colaboradores e na focalização total na
                                satisfação das necessidades e expectativas dos nossos clientes.
                            </p>
                            <p>
                                Garantimos o rigor técnico, o cumprimento de prazos e a
                                inovação em todas as soluções que apresentamos.
                            </p>
                        </div>
                    </div>
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                        <h3 className="text-xl font-bold mb-4 text-slate-900">
                            Os Nossos Compromissos
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <svg
                                    className="w-6 h-6 text-brand-blue mr-3 mt-0.5"
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
                                <span className="text-slate-600">
                                    Satisfação total dos clientes e parceiros
                                </span>
                            </li>
                            <li className="flex items-start">
                                <svg
                                    className="w-6 h-6 text-brand-blue mr-3 mt-0.5"
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
                                <span className="text-slate-600">
                                    Melhoria contínua dos processos internos
                                </span>
                            </li>
                            <li className="flex items-start">
                                <svg
                                    className="w-6 h-6 text-brand-blue mr-3 mt-0.5"
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
                                <span className="text-slate-600">
                                    Formação e valorização da equipa técnica
                                </span>
                            </li>
                            <li className="flex items-start">
                                <svg
                                    className="w-6 h-6 text-brand-blue mr-3 mt-0.5"
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
                                <span className="text-slate-600">
                                    Sustentabilidade e responsabilidade social
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4 text-slate-900">
                        Distinções e Certificações
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto mb-12">
                        O reconhecimento do nosso trabalho traduz-se em certificações e
                        prémios que nos orgulham e motivam a fazer sempre melhor.
                    </p>
                    <Achievements />
                </div>
            </Section>
        </main>
    );
}
