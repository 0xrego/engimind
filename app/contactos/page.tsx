import Section from "@/components/Section";
import Badge from "@/components/Badge";

export default function Contactos() {
    return (
        <main className="flex-grow bg-white">
            {/* Hero Section */}
            <section className="pt-32 pb-16 md:pt-48 md:pb-32 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold tracking-wide uppercase mb-8">
                            Contactos
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-slate-900 mb-8 tracking-tight leading-[1.05]">
                            Vamos conversar?
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-2xl">
                            Estamos disponíveis para discutir o seu próximo projeto, esclarecer dúvidas ou apresentar uma proposta à medida das suas necessidades.
                        </p>
                    </div>
                </div>
            </section>

            <Section className="bg-white border-t border-slate-100 section-padding">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl font-semibold text-slate-900 mb-12">Onde estamos</h2>
                        <div className="space-y-16">
                            {/* Portugal */}
                            <div className="flex gap-8">
                                <div className="text-4xl grayscale opacity-30">🇵🇹</div>
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Portugal (Sede)</h3>
                                    <p className="text-slate-500 text-lg leading-relaxed mb-3">
                                        Av. da Liberdade, 100 - 2º Esq<br />
                                        1250-144 Lisboa
                                    </p>
                                    <a href="tel:+351210000000" className="text-slate-900 font-medium text-lg hover:text-brand-blue transition-colors">
                                        +351 210 000 000
                                    </a>
                                </div>
                            </div>

                            {/* Brasil */}
                            <div className="flex gap-8">
                                <div className="text-4xl grayscale opacity-30">🇧🇷</div>
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Brasil</h3>
                                    <p className="text-slate-500 text-lg leading-relaxed mb-3">
                                        Av. Paulista, 1000 - Conj. 501<br />
                                        Bela Vista, São Paulo - SP
                                    </p>
                                    <a href="tel:+551100000000" className="text-slate-900 font-medium text-lg hover:text-brand-blue transition-colors">
                                        +55 11 0000 0000
                                    </a>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex gap-8">
                                <div className="text-4xl grayscale opacity-30">✉️</div>
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Email Geral</h3>
                                    <p className="text-slate-500 text-lg leading-relaxed mb-3">
                                        Para pedidos de informação, propostas ou recrutamento.
                                    </p>
                                    <a href="mailto:info@engimind.com" className="text-slate-900 font-medium text-lg hover:text-brand-blue transition-colors">
                                        info@engimind.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-slate-50 p-10 md:p-16 rounded-[2.5rem]">
                        <h2 className="text-3xl font-semibold text-slate-900 mb-10">Envie-nos uma mensagem</h2>
                        <form className="space-y-8">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-3">Nome</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-6 py-4 rounded-2xl bg-white border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-slate-900 outline-none transition-all placeholder:text-slate-400 text-lg"
                                    placeholder="O seu nome"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-3">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-6 py-4 rounded-2xl bg-white border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-slate-900 outline-none transition-all placeholder:text-slate-400 text-lg"
                                    placeholder="seu.email@empresa.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-3">Assunto</label>
                                <select
                                    id="subject"
                                    className="w-full px-6 py-4 rounded-2xl bg-white border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-slate-900 outline-none transition-all text-slate-600 text-lg appearance-none"
                                >
                                    <option value="">Selecione o motivo...</option>
                                    <option value="proposta">Pedido de Proposta</option>
                                    <option value="parceria">Parceria</option>
                                    <option value="recrutamento">Recrutamento</option>
                                    <option value="outro">Outro Assunto</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-3">Mensagem</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-6 py-4 rounded-2xl bg-white border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-slate-900 outline-none transition-all placeholder:text-slate-400 resize-none text-lg"
                                    placeholder="Como podemos ajudar?"
                                ></textarea>
                            </div>
                            <button
                                type="button"
                                className="w-full btn-primary"
                            >
                                Enviar Mensagem
                            </button>
                        </form>
                    </div>
                </div>
            </Section>
        </main>
    );
}
