export interface Course {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  topics: string[];
  targetAudience?: string;
  prerequisites?: string;
  duration?: string;
  certification?: string;
}

export const courses: Course[] = [
  {
    slug: "visum",
    name: "VISUM",
    shortDescription:
      "Software líder mundial em planeamento de transportes para estudo e desenvolvimento de sistemas de transportes em cidades e áreas metropolitanas.",
    longDescription:
      "O VISUM é o software líder mundial em planeamento de transportes, projetado para o estudo e desenvolvimento de sistemas de transportes em cidades e áreas metropolitanas. Desenvolvido de acordo com uma lógica multimodal, o software integra todos os modais de transporte (individuais e coletivos) num único modelo de análise, permitindo realizar análises de tráfego, projeções futuras e manipulação de dados de Sistemas de Informação Geográfica (SIG). O VISUM permite modelar todos os utilizadores dos sistemas de transporte e as suas interações, facilitando o planeamento de transporte coletivo e a integração com outras ferramentas de análise.",
    topics: [
      "Análise de tráfego e projeções futuras",
      "Modelação multimodal",
      "Planeamento de transporte coletivo",
      "Integração com SIG",
      "Modelação de utilizadores e interações",
      "Análise de cenários de mobilidade",
    ],
    targetAudience:
      "Técnicos e consultores em mobilidade e transportes, planeadores urbanos, engenheiros de tráfego e profissionais que trabalham com planeamento estratégico de transportes.",
    prerequisites:
      "Conhecimentos básicos de planeamento de transportes e análise de redes. Experiência prévia com software de SIG é recomendada.",
    duration: "Carga horária a definir conforme o nível do curso (básico, intermédio, avançado).",
    certification:
      "Certificado de participação ENGIMIND / PTV Group. Certificação oficial válida em todo o mundo.",
  },
  {
    slug: "vissim",
    name: "VISSIM",
    shortDescription:
      "Software de microssimulação de tráfego mais avançado e flexível do mercado, utilizado em mais de 2.500 cidades em todo o mundo.",
    longDescription:
      "O VISSIM é o software de microssimulação de tráfego mais avançado e flexível do mercado, sendo atualmente utilizado em mais de 2.500 cidades em todo o mundo. Permite simular realisticamente interações complexas de veículos ao nível microscópico, modelando em detalhe as características do tráfego, da rede viária e o comportamento dos veículos. O VISSIM possibilita simular novas formas de mobilidade como veículos autónomos e sistemas MaaS (Mobility as a Service), oferecendo uma integração perfeita com o VISUM, a principal ferramenta de planeamento de tráfego do mundo.",
    topics: [
      "Simulação microscópica de veículos",
      "Modelação detalhada de comportamentos",
      "Simulação de veículos autónomos",
      "Integração com VISUM",
      "Análise de interseções complexas",
      "Otimização semafórica",
      "Sistemas MaaS (Mobility as a Service)",
    ],
    targetAudience:
      "Engenheiros de tráfego, consultores em mobilidade, técnicos de planeamento urbano e profissionais que necessitam de análise detalhada de comportamento de tráfego.",
    prerequisites:
      "Conhecimentos básicos de engenharia de tráfego e análise de redes viárias. Experiência com software de simulação é recomendada.",
    duration: "Carga horária a definir conforme o nível do curso (básico, intermédio, avançado).",
    certification:
      "Certificado de participação ENGIMIND / PTV Group. Certificação oficial válida em todo o mundo.",
  },
  {
    slug: "viswalk",
    name: "VISWALK",
    shortDescription:
      "Software para microssimulação dinâmica de pessoas e multidões, permitindo análise detalhada de fluxos pedonais.",
    longDescription:
      "O VISWALK é um software poderoso para microssimulação dinâmica de pessoas e multidões, possibilitando replicar e analisar o comportamento humano na movimentação de pessoas. Permite planear medidas de segurança e evacuação de pessoas em edifícios e eventos, testar e analisar soluções de arquitetura de espaços, e analisar pessoas como utilizadores de transporte coletivo, simulando as suas interações com outros modos de transporte. O VISWALK é essencial para projetos que envolvem análise de fluxos pedonais, planeamento de estações de transporte, aeroportos e grandes eventos.",
    topics: [
      "Simulação de comportamento humano",
      "Planeamento de evacuação",
      "Análise de espaços arquitetónicos",
      "Integração com transporte coletivo",
      "Microssimulação de pedestres",
      "Análise de estações e interfaces",
      "Planeamento de segurança em eventos",
    ],
    targetAudience:
      "Engenheiros de tráfego, arquitetos, planeadores urbanos, técnicos de segurança e profissionais que trabalham com análise de fluxos pedonais e planeamento de espaços públicos.",
    prerequisites:
      "Conhecimentos básicos de análise de tráfego e comportamento humano. Experiência com software de simulação é recomendada.",
    duration: "Carga horária a definir conforme o nível do curso (básico, intermédio, avançado).",
    certification:
      "Certificado de participação ENGIMIND / PTV Group. Certificação oficial válida em todo o mundo.",
  },
  {
    slug: "vistro",
    name: "VISTRO",
    shortDescription:
      "Software de engenharia de tráfego completo para análise de desempenho e otimização de interseções.",
    longDescription:
      "O VISTRO é um software de engenharia de tráfego completo que possibilita realizar análises de desempenho de tráfego e seleção de metodologias padrão da indústria. Permite testar soluções para interseções semaforizadas e otimizar ciclos semafóricos, analisando diferentes cenários de intervenção através do Scenario Manager. O VISTRO é uma ferramenta essencial para engenheiros que trabalham com análise e otimização de interseções, oferecendo metodologias reconhecidas internacionalmente e ferramentas avançadas de análise de desempenho.",
    topics: [
      "Análise de desempenho de tráfego",
      "Otimização de ciclos semafóricos",
      "Cenários de intervenção",
      "Metodologias padrão da indústria",
      "Análise de interseções semaforizadas",
      "Scenario Manager",
      "Análise de níveis de serviço",
    ],
    targetAudience:
      "Engenheiros de tráfego, consultores em mobilidade, técnicos de planeamento urbano e profissionais que trabalham com análise e otimização de interseções viárias.",
    prerequisites:
      "Conhecimentos sólidos de engenharia de tráfego e análise de interseções. Experiência com metodologias de análise de desempenho é recomendada.",
    duration: "Carga horária a definir conforme o nível do curso (básico, intermédio, avançado).",
    certification:
      "Certificado de participação ENGIMIND / PTV Group. Certificação oficial válida em todo o mundo.",
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}

export function getAllCourseSlugs(): string[] {
  return courses.map((course) => course.slug);
}

