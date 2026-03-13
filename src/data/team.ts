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
    bio: "Ingénieur diplômé de l'École Polytechnique de Paris et titulaire d'un MBA de HEC Paris, Olivier Kameshera a fondé le Groupe Syel en 2012 à l'âge de 32 ans avec un seul camion de transport. Visionnaire et bâtisseur, il a transformé une petite entreprise de logistique en un groupe diversifié de 3 500 collaborateurs opérant dans 6 secteurs stratégiques. Avant de créer Syel, il a travaillé 8 ans chez Bolloré Africa Logistics, où il a occupé des postes de direction en RDC et dans la sous-région. Olivier est membre du conseil d'administration de la Fédération des Entreprises du Congo (FEC) et intervient régulièrement au Forum Économique Africain.",
    image: "/teams/olivier.jpeg",
    linkedin: "https://linkedin.com/in/paul-henri-nkoulou",
    twitter: "https://twitter.com/phnkoulou",
  },
  {
    name: "Syntiche Kanku",
    role: "Directrice Financière (CFO)",
    bio: "Syntiche Kanku supervise la stratégie financière, la trésorerie et les relations investisseurs du Groupe Syel. Expert-comptable diplômée (DSCG) et titulaire d'un master en finance d'entreprise de l'Université Paris-Dauphine, elle a passé 12 ans chez PricewaterhouseCoopers à Paris et à Kinshasa avant de rejoindre Syel en 2016. Sous sa direction, le groupe a structuré ses premiers financements obligataires sur le marché congolais et a amélioré sa marge nette de 4 points en 3 ans. Syntiche est reconnue pour sa rigueur, sa maîtrise des normes OHADA et son engagement pour la transparence financière.",
    image: "/teams/suntiche.jpeg",
    linkedin: "https://linkedin.com/in/nadege-fotso",
  },
  {
    name: "Jean Kameshera",
    role: "Directeur des Opérations (COO)",
    bio: "Jean Kameshera pilote l'ensemble des opérations du Groupe Syel, coordonnant les 6 filiales et veillant à l'excellence opérationnelle. Ingénieur génie civil diplômé avec un MBA de l'ESSEC Business School, il a dirigé pendant 10 ans des projets d'infrastructure en Afrique avant de rejoindre Syel BTP en 2014 comme directeur technique, puis de prendre la direction des opérations du groupe en 2020. Sa connaissance intime du terrain congolais et sa culture du résultat ont permis au groupe de livrer systématiquement ses projets dans les délais et les budgets.",
    image: "/teams/jean.jpeg",
    linkedin: "https://linkedin.com/in/emmanuel-abanda",
  },
  {
    name: "Eliezer Kameshera",
    role: "Directeur Général, Syel Technologies",
    bio: "Eliezer Kameshera dirige Syel Technologies avec une passion contagieuse pour l'innovation digitale. Docteur en informatique de l'Université de Montréal et ancien architecte solutions chez Microsoft Afrique, il a rejoint le Groupe Syel en 2016 pour créer la filiale technologique de zéro. En 8 ans, il a bâti une équipe de 320 ingénieurs et décroché des contrats majeurs, dont la digitalisation du Port de Matadi et de l'Office des Voies Maritimes. Lauréat du Prix de l'Innovation Digitale au Africa Tech Summit 2025, il est un ambassadeur de la tech made in Africa et un mentor actif dans l'écosystème startup congolais.",
    image: "/logo-groupe-syel.png",
    branch: "syel-technologies",
    linkedin: "https://linkedin.com/in/serge-kamga",
    twitter: "https://twitter.com/sergekamga",
  },
];
