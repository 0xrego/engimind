import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-brand-blue text-white border-t border-brand-blue-light/10 mt-auto">
            <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-12 mb-12">

                    {/* Sobre */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-white">Sobre a ENGIMIND</h3>
                        <p className="text-brand-light/80 leading-relaxed">
                            Consultora de referência em mobilidade e transportes. Desenvolvemos soluções integradas de engenharia de tráfego, planeamento urbano e infraestruturas, com foco na inovação e sustentabilidade.
                        </p>
                    </div>

                    {/* Contactos */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-white">Contactos</h3>
                        <ul className="space-y-4 text-brand-light/80">
                            <li className="flex items-start">
                                <span className="mr-3 mt-1 text-brand-orange">📍</span>
                                <span>
                                    <strong className="block text-white">Lisboa, Portugal</strong>
                                    Av. da Liberdade, 100
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 mt-1 text-brand-orange">🌎</span>
                                <span>
                                    <strong className="block text-white">São Paulo, Brasil</strong>
                                    Av. Paulista, 1000
                                </span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-3 text-brand-orange">✉️</span>
                                <a href="mailto:info@engimind.com" className="hover:text-brand-orange transition-colors">
                                    info@engimind.com
                                </a>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-3 text-brand-orange">📞</span>
                                <a href="tel:+351210000000" className="hover:text-brand-orange transition-colors">
                                    +351 210 000 000
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Destaques */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-white">Destaques</h3>
                        <div className="flex gap-4 mb-6">
                            <div className="bg-white/10 px-4 py-2 rounded-lg text-center border border-white/20">
                                <span className="block text-xs text-brand-light/60 uppercase tracking-wider">Estatuto</span>
                                <span className="font-bold text-brand-orange">PME Líder</span>
                            </div>
                            <div className="bg-white/10 px-4 py-2 rounded-lg text-center border border-white/20">
                                <span className="block text-xs text-brand-light/60 uppercase tracking-wider">Certificação</span>
                                <span className="font-bold text-brand-orange">PME Excelência</span>
                            </div>
                        </div>
                        <ul className="space-y-2 text-brand-light/80">
                            <li>
                                <Link href="/noticias" className="hover:text-brand-orange transition-colors flex items-center">
                                    <span className="mr-2">→</span> Últimas Notícias
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-brand-orange transition-colors flex items-center">
                                    <span className="mr-2">→</span> Imprensa e Media
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-brand-light/60">
                    <p>&copy; {new Date().getFullYear()} ENGIMIND. Todos os direitos reservados.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white transition-colors">Política de Privacidade</Link>
                        <Link href="#" className="hover:text-white transition-colors">Termos e Condições</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
