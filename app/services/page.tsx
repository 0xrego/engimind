import BigHero from "@/components/BigHero";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";
import { services } from "@/content/services";

export const metadata = {
  title: "Serviços",
  description: "Serviços especializados em mobilidade, transportes, microssimulação e planeamento urbano.",
};

export default function Services() {
  return (
    <>
      {/* Hero */}
      <BigHero
        title="Serviços"
        subtitle="Soluções integradas e especializadas para todos os desafios da mobilidade e transportes."
        backgroundImage="/images/servicos.png"
        caption="O que fazemos"
      />

      {/* Intro */}
      <Section background="white" spacing="large">
        <div className="max-w-3xl">
          <p className="text-xl md:text-2xl text-[#525252] leading-relaxed">
            A equipa técnica da ENGIMIND tem desenvolvido competências em
            diversas áreas relacionadas com os transportes e a mobilidade. Em
            conjunto com parcerias estratégicas, oferecemos uma abordagem
            multidisciplinar e completa.
          </p>
        </div>
      </Section>

      {/* Services List */}
      <Section background="white" spacing="none">
        <div className="border-t border-[#e5e5e5]">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              slug={service.slug}
              title={service.title}
              description={service.description}
              features={service.features}
              index={index}
            />
          ))}
        </div>
      </Section>

      {/* Software & Tools */}
      <Section background="light" spacing="large">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-caption mb-4">Formação Certificada</p>
            <h2 className="text-headline mb-6">Cursos PTV Group</h2>
            <p className="text-body mb-8">
              A ENGIMIND é certificada pela PTV Group, líder mundial em software
              de análise de redes de transporte, para ministrar formação
              certificada nos seus softwares Visum, Vissim, Viswalk e Vistro.
            </p>
            <Link href="/courses" className="btn-secondary">
              Ver cursos
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {["VISUM", "VISSIM", "VISWALK", "VISTRO"].map((tool) => (
              <div
                key={tool}
                className="p-8 bg-white text-center hover:bg-[#0a0a0a] hover:text-white transition-colors duration-300 cursor-pointer"
              >
                <span className="text-2xl font-medium">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="dark" spacing="large">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-headline text-white mb-6">
            Precisa de uma solução?
          </h2>
          <p className="text-lg text-white/60 mb-10">
            Contacte-nos para discutir o seu projeto. A nossa equipa está pronta
            para ajudar a encontrar a melhor solução para os seus desafios de
            mobilidade.
          </p>
          <Link href="/contacts" className="btn-primary !bg-white !text-[#0a0a0a] hover:!bg-white/90">
            Contactar
          </Link>
        </div>
      </Section>
    </>
  );
}
