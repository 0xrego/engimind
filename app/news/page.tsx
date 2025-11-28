import BigHero from "@/components/BigHero";
import Section from "@/components/Section";
import ArticleCard from "@/components/ArticleCard";
import { news } from "@/content/news";

export const metadata = {
  title: "Notícias",
  description: "Acompanhe as últimas novidades, projetos e distinções da ENGIMIND.",
};

export default function News() {
  return (
    <>
      {/* Hero */}
      <BigHero
        title="Notícias"
        subtitle="Fique a par das últimas novidades, projetos e distinções."
        backgroundImage="/images/projeto-mobilidade.jpg"
        caption="Atualidades"
        size="default"
      />

      {/* Featured Article */}
      {news.length > 0 && (
        <Section background="white" spacing="large">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="aspect-[4/3] bg-[#fafafa]" />
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-caption text-[#2563eb]">
                  {news[0].category}
                </span>
                <span className="w-1 h-1 rounded-full bg-[#e5e5e5]" />
                <span className="text-meta">{news[0].date}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-medium mb-4">
                {news[0].title}
              </h2>
              <p className="text-body text-lg mb-6">{news[0].excerpt}</p>
              <a
                href={`/news/${news[0].id}`}
                className="inline-flex items-center text-sm font-medium text-[#0a0a0a] hover:text-[#2563eb] transition-colors"
              >
                Ler artigo completo
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
              </a>
            </div>
          </div>
        </Section>
      )}

      {/* All News */}
      <Section background="light" spacing="large">
        <div className="mb-12">
          <h3 className="text-2xl font-medium">Todas as Notícias</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
          {news.slice(1).map((item, index) => (
            <div
              key={item.id}
              className="fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
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

      {/* Newsletter CTA */}
      <Section background="dark" spacing="large">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium text-white mb-4">
            Mantenha-se atualizado
          </h2>
          <p className="text-white/60 mb-8">
            Subscreva a nossa newsletter para receber as últimas novidades sobre
            mobilidade e transportes.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="O seu email"
              className="flex-1 px-5 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-white/40"
            />
            <button type="submit" className="btn-primary !bg-white !text-[#0a0a0a]">
              Subscrever
            </button>
          </form>
        </div>
      </Section>
    </>
  );
}
