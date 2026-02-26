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
    name: "Paul-Henri Nkoulou",
    role: "Président-Directeur Général",
    bio: "Ingénieur diplômé de l'École Polytechnique de Paris et titulaire d'un MBA de HEC Paris, Paul-Henri Nkoulou a fondé le Groupe Syel en 2010 à l'âge de 32 ans avec un seul camion de transport. Visionnaire et bâtisseur, il a transformé une petite entreprise de logistique en un groupe diversifié de 3 500 collaborateurs opérant dans 6 secteurs stratégiques. Avant de créer Syel, il a travaillé 8 ans chez Bolloré Africa Logistics, où il a occupé des postes de direction au Cameroun et au Gabon. Paul-Henri est membre du conseil d'administration de la Chambre de Commerce du Cameroun et intervient régulièrement au Forum Économique Africain.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    linkedin: "https://linkedin.com/in/paul-henri-nkoulou",
    twitter: "https://twitter.com/phnkoulou",
  },
  {
    name: "Nadège Fotso",
    role: "Directrice Financière (CFO)",
    bio: "Nadège Fotso supervise la stratégie financière, la trésorerie et les relations investisseurs du Groupe Syel. Expert-comptable diplômée (DSCG) et titulaire d'un master en finance d'entreprise de l'Université Paris-Dauphine, elle a passé 12 ans chez PricewaterhouseCoopers à Paris et à Douala avant de rejoindre Syel en 2016. Sous sa direction, le groupe a structuré ses premiers financements obligataires sur le marché de la CEMAC et a amélioré sa marge nette de 4 points en 3 ans. Nadège est reconnue pour sa rigueur, sa maîtrise des normes OHADA et son engagement pour la transparence financière.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    linkedin: "https://linkedin.com/in/nadege-fotso",
  },
  {
    name: "Emmanuel Abanda",
    role: "Directeur des Opérations (COO)",
    bio: "Emmanuel Abanda pilote l'ensemble des opérations du Groupe Syel, coordonnant les 6 filiales et veillant à l'excellence opérationnelle. Ingénieur génie civil de l'École Nationale Supérieure Polytechnique de Yaoundé avec un MBA de l'ESSEC Business School, il a dirigé pendant 10 ans des projets d'infrastructure chez Vinci Construction Afrique avant de rejoindre Syel BTP en 2014 comme directeur technique, puis de prendre la direction des opérations du groupe en 2020. Sa connaissance intime du terrain africain et sa culture du résultat ont permis au groupe de livrer systématiquement ses projets dans les délais et les budgets.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
    linkedin: "https://linkedin.com/in/emmanuel-abanda",
  },
  {
    name: "Serge Kamga",
    role: "Directeur Général, Syel Technologies",
    bio: "Serge Kamga dirige Syel Technologies avec une passion contagieuse pour l'innovation digitale africaine. Docteur en informatique de l'Université de Montréal et ancien architecte solutions chez Microsoft Afrique, il a rejoint le Groupe Syel en 2016 pour créer la filiale technologique de zéro. En 8 ans, il a bâti une équipe de 320 ingénieurs et décroché des contrats majeurs, dont la digitalisation du Port Autonome de Douala. Lauréat du Prix de l'Innovation Digitale au Africa Tech Summit 2025, Serge est un ambassadeur de la tech made in Africa et un mentor actif dans l'écosystème startup camerounais.",
    image:
      "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=800&q=80",
    branch: "syel-technologies",
    linkedin: "https://linkedin.com/in/serge-kamga",
    twitter: "https://twitter.com/sergekamga",
  },
  {
    name: "Jean-Marc Essomba",
    role: "Directeur Général, Syel Énergie",
    bio: "Jean-Marc Essomba est à la tête de Syel Énergie depuis sa création en 2012. Ingénieur en énergie renouvelable diplômé de l'INSA Lyon et ancien chef de projet chez Schneider Electric, il a piloté le développement de plus de 45 MW de capacité solaire en Afrique centrale. Sa vision stratégique — rendre l'énergie propre accessible et rentable en Afrique — guide l'ensemble de la filiale. Jean-Marc est membre du comité technique de l'Agence Internationale de l'Énergie Renouvelable (IRENA) pour l'Afrique centrale et un intervenant régulier au Salon des Énergies Renouvelables de Dakar.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
    branch: "syel-energie",
    linkedin: "https://linkedin.com/in/jean-marc-essomba",
  },
  {
    name: "François Mbarga",
    role: "Directeur Général, Syel BTP",
    bio: "François Mbarga dirige Syel BTP avec une expertise de 20 ans dans le génie civil et la construction en Afrique. Diplômé de l'École Nationale des Ponts et Chaussées (Paris) et ancien directeur de chantier chez Razel-Bec en Afrique de l'Ouest, il a rejoint Syel BTP en 2013 et a supervisé la réalisation de projets totalisant plus de 80 milliards de FCFA. Sous sa direction, la filiale a obtenu la certification ISO 9001 et a triplé son chiffre d'affaires. François est connu pour sa gestion rigoureuse des chantiers, son souci de la sécurité et sa capacité à former les jeunes ingénieurs camerounais.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80",
    branch: "syel-btp",
    linkedin: "https://linkedin.com/in/francois-mbarga",
  },
  {
    name: "Isabelle Tagne",
    role: "Directrice Générale, Syel Agroalimentaire",
    bio: "Isabelle Tagne porte la vision agroalimentaire du Groupe Syel avec une double expertise en agronomie et en management. Ingénieure agronome diplômée de l'Université de Dschang et titulaire d'un MBA de Toulouse Business School, elle a travaillé 8 ans chez Nestlé Cameroun dans le sourcing et la transformation du cacao et du café avant de prendre la direction de Syel Agroalimentaire en 2014. Sa connaissance des filières agricoles camerounaises et son réseau de 3 000 producteurs partenaires font d'elle une figure respectée de l'agro-industrie africaine. Médaillée d'or au Salon de l'Agriculture de Paris 2025.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80",
    branch: "syel-agroalimentaire",
    linkedin: "https://linkedin.com/in/isabelle-tagne",
  },
  {
    name: "Alain-Patrick Ondoua",
    role: "Directeur Général, Syel Transport",
    bio: "Alain-Patrick Ondoua dirige Syel Transport depuis 2015, après avoir été l'un des premiers employés du Groupe Syel en 2010. Titulaire d'un BTS en logistique et transport de l'IUT de Douala et d'un diplôme de management de l'IAE d'Aix-en-Provence, il a gravi les échelons de la filiale en commençant comme responsable d'exploitation. Sa connaissance encyclopédique des corridors de transport d'Afrique centrale, sa capacité à négocier avec les autorités douanières de 4 pays et son leadership terrain ont fait de Syel Transport le leader incontesté de la logistique dans la sous-région, avec une flotte de 350 véhicules et 850 collaborateurs.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
    branch: "syel-transport",
    linkedin: "https://linkedin.com/in/alain-patrick-ondoua",
  },
  {
    name: "Christelle Nguemo",
    role: "Directrice Générale, Syel Immobilier",
    bio: "Christelle Nguemo pilote Syel Immobilier avec une vision audacieuse : rendre le logement de qualité accessible à la classe moyenne africaine. Architecte DPLG formée à l'École Nationale Supérieure d'Architecture de Paris-Belleville et ancienne directrice de projets chez Bouygues Immobilier, elle a rejoint le Groupe Syel en 2015 pour lancer la filiale immobilière. Son portefeuille comprend plus de 1 200 logements livrés et le projet primé « Les Jardins de Bonabéri ». Christelle est membre de l'Ordre des Architectes du Cameroun et milite activement pour l'architecture durable et l'accession sociale à la propriété.",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80",
    branch: "syel-immobilier",
    linkedin: "https://linkedin.com/in/christelle-nguemo",
    twitter: "https://twitter.com/cnguemo",
  },
  {
    name: "Marie-Claire Ebogo",
    role: "Directrice, Fondation Syel & RSE",
    bio: "Marie-Claire Ebogo dirige la Fondation Syel et la stratégie RSE du groupe depuis 2022. Titulaire d'un master en développement durable de Sciences Po Paris et d'un diplôme en gestion de projets humanitaires de l'Université de Genève, elle a passé 10 ans au PNUD en tant que chargée de programme pour l'Afrique centrale. À la Fondation Syel, elle a lancé le programme Syel Digital Academy (formation numérique pour 1 000 jeunes), un programme de reboisement de 50 000 arbres et des partenariats éducatifs avec 30 écoles primaires. Son travail incarne l'engagement du Groupe Syel envers les communautés qui l'entourent.",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&q=80",
    linkedin: "https://linkedin.com/in/marie-claire-ebogo",
  },
];
