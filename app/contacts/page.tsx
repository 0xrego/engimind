import Hero from "@/components/Hero";
import Section from "@/components/Section";

export default function Contacts() {
    return (
        <main>
            <Hero
                title="Contactos"
                subtitle="Estamos disponíveis para responder às suas questões e desafios."
                backgroundImage="/images/hero-contacts.jpg"
            />

            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl font-bold mb-8 text-slate-900">
                            Fale Connosco
                        </h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-slate-700 mb-2"
                                    >
                                        Nome
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all"
                                        placeholder="O seu nome"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-slate-700 mb-2"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all"
                                        placeholder="seu.email@exemplo.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-sm font-medium text-slate-700 mb-2"
                                >
                                    Assunto
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all"
                                    placeholder="Assunto da mensagem"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-slate-700 mb-2"
                                >
                                    Mensagem
                                </label>
                                <textarea
                                    id="message"
                                    rows={6}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all resize-none"
                                    placeholder="A sua mensagem..."
                                ></textarea>
                            </div>
                            <button type="submit" className="btn-primary w-full md:w-auto">
                                Enviar Mensagem
                            </button>
                        </form>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-8 text-slate-900">
                            Onde Estamos
                        </h2>
                        <div className="space-y-8">
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <h3 className="text-xl font-bold text-brand-blue mb-4">
                                    Lisboa, Portugal
                                </h3>
                                <p className="text-slate-600 mb-2">
                                    Avenida Defensores de Chaves, 45 - 5º
                                </p>
                                <p className="text-slate-600 mb-4">1000-112 Lisboa</p>
                                <p className="text-slate-600 mb-2">
                                    <strong>Email:</strong> engimind@engimind.com
                                </p>
                                <p className="text-slate-600">
                                    <strong>Tel:</strong> (+351) 21 000 00 00
                                </p>
                            </div>

                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <h3 className="text-xl font-bold text-brand-blue mb-4">
                                    São Paulo, Brasil
                                </h3>
                                <p className="text-slate-600 mb-2">
                                    Rua Gomes de Carvalho, 1629, sala 2157
                                </p>
                                <p className="text-slate-600 mb-4">
                                    Vila Olímpia, São Paulo 04547-006
                                </p>
                                <p className="text-slate-600 mb-2">
                                    <strong>Email:</strong> brasil@engimind.com
                                </p>
                                <p className="text-slate-600">
                                    <strong>Tel:</strong> (11) 3848 9308
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
