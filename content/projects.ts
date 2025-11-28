export interface Project {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  year: string;
  client?: string;
  category: string;
  description: string;
  fullDescription?: string;
  image: string;
  gallery?: string[];
  tags: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "brt-campinas",
    title: "BRT de Campinas",
    subtitle: "Sistema de transporte de alta capacidade",
    location: "Campinas, Brasil",
    year: "2014",
    client: "Prefeitura de Campinas",
    category: "Transportes Públicos",
    description: "Projeto do sistema Bus Rapid Transit para a terceira maior cidade do Estado de São Paulo.",
    fullDescription: "O projeto do BRT de Campinas transformou a face da terceira maior cidade do Estado de São Paulo, que conta com mais de 1 milhão de habitantes. O novo sistema de transportes traduz-se na criação de três vias dedicadas a autocarros de alta capacidade, com estações modernas e integração completa com o sistema de transportes existente.",
    image: "/images/projeto-mobilidade.jpg",
    tags: ["BRT", "Transporte Público", "Brasil"],
    featured: true,
  },
  {
    id: "aeroporto-lisboa",
    title: "Novo Aeroporto de Lisboa",
    subtitle: "Estudo de acessibilidade e microssimulação",
    location: "Lisboa, Portugal",
    year: "2023",
    client: "ANA Aeroportos",
    category: "Aeroportos",
    description: "Estudo de acessibilidade e microssimulação do curbside para o Novo Aeroporto de Lisboa.",
    fullDescription: "Desenvolvimento do estudo de acessibilidade completo para o Novo Aeroporto de Lisboa, incluindo a modelação e microssimulação das zonas de embarque e desembarque de passageiros (curbside), análise de fluxos de veículos e otimização do sistema viário de acesso.",
    image: "/images/projeto-aeroporto.jpg",
    tags: ["Aeroportos", "Microssimulação", "Portugal"],
    featured: true,
  },
  {
    id: "metro-sao-paulo",
    title: "Metro de São Paulo",
    subtitle: "Linha 6 - Laranja",
    location: "São Paulo, Brasil",
    year: "2018",
    client: "Metrô São Paulo",
    category: "Transportes Públicos",
    description: "Estudos de procura e microssimulação para a Linha 6 (Laranja) do Metro de São Paulo.",
    fullDescription: "Desenvolvimento de estudos de procura e modelos de microssimulação de passageiros para a nova Linha 6 (Laranja) do Metro de São Paulo, incluindo a análise de integração com as linhas existentes e dimensionamento de estações.",
    image: "/images/projeto-metro.jpg",
    tags: ["Metro", "Modelação", "Brasil"],
    featured: true,
  },
  {
    id: "pmus-coimbra",
    title: "PMUS de Coimbra",
    subtitle: "Plano de Mobilidade Urbana Sustentável",
    location: "Coimbra, Portugal",
    year: "2025",
    client: "Câmara Municipal de Coimbra",
    category: "Planeamento",
    description: "Desenvolvimento do Plano de Mobilidade Urbana Sustentável de Coimbra.",
    fullDescription: "O novo PMUS de Coimbra define metas ambiciosas: aumentar os modos ativos de 13,5% para 20%, duplicar a utilização de transporte público e reduzir a dependência do automóvel para 59,2%. O plano inclui zonas de baixas emissões, expansão da rede ciclável e medidas de acalmia de tráfego.",
    image: "/images/projeto-mobilidade.jpg",
    tags: ["PMUS", "Mobilidade Urbana", "Portugal"],
    featured: true,
  },
  {
    id: "aeroporto-luanda",
    title: "Aeroporto de Luanda",
    subtitle: "Novo Aeroporto Internacional",
    location: "Luanda, Angola",
    year: "2019",
    client: "Governo de Angola",
    category: "Aeroportos",
    description: "Estudo de acessibilidade e microssimulação do curbside para o Novo Aeroporto Internacional.",
    image: "/images/projeto-aeroporto.jpg",
    tags: ["Aeroportos", "Internacional", "Angola"],
    featured: false,
  },
  {
    id: "aeroporto-nova-deli",
    title: "Aeroporto de Nova Deli",
    subtitle: "Aeroporto Internacional Indira Gandhi",
    location: "Nova Deli, Índia",
    year: "2017",
    client: "Delhi International Airport",
    category: "Aeroportos",
    description: "Estudo de layout e acessibilidade para o Novo Terminal do Aeroporto Internacional.",
    image: "/images/projeto-aeroporto.jpg",
    tags: ["Aeroportos", "Internacional", "Índia"],
    featured: false,
  },
  {
    id: "ecovias-aveiro",
    title: "Ecovias da Ria de Aveiro",
    subtitle: "Rede ciclável de 62km",
    location: "Aveiro, Portugal",
    year: "2018",
    client: "Câmara Municipal de Aveiro",
    category: "Modos Suaves",
    description: "Projeto de ecovias nas margens da Ria de Aveiro, numa extensão de 62km.",
    image: "/images/projeto-mobilidade.jpg",
    tags: ["Modos Suaves", "Turismo", "Portugal"],
    featured: false,
  },
  {
    id: "praca-saldanha",
    title: "Nova Praça do Saldanha",
    subtitle: "Requalificação urbana",
    location: "Lisboa, Portugal",
    year: "2017",
    client: "Câmara Municipal de Lisboa",
    category: "Requalificação Urbana",
    description: "Projeto de infraestruturas rodoviárias no âmbito do programa 'Uma Praça em Cada Bairro'.",
    image: "/images/projeto-mobilidade.jpg",
    tags: ["Requalificação Urbana", "Lisboa", "Portugal"],
    featured: false,
  },
  {
    id: "centros-comerciais-sonae",
    title: "Centros Comerciais Sonae Sierra",
    subtitle: "Estudos de tráfego e acessibilidades",
    location: "Portugal / Internacional",
    year: "2015-2023",
    client: "Sonae Sierra",
    category: "Comércio",
    description: "Estudos de tráfego para Colombo, Vasco da Gama, NorteShopping e outros centros comerciais.",
    image: "/images/mercadona.jpg",
    tags: ["Estudos de Tráfego", "Comércio", "Privado"],
    featured: false,
  },
  {
    id: "rio-2016",
    title: "Jogos Olímpicos Rio 2016",
    subtitle: "Complexo Desportivo de Deodoro",
    location: "Rio de Janeiro, Brasil",
    year: "2016",
    client: "Comité Olímpico",
    category: "Infraestruturas",
    description: "Projeto executivo de infraestruturas para os Jogos Olímpicos de 2016.",
    image: "/images/projeto-mobilidade.jpg",
    tags: ["Infraestruturas", "Olímpicos", "Brasil"],
    featured: false,
  },
];

export const projectCategories = [
  "Todos",
  "Transportes Públicos",
  "Aeroportos",
  "Modos Suaves",
  "Planeamento",
  "Comércio",
  "Infraestruturas",
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "Todos") return projects;
  return projects.filter((p) => p.category === category);
}

