import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import MetricCard from "@/components/MetricCard";
import Badge from "@/components/Badge";

export default function Home() {
  return (
    <main className="flex-grow">
      {/* 1. Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-mobility.jpg"
            alt="Mobilidade Urbana"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/95 via-brand-blue/80 to-brand-blue/30"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <Badge className="mb-8 bg-white/10 text-white border border-white/20 backdrop-blur-md px-4 py-2">
              Consultores em mobilidade e transportes
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 tracking-tight">
              Planeamos a mobilidade que liga pessoas, cidades e negócios.
            </h1>
            <p className="text-xl md:text-2xl text-brand-light/90 mb-12 leading-relaxed max-w-2xl font-light">
              A ENGIMIND desenvolve soluções integradas em mobilidade, tráfego, transportes e engenharia de infraestruturas.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="#projetos"
                className="inline-flex justify-center items-center px-8 py-4 bg-brand-orange text-white font-bold rounded-xl hover:bg-brand-orange/90 transition-all shadow-lg hover:shadow-brand-orange/20 hover:-translate-y-1"
              >
                Ver projetos em destaque
              </Link>
              <Link
                href="/empresa"
                className="inline-flex justify-center items-center px-8 py-4 bg-white/5 backdrop-blur-md border border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition-all hover:-translate-y-1"
              >
                Conhecer a Engimind
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Metrics / Why Us */}
      <Section className="bg-white relative z-20 -mt-20 pt-0 pb-20 md:pb-28 !px-0 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              value="+20 Anos"
              label="Experiência em mobilidade"
              icon="📅"
            />
            <MetricCard
              value="3 Continentes"
              label="Europa, América do Sul, África"
              icon="🌍"
            />
            <MetricCard
              value="Setor Público & Privado"
              label="Clientes diversificados"
              icon="🤝"
            />
            <MetricCard
              value="Referência"
              label="PMUS, BRT, Aeroportos"
              icon="🏆"
            />
          </div>
        </div>
      </Section>

      {/* 3. What We Do */}
      <Section
        title="O que fazemos"
        subtitle="Competências multidisciplinares para resolver os desafios complexos da mobilidade moderna, desde o planeamento estratégico à engenharia de detalhe."
        className="bg-slate-50"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: "🚦", title: "Engenharia de Tráfego", desc: "Estudos de impacto, microssimulação, semaforização e gestão de tráfego." },
            { icon: "🏙️", title: "Planeamento Urbano", desc: "Planos de Mobilidade Urbana Sustentável (PMUS) e requalificação de espaço público." },
            { icon: "🚆", title: "Transportes Públicos", desc: "Estudos de procura, redes de BRT, Metro Ligeiro e interfaces intermodais." },
            { icon: "✈️", title: "Infraestruturas", desc: "Projetos geométricos, aeroportos, terminais e acessibilidades a grandes polos." },
            { icon: "🅿️", title: "Estacionamento", desc: "Estudos de oferta e procura, política de estacionamento e design de parques." },
            { icon: "🚲", title: "Mobilidade Suave", desc: "Redes cicláveis, pedonais e sistemas de partilha para cidades mais humanas." },
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-brand-light rounded-lg flex items-center justify-center text-2xl mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-3">{service.title}</h3>
              <p className="text-brand-gray text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. Featured Projects */}
      <Section
        id="projetos"
        title="Projetos em Destaque"
        subtitle="A nossa marca em empreendimentos comerciais, aeroportos, sistemas de transporte e planos de mobilidade que transformam territórios."
        className="bg-white"
      >
        <div className="mb-10 text-center">
          <Link href="/projetos" className="text-brand-orange font-bold hover:underline">Ver todos os projetos →</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              img: "/images/projeto-metro.jpg",
              tag: "BRT / Metro Ligeiro",
              title: "Expansão da Rede de Metro",
              desc: "Estudo de inserção urbana e traçado para nova linha estruturante.",
              loc: "Porto, Portugal"
            },
            {
              img: "/images/projeto-aeroporto.jpg",
              tag: "Infraestruturas Aeroportuárias",
              title: "Novo Aeroporto Internacional",
              desc: "Planeamento de acessibilidades e dimensionamento de terminais.",
              loc: "Lisboa, Portugal"
            },
            {
              img: "/images/projeto-mobilidade.jpg",
              tag: "Plano de Mobilidade",
              title: "PMUS de Grande Cidade",
              desc: "Estratégia de mobilidade para os próximos 10 anos.",
              loc: "São Paulo, Brasil"
            }
          ].map((project, idx) => (
            <div key={idx} className="group rounded-2xl overflow-hidden bg-white shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 backdrop-blur text-xs font-bold shadow-sm">{project.tag}</Badge>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs font-bold text-brand-orange uppercase tracking-wider mb-2">{project.loc}</p>
                <h3 className="text-xl font-bold text-brand-blue mb-2 group-hover:text-brand-orange transition-colors">{project.title}</h3>
                <p className="text-brand-gray text-sm mb-4 line-clamp-2">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. Clients & Sectors */}
      <Section className="bg-brand-blue text-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Clientes e Setores</h2>
            <p className="text-brand-light/80 text-lg leading-relaxed mb-8">
              Trabalhamos em estreita colaboração com uma vasta gama de entidades, desde a administração pública a promotores privados, garantindo soluções tecnicamente robustas e viáveis.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Administração Central e Local",
                "Gestores de Infraestruturas",
                "Operadores de Transporte",
                "Promotores Imobiliários",
                "Centros Comerciais",
                "Indústria e Logística"
              ].map((client, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="text-brand-orange">✓</span>
                  <span className="font-medium text-brand-light">{client}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[300px] bg-white/5 rounded-2xl border border-white/10 p-8 flex items-center justify-center">
            {/* Placeholder for client logos grid */}
            <div className="text-center">
              <p className="text-brand-light/50 mb-4">Confiança depositada por dezenas de entidades</p>
              <div className="grid grid-cols-3 gap-8 opacity-50 grayscale">
                {/* Mock logos */}
                <div className="h-12 bg-white/20 rounded"></div>
                <div className="h-12 bg-white/20 rounded"></div>
                <div className="h-12 bg-white/20 rounded"></div>
                <div className="h-12 bg-white/20 rounded"></div>
                <div className="h-12 bg-white/20 rounded"></div>
                <div className="h-12 bg-white/20 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 6. News & Distinctions */}
      <Section title="Notícias e Distinções" className="bg-slate-50">
        <div className="grid md:grid-cols-3 gap-8">
          {/* News Cards */}
          {[
            { date: "Nov 2025", title: "ENGIMIND renova estatuto PME Líder", summary: "Reconhecimento do desempenho superior e solidez financeira." },
            { date: "Out 2025", title: "Novo projeto de Metro Ligeiro", summary: "Vencemos concurso internacional para estudo de traçado." },
            { date: "Set 2025", title: "Conferência Mobilidade 2030", summary: "Participação como oradores no maior evento do setor." }
          ].map((news, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
              <span className="inline-block px-3 py-1 bg-brand-light text-brand-blue text-xs font-bold rounded-full mb-4">
                {news.date}
              </span>
              <h3 className="text-lg font-bold text-brand-blue mb-3 hover:text-brand-orange cursor-pointer transition-colors">
                {news.title}
              </h3>
              <p className="text-brand-gray text-sm mb-4">
                {news.summary}
              </p>
              <Link href="/noticias" className="text-brand-orange text-sm font-bold hover:underline">Ler mais</Link>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center gap-8">
          {/* PME Badges */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-white rounded-full shadow-sm flex items-center justify-center border-2 border-brand-orange/20 text-brand-blue font-bold text-xs text-center p-2">
              PME Líder
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-white rounded-full shadow-sm flex items-center justify-center border-2 border-brand-orange/20 text-brand-blue font-bold text-xs text-center p-2">
              PME Excelência
            </div>
          </div>
        </div>
      </Section>

      {/* 7. Contact Us */}
      <Section id="contactos" className="bg-white">
        <div className="bg-brand-light/50 rounded-3xl p-8 md:p-16 text-center border border-brand-blue/5">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">Vamos conversar sobre o seu projeto?</h2>
          <p className="text-lg text-brand-gray mb-10 max-w-2xl mx-auto">
            Seja para um estudo de tráfego, um plano de mobilidade ou um projeto de infraestruturas, a nossa equipa está pronta para ajudar.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-10">
            <div className="flex items-center gap-3">
              <span className="text-2xl">✉️</span>
              <a href="mailto:info@engimind.com" className="text-xl font-bold text-brand-blue hover:text-brand-orange transition-colors">info@engimind.com</a>
            </div>
            <div className="hidden md:block w-px h-8 bg-brand-blue/20"></div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">📞</span>
              <a href="tel:+351210000000" className="text-xl font-bold text-brand-blue hover:text-brand-orange transition-colors">+351 210 000 000</a>
            </div>
          </div>
          <Link
            href="/contactos"
            className="inline-flex justify-center items-center px-8 py-4 bg-brand-blue text-white font-bold rounded-xl hover:bg-brand-blue-light transition-all shadow-lg hover:-translate-y-1"
          >
            Ver contactos completos
          </Link>
        </div>
      </Section>
    </main>
  );
}
