import { projects, Project } from "@/content/projects";
import { services, Service } from "@/content/services";
import { news, NewsItem } from "@/content/news";

export interface SearchResult {
  type: "project" | "service" | "news";
  id: string;
  slug?: string;
  title: string;
  subtitle?: string;
  description: string;
}

export interface SearchResults {
  projects: SearchResult[];
  services: SearchResult[];
  news: SearchResult[];
  total: number;
}

// Normaliza texto removendo acentos e convertendo para minúsculas
function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

// Verifica se o texto contém a query (case-insensitive, sem acentos)
function matchesQuery(text: string, query: string): boolean {
  const normalizedText = normalizeText(text);
  const normalizedQuery = normalizeText(query);
  return normalizedText.includes(normalizedQuery);
}

// Pesquisa em um texto (pode ser título, descrição, etc.)
function searchInText(text: string, query: string): boolean {
  if (!text || !query) return false;
  return matchesQuery(text, query);
}

// Pesquisa projetos
function searchProjects(query: string, limit: number = 5): SearchResult[] {
  if (!query || query.length < 2) return [];

  const results: SearchResult[] = [];

  for (const project of projects) {
    const matchesTitle = searchInText(project.title, query);
    const matchesSubtitle = searchInText(project.subtitle, query);
    const matchesDescription = searchInText(project.description, query);
    const matchesCategory = searchInText(project.category, query);

    if (matchesTitle || matchesSubtitle || matchesDescription || matchesCategory) {
      results.push({
        type: "project",
        id: project.id,
        slug: project.id, // Projects usam id como slug
        title: project.title,
        subtitle: project.subtitle,
        description: project.description,
      });

      if (results.length >= limit) break;
    }
  }

  return results;
}

// Pesquisa serviços
function searchServices(query: string, limit: number = 5): SearchResult[] {
  if (!query || query.length < 2) return [];

  const results: SearchResult[] = [];

  for (const service of services) {
    const matchesTitle = searchInText(service.title, query);
    const matchesDescription = searchInText(service.description, query);

    if (matchesTitle || matchesDescription) {
      results.push({
        type: "service",
        id: service.id,
        slug: service.slug,
        title: service.title,
        description: service.description,
      });

      if (results.length >= limit) break;
    }
  }

  return results;
}

// Pesquisa notícias
function searchNews(query: string, limit: number = 5): SearchResult[] {
  if (!query || query.length < 2) return [];

  const results: SearchResult[] = [];

  for (const item of news) {
    const matchesTitle = searchInText(item.title, query);
    const matchesExcerpt = searchInText(item.excerpt, query);
    const matchesCategory = searchInText(item.category, query);

    if (matchesTitle || matchesExcerpt || matchesCategory) {
      results.push({
        type: "news",
        id: item.id,
        slug: item.id, // News usam id como slug
        title: item.title,
        description: item.excerpt,
      });

      if (results.length >= limit) break;
    }
  }

  return results;
}

// Pesquisa global
export function globalSearch(
  query: string,
  options: {
    maxResultsPerType?: number;
    maxTotalResults?: number;
  } = {}
): SearchResults {
  const { maxResultsPerType = 5, maxTotalResults = 10 } = options;

  if (!query || query.trim().length < 2) {
    return {
      projects: [],
      services: [],
      news: [],
      total: 0,
    };
  }

  const trimmedQuery = query.trim();
  const projectResults = searchProjects(trimmedQuery, maxResultsPerType);
  const serviceResults = searchServices(trimmedQuery, maxResultsPerType);
  const newsResults = searchNews(trimmedQuery, maxResultsPerType);

  // Limitar total de resultados
  const allResults = [
    ...projectResults,
    ...serviceResults,
    ...newsResults,
  ].slice(0, maxTotalResults);

  return {
    projects: projectResults,
    services: serviceResults,
    news: newsResults,
    total: allResults.length,
  };
}

// Gera URL para um resultado de pesquisa
export function getResultUrl(result: SearchResult): string {
  switch (result.type) {
    case "project":
      return `/projects/${result.slug || result.id}`;
    case "service":
      return `/servicos/${result.slug || result.id}`;
    case "news":
      return `/news/${result.slug || result.id}`;
    default:
      return "/";
  }
}

