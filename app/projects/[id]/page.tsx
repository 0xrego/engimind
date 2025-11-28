import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import { projects, getProjectById } from "@/content/projects";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) return { title: "Projeto não encontrado" };

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  // Get related projects
  const relatedProjects = projects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <>
      {/* Hero Image */}
      <section className="relative h-[70vh] md:h-[80vh] bg-[#0a0a0a]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
      </section>

      {/* Project Info */}
      <Section background="white" spacing="large">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <p className="text-caption mb-4">{project.category}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-[#525252] mb-8">{project.subtitle}</p>

            {/* Description */}
            <div className="prose prose-lg max-w-none">
              <p className="text-body text-lg leading-relaxed">
                {project.fullDescription || project.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 text-sm bg-[#fafafa] text-[#525252]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              {/* Metadata */}
              <div className="space-y-4 pb-6 border-b border-[#e5e5e5]">
                <div>
                  <p className="text-caption mb-2">Localização</p>
                  <p className="text-lg font-medium">{project.location}</p>
                </div>
                <div>
                  <p className="text-caption mb-2">Ano</p>
                  <p className="text-lg font-medium">{project.year}</p>
                </div>
                {project.client && (
                  <div>
                    <p className="text-caption mb-2">Cliente</p>
                    <p className="text-lg font-medium">{project.client}</p>
                  </div>
                )}
              </div>

              {/* CTA */}
              <div>
                <p className="text-sm text-[#a3a3a3] mb-4">
                  Interessado em projetos semelhantes?
                </p>
                <Link href="/contacts" className="btn-primary w-full">
                  Contactar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <Section background="light" spacing="large">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="text-caption mb-4">Projetos Relacionados</p>
              <h2 className="text-2xl md:text-3xl font-medium">
                Mais em {project.category}
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center text-sm font-medium text-[#0a0a0a] hover:text-[#525252] transition-colors"
            >
              Ver todos os projetos
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProjects.map((p) => (
              <Link key={p.id} href={`/projects/${p.id}`} className="group">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#f0f0f0] mb-4">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-medium group-hover:text-[#525252] transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-[#a3a3a3]">{p.location}</p>
              </Link>
            ))}
          </div>
        </Section>
      )}

      {/* Back Link */}
      <Section background="white" spacing="small">
        <Link
          href="/projects"
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
          Voltar aos projetos
        </Link>
      </Section>
    </>
  );
}

