import { notFound } from "next/navigation";
import Link from "next/link";
import BigHero from "@/components/BigHero";
import Section from "@/components/Section";
import { getServiceBySlug, getAllServiceSlugs } from "@/content/services";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Serviço não encontrado" };

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <BigHero
        title={service.title}
        subtitle={service.description}
        backgroundImage="/images/projeto-mobilidade.jpg"
        caption="Serviços"
        size="default"
      />

      {/* Details Sections */}
      {service.details && service.details.length > 0 && (
        <Section background="white" spacing="large">
          <div className="max-w-4xl">
            {service.details.map((detail, index) => (
              <div
                key={index}
                className={`mb-12 ${index === service.details!.length - 1 ? "mb-0" : ""}`}
              >
                <h2 className="text-3xl md:text-4xl font-medium mb-6">
                  {detail.sectionTitle}
                </h2>
                <p className="text-body text-lg leading-relaxed">
                  {detail.text}
                </p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Features / Tags */}
      {service.features && service.features.length > 0 && (
        <Section background="light" spacing="large">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-medium mb-8">
              Áreas de atuação
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 py-3 border-b border-[#e5e5e5] last:border-0"
                >
                  <span className="w-1.5 h-1.5 bg-[#0a0a0a] rounded-full mt-2 shrink-0" />
                  <span className="text-body">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Software */}
      {service.software && service.software.length > 0 && (
        <Section background="white" spacing="large">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-medium mb-6">
              Software utilizado
            </h2>
            <div className="flex flex-wrap gap-3">
              {service.software.map((tool, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-[#fafafa] text-[#0a0a0a] text-sm font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* CTA */}
      <Section background="dark" spacing="large">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-headline text-white mb-6">
            Fale connosco para saber mais
          </h2>
          <p className="text-lg text-white/60 mb-8">
            Estamos disponíveis para discutir o seu projeto e apresentar soluções
            adaptadas às suas necessidades específicas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacts" className="btn-primary !bg-white !text-[#0a0a0a] hover:!bg-white/90">
              Contactar
            </Link>
            <Link
              href="/servicos"
              className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-[#0a0a0a]"
            >
              Ver todos os serviços
            </Link>
          </div>
        </div>
      </Section>

      {/* Back Link */}
      <Section background="white" spacing="small">
        <Link
          href="/servicos"
          className="inline-flex items-center text-sm font-medium text-[#a3a3a3] hover:text-[#0a0a0a] transition-colors"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
          Voltar aos serviços
        </Link>
      </Section>
    </>
  );
}

