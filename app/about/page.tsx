import BigHero from "@/components/BigHero";
import Section from "@/components/Section";
import TeamGrid from "@/components/TeamGrid";
import Link from "next/link";
import { directors, teamMembers, companyInfo } from "@/content/team";

export const metadata = {
  title: "Sobre Nós",
  description: "Conheça a ENGIMIND, a nossa história, missão e equipa de especialistas em mobilidade e transportes.",
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <BigHero
        title="Sobre Nós"
        subtitle="Uma equipa dedicada a construir o futuro da mobilidade desde 2006."
        backgroundImage="/images/projeto-mobilidade.jpg"
        caption="Quem somos"
      />

      {/* Story */}
      <Section background="white" spacing="large">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="text-caption mb-4">A Nossa História</p>
            <h2 className="text-headline">
              Consultoria de referência em mobilidade
            </h2>
          </div>
          <div className="lg:col-span-7">
            <div className="space-y-4">
              <p className="text-xl text-[#525252] leading-relaxed">
                A ENGIMIND Consultores é uma empresa de consultoria vocacionada
                para criar, desenvolver e gerir soluções nos domínios da
                mobilidade e dos transportes.
              </p>
              <p className="text-body">
                Os projetos desenvolvidos pela nossa equipa técnica evidenciam
                uma vasta experiência e um profundo domínio de matérias
                relacionadas com a mobilidade e transportes, nas suas diversas
                vertentes: transporte individual, transporte coletivo,
                estacionamento, modos suaves e projeto de engenharia.
              </p>
              <p className="text-body">
                A nossa abordagem baseia-se na competência técnica de excelência
                e numa atitude permanente de diálogo e troca de experiências com
                os nossos clientes e parceiros.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Mission, Vision, Values */}
      <Section background="light" spacing="large">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          <div>
            <span className="text-5xl font-medium text-[#e5e5e5] mb-4 block">
              01
            </span>
            <h3 className="text-xl font-medium mb-3">Missão</h3>
            <p className="text-body">
              Desenvolver soluções de mobilidade inovadoras e sustentáveis que
              melhorem a qualidade de vida nas cidades e a eficiência dos
              sistemas de transporte.
            </p>
          </div>
          <div>
            <span className="text-5xl font-medium text-[#e5e5e5] mb-4 block">
              02
            </span>
            <h3 className="text-xl font-medium mb-4">Visão</h3>
            <p className="text-body">
              Ser uma referência global na consultoria de transportes,
              reconhecida pela excelência técnica e pela capacidade de resolver
              desafios complexos de mobilidade.
            </p>
          </div>
          <div>
            <span className="text-5xl font-medium text-[#e5e5e5] mb-4 block">
              03
            </span>
            <h3 className="text-xl font-medium mb-4">Valores</h3>
            <p className="text-body">
              Rigor técnico, inovação, sustentabilidade, compromisso com o
              cliente e ética profissional são os pilares que guiam a nossa
              atuação.
            </p>
          </div>
        </div>
      </Section>

      {/* Stats */}
      <Section background="dark" spacing="default">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <span className="block text-4xl md:text-5xl font-medium text-white mb-2">
              {new Date().getFullYear() - (companyInfo.founded || 2006)}+
            </span>
            <span className="text-sm text-white/50 uppercase tracking-wider">
              Anos
            </span>
          </div>
          <div>
            <span className="block text-4xl md:text-5xl font-medium text-white mb-2">
              {companyInfo.projectsCompleted}+
            </span>
            <span className="text-sm text-white/50 uppercase tracking-wider">
              Projetos
            </span>
          </div>
          <div>
            <span className="block text-4xl md:text-5xl font-medium text-white mb-2">
              {companyInfo.continents}
            </span>
            <span className="text-sm text-white/50 uppercase tracking-wider">
              Continentes
            </span>
          </div>
          <div>
            <span className="block text-4xl md:text-5xl font-medium text-white mb-2">
              30+
            </span>
            <span className="text-sm text-white/50 uppercase tracking-wider">
              Colaboradores
            </span>
          </div>
        </div>
      </Section>

      {/* Team - Directors */}
      <Section background="white" spacing="large">
        <div className="mb-12">
          <p className="text-caption mb-4">Equipa</p>
          <h2 className="text-headline">Direção</h2>
        </div>
        <TeamGrid members={directors} type="directors" />
      </Section>

      {/* Team - All Members */}
      <Section background="light" spacing="large">
        <div className="mb-12">
          <h3 className="text-2xl font-medium">Equipa Técnica</h3>
        </div>
        <TeamGrid members={teamMembers} type="team" />
      </Section>

      {/* Awards */}
      <Section background="white" spacing="large">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-caption mb-4">Reconhecimento</p>
          <h2 className="text-headline mb-6">Distinções</h2>
          <p className="text-body">
            O nosso trabalho tem sido reconhecido ao longo dos anos com
            distinções que atestam a qualidade e inovação dos nossos serviços.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-8 bg-[#fafafa] text-center">
            <span className="text-4xl font-medium text-[#0a0a0a] block mb-2">
              PME Líder
            </span>
            <span className="text-sm text-[#a3a3a3]">6 anos consecutivos</span>
          </div>
          <div className="p-8 bg-[#0a0a0a] text-center">
            <span className="text-4xl font-medium text-white block mb-2">
              PME Excelência
            </span>
            <span className="text-sm text-white/60">4 anos consecutivos</span>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="light" spacing="large">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-headline mb-6">Quer fazer parte da equipa?</h2>
          <p className="text-body mb-8">
            Estamos sempre à procura de talentos que partilhem a nossa paixão
            pela mobilidade e transportes.
          </p>
          <Link href="/contacts" className="btn-primary">
            Contactar
          </Link>
        </div>
      </Section>
    </>
  );
}
