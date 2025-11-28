export interface NewsItem {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  content?: string;
  category: string;
  image?: string;
  featured?: boolean;
}

export const news: NewsItem[] = [
  {
    id: "pmus-coimbra-2025",
    date: "07 Outubro 2025",
    title: "Apresentação do PMUS de Coimbra",
    excerpt: "No âmbito da Semana Europeia da Mobilidade, foram apresentados os trabalhos do Plano de Mobilidade Urbana Sustentável de Coimbra, desenvolvidos pelo consórcio liderado pela Engimind.",
    content: "O novo Plano de Mobilidade Urbana Sustentável (PMUS) define metas ambiciosas para a próxima década: aumentar os modos ativos de 13,5% para 20%; duplicar a utilização de transporte público de 12,6% para 24,9%; reduzir a dependência do transporte individual para 59,2%.",
    category: "Projetos",
    featured: true,
  },
  {
    id: "estadio-evora-2025",
    date: "09 Outubro 2025",
    title: "Inauguração do novo Estádio do Juventude de Évora",
    excerpt: "Com Estudo de Tráfego da Engimind, foi inaugurado este moderno equipamento desportivo, a nova casa do Juventude de Évora.",
    category: "Projetos",
    featured: true,
  },
  {
    id: "pme-lider-2023",
    date: "14 Novembro 2023",
    title: "ENGIMIND renova estatuto PME Líder 2023",
    excerpt: "Pelo sexto ano consecutivo, a ENGIMIND Traffic & Mobility Consultants renova o estatuto de PME Líder.",
    category: "Institucional",
    featured: true,
  },
  {
    id: "pme-excelencia-2022",
    date: "30 Outubro 2023",
    title: "Distinção PME Excelência 2022",
    excerpt: "A ENGIMIND foi novamente distinguida com o estatuto PME Excelência, reconhecendo os melhores desempenhos e indicadores de gestão.",
    category: "Prémios",
    featured: false,
  },
  {
    id: "curso-rio-2019",
    date: "21 Fevereiro 2019",
    title: "Engimind leciona curso de microssimulação no Rio de Janeiro",
    excerpt: "A Engimind lecionou um curso de microssimulação para técnicos da Invepar S/A, uma das maiores gestoras de mobilidade urbana da América Latina.",
    category: "Formação",
    featured: false,
  },
  {
    id: "metro-sp-2018",
    date: "07 Dezembro 2018",
    title: "Microssimulação para o Metro de São Paulo",
    excerpt: "A Engimind assinou contrato para realizar a microssimulação de passageiros da futura Estação São Joaquim da Linha 6.",
    category: "Novos Contratos",
    featured: false,
  },
  {
    id: "ecovias-aveiro-2018",
    date: "07 Agosto 2018",
    title: "Inauguração das Ecovias da Ria de Aveiro",
    excerpt: "O projeto desenvolvido pelo consórcio da Engimind foi inaugurado, ampliando a rede de circuitos cicláveis na zona da Ria de Aveiro.",
    category: "Projetos",
    featured: false,
  },
  {
    id: "nairobi-2017",
    date: "18 Maio 2017",
    title: "Engimind dá curso em Nairobi",
    excerpt: "A Engimind foi convidada para dar um curso dos softwares Vissim e Viswalk a técnicos da Kenya Urban Roads Authority em Nairobi.",
    category: "Formação",
    featured: false,
  },
];

export function getFeaturedNews(): NewsItem[] {
  return news.filter((n) => n.featured);
}

export function getNewsById(id: string): NewsItem | undefined {
  return news.find((n) => n.id === id);
}

