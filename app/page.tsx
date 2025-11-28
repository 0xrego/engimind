import Link from "next/link";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import ArticleCard from "@/components/ArticleCard";
import HeroVideo from "@/components/HeroVideo";
import { getFeaturedProjects } from "@/content/projects";
import { getFeaturedNews } from "@/content/news";
import { companyInfo } from "@/content/team";
import { services } from "@/content/services";

export default function Home() {
  const featuredProjects = getFeaturedProjects();
  const featuredNews = getFeaturedNews().slice(0, 3);

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════
          HERO — Full Screen Editorial with Video
          ═══════════════════════════════════════════════════════════ */}
      <HeroVideo videoSrc="/videos/hero.mp4">
        <div className="max-w-5xl">
          <p className="text-caption text-white/95 font-medium mb-4 fade-in-up drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
            Consultores em Mobilidade e Transportes
          </p>
          <h1 className="text-display text-white mb-6 fade-in-up fade-in-delay-1">
            A criar o futuro
            <br />
            da mobilidade
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-2xl leading-relaxed mb-8 fade-in-up fade-in-delay-2">
            Soluções inovadoras para criar, desenvolver e gerir a mobilidade
            do futuro. Desde 2006 a transformar cidades.
          </p>
          <div className="flex flex-wrap gap-4 fade-in-up fade-in-delay-3">
            <Link href="/projects" className="btn-primary">
              Ver projetos
            </Link>
            <Link
              href="/about"
              className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-[#0a0a0a]"
            >
              Conhecer-nos
            </Link>
          </div>
        </div>
      </HeroVideo>

      {/* ═══════════════════════════════════════════════════════════
          ABOUT INTRO
          ═══════════════════════════════════════════════════════════ */}
      <Section background="white" spacing="large">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-caption mb-4">Sobre nós</p>
            <h2 className="text-headline mb-6">
              Excelência em Engenharia de Tráfego e Planeamento
            </h2>
            <p className="text-body mb-4">
              A ENGIMIND é uma empresa de consultoria vocacionada para criar,
              desenvolver e gerir soluções nos domínios da mobilidade e dos
              transportes.
            </p>
            <p className="text-body mb-8">
              A nossa abordagem baseia-se na competência técnica de excelência e
              numa atitude permanente de diálogo, garantindo soluções
              sustentáveis e eficientes para os desafios da mobilidade moderna.
            </p>
            <Link href="/about" className="btn-secondary">
              Saiba mais
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="p-8 bg-[#fafafa]">
              <span className="block text-5xl md:text-6xl font-medium text-[#0a0a0a] mb-2">
                +{companyInfo.founded ? new Date().getFullYear() - companyInfo.founded : 15}
              </span>
              <span className="text-sm text-[#a3a3a3] uppercase tracking-wider">
                Anos de Experiência
              </span>
            </div>
            <div className="p-8 bg-[#0a0a0a] text-white mt-6">
              <span className="block text-5xl md:text-6xl font-medium mb-2">
                +{companyInfo.projectsCompleted}
              </span>
              <span className="text-sm text-white/60 uppercase tracking-wider">
                Projetos Realizados
              </span>
            </div>
            <div className="p-8 bg-[#0a0a0a] text-white">
              <span className="block text-5xl md:text-6xl font-medium mb-2">
                {companyInfo.continents}
              </span>
              <span className="text-sm text-white/60 uppercase tracking-wider">
                Continentes
              </span>
            </div>
            <div className="p-8 bg-[#fafafa] mt-6">
              <span className="block text-5xl md:text-6xl font-medium text-[#0a0a0a] mb-2">
                2
              </span>
              <span className="text-sm text-[#a3a3a3] uppercase tracking-wider">
                Escritórios
              </span>
            </div>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          FEATURED PROJECTS
          ═══════════════════════════════════════════════════════════ */}
      <Section background="light" spacing="large">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-caption mb-4">Portfólio</p>
            <h2 className="text-headline">Projetos em Destaque</h2>
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredProjects.slice(0, 6).map((project, index) => (
            <div
              key={project.id}
              className="fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard
                id={project.id}
                title={project.title}
                subtitle={project.subtitle}
                location={project.location}
                image={project.image}
                category={project.category}
                year={project.year}
              />
            </div>
          ))}
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          SERVICES PREVIEW
          ═══════════════════════════════════════════════════════════ */}
      <Section background="dark" spacing="large">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left */}
          <div>
            <p className="text-caption text-white/40 mb-4">Serviços</p>
            <h2 className="text-headline text-white mb-6">
              Áreas de Atuação
            </h2>
            <p className="text-lg text-white/60 leading-relaxed mb-8">
              Oferecemos um leque completo de serviços especializados para dar
              resposta a todas as necessidades de mobilidade.
            </p>
            <Link
              href="/services"
              className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-[#0a0a0a]"
            >
              Ver todos os serviços
            </Link>
          </div>

          {/* Right — Service List */}
          <div className="space-y-0">
            {services.slice(0, 6).map((service) => (
              <Link
                key={service.id}
                href={`/servicos/${service.slug}`}
                className="block py-5 border-b border-white/10 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg text-white/80 group-hover:text-white transition-colors">
                    {service.title}
                  </span>
                  <svg
                    className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all"
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
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          NEWS / UPDATES
          ═══════════════════════════════════════════════════════════ */}
      <Section background="white" spacing="large">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-caption mb-4">Atualidades</p>
            <h2 className="text-headline">Notícias e Projetos</h2>
          </div>
          <Link
            href="/news"
            className="inline-flex items-center text-sm font-medium text-[#0a0a0a] hover:text-[#525252] transition-colors"
          >
            Ver todas as notícias
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

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredNews.map((item, index) => (
            <div
              key={item.id}
              className="fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ArticleCard
                id={item.id}
                date={item.date}
                title={item.title}
                excerpt={item.excerpt}
                category={item.category}
              />
            </div>
          ))}
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          CTA SECTION
          ═══════════════════════════════════════════════════════════ */}
      <Section background="light" spacing="large">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-headline mb-6">
            Vamos trabalhar juntos?
          </h2>
          <p className="text-body mb-8">
            Contacte-nos para discutir o seu próximo projeto de mobilidade.
            Estamos prontos para ajudar.
          </p>
          <Link href="/contacts" className="btn-primary">
            Contactar
          </Link>
        </div>
      </Section>
    </>
  );
}
