import { notFound } from "next/navigation";
import Link from "next/link";
import BigHero from "@/components/BigHero";
import Section from "@/components/Section";
import { getCourseBySlug, getAllCourseSlugs } from "@/content/courses";

interface CoursePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCourseSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return { title: "Curso não encontrado" };

  return {
    title: `${course.name} - Formação Certificada`,
    description: course.shortDescription,
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <BigHero
        title={course.name}
        subtitle={course.shortDescription}
        backgroundImage="/images/projeto-mobilidade.jpg"
        caption="Formação Certificada"
        size="default"
      />

      {/* Main Content */}
      <Section background="white" spacing="large">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-8">
            {/* Long Description */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-medium mb-6">
                Sobre o curso
              </h2>
              <p className="text-body text-lg leading-relaxed">
                {course.longDescription}
              </p>
            </div>

            {/* Topics / Program */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-medium mb-6">
                Conteúdo do curso
              </h2>
              <ul className="space-y-3">
                {course.topics.map((topic, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-body"
                  >
                    <span className="w-1.5 h-1.5 bg-[#0a0a0a] rounded-full mt-2 shrink-0" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              {/* Target Audience */}
              {course.targetAudience && (
                <div className="p-6 bg-[#fafafa] border border-[#e5e5e5]">
                  <h3 className="text-sm font-medium text-[#a3a3a3] uppercase tracking-wider mb-3">
                    Público-alvo
                  </h3>
                  <p className="text-sm text-[#0a0a0a] leading-relaxed">
                    {course.targetAudience}
                  </p>
                </div>
              )}

              {/* Prerequisites */}
              {course.prerequisites && (
                <div className="p-6 bg-[#fafafa] border border-[#e5e5e5]">
                  <h3 className="text-sm font-medium text-[#a3a3a3] uppercase tracking-wider mb-3">
                    Pré-requisitos
                  </h3>
                  <p className="text-sm text-[#0a0a0a] leading-relaxed">
                    {course.prerequisites}
                  </p>
                </div>
              )}

              {/* Duration */}
              {course.duration && (
                <div className="p-6 bg-[#fafafa] border border-[#e5e5e5]">
                  <h3 className="text-sm font-medium text-[#a3a3a3] uppercase tracking-wider mb-3">
                    Duração
                  </h3>
                  <p className="text-sm text-[#0a0a0a] leading-relaxed">
                    {course.duration}
                  </p>
                </div>
              )}

              {/* Certification */}
              {course.certification && (
                <div className="p-6 bg-[#0a0a0a] text-white">
                  <h3 className="text-sm font-medium text-white/60 uppercase tracking-wider mb-3">
                    Certificação
                  </h3>
                  <p className="text-sm text-white/90 leading-relaxed">
                    {course.certification}
                  </p>
                </div>
              )}

              {/* CTA Button */}
              <Link
                href="/contacts"
                className="block w-full text-center px-6 py-3.5 text-sm font-bold bg-[#0a0a0a] text-white hover:bg-[#1a1a1a] transition-colors shadow-md"
              >
                Pedir mais informações
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="dark" spacing="large">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-headline text-white mb-6">
            Interessado em formação?
          </h2>
          <p className="text-white/60 mb-8">
            Entre em contacto para saber mais sobre os nossos cursos, datas
            disponíveis e preços. Formação disponível em Portugal e Brasil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacts"
              className="btn-primary !bg-white !text-[#0a0a0a] hover:!bg-white/90"
            >
              Solicitar informações
            </Link>
            <a
              href="mailto:cursos@engimind.com"
              className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-[#0a0a0a]"
            >
              cursos@engimind.com
            </a>
          </div>
        </div>
      </Section>

      {/* Back Link */}
      <Section background="white" spacing="small">
        <Link
          href="/courses"
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
          Voltar aos cursos
        </Link>
      </Section>
    </>
  );
}

