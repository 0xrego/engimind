import BigHero from "@/components/BigHero";
import Section from "@/components/Section";

export const metadata = {
  title: "Clientes",
  description: "Conheça os clientes da ENGIMIND: administração pública, operadores de transportes e promotores privados.",
};

export default function Clients() {
  const clientCategories = [
    {
      name: "Administração Central",
      description: "Ministérios e entidades governamentais responsáveis pelas políticas de transportes e mobilidade.",
    },
    {
      name: "Administração Local",
      description: "Câmaras Municipais e autoridades regionais que planeiam e gerem a mobilidade nas suas cidades.",
    },
    {
      name: "Gestores de Infraestruturas",
      description: "Entidades que gerem redes de estradas, aeroportos, portos e outras infraestruturas de transporte.",
    },
    {
      name: "Operadores de Transportes",
      description: "Empresas de transporte público e privado que operam serviços de mobilidade.",
    },
    {
      name: "Projetistas e Consultores",
      description: "Empresas de engenharia e consultoria que desenvolvem projetos de infraestruturas.",
    },
    {
      name: "Promotores e Operadores Comerciais",
      description: "Promotores imobiliários e operadores de centros comerciais e grandes superfícies.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <BigHero
        title="Clientes"
        subtitle="Trabalhamos com uma diversidade significativa de clientes públicos e privados."
        backgroundImage="/images/projeto-mobilidade.jpg"
        caption="Parcerias"
        size="default"
      />

      {/* Intro */}
      <Section background="white" spacing="large">
        <div className="max-w-3xl">
          <p className="text-xl md:text-2xl text-[#525252] leading-relaxed">
            A ENGIMIND trabalha com uma significativa diversidade de clientes
            públicos e privados, desenvolvendo soluções desenhadas para dar
            resposta às especificações de cada situação, combinando a inovação de
            cada caso com a experiência adquirida em projetos desenvolvidos.
          </p>
        </div>
      </Section>

      {/* Client Categories */}
      <Section background="light" spacing="large">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <span className="text-5xl font-medium text-[#e5e5e5] block mb-6">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-medium mb-4">{category.name}</h3>
              <p className="text-body">{category.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Stats */}
      <Section background="dark" spacing="default">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <span className="block text-4xl md:text-5xl font-medium text-white mb-2">
              +100
            </span>
            <span className="text-sm text-white/50 uppercase tracking-wider">
              Clientes
            </span>
          </div>
          <div>
            <span className="block text-4xl md:text-5xl font-medium text-white mb-2">
              +500
            </span>
            <span className="text-sm text-white/50 uppercase tracking-wider">
              Projetos
            </span>
          </div>
          <div>
            <span className="block text-4xl md:text-5xl font-medium text-white mb-2">
              4
            </span>
            <span className="text-sm text-white/50 uppercase tracking-wider">
              Continentes
            </span>
          </div>
          <div>
            <span className="block text-4xl md:text-5xl font-medium text-white mb-2">
              +15
            </span>
            <span className="text-sm text-white/50 uppercase tracking-wider">
              Anos
            </span>
          </div>
        </div>
      </Section>
    </>
  );
}
