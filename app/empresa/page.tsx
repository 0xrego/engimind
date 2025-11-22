import Image from "next/image";

export default function Empresa() {
    return (
        <main className="flex-grow bg-white">
            {/* Hero Section */}
            <section className="pt-32 pb-16 md:pt-48 md:pb-32 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold tracking-wide uppercase mb-8">
                            Sobre Nós
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-slate-900 mb-8 tracking-tight leading-[1.05]">
                            Engenharia com visão de futuro.
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-2xl">
                            Há mais de 15 anos a desenvolver soluções de mobilidade que ligam pessoas, cidades e territórios de forma inteligente e sustentável.
                        </p>
                    </div>
                </div>
            </section>

            {/* History & Mission */}
            <section className="section-padding border-t border-slate-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-8">A Nossa História</h2>
                            <div className="space-y-8 text-slate-500 text-lg leading-relaxed">
                                <p>
                                    Fundada em 2008, a ENGIMIND nasceu da vontade de criar uma consultora de engenharia altamente especializada em mobilidade e transportes, capaz de responder aos desafios complexos das cidades modernas.
                                </p>
                                <p>
                                    Ao longo da última década, crescemos de forma sustentada, expandindo a nossa atuação para o mercado internacional, com um foco especial no Brasil, onde temos participado em grandes projetos de infraestruturas.
                                </p>
                                <p>
                                    A nossa missão é clara: desenhar soluções de mobilidade que sejam tecnicamente robustas, economicamente viáveis e ambientalmente sustentáveis.
                                </p>
                            </div>
                        </div>
                        <div className="relative h-[500px] md:h-[600px] rounded-[2.5rem] overflow-hidden bg-slate-50">
                            <Image
                                src="/images/hero-mobility.jpg"
                                alt="Escritório ENGIMIND"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* International Presence */}
            <section className="section-padding bg-slate-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-20">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-6">Presença Internacional</h2>
                        <p className="text-xl text-slate-500 max-w-2xl">
                            Com escritórios em Portugal e no Brasil, garantimos uma resposta próxima e adaptada à realidade de cada mercado.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-16">
                        {/* Portugal */}
                        <div className="flex gap-8 items-start">
                            <div className="text-5xl grayscale opacity-30">🇵🇹</div>
                            <div>
                                <h3 className="text-2xl font-semibold text-slate-900 mb-3">Portugal (Sede)</h3>
                                <p className="text-slate-900 font-medium mb-2 text-lg">Lisboa e Porto</p>
                                <p className="text-slate-500 leading-relaxed text-lg">
                                    Coordenação global de projetos e centro de excelência em engenharia.
                                </p>
                            </div>
                        </div>

                        {/* Brasil */}
                        <div className="flex gap-8 items-start">
                            <div className="text-5xl grayscale opacity-30">🇧🇷</div>
                            <div>
                                <h3 className="text-2xl font-semibold text-slate-900 mb-3">Brasil</h3>
                                <p className="text-slate-900 font-medium mb-2 text-lg">São Paulo e Rio de Janeiro</p>
                                <p className="text-slate-500 leading-relaxed text-lg">
                                    Acompanhamento de grandes obras e projetos de infraestruturas na América Latina.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="section-padding border-t border-slate-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-16 text-center">
                        <div className="flex flex-col items-center gap-6">
                            <span className="text-5xl text-slate-200">🏆</span>
                            <div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-2">PME Líder</h3>
                                <p className="text-slate-500">Estatuto renovado em 2024</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-6">
                            <span className="text-5xl text-slate-200">📜</span>
                            <div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-2">ISO 9001</h3>
                                <p className="text-slate-500">Certificação de Qualidade</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-6">
                            <span className="text-5xl text-slate-200">⭐</span>
                            <div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-2">PME Excelência</h3>
                                <p className="text-slate-500">Distinção de mérito</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
