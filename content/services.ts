export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  features: string[];
  details?: {
    sectionTitle: string;
    text: string;
  }[];
  software?: string[];
}

export const services: Service[] = [
  {
    id: "estudos-trafego",
    slug: "estudos-de-trafego",
    title: "Estudos de Tráfego",
    description: "Análise e previsão de tráfego para infraestruturas rodoviárias e empreendimentos urbanísticos. Avaliamos o impacto na rede viária e propomos soluções de mitigação.",
    features: [
      "Contagens de tráfego",
      "Análise de capacidade e níveis de serviço",
      "Estudos de impacto de tráfego",
      "Dimensionamento de interseções",
    ],
    software: ["VISSIM", "AIMSUN", "VISUM"],
    details: [
      {
        sectionTitle: "O que são Estudos de Tráfego?",
        text: "Os Estudos de Tráfego são análises técnicas fundamentais para avaliar o impacto de novos empreendimentos ou alterações na rede viária existente. Permitem quantificar os fluxos de tráfego, identificar pontos críticos e propor soluções que garantam a fluidez e segurança rodoviária.",
      },
      {
        sectionTitle: "Como são realizados?",
        text: "O processo inicia-se com levantamentos de campo (contagens de tráfego, estudos de origem-destino) e análise da rede viária existente. Utilizamos software especializado para modelar cenários futuros, avaliar níveis de serviço e identificar necessidades de intervenção. Os resultados são apresentados em relatórios técnicos detalhados com propostas de soluções.",
      },
      {
        sectionTitle: "Soluções que entregamos",
        text: "Desenvolvemos estudos completos que incluem análise de capacidade, dimensionamento de interseções, propostas de sinalização e geometria viária, avaliação de impactos ambientais e definição de medidas de mitigação. Os nossos estudos são reconhecidos pelas entidades reguladoras e suportam processos de licenciamento.",
      },
      {
        sectionTitle: "Software utilizado",
        text: "Utilizamos ferramentas de referência mundial como VISSIM para microssimulação, AIMSUN para análise de redes e VISUM para planeamento estratégico. A nossa equipa é certificada pela PTV Group e mantém formação contínua nas últimas versões dos softwares.",
      },
    ],
  },
  {
    id: "microssimulacao",
    slug: "microssimulacao",
    title: "Microssimulação",
    description: "Utilização de software avançado (VISSIM, AIMSUN) para simular o comportamento individual de veículos e peões, permitindo validar soluções complexas.",
    features: [
      "Simulação dinâmica de tráfego",
      "Modelação de peões (Viswalk)",
      "Análise de interfaces de transporte",
      "Otimização semafórica",
    ],
    software: ["VISSIM", "AIMSUN", "VISWALK"],
    details: [
      {
        sectionTitle: "O que é Microssimulação?",
        text: "A microssimulação permite replicar o comportamento individual de veículos e peões em ambiente virtual, testando soluções antes da implementação. É uma ferramenta essencial para validar projetos complexos, otimizar configurações semafóricas e avaliar o desempenho de infraestruturas de transporte.",
      },
      {
        sectionTitle: "Aplicações práticas",
        text: "Utilizamos microssimulação para projetar interseções complexas, avaliar interfaces de transporte público, otimizar ciclos semafóricos, analisar evacuações de emergência e testar soluções de mobilidade inovadoras. Os modelos permitem visualizar o funcionamento futuro e identificar problemas antes da construção.",
      },
      {
        sectionTitle: "Modelação de peões",
        text: "Com VISWALK, simulamos o movimento de peões em estações de metro, aeroportos, centros comerciais e eventos. Analisamos níveis de serviço, tempos de percurso, pontos de congestionamento e capacidade de evacuação, garantindo espaços seguros e funcionais.",
      },
      {
        sectionTitle: "Software e certificação",
        text: "A ENGIMIND é formadora certificada pela PTV Group nos softwares VISSIM, VISWALK e VISUM. A nossa experiência abrange projetos em Portugal, Brasil, Angola e Índia, incluindo sistemas BRT, aeroportos e redes metroferroviárias.",
      },
    ],
  },
  {
    id: "planos-mobilidade",
    slug: "planos-de-mobilidade",
    title: "Planos de Mobilidade",
    description: "Desenvolvimento de Planos de Mobilidade Urbana Sustentável (PMUS) e planos de transporte para empresas e grandes polos geradores de tráfego.",
    features: [
      "PMUS municipais e regionais",
      "Planos de mobilidade empresarial",
      "Estratégias de modos suaves",
      "Gestão da procura",
    ],
    software: ["VISUM"],
    details: [
      {
        sectionTitle: "Planos de Mobilidade Urbana Sustentável",
        text: "Os PMUS são instrumentos estratégicos que definem políticas e medidas para promover a mobilidade sustentável nas cidades. Integram objetivos de redução de emissões, promoção de modos ativos, melhoria do transporte público e gestão da procura de viagens.",
      },
      {
        sectionTitle: "Metodologia",
        text: "Desenvolvemos PMUS através de um processo participativo que inclui diagnóstico da situação atual, definição de cenários futuros, estabelecimento de metas quantificáveis e plano de ação com medidas concretas. Os planos são alinhados com as diretrizes europeias e nacionais.",
      },
      {
        sectionTitle: "Planos empresariais",
        text: "Para grandes empresas e polos geradores, desenvolvemos planos de mobilidade que promovem o uso de transporte público, partilha de veículos, teletrabalho e modos suaves. Estes planos reduzem o impacto no tráfego e melhoram a qualidade de vida dos colaboradores.",
      },
      {
        sectionTitle: "Resultados e implementação",
        text: "Os nossos planos incluem indicadores de monitorização, cronogramas de implementação e estimativas de impacto. Acompanhamos a execução e ajustamos estratégias conforme necessário, garantindo que os objetivos são alcançados.",
      },
    ],
  },
  {
    id: "transportes-publicos",
    slug: "transportes-publicos",
    title: "Transportes Públicos",
    description: "Planeamento e otimização de redes de transporte coletivo, desde autocarros até sistemas de metro e BRT.",
    features: [
      "Redesenho de redes",
      "Estudos de procura",
      "Integração intermodal",
      "Priorização viária",
    ],
    software: ["VISUM", "VISSIM"],
    details: [
      {
        sectionTitle: "Planeamento de redes",
        text: "Desenvolvemos estudos de procura, redesenhos de linhas, otimização de frequências e análise de integração intermodal. Os nossos projetos incluem sistemas BRT, redes de autocarros, metro ligeiro e integração entre diferentes modos de transporte.",
      },
      {
        sectionTitle: "Sistemas BRT",
        text: "A ENGIMIND tem vasta experiência em sistemas Bus Rapid Transit, tendo projetado corredores em Campinas (Brasil), Brasília, Nova Deli (Índia) e outros. Desenvolvemos estudos de procura, dimensionamento de corredores, localização de estações e análise de integração.",
      },
      {
        sectionTitle: "Estudos de procura",
        text: "Realizamos pesquisas origem-destino, modelação de procura futura e análise de cenários. Os modelos permitem avaliar diferentes configurações de rede e otimizar o serviço oferecido à população.",
      },
      {
        sectionTitle: "Priorização viária",
        text: "Projetamos corredores dedicados, sistemas de priorização semafórica e integração com o tráfego automóvel. A nossa experiência inclui projetos de metro ligeiro, BRT e autocarros prioritários.",
      },
    ],
  },
  {
    id: "estacionamento",
    slug: "estacionamento",
    title: "Estacionamento",
    description: "Estudos de oferta e procura de estacionamento, políticas de tarifação e projeto funcional de parques de estacionamento.",
    features: [
      "Levantamentos de ocupação",
      "Políticas de gestão",
      "Projeto funcional de parques",
      "Sistemas de controlo de acessos",
    ],
    details: [
      {
        sectionTitle: "Gestão de estacionamento",
        text: "Desenvolvemos estratégias integradas de gestão de estacionamento que equilibram as necessidades de residentes, comerciantes e visitantes. Incluem definição de políticas de tarifação, zonas de estacionamento e sistemas de controlo.",
      },
      {
        sectionTitle: "Estudos de oferta e procura",
        text: "Realizamos levantamentos detalhados de ocupação, análise de padrões temporais e projeções de procura futura. Os estudos suportam decisões sobre dimensionamento de parques e políticas de gestão.",
      },
      {
        sectionTitle: "Projeto funcional",
        text: "Desenvolvemos projetos funcionais de parques de estacionamento, incluindo layout de vias, sistemas de controlo de acessos, sinalização e integração com o espaço público. Os projetos otimizam a capacidade e a experiência do utilizador.",
      },
      {
        sectionTitle: "Políticas inovadoras",
        text: "Projetamos sistemas de estacionamento inteligente, integração com aplicações móveis e políticas de gestão da procura. As soluções promovem o uso eficiente do espaço e reduzem o impacto no tráfego.",
      },
    ],
  },
  {
    id: "modos-suaves",
    slug: "modos-suaves",
    title: "Modos Suaves",
    description: "Planeamento e projeto de infraestruturas para peões e ciclistas, promovendo a mobilidade ativa.",
    features: [
      "Redes cicláveis",
      "Planos de acessibilidade pedonal",
      "Zonas de Coexistência",
      "Design urbano inclusivo",
    ],
    details: [
      {
        sectionTitle: "Mobilidade ativa",
        text: "Promovemos a mobilidade a pé e de bicicleta através do planeamento de redes integradas, seguras e atrativas. Os nossos projetos transformam o espaço público, criando condições para deslocações ativas e saudáveis.",
      },
      {
        sectionTitle: "Redes cicláveis",
        text: "Desenvolvemos planos de rede ciclável, projetos de ciclovias e ciclofaixas, e integração com o transporte público. A nossa experiência inclui projetos como as Ecovias da Ria de Aveiro e redes urbanas em várias cidades.",
      },
      {
        sectionTitle: "Acessibilidade pedonal",
        text: "Projetamos melhorias na rede pedonal, eliminação de barreiras arquitetónicas e criação de percursos acessíveis. Os projetos promovem a inclusão e melhoram a qualidade do espaço público.",
      },
      {
        sectionTitle: "Zonas de coexistência",
        text: "Desenvolvemos projetos de zonas 30, áreas partilhadas e ruas completas que priorizam peões e ciclistas. As soluções reduzem a velocidade automóvel e criam ambientes mais seguros e agradáveis.",
      },
    ],
  },
  {
    id: "seguranca-rodoviaria",
    slug: "seguranca-rodoviaria",
    title: "Segurança Rodoviária",
    description: "Auditorias e inspeções de segurança rodoviária para identificar riscos e propor medidas corretivas.",
    features: [
      "Auditorias de segurança",
      "Análise de pontos negros",
      "Medidas de acalmia de tráfego",
      "Planos de segurança",
    ],
    details: [
      {
        sectionTitle: "Auditorias de segurança",
        text: "Realizamos auditorias independentes de segurança rodoviária que identificam riscos em projetos de infraestruturas viárias. As auditorias seguem metodologias internacionais e incluem propostas de medidas corretivas.",
      },
      {
        sectionTitle: "Análise de sinistralidade",
        text: "Analisamos dados de acidentes, identificamos pontos negros e padrões de sinistralidade. Os estudos suportam a definição de medidas prioritárias e avaliação da eficácia de intervenções.",
      },
      {
        sectionTitle: "Medidas de acalmia",
        text: "Projetamos medidas de acalmia de tráfego como lombas, estreitamentos, rotundas e zonas 30. As soluções reduzem a velocidade e melhoram a segurança para todos os utilizadores da via.",
      },
      {
        sectionTitle: "Planos de segurança",
        text: "Desenvolvemos planos estratégicos de segurança rodoviária que definem objetivos, metas e medidas de intervenção. Os planos integram-se com políticas de mobilidade e ordenamento do território.",
      },
    ],
  },
  {
    id: "logistica-urbana",
    slug: "logistica-urbana",
    title: "Logística Urbana",
    description: "Estudos para otimização da distribuição de mercadorias em meio urbano.",
    features: [
      "Planos de logística urbana",
      "Regulamentação de cargas e descargas",
      "Last mile delivery",
      "Centros de consolidação",
    ],
    details: [
      {
        sectionTitle: "Desafios da logística urbana",
        text: "A distribuição de mercadorias em meio urbano enfrenta desafios de congestionamento, restrições de acesso e impacto ambiental. Desenvolvemos soluções que equilibram as necessidades do comércio com a qualidade de vida urbana.",
      },
      {
        sectionTitle: "Planos de logística",
        text: "Elaboramos planos estratégicos que definem políticas de gestão de cargas e descargas, localização de centros de consolidação e regulamentação de horários. Os planos promovem a eficiência e reduzem o impacto no tráfego.",
      },
      {
        sectionTitle: "Last mile delivery",
        text: "Projetamos soluções para a última milha, incluindo hubs de distribuição, sistemas de partilha e integração com modos suaves. As soluções reduzem o número de veículos em circulação e melhoram a eficiência.",
      },
      {
        sectionTitle: "Tecnologia e inovação",
        text: "Integramos soluções tecnológicas como gestão inteligente de frotas, otimização de rotas e sistemas de reserva de espaços de carga e descarga. As tecnologias melhoram a eficiência operacional.",
      },
    ],
  },
  {
    id: "rentabilidade-economica",
    slug: "rentabilidade-economica",
    title: "Rentabilidade Económica",
    description: "Análise custo-benefício de projetos de transportes para apoiar a tomada de decisão.",
    features: [
      "Análise Custo-Benefício (ACB)",
      "Estudos de viabilidade económica",
      "Análise multicritério",
      "Avaliação de investimentos",
    ],
    details: [
      {
        sectionTitle: "Avaliação económica",
        text: "Desenvolvemos análises económicas rigorosas que quantificam os custos e benefícios de projetos de transportes. As análises suportam decisões de investimento e candidaturas a financiamento.",
      },
      {
        sectionTitle: "Análise Custo-Benefício",
        text: "Realizamos ACB completas que incluem custos de investimento, operação e manutenção, e benefícios como redução de tempos de viagem, melhoria da segurança e redução de emissões. Os resultados são apresentados com indicadores como VAN e TIR.",
      },
      {
        sectionTitle: "Análise multicritério",
        text: "Para projetos complexos, utilizamos análise multicritério que avalia diferentes dimensões (económica, social, ambiental) e permite comparar alternativas. A metodologia suporta decisões transparentes e fundamentadas.",
      },
      {
        sectionTitle: "Viabilidade financeira",
        text: "Avaliamos a viabilidade financeira de projetos, incluindo análise de receitas, custos operacionais e modelos de financiamento. Os estudos são essenciais para projetos de concessão e parcerias público-privadas.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug);
}
