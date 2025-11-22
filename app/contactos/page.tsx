import Section from "@/components/Section";
import Badge from "@/components/Badge";

export default function Contactos() {
    return (
        <main className="flex-grow bg-slate-50">
            {/* Hero Section */}
            <section className="bg-brand-blue py-20 md:py-28 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue-light to-brand-blue opacity-50"></div>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <Badge className="mb-6 bg-white/10 text-white border border-white/20 backdrop-blur-md">
                        Estamos à sua espera
                    </Badge>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                        Vamos conversar?
                    </h1>
                    <p className="text-xl text-brand-light/90 max-w-3xl mx-auto font-light leading-relaxed">
                        Estamos disponíveis para discutir o seu próximo projeto, esclarecer dúvidas ou apresentar uma proposta à medida das suas necessidades.
                    </p>
                </div>
            </section>

            <Section className="bg-white -mt-10 md:-mt-20 relative z-20 rounded-t-[3rem] md:rounded-t-[4rem] pt-16 md:pt-24">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl font-bold text-brand-blue mb-8">Onde estamos</h2>
                        <div className="space-y-10">
                            {/* Portugal */}
                            <div className="flex gap-6">
                                <div className="w-14 h-14 bg-brand-light rounded-2xl flex items-center justify-center text-2xl text-brand-blue flex-shrink-0">
                                    🇵🇹
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-brand-blue mb-2">Sede - Portugal</h3>
                                    <p className="text-brand-gray leading-relaxed mb-2">
                                        Av. da Liberdade, 100 - 2º Esq<br />
                                        1250-144 Lisboa
                                    </p>
                                    <a href="tel:+351210000000" className="text-brand-orange font-bold hover:underline block">
                                        +351 210 000 000
                                    </a>
                                </div>
                            </div>

                            {/* Brasil */}
                            <div className="flex gap-6">
                                <div className="w-14 h-14 bg-brand-light rounded-2xl flex items-center justify-center text-2xl text-brand-blue flex-shrink-0">
                                    🇧🇷
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-brand-blue mb-2">Escritório - Brasil</h3>
                                    <p className="text-brand-gray leading-relaxed mb-2">
                                        Av. Paulista, 1000 - Conj. 501<br />
                                        Bela Vista, São Paulo - SP
                                    </p>
                                    <a href="tel:+551100000000" className="text-brand-orange font-bold hover:underline block">
                                        +55 11 0000 0000
                                    </a>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex gap-6">
                                <div className="w-14 h-14 bg-brand-light rounded-2xl flex items-center justify-center text-2xl text-brand-blue flex-shrink-0">
                                    ✉️
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-brand-blue mb-2">Email Geral</h3>
                                    <p className="text-brand-gray leading-relaxed mb-2">
                                        Para pedidos de informação, propostas ou recrutamento.
                                    </p>
                                    <a href="mailto:info@engimind.com" className="text-brand-orange font-bold hover:underline block text-lg">
                                        info@engimind.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-brand-blue mb-6">Envie-nos uma mensagem</h2>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold text-brand-blue mb-2">Nome</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all bg-white"
                                    placeholder="O seu nome"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-brand-blue mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all bg-white"
                                    placeholder="seu.email@empresa.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-bold text-brand-blue mb-2">Assunto</label>
                                <select
                                    id="subject"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all bg-white"
                                >
                                    <option value="">Selecione o motivo...</option>
                                    <option value="proposta">Pedido de Proposta</option>
                                    <option value="parceria">Parceria</option>
                                    <option value="recrutamento">Recrutamento</option>
                                    <option value="outro">Outro Assunto</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-brand-blue mb-2">Mensagem</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all bg-white resize-none"
                                    placeholder="Como podemos ajudar?"
                                ></textarea>
                            </div>
                            <button
                                type="button"
                                className="w-full bg-brand-orange text-white font-bold py-4 rounded-xl hover:bg-brand-orange-light transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
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
