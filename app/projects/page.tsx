import BigHero from "@/components/BigHero";
import Section from "@/components/Section";
import ProjectGrid from "@/components/ProjectGrid";
import { projects, projectCategories } from "@/content/projects";

export const metadata = {
  title: "Projetos",
  description: "Portfólio de projetos de referência da ENGIMIND em mobilidade, transportes e infraestruturas.",
};

export default function Projects() {
  return (
    <>
      {/* Hero */}
      <BigHero
        title="Projetos"
        subtitle="Um portfólio global que demonstra a nossa capacidade técnica e inovação em mobilidade e transportes."
        backgroundImage="/images/projects.png"
        caption="Portfólio"
      />

      {/* Projects Section */}
      <Section background="white" spacing="large">
        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {projectCategories.map((category) => (
            <button
              key={category}
              className={`px-5 py-2.5 text-sm font-medium transition-colors ${category === "Todos"
                  ? "bg-[#0a0a0a] text-white"
                  : "bg-[#fafafa] text-[#525252] hover:bg-[#f0f0f0]"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <ProjectGrid projects={projects} columns={3} />
      </Section>

      {/* Stats Section */}
      <Section background="dark" spacing="default">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
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
          <div>
            <span className="block text-4xl md:text-5xl font-medium text-white mb-2">
              +100
            </span>
            <span className="text-sm text-white/50 uppercase tracking-wider">
              Clientes
            </span>
          </div>
        </div>
      </Section>
    </>
  );
}
