import { notFound } from "next/navigation";
import Link from "next/link";
import Section from "@/components/Section";
import { news, getNewsById } from "@/content/news";

interface NewsPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return news.map((item) => ({
    id: item.id,
  }));
}

export async function generateMetadata({ params }: NewsPageProps) {
  const { id } = await params;
  const newsItem = getNewsById(id);
  if (!newsItem) return { title: "Notícia não encontrada" };

  return {
    title: newsItem.title,
    description: newsItem.excerpt,
  };
}

export default async function NewsPage({ params }: NewsPageProps) {
  const { id } = await params;
  const newsItem = getNewsById(id);

  if (!newsItem) {
    notFound();
  }

  // Get related news
  const relatedNews = news
    .filter((n) => n.category === newsItem.category && n.id !== newsItem.id)
    .slice(0, 3);

  return (
    <>
      {/* Header */}
      <Section background="white" spacing="large" className="pt-24">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-caption text-[#2563eb]">
              {newsItem.category}
            </span>
            <span className="w-1 h-1 rounded-full bg-[#e5e5e5]" />
            <span className="text-meta">{newsItem.date}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-medium mb-8">
            {newsItem.title}
          </h1>
          <p className="text-xl text-[#525252] leading-relaxed">
            {newsItem.excerpt}
          </p>
        </div>
      </Section>

      {/* Content */}
      <Section background="white" spacing="default">
        <div className="max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-body text-lg leading-relaxed">
              {newsItem.content || newsItem.excerpt}
            </p>
          </div>
        </div>
      </Section>

      {/* Share */}
      <Section background="white" spacing="small">
        <div className="max-w-3xl border-t border-[#e5e5e5] pt-8">
          <p className="text-sm text-[#a3a3a3] mb-4">Partilhar</p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-[#fafafa] hover:bg-[#0a0a0a] hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-[#fafafa] hover:bg-[#0a0a0a] hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-[#fafafa] hover:bg-[#0a0a0a] hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.47 2H3.53a1.45 1.45 0 00-1.47 1.43v17.14A1.45 1.45 0 003.53 22h16.94a1.45 1.45 0 001.47-1.43V3.43A1.45 1.45 0 0020.47 2zM8.09 18.74h-3v-9h3v9zM6.59 8.48a1.56 1.56 0 110-3.12 1.57 1.57 0 110 3.12zm12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0012.85 13a2 2 0 00-.1.73v5h-3v-9h3v1.2a3 3 0 012.71-1.5c2 0 3.45 1.29 3.45 4.06v5.25z" />
              </svg>
            </a>
          </div>
        </div>
      </Section>

      {/* Related News */}
      {relatedNews.length > 0 && (
        <Section background="light" spacing="large">
          <div className="mb-12">
            <h2 className="text-2xl font-medium">Notícias Relacionadas</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedNews.map((item) => (
              <Link key={item.id} href={`/news/${item.id}`} className="group">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-xs font-medium text-[#2563eb] uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="text-xs text-[#a3a3a3]">{item.date}</span>
                </div>
                <h3 className="text-lg font-medium group-hover:text-[#525252] transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#a3a3a3] line-clamp-2">
                  {item.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </Section>
      )}

      {/* Back Link */}
      <Section background="white" spacing="small">
        <Link
          href="/news"
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
          Voltar às notícias
        </Link>
      </Section>
    </>
  );
}

