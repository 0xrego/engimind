import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import MetricCard from "@/components/MetricCard";
import Badge from "@/components/Badge";

export default function Home() {
  return (
    <main className="flex-grow">
      {/* 1. Hero Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Text Column */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold tracking-wide uppercase mb-8">
                Consultoria em Mobilidade
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-slate-900 leading-[1.05] mb-8 tracking-tight">
                Planeamos o futuro da mobilidade.
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 mb-12 leading-relaxed max-w-lg">
                Soluções integradas de engenharia e estratégia para conectar pessoas, cidades e negócios de forma sustentável.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#projetos"
                  className="btn-primary"
                >
                  Ver projetos
                </Link>
                <Link
                  href="/empresa"
                  className="btn-secondary"
                >
                  Conhecer a Engimind
                </Link>
              </div>
            </div>

            {/* Image Column */}
            <div className="relative">
              <div className="relative h-[500px] md:h-[600px] w-full rounded-[2.5rem] overflow-hidden bg-slate-50 shadow-sm">
                <Image
                  src="/images/hero-mobility.jpg"
                  alt="Mobilidade Urbana"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Metrics / Why Us */}
      <Section className="bg-white border-b border-slate-100 pt-0 pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            <MetricCard
              value="+20"
              label="Anos de Experiência"
              icon="📅"
            />
            <MetricCard
              value="3"
              label="Continentes"
              icon="🌍"
            />
            <MetricCard
              value="100+"
              label="Projetos Realizados"
              icon="🤝"
            />
            <MetricCard
              value="Ref."
              label="Em Mobilidade"
              icon="🏆"
            />
          </div>
        </div>
      </Section>

      {/* 3. What We Do */}
      <Section
        title="O que fazemos"
        subtitle="Competências multidisciplinares para resolver os desafios complexos da mobilidade moderna."
        className="bg-white section-padding"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">
          {[
            { icon: "🚦", title: "Engenharia de Tráfego", desc: "Estudos de impacto, microssimulação, semaforização e gestão de tráfego." },
            { icon: "🏙️", title: "Planeamento Urbano", desc: "Planos de Mobilidade Urbana Sustentável (PMUS) e requalificação de espaço público." },
            { icon: "🚆", title: "Transportes Públicos", desc: "Estudos de procura, redes de BRT, Metro Ligeiro e interfaces intermodais." },
            { icon: "✈️", title: "Infraestruturas", desc: "Projetos geométricos, aeroportos, terminais e acessibilidades a grandes polos." },
            { icon: "🅿️", title: "Estacionamento", desc: "Estudos de oferta e procura, política de estacionamento e design de parques." },
            { icon: "🚲", title: "Mobilidade Suave", desc: "Redes cicláveis, pedonais e sistemas de partilha para cidades mais humanas." },
          ].map((service, idx) => (
            <div key={idx} className="group">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-500 text-lg leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. Featured Projects */}
      <Section
        id="projetos"
        title="Projetos em Destaque"
        subtitle="A nossa marca em empreendimentos que transformam territórios."
        className="bg-slate-50 section-padding"
      >
        <div className="mb-16 text-center">
          <Link href="/projetos" className="text-slate-900 font-medium hover:text-brand-blue transition-colors text-lg">Ver todos os projetos →</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              img: "/images/projeto-metro.jpg",
              tag: "Transportes",
              title: "Expansão da Rede de Metro",
              desc: "Estudo de inserção urbana e traçado.",
              loc: "Porto, Portugal"
            },
            {
              img: "/images/projeto-aeroporto.jpg",
              tag: "Aeroportos",
              title: "Novo Aeroporto Internacional",
              desc: "Planeamento de acessibilidades e terminais.",
              loc: "Lisboa, Portugal"
            },
            {
              img: "/images/projeto-mobilidade.jpg",
              tag: "Mobilidade",
              title: "PMUS de Grande Cidade",
              desc: "Estratégia para os próximos 10 anos.",
              loc: "São Paulo, Brasil"
            }
          ].map((project, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative h-72 rounded-3xl overflow-hidden mb-8 bg-slate-200">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">{project.tag} • {project.loc}</p>
                <h3 className="text-2xl font-semibold text-slate-900 mb-3 group-hover:text-brand-blue transition-colors">{project.title}</h3>
                <p className="text-slate-500 text-lg">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. Clients & Sectors */}
      <Section className="bg-white section-padding">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-8">Clientes e Setores</h2>
            <p className="text-slate-500 text-xl leading-relaxed mb-12">
              Trabalhamos em estreita colaboração com uma vasta gama de entidades, desde a administração pública a promotores privados.
            </p>
            <div className="grid grid-cols-2 gap-y-6 gap-x-8">
              {[
                "Administração Pública",
                "Gestores de Infraestruturas",
                "Operadores de Transporte",
                "Promotores Imobiliários",
                "Centros Comerciais",
                "Indústria e Logística"
              ].map((client, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                  <span className="font-medium text-slate-700 text-lg">{client}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Mock logos - simple boxes for now */}
            {[...Array(6)].map((_, i) => (
              <div key={i} className="aspect-video bg-slate-100 rounded-xl flex items-center justify-center">
                <span className="text-xs text-slate-400">Logo {i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 6. News & Distinctions */}
      <Section title="Notícias" className="bg-slate-50 section-padding">
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { date: "Nov 2025", title: "ENGIMIND renova estatuto PME Líder", summary: "Reconhecimento do desempenho superior e solidez financeira." },
            { date: "Out 2025", title: "Novo projeto de Metro Ligeiro", summary: "Vencemos concurso internacional para estudo de traçado." },
            { date: "Set 2025", title: "Conferência Mobilidade 2030", summary: "Participação como oradores no maior evento do setor." }
          ].map((news, idx) => (
            <div key={idx} className="group cursor-pointer">
              <span className="inline-block text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                {news.date}
              </span>
              <h3 className="text-xl font-semibold text-slate-900 mb-4 group-hover:text-brand-blue transition-colors leading-tight">
                {news.title}
              </h3>
              <p className="text-slate-500 text-lg leading-relaxed mb-6">
                {news.summary}
              </p>
              <span className="text-slate-900 text-sm font-medium group-hover:underline">Ler artigo</span>
            </div>
          ))}
        </div>
      </Section>

      {/* 7. Contact Us */}
      <Section id="contactos" className="bg-white section-padding">
        <div className="bg-slate-50 rounded-[3rem] p-12 md:p-24 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-8">Vamos conversar?</h2>
          <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            Seja para um estudo de tráfego, um plano de mobilidade ou um projeto de infraestruturas, a nossa equipa está pronta para ajudar.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
            <div className="flex items-center gap-3">
              <span className="text-2xl opacity-50">✉️</span>
              <a href="mailto:info@engimind.com" className="text-xl font-medium text-slate-900 hover:text-brand-blue transition-colors">info@engimind.com</a>
            </div>
            <div className="hidden md:block w-px h-8 bg-slate-200"></div>
            <div className="flex items-center gap-3">
              <span className="text-2xl opacity-50">📞</span>
              <a href="tel:+351210000000" className="text-xl font-medium text-slate-900 hover:text-brand-blue transition-colors">+351 210 000 000</a>
            </div>
          </div>
          <Link
            href="/contactos"
            className="btn-primary"
          >
            Ver contactos completos
          </Link>
        </div>
      </Section>
    </main>
  );
}
