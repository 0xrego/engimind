import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8 text-sm">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Brand & Desc */}
                    <div className="md:col-span-2">
                        <h3 className="font-semibold text-slate-900 mb-4 text-base">ENGIMIND</h3>
                        <p className="text-slate-500 leading-relaxed max-w-sm mb-6">
                            Consultoria de referência em mobilidade, transportes e engenharia de infraestruturas. Planeamos cidades mais eficientes e sustentáveis.
                        </p>
                        <div className="flex gap-4 text-xs font-medium text-slate-400 uppercase tracking-wide">
                            <span>PME Líder</span>
                            <span>•</span>
                            <span>PME Excelência</span>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-4">Empresa</h3>
                        <ul className="space-y-3 text-slate-500">
                            <li><Link href="/empresa" className="hover:text-slate-900 transition-colors">Sobre nós</Link></li>
                            <li><Link href="/servicos" className="hover:text-slate-900 transition-colors">Serviços</Link></li>
                            <li><Link href="/projetos" className="hover:text-slate-900 transition-colors">Projetos</Link></li>
                            <li><Link href="/noticias" className="hover:text-slate-900 transition-colors">Notícias</Link></li>
                        </ul>
                    </div>

                    {/* Contactos */}
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-4">Contactos</h3>
                        <ul className="space-y-3 text-slate-500">
                            <li>Lisboa, Portugal</li>
                            <li>São Paulo, Brasil</li>
                            <li><a href="mailto:info@engimind.com" className="hover:text-slate-900 transition-colors">info@engimind.com</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-400 text-xs">
                    <p>&copy; {new Date().getFullYear()} ENGIMIND. Todos os direitos reservados.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-slate-600 transition-colors">Privacidade</Link>
                        <Link href="#" className="hover:text-slate-600 transition-colors">Termos</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
