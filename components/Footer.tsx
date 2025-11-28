import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] text-white section-spacing">
      <div className="container-editorial">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <h2 className="text-2xl md:text-3xl font-medium mb-4">ENGIMIND</h2>
            <p className="text-white/60 text-lg leading-relaxed max-w-md mb-6">
              Consultoria de referência em mobilidade, transportes e engenharia
              de infraestruturas. Planeamos cidades mais eficientes e
              sustentáveis.
            </p>
            <div className="flex gap-6">
              <span className="text-sm text-white/40 uppercase tracking-wider">
                PME Líder
              </span>
              <span className="text-white/20">·</span>
              <span className="text-sm text-white/40 uppercase tracking-wider">
                PME Excelência
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2 md:col-start-7">
            <h3 className="text-sm font-medium text-white/40 uppercase tracking-wider mb-4">
              Navegação
            </h3>
            <nav className="space-y-4">
              <Link
                href="/projects"
                className="block text-white/80 hover:text-white transition-colors"
              >
                Projetos
              </Link>
              <Link
                href="/services"
                className="block text-white/80 hover:text-white transition-colors"
              >
                Serviços
              </Link>
              <Link
                href="/about"
                className="block text-white/80 hover:text-white transition-colors"
              >
                Sobre
              </Link>
              <Link
                href="/news"
                className="block text-white/80 hover:text-white transition-colors"
              >
                Notícias
              </Link>
            </nav>
          </div>

          {/* Contacts */}
          <div className="md:col-span-4">
            <h3 className="text-sm font-medium text-white/40 uppercase tracking-wider mb-4">
              Contactos
            </h3>
            <div className="space-y-4">
              {/* Lisboa */}
              <div>
                <p className="text-white font-medium mb-1">Lisboa</p>
                <p className="text-white/60 text-sm">
                  Av. Defensores de Chaves, nº 4, 1º
                  <br />
                  1000-120 Lisboa, Portugal
                </p>
              </div>
              {/* São Paulo */}
              <div>
                <p className="text-white font-medium mb-1">São Paulo</p>
                <p className="text-white/60 text-sm">
                  Rua Gomes de Carvalho, 1629
                  <br />
                  04547-006 Vila Olímpia, Brasil
                </p>
              </div>
              {/* Email */}
              <div>
                <a
                  href="mailto:engimind@engimind.com"
                  className="text-white hover:text-white/80 transition-colors"
                >
                  engimind@engimind.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-sm text-white/40">
            © {currentYear} ENGIMIND. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-white/40 hover:text-white/80 transition-colors"
            >
              Privacidade
            </Link>
            <Link
              href="/contacts"
              className="text-sm text-white/40 hover:text-white/80 transition-colors"
            >
              Contactos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
