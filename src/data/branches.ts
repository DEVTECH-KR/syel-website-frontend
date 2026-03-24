export interface Branch {
  slug: string;
  name: string;
  region: "Africa" | "Europe" | "Americas" | "Asia" | "Middle East";
  country: string;
  city: string;
  description: string;
  longDescription: string;
  established: string;
  memberCount: number;
  projectCount: number;
  image: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
}

export const branches: Branch[] = [
  {
    slug: "syel-energie",
    name: "Syel Énergie",
    region: "Africa",
    country: "République Démocratique du Congo",
    city: "Kinshasa",
    description:
      "Notre filiale énergie développe des solutions de production et de distribution d'énergie solaire, thermique et hybride à travers la République Démocratique du Congo.",
    longDescription:
      "Syel Énergie, créée en 2012, est le pilier énergétique du Groupe Syel. Basée à Kinshasa avec des bureaux opérationnels à Lubumbashi et Goma, la filiale conçoit, construit et exploite des centrales solaires photovoltaïques, des groupes électrogènes industriels et des mini-réseaux hybrides pour les zones rurales et périurbaines. Syel Énergie a installé plus de 45 MW de capacité solaire cumulée en République Démocratique du Congo. L'entreprise fournit également des solutions d'électrification hors réseau pour les entreprises minières du Katanga et les camps industriels. En 2025, Syel Énergie a remporté un contrat majeur pour l'électrification de 120 villages dans les provinces du Nord-Kivu et du Sud-Kivu, consolidant sa position de leader dans les énergies renouvelables en RDC. L'équipe de 620 ingénieurs, techniciens et commerciaux porte une vision claire : accélérer la transition énergétique du pays.",
    established: "2012",
    memberCount: 620,
    projectCount: 38,
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    contactEmail: "energie@groupesyel.cd",
    contactPhone: "+243 815 123 450",
    address: "Avenue Coteaux 4660, Gombe Kinshasa",
  },
  {
    slug: "syel-transport",
    name: "Syel Transport",
    region: "Africa",
    country: "République Démocratique du Congo",
    city: "Kinshasa",
    description:
      "Syel Transport opère une flotte de plus de 350 véhicules assurant le transport de marchandises, la logistique portuaire et la distribution sur les corridors économiques de la RDC.",
    longDescription:
      "Fondée en 2015, le Syel Transport est une filiale historique du groupe. Spécialisée dans le transport routier de marchandises, la logistique portuaire et la gestion de la chaîne d'approvisionnement, elle opère sur les corridors Kinshasa–Matadi, Kinshasa–Lubumbashi et Kinshasa–Goma. La flotte comprend plus de 350 camions, semi-remorques et véhicules spécialisés, gérés depuis un hub logistique de 12 000 m² situé dans la zone industrielle de Limete à Kinshasa. Syel Transport est le partenaire logistique de référence pour les grands importateurs, les organisations humanitaires et les projets d'infrastructure en RDC. L'entreprise emploie 850 collaborateurs, dont 480 chauffeurs professionnels certifiés.",
    established: "2015",
    memberCount: 850,
    projectCount: 52,
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    contactEmail: "transport@groupesyel.cd",
    contactPhone: "+243 815 123 451",
    address:
      "Zone industrielle de Limete, Avenue de la Révolution, Kinshasa, République Démocratique du Congo",
  },
  {
    slug: "syel-agroalimentaire",
    name: "Syel Agroalimentaire",
    region: "Africa",
    country: "République Démocratique du Congo",
    city: "Lubumbashi",
    description:
      "Syel Agroalimentaire transforme et commercialise des produits agricoles locaux — cacao, café, huile de palme, manioc — en créant de la valeur ajoutée pour les agriculteurs et les consommateurs.",
    longDescription:
      "Syel Agroalimentaire a été lancée en 2020 pour répondre au défi de la transformation locale des matières premières agricoles en RDC. Implantée à Kinshasa, la filiale exploite deux unités de transformation : une usine de torréfaction et d'emballage de café et Elikya qui est une usine de transformation de l'arachide en  pâte. Syel Agroalimentaire travaille en partenariat avec plus de 3 000 agriculteurs organisés en coopératives au Kivu et à Kinshasa, leur garantissant des prix d'achat stables et un accès à des intrants de qualité. La marque « Saveurs du Terroir » est désormais distribuée dans les principales villes de la RDC. En 2025, la filiale a inauguré une nouvelle ligne de production d'huile de palme raffinée certifiée durable (RSPO), positionnant le Groupe Syel comme un acteur responsable de l'agro-industrie congolaise. L'effectif atteint 480 employés permanents et plus de 200 saisonniers.",
    established: "2020",
    memberCount: 480,
    projectCount: 24,
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
    contactEmail: "agro@groupesyel.cd",
    contactPhone: "+243 815 123 452",
    address: "Avenue du Commerce, Zone Industrielle, Lubumbashi, RDC",
  },
  {
    slug: "syel-technologies",
    name: "Syel Technologies",
    region: "Africa",
    country: "République Démocratique du Congo",
    city: "Kinshasa",
    description:
      "Syel Technologies accompagne la transformation digitale des entreprises congolaises avec des solutions ERP, cloud, cybersécurité et développement sur mesure.",
    longDescription:
      "Créée en 2023, Syel Technologies est le bras numérique du Groupe Syel. Basée à Kinshasa avec un bureau à Bujumbura, la filiale propose des services de conseil en transformation digitale, d'intégration de systèmes ERP (SAP, Odoo), de développement d'applications,et d'hébergement cloud. Syel Technologies compte parmi ses clients des banques, des opérateurs télécoms, des administrations publiques et des PME à forte croissance. Le projet phare de 2024 a été le déploiement d'une plateforme de gestion intégrée pour l'Office des Voies Maritimes et le Port de Matadi, connectant 15 modules opérationnels et réduisant les délais de traitement des conteneurs de 40 %. L'équipe de 320 ingénieurs et consultants, dont 60 % sont titulaires de certifications internationales (ISCO, SAP), fait de Syel Technologies un partenaire technologique de premier plan en RDC.",
    established: "2023",
    memberCount: 320,
    projectCount: 45,
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    contactEmail: "tech@groupesyel.cd",
    contactPhone: "+243 815 123 453",
    address: "Avenue Coteaux 4660, Gombe Kinshasa",
  },
  {
    slug: "syel-btp",
    name: "Syel BTP",
    region: "Africa",
    country: "République Démocratique du Congo",
    city: "Kinshasa",
    description:
      "Syel BTP réalise des ouvrages de génie civil, des bâtiments commerciaux et des infrastructures routières à travers la République Démocratique du Congo.",
    longDescription:
      "Syel BTP, fondée en 2025, est la filiale construction et travaux publics du Groupe Syel. Elle intervient dans la construction de bâtiments commerciaux et industriels, les travaux routiers, les ouvrages d'art (ponts, dalots), l'aménagement de zones industrielles et la construction de logements. Avec un parc de plus de 80 engins lourds (pelles, bulldozers, grues, centrales à béton), Syel BTP a la capacité d'exécuter simultanément plusieurs chantiers de grande envergure. Parmi les réalisations marquantes : la construction du centre commercial Syel Mall à Kinshasa (25 000 m²), la réhabilitation de 45 km de routes nationales sur l'axe Matadi–Kinshasa, et l'édification du siège social du Groupe Syel. La filiale est certifiée ISO 9001 et emploie 780 collaborateurs, incluant ingénieurs civils, conducteurs de travaux, topographes et ouvriers qualifiés. Syel BTP ambitionne de devenir l'un des cinq premiers constructeurs de RDC d'ici 2030.",
    established: "2025",
    memberCount: 780,
    projectCount: 34,
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    contactEmail: "btp@groupesyel.cd",
    contactPhone: "+243 815 123 454",
    address: "Limete Industriel, 1er Rue DILANDOSE, Avenue Mpela Nº23B, Kinshasa",
  },
  {
    slug: "syel-immobilier",
    name: "Syel Immobilier",
    region: "Africa",
    country: "République Démocratique du Congo",
    city: "Kinshasa",
    description:
      "Syel Immobilier développe des programmes résidentiels, des espaces de bureaux et des complexes commerciaux pour répondre à la demande croissante du marché immobilier congolais.",
    longDescription:
      "Syel Immobilier, lancée en 2025, porte l'ambition du Groupe Syel dans le secteur de la promotion immobilière. La filiale conçoit et commercialise des programmes de logements résidentiels (du standing économique au haut de gamme), des immeubles de bureaux et des centres commerciaux. Son portefeuille actuel comprend plus de 1 200 unités de logement livrées ou en cours de construction à Kinshasa, Lubumbashi et Goma. Le projet emblématique « Les Jardins de la Gombe » — une résidence de 280 appartements avec piscine, salle de sport et espaces verts — a été livré en 2024 et primé au MIPIM Africa pour son design et son intégration environnementale. Syel Immobilier propose également des solutions de financement en partenariat avec des banques locales, rendant l'accession à la propriété accessible à la classe moyenne congolaise. L'équipe de 450 collaborateurs comprend des architectes, des urbanistes, des commerciaux et des gestionnaires de patrimoine.",
    established: "2025",
    memberCount: 450,
    projectCount: 18,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    contactEmail: "immobilier@groupesyel.cd",
    contactPhone: "+243 815 123 455",
    address: "Avenue Coteaux 4660, Gombe Kinshasa",
  },
];
