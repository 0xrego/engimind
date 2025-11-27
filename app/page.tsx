import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Hero
        title="Consultores em Mobilidade e Transportes"
        subtitle="Soluções inovadoras para criar, desenvolver e gerir a mobilidade do futuro."
        backgroundImage="/images/hero-mobility.jpg"
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              Excelência em Engenharia de Tráfego e Planeamento
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              A ENGIMIND é uma empresa de consultoria vocacionada para criar,
              desenvolver e gerir soluções nos domínios da mobilidade e dos
              transportes.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              A nossa abordagem baseia-se na competência técnica de excelência e
              numa atitude permanente de diálogo, garantindo soluções
              sustentáveis e eficientes para os desafios da mobilidade moderna.
            </p>
            <Link href="/about" className="btn-primary">
              Saiba mais sobre nós
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-100 rounded-2xl p-6 h-48 flex items-center justify-center text-center">
              <div>
                <div className="text-4xl font-bold text-brand-blue mb-2">
                  +15
                </div>
                <div className="text-sm text-slate-600">Anos de Experiência</div>
              </div>
            </div>
            <div className="bg-brand-blue text-white rounded-2xl p-6 h-48 flex items-center justify-center text-center mt-8">
              <div>
                <div className="text-4xl font-bold mb-2">+500</div>
                <div className="text-sm text-slate-200">Projetos Realizados</div>
              </div>
            </div>
            <div className="bg-brand-orange text-white rounded-2xl p-6 h-48 flex items-center justify-center text-center">
              <div>
                <div className="text-4xl font-bold mb-2">4</div>
                <div className="text-sm text-slate-100">Continentes</div>
              </div>
            </div>
            <div className="bg-slate-100 rounded-2xl p-6 h-48 flex items-center justify-center text-center mt-8">
              <div>
                <div className="text-4xl font-bold text-brand-blue mb-2">
                  100%
                </div>
                <div className="text-sm text-slate-600">Dedicação</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section background="light">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Áreas de Atuação
          </h2>
          <p className="text-slate-600">
            Oferecemos um leque completo de serviços especializados para dar
            resposta a todas as necessidades de mobilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            title="Estudos de Tráfego"
            description="Análise detalhada de fluxos, capacidade e segurança para infraestruturas rodoviárias e empreendimentos."
            icon={
              <svg
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
            }
          />
          <Card
            title="Microssimulação"
            description="Modelação avançada de tráfego e peões para validar soluções e otimizar o desempenho de infraestruturas."
            icon={
              <svg
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
            }
          />
          <Card
            title="Mobilidade Sustentável"
            description="Planos de mobilidade urbana, modos suaves e estratégias para cidades mais verdes e eficientes."
            icon={
              <svg
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
          />
        </div>
        <div className="text-center mt-12">
          <Link href="/services" className="btn-secondary">
            Ver todos os serviços
          </Link>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Projetos em Destaque
            </h2>
            <p className="text-slate-600">
              Conheça alguns dos nossos trabalhos mais recentes e emblemáticos em
              Portugal e no mundo.
            </p>
          </div>
          <Link
            href="/projects"
            className="text-brand-blue font-semibold hover:text-brand-orange transition-colors mt-4 md:mt-0 flex items-center"
          >
            Ver portfolio completo
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            title="BRT de Campinas"
            description="Projeto do sistema Bus Rapid Transit para a cidade de Campinas, Brasil, transformando a mobilidade urbana."
            image="/images/project-brt.jpg"
            tags={["Brasil", "BRT", "Transportes"]}
          />
          <Card
            title="Aeroporto de Lisboa"
            description="Estudo de acessibilidade e microssimulação do curbside para o Novo Aeroporto de Lisboa."
            image="/images/project-airport.jpg"
            tags={["Portugal", "Aeroportos", "Microssimulação"]}
          />
          <Card
            title="Metro de São Paulo"
            description="Estudos de procura e microssimulação para novas linhas e estações do Metro de São Paulo."
            image="/images/project-metro.jpg"
            tags={["Brasil", "Metro", "Planeamento"]}
          />
        </div>
      </Section>
    </main>
  );
}
