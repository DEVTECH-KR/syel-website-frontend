export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  branch?: string;
  linkedin?: string;
  twitter?: string;
}

export const team: TeamMember[] = [
  {
    name: "Olivier Kameshera",
    role: "Président-Directeur Général",
    bio: "Ingénieur diplômé de l’École Supérieure des Métiers d’Informatique et de Commerce ESMICOM Kinshasa, Olivier Kameshera a fondé le Groupe. Syel.",
    image: "/teams/olivier.jpeg",
    linkedin: "https://linkedin.com/in/paul-henri-nkoulou",
    twitter: "https://twitter.com/phnkoulou",
  },
  {
    name: "Syntiche Kanku",
    role: "Directrice Financière (CFO)",
    bio: "Syntiche Kanku supervise la stratégie financière, la trésorerie et les relations investisseurs du Groupe Syel.",
    image: "/teams/syntiche.jpeg",
    linkedin: "https://linkedin.com/in/nadege-fotso",
  },
  {
    name: "Jean Kameshera",
    role: "Directeur des Opérations (COO)",
    bio: "Ingénieur logiciel diplômé de Bujumbura Christian University BCU, Jean Kameshera pilote l'ensemble des opérations et coordonnant les 6 filiales dela Société Groupe Syel.",
    image: "/teams/jean.jpeg",
    linkedin: "https://linkedin.com/in/emmanuel-abanda",
  },
  {
    name: "Eliezer Kameshera",
    role: "Directeur Général, Syel Technologies",
    bio: "Eliezer Kameshera dirige Syel Technologies avec une passion contagieuse pour l'innovation digitale. ",
    image: "/logo-groupe-syel.png",
    branch: "syel-technologies",
    linkedin: "https://linkedin.com/in/serge-kamga",
    twitter: "https://twitter.com/sergekamga",
  },
];
