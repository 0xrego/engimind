import BigHero from "@/components/BigHero";
import Section from "@/components/Section";
import Link from "next/link";
import { courses } from "@/content/courses";

export const metadata = {
  title: "Formação",
  description: "Cursos certificados PTV Group em VISUM, VISSIM, VISWALK e VISTRO.",
};

export default function Courses() {

  return (
    <>
      {/* Hero */}
      <BigHero
        title="Formação"
        subtitle="Cursos certificados PTV Group para profissionais de mobilidade e transportes."
        backgroundImage="/images/formacao.jpg"
        caption="Cursos Certificados"
        size="default"
      />

      {/* Intro */}
      <Section background="white" spacing="large">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-caption mb-4">PTV Group Partner</p>
            <h2 className="text-headline mb-6">Formação Certificada</h2>
            <p className="text-body mb-6">
              A ENGIMIND é certificada pela empresa PTV Group, líder mundial em
              software de análise de redes de transporte, para ministrar
              formação certificada nos seus softwares.
            </p>
            <p className="text-body">
              A formação ministrada pela ENGIMIND é certificada pela PTV Group e
              é válida e reconhecida em todo o mundo. A plataforma desenvolvida
              pela PTV Group está presente em mais de 120 países.
            </p>
          </div>
          <div className="bg-[#fafafa] p-12 text-center">
            <span className="text-6xl font-medium text-[#0a0a0a]">PTV</span>
            <p className="text-sm text-[#a3a3a3] mt-4 uppercase tracking-wider">
              Certified Training Partner
            </p>
          </div>
        </div>
      </Section>

      {/* Courses List */}
      <Section background="light" spacing="large">
        <div className="mb-12">
          <p className="text-caption mb-4">Software</p>
          <h2 className="text-headline">Cursos Disponíveis</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <Link
              key={course.slug}
              href={`/cursos/${course.slug}`}
              className="bg-white p-8 md:p-12 hover:shadow-lg transition-all duration-300 group"
            >
              <span className="text-4xl md:text-5xl font-medium text-[#0a0a0a] block mb-6 group-hover:text-[#525252] transition-colors">
                {course.name}
              </span>
              <p className="text-body mb-6">{course.shortDescription}</p>
              <ul className="space-y-2">
                {course.topics.slice(0, 4).map((topic, i) => (
                  <li
                    key={i}
                    className="text-sm text-[#525252] flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-[#0a0a0a] rounded-full mr-3" />
                    {topic}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center text-sm font-medium text-[#0a0a0a] group-hover:text-[#525252] transition-colors">
                Saber mais
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
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
      </Section>

      {/* CTA */}
      <Section background="dark" spacing="large">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium text-white mb-6">
            Interessado em formação?
          </h2>
          <p className="text-white/60 mb-10">
            Entre em contacto para saber mais sobre os nossos cursos, datas
            disponíveis e preços. Formação disponível em Portugal e Brasil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacts"
              className="btn-primary !bg-white !text-[#0a0a0a]"
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
    </>
  );
}
