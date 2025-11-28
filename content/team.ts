export interface TeamMember {
  name: string;
  role: string;
  isDirector?: boolean;
  image?: string;
}

export const directors: TeamMember[] = [
  { name: "André Remédio", role: "Sócio-Gerente · Diretor Técnico", isDirector: true },
  { name: "Carla Oliveira", role: "Sócia-Gerente · Diretora de RH", isDirector: true },
  { name: "Manuel Fortes", role: "Sócio-Gerente · Diretor Comercial", isDirector: true, image: "/images/manuel_fortes.jpg" },
  { name: "Pedro Reis", role: "Sócio-Gerente · Diretor Financeiro", isDirector: true },
];

export const teamMembers: string[] = [
  "Adriana Antunes Cubas",
  "André Menino",
  "Ariana Silva",
  "Beatriz Silva",
  "Carla Correia",
  "Carla Vasquez",
  "Carolina Carminé",
  "Catarina Rodrigo",
  "Eduardo Coelho",
  "Filipa Simões",
  "Gina Rolim",
  "Gonçalo Rosa",
  "Hugo Dinis",
  "Hugo Noronha",
  "Humberto Leitão",
  "Isabel Antunes",
  "João Serrano",
  "John Llanos",
  "Jorge Ribeiro",
  "José Garcia",
  "José Lubacheski",
  "Luís Curado",
  "Mafalda Pires",
  "Manuel Delgado",
  "Mário Pereira",
  "Nuno Saraiva",
  "Paulo Rodolfo Ferreira Lopes",
  "Rute Monteiro",
  "Sónia Carpentier",
];

export const companyInfo = {
  name: "ENGIMIND",
  fullName: "ENGIMIND Consultores em Engenharia e Planeamento, Lda",
  tagline: "Consultores em Mobilidade e Transportes",
  founded: 2006,
  projectsCompleted: 500,
  continents: 4,
  offices: [
    {
      city: "Lisboa",
      country: "Portugal",
      address: "Av. Defensores de Chaves, nº 4, 1º",
      postalCode: "1000-120 Lisboa",
      phone: "(+351) 218 420 748",
      email: "engimind@engimind.com",
    },
    {
      city: "São Paulo",
      country: "Brasil",
      address: "Rua Gomes de Carvalho, 1629, sala 21",
      postalCode: "04547-006 Vila Olímpia",
      phone: "(11) 3848 9308",
      email: "engimind@engimind.com",
    },
  ],
};

