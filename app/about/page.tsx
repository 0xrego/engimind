import Hero from "@/components/Hero";
import Section from "@/components/Section";

export default function About() {
    return (
        <main>
            <Hero
                title="Quem Somos"
                subtitle="Uma equipa dedicada a construir o futuro da mobilidade."
                backgroundImage="/images/hero-about.jpg"
            />

            <Section>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6 text-slate-900">
                        A Nossa História
                    </h2>
                    <div className="prose prose-lg text-slate-600">
                        <p className="mb-6">
                            A <strong>ENGIMIND Consultores</strong> é uma empresa de
                            consultoria vocacionada para criar, desenvolver e gerir soluções
                            nos domínios da mobilidade e dos transportes.
                        </p>
                        <p className="mb-6">
                            Os projetos desenvolvidos pela nossa equipa técnica evidenciam uma
                            vasta experiência e um profundo domínio de matérias relacionadas
                            com a mobilidade e transportes, nas suas diversas vertentes:
                            transporte individual, transporte coletivo, estacionamento, modos
                            suaves e projeto de engenharia.
                        </p>
                        <p>
                            A nossa abordagem baseia-se na competência técnica de excelência e
                            numa atitude permanente de diálogo e troca de experiências com os
                            nossos clientes e parceiros. Acreditamos que as melhores soluções
                            nascem da colaboração e do entendimento profundo das necessidades
                            específicas de cada território e comunidade.
                        </p>
                    </div>
                </div>
            </Section>

            <Section background="light">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                            M
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-slate-900">Missão</h3>
                        <p className="text-slate-600">
                            Desenvolver soluções de mobilidade inovadoras e sustentáveis que
                            melhorem a qualidade de vida nas cidades e a eficiência dos
                            sistemas de transporte.
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-brand-orange text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                            V
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-slate-900">Visão</h3>
                        <p className="text-slate-600">
                            Ser uma referência global na consultoria de transportes,
                            reconhecida pela excelência técnica e pela capacidade de resolver
                            desafios complexos de mobilidade.
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-slate-800 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                            V
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-slate-900">Valores</h3>
                        <p className="text-slate-600">
                            Rigor técnico, inovação, sustentabilidade, compromisso com o
                            cliente e ética profissional são os pilares que guiam a nossa
                            atuação.
                        </p>
                    </div>
                </div>
            </Section>

            <Section>
                <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">
                    A Nossa Equipa
                </h2>

                <div className="mb-16">
                    <h3 className="text-2xl font-bold mb-8 text-slate-800 border-b border-slate-200 pb-2">
                        Direção
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                name: "André Remédio",
                                role: "Sócio-Gerente Diretor Técnico",
                            },
                            {
                                name: "Carla Oliveira",
                                role: "Sócia-Gerente Diretora RH",
                            },
                            {
                                name: "Manuel Fortes",
                                role: "Sócio-Gerente Diretor Comercial",
                            },
                            {
                                name: "Pedro Reis",
                                role: "Sócio-Gerente Diretor Financeiro",
                            },
                        ].map((person, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center"
                            >
                                <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-slate-400">
                                    {person.name.charAt(0)}
                                </div>
                                <h4 className="font-bold text-lg text-slate-900 mb-1">
                                    {person.name}
                                </h4>
                                <p className="text-sm text-brand-blue font-medium">
                                    {person.role}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-bold mb-8 text-slate-800 border-b border-slate-200 pb-2">
                        Equipa Técnica
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[
                            "Adriana Antunes Cubas",
                            "André Menino",
                            "Ariana Silva",
                            "Beatriz Silva",
                            "Carla Correia",
                            "Carla Vasquez",
                            "Carolina Carminé",
                            "Catarina Rodrigo",
                            "Eduardo Coelho",
                            "Filipa Simões",
                            "Gina Rolim",
                            "Gonçalo Rosa",
                            "Hugo Dinis",
                            "Hugo Noronha",
                            "Humberto Leitão",
                            "Isabel Antunes",
                            "João Serrano",
                            "John Llanos",
                            "Jorge Ribeiro",
                            "José Garcia",
                            "José Lubacheski",
                            "Luís Curado",
                            "Mafalda Pires",
                            "Manuel Delgado",
                            "Mário Pereira",
                            "Nuno Saraiva",
                            "Paulo Rodolfo Ferreira Lopes",
                            "Rute Monteiro",
                            "Sónia Carpentier",
                        ].map((name, index) => (
                            <div
                                key={index}
                                className="bg-slate-50 px-4 py-3 rounded-lg text-slate-700 font-medium text-center hover:bg-slate-100 transition-colors"
                            >
                                {name}
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </main>
    );
}
