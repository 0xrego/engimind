import Image from "next/image";

export default function Empresa() {
    return (
        <main className="flex-grow bg-white">
            {/* Hero Section */}
            <section className="relative py-20 md:py-28 bg-brand-blue overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    {/* Abstract Pattern or Map Background */}
                    <div className="absolute right-0 top-0 w-1/2 h-full bg-white/10 skew-x-12"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Engenharia com visão de futuro
                        </h1>
                        <p className="text-xl text-blue-100 leading-relaxed">
                            Há mais de 15 anos a desenvolver soluções de mobilidade que ligam pessoas, cidades e territórios.
                        </p>
                    </div>
                </div>
            </section>

            {/* History & Mission */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-brand-blue mb-6">A Nossa História</h2>
                            <div className="space-y-4 text-slate-600 leading-relaxed">
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
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/hero-mobility.jpg" // Using existing image as placeholder for office/team
                                alt="Escritório ENGIMIND"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* International Presence */}
            <section className="py-16 md:py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-brand-blue mb-4">Presença Internacional</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Com escritórios em Portugal e no Brasil, garantimos uma resposta próxima e adaptada à realidade de cada mercado.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Portugal Card */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-6">
                            <div className="text-4xl">🇵🇹</div>
                            <div>
                                <h3 className="text-xl font-bold text-brand-blue mb-2">Portugal (Sede)</h3>
                                <p className="text-slate-600 mb-4">
                                    Lisboa e Porto
                                </p>
                                <p className="text-sm text-slate-500">
                                    Coordenação global de projetos e centro de excelência em engenharia.
                                </p>
                            </div>
                        </div>

                        {/* Brasil Card */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-6">
                            <div className="text-4xl">🇧🇷</div>
                            <div>
                                <h3 className="text-xl font-bold text-brand-blue mb-2">Brasil</h3>
                                <p className="text-slate-600 mb-4">
                                    São Paulo e Rio de Janeiro
                                </p>
                                <p className="text-sm text-slate-500">
                                    Acompanhamento de grandes obras e projetos de infraestruturas na América Latina.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-brand-blue mb-12">Reconhecimento</h2>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-32 h-32 bg-slate-100 rounded-full flex items-center justify-center border-4 border-brand-orange/20 text-brand-blue font-bold">
                                PME Líder
                            </div>
                            <p className="font-semibold text-slate-700">Estatuto PME Líder</p>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-32 h-32 bg-slate-100 rounded-full flex items-center justify-center border-4 border-brand-orange/20 text-brand-blue font-bold">
                                ISO 9001
                            </div>
                            <p className="font-semibold text-slate-700">Certificação de Qualidade</p>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-32 h-32 bg-slate-100 rounded-full flex items-center justify-center border-4 border-brand-orange/20 text-brand-blue font-bold">
                                PME Excelência
                            </div>
                            <p className="font-semibold text-slate-700">PME Excelência</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
