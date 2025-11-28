import BigHero from "@/components/BigHero";
import Section from "@/components/Section";
import Link from "next/link";

export const metadata = {
  title: "Qualidade",
  description: "Compromisso da ENGIMIND com a qualidade, certificações e distinções PME Líder e PME Excelência.",
};

export default function Quality() {
  return (
    <>
      {/* Hero */}
      <BigHero
        title="Qualidade"
        subtitle="Compromisso com a excelência técnica e a melhoria contínua."
        backgroundImage="/images/projeto-mobilidade.jpg"
        caption="Compromisso"
        size="default"
      />

      {/* Intro */}
      <Section background="white" spacing="large">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-caption mb-4">Política de Qualidade</p>
            <h2 className="text-headline mb-8">
              Excelência como padrão
            </h2>
          </div>
          <div>
            <p className="text-xl text-[#525252] leading-relaxed mb-6">
              A ENGIMIND assume o compromisso de prestar serviços de consultoria
              de elevada qualidade técnica, orientados para a satisfação das
              necessidades dos seus clientes.
            </p>
            <p className="text-body">
              A nossa abordagem baseia-se na competência técnica de excelência,
              numa atitude permanente de diálogo e na procura constante de
              soluções inovadoras e sustentáveis para os desafios da mobilidade
              moderna.
            </p>
          </div>
        </div>
      </Section>

      {/* Awards */}
      <Section background="light" spacing="large">
        <div className="text-center mb-12">
          <p className="text-caption mb-4">Reconhecimento</p>
          <h2 className="text-headline">Distinções</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-12 text-center">
            <span className="text-5xl md:text-6xl font-medium text-[#0a0a0a] block mb-4">
              PME Líder
            </span>
            <p className="text-lg text-[#525252] mb-6">
              6 anos consecutivos
            </p>
            <p className="text-body">
              Esta distinção do IAPMEI, numa parceria com o Turismo de Portugal,
              Banca e Sociedades de Garantia Mútua, sinaliza desempenhos
              superiores, reconhecendo publicamente o sucesso das nossas
              estratégias empresariais.
            </p>
          </div>
          <div className="bg-[#0a0a0a] p-12 text-center text-white">
            <span className="text-5xl md:text-6xl font-medium block mb-4">
              PME Excelência
            </span>
            <p className="text-lg text-white/70 mb-6">
              4 anos consecutivos
            </p>
            <p className="text-white/60">
              O estatuto PME Excelência visa distinguir a notoriedade das
              empresas que evidenciam os melhores desempenhos e indicadores de
              gestão, marcando a capacidade competitiva do país.
            </p>
          </div>
        </div>
      </Section>

      {/* Principles */}
      <Section background="white" spacing="large">
        <div className="mb-12">
          <p className="text-caption mb-4">Princípios</p>
          <h2 className="text-headline">Os nossos compromissos</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            {
              title: "Rigor Técnico",
              description: "Metodologias robustas e análises fundamentadas em dados e boas práticas internacionais.",
            },
            {
              title: "Inovação",
              description: "Procura constante de novas abordagens e tecnologias para resolver desafios complexos.",
            },
            {
              title: "Sustentabilidade",
              description: "Soluções que promovem a mobilidade sustentável e a qualidade de vida nas cidades.",
            },
            {
              title: "Colaboração",
              description: "Trabalho próximo com clientes e parceiros para soluções adaptadas a cada contexto.",
            },
            {
              title: "Transparência",
              description: "Comunicação clara e honesta em todas as fases dos projetos.",
            },
            {
              title: "Melhoria Contínua",
              description: "Aprendizagem constante e aperfeiçoamento dos nossos processos e competências.",
            },
          ].map((principle, index) => (
            <div key={index}>
              <span className="text-4xl font-medium text-[#e5e5e5] block mb-4">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-medium mb-3">{principle.title}</h3>
              <p className="text-body">{principle.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="light" spacing="large">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-headline mb-6">
            Trabalhe connosco
          </h2>
          <p className="text-body mb-10">
            Confie na nossa experiência e compromisso com a qualidade para o seu
            próximo projeto de mobilidade.
          </p>
          <Link href="/contacts" className="btn-primary">
            Contactar
          </Link>
        </div>
      </Section>
    </>
  );
}
