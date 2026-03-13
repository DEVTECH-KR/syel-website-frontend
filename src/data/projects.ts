export interface Project {
  slug: string;
  title: string;
  category:
    | "Énergie"
    | "Transport"
    | "Agroalimentaire"
    | "Technologies"
    | "BTP"
    | "Immobilier";
  region: string;
  branch: string;
  description: string;
  longDescription: string;
  impact: string;
  beneficiaries: number;
  status: "active" | "completed" | "upcoming";
  progress: number;
  startDate: string;
  endDate?: string;
  image: string;
  gallery: string[];
}

export const projects: Project[] = [
  {
    slug: "centrale-solaire-lubumbashi",
    title: "Centrale Solaire de Lubumbashi",
    category: "Énergie",
    region: "République Démocratique du Congo",
    branch: "syel-energie",
    description:
      "Construction d'une centrale solaire photovoltaïque de 30 MW dans le Haut-Katanga, alimentant plus de 50 000 foyers en énergie propre.",
    longDescription:
      "La Centrale Solaire de Lubumbashi est le projet le plus ambitieux de Syel Énergie à ce jour. Située sur un terrain de 60 hectares en périphérie de Lubumbashi, cette installation photovoltaïque de 30 MW utilise des panneaux monocristallins de dernière génération et un système de stockage par batteries lithium-ion de 10 MWh. Le projet, réalisé en partenariat avec la Banque Africaine de Développement et la SNEL, vise à réduire la dépendance de la région aux générateurs diesel et à combler le déficit énergétique chronique du Katanga. La phase de construction a mobilisé plus de 400 ouvriers locaux et a inclus un programme de formation pour 50 techniciens solaires issus des communautés environnantes. La centrale produit suffisamment d'électricité pour alimenter 50 000 foyers et réduire les émissions de CO₂ de 25 000 tonnes par an.",
    impact:
      "50 000 foyers alimentés en énergie propre, 25 000 tonnes de CO₂ évitées par an",
    beneficiaries: 50000,
    status: "active",
    progress: 78,
    startDate: "2023-06-01",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80",
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&q=80",
      "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&q=80",
    ],
  },
  {
    slug: "corridor-logistique-kinshasa-matadi",
    title: "Corridor Logistique Kinshasa–Matadi",
    category: "Transport",
    region: "République Démocratique du Congo",
    branch: "syel-transport",
    description:
      "Modernisation et sécurisation du corridor de transport reliant le Port de Matadi à Kinshasa, avec la construction d'un hub logistique à Boma.",
    longDescription:
      "Le projet Corridor Logistique Kinshasa–Matadi est une initiative stratégique de Syel Transport visant à fluidifier les échanges commerciaux entre la capitale et le principal port maritime de la RDC. Le corridor d'environ 350 km, vital pour l'approvisionnement du pays, souffrait de temps de transit excessifs et de taux de sinistralité élevés. Syel Transport a investi dans la construction d'un hub logistique de 8 000 m² à Boma, point de rupture de charge stratégique, équipé d'entrepôts climatisés, d'une aire de stationnement sécurisée pour 200 camions et d'un centre de maintenance. L'ensemble de la flotte affectée au corridor (120 véhicules) a été équipé de systèmes GPS et de capteurs IoT permettant le suivi en temps réel des marchandises. Le temps de transit moyen a été réduit de 60 % et le taux de pertes et avaries a chuté de 70 %.",
    impact:
      "Temps de transit réduit de 60 %, 120 véhicules équipés en suivi temps réel",
    beneficiaries: 15000,
    status: "completed",
    progress: 100,
    startDate: "2022-01-15",
    endDate: "2024-12-31",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80",
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=800&q=80",
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
    ],
  },
  {
    slug: "usine-transformation-cafe-kivu",
    title: "Usine de Transformation du Café — Kivu",
    category: "Agroalimentaire",
    region: "République Démocratique du Congo",
    branch: "syel-agroalimentaire",
    description:
      "Construction et mise en exploitation d'une unité moderne de torréfaction et d'emballage de café arabica, en partenariat avec 1 500 producteurs du Nord-Kivu et du Sud-Kivu.",
    longDescription:
      "Ce projet phare de Syel Agroalimentaire vise à capter la valeur ajoutée du café congolais en le transformant localement plutôt que de l'exporter brut. L'usine, implantée à Bukavu, dispose d'une capacité de torréfaction de 5 000 tonnes par an et de lignes d'emballage automatisées pour les formats consommateurs (250 g, 500 g, 1 kg) et professionnels (5 kg, 25 kg). Un laboratoire de contrôle qualité certifié ISO 22000 garantit la traçabilité de la graine au sachet. Le programme inclut un volet social majeur : 1 500 caféiculteurs organisés en 45 coopératives au Kivu bénéficient de prix d'achat garantis supérieurs de 20 % au cours mondial, d'intrants fournis à crédit et de formations en bonnes pratiques agricoles. La marque « Arabica du Kivu » est désormais distribuée en RDC et a remporté la médaille d'or au Salon de l'Agriculture de Paris 2025.",
    impact:
      "1 500 producteurs intégrés dans la chaîne de valeur, revenus augmentés de 35 %",
    beneficiaries: 1500,
    status: "completed",
    progress: 100,
    startDate: "2021-03-01",
    endDate: "2023-09-30",
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=80",
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80",
    ],
  },
  {
    slug: "elikya-usine-pate-arachide-kwilu",
    title: "Elikya : Usines de Pâte d'Arachide du Kwilu",
    category: "Agroalimentaire",
    region: "Avenue Coteaux 4660, Gombe Kinshasa",
    branch: "syel-agroalimentaire",
    description:
      "Unité de transformation de l'arachide en pâte (Elikya) du Kwilu, implantée à Kinshasa. Production de pâte d'arachide de qualité pour le marché local et régional.",
    longDescription:
      "Elikya est la marque phare de Syel Agroalimentaire dédiée à la transformation de l'arachide en pâte dans la région du Kwilu. L'usine, dont le siège opérationnel est situé Avenue Coteaux 4660 à Gombe Kinshasa, transforme des arachides issues des coopératives du Kwilu en pâte d'arachide naturelle et grillée, conformément aux normes d'hygiène et de qualité. L'unité dispose d'une capacité de production de plusieurs tonnes par mois, avec des lignes de torréfaction, de broyage et d'emballage. Elikya travaille en partenariat avec des centaines de producteurs locaux, leur garantissant des débouchés stables et un prix juste. La marque est distribuée dans les grandes surfaces et marchés de Kinshasa et des provinces voisines, contribuant à la sécurité alimentaire et à la valorisation du terroir congolais.",
    impact:
      "Valorisation du terroir du Kwilu, création d'emplois locaux, pâte d'arachide de qualité pour le marché congolais",
    beneficiaries: 800,
    status: "active",
    progress: 100,
    startDate: "2024-01-01",
    image: "/pictures_news/Elikya.jpeg",
    gallery: [
      "/pictures_news/elikya1.jpeg",
      "/pictures_news/elikya2.jpeg",
      "/pictures_news/elikya3.jpeg",
      "/pictures_news/elikya4.jpeg",
      "/pictures_news/elikya5.jpeg",
      "/pictures_news/elikya6.jpeg",
    ],
  },
  {
    slug: "plateforme-digitale-matadi",
    title: "Plateforme Digitale du Port de Matadi (OVM)",
    category: "Technologies",
    region: "République Démocratique du Congo",
    branch: "syel-technologies",
    description:
      "Déploiement d'un système intégré de gestion portuaire connectant 15 modules opérationnels, réduisant les délais de traitement des conteneurs de 40 %.",
    longDescription:
      "Le projet de digitalisation du Port de Matadi et de l'Office des Voies Maritimes (OVM) est la plus grande réalisation de Syel Technologies à ce jour. Face à la congestion chronique du principal port de la RDC (traitant plus de 10 millions de tonnes de marchandises par an), l'OVM a confié à Syel Technologies la conception et le déploiement d'une plateforme de gestion intégrée. Le système connecte 15 modules : manifeste électronique, gestion des escales, tracking des conteneurs, facturation automatisée, guichet unique dématérialisé, vidéosurveillance intelligente, etc. L'architecture cloud hybride garantit une disponibilité de 99,9 % et le respect des normes internationales de l'Organisation Maritime Internationale. Le projet a mobilisé 45 ingénieurs pendant 18 mois et a inclus la formation de 300 agents portuaires. Les résultats sont spectaculaires : le temps moyen de séjour des conteneurs est passé de 18 à 11 jours, et les recettes portuaires ont augmenté de 22 %.",
    impact:
      "Délais de traitement réduits de 40 %, recettes portuaires en hausse de 22 %",
    beneficiaries: 5000,
    status: "completed",
    progress: 100,
    startDate: "2023-01-10",
    endDate: "2024-07-15",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    ],
  },
  {
    slug: "syel-mall-kinshasa",
    title: "Syel Mall Kinshasa — Centre Commercial & Business",
    category: "BTP",
    region: "République Démocratique du Congo",
    branch: "syel-btp",
    description:
      "Construction d'un centre commercial et d'affaires de 25 000 m² au cœur de Kinshasa (Gombe), comprenant 80 boutiques, un hypermarché, des bureaux et un parking de 500 places.",
    longDescription:
      "Le Syel Mall Kinshasa est le projet emblématique de Syel BTP dans le domaine du bâtiment commercial. Situé dans le quartier de la Gombe, l'un des pôles de croissance les plus dynamiques de Kinshasa, le complexe s'étend sur 25 000 m² répartis sur 4 niveaux. Il comprend un hypermarché de 3 000 m², 80 boutiques, une aire de restauration de 12 enseignes, un espace de coworking de 1 500 m², des bureaux de standing sur deux étages et un parking souterrain de 500 places. La construction, réalisée en 24 mois avec des matériaux locaux à 60 %, a mobilisé jusqu'à 600 ouvriers en phase de pointe. Le bâtiment intègre des technologies vertes : panneaux solaires en toiture (200 kW), récupération des eaux de pluie, climatisation centralisée haute efficacité et éclairage LED intelligent. Le Syel Mall a été inauguré en mars 2025 et affiche un taux d'occupation de 92 % dès la première année.",
    impact:
      "1 200 emplois directs créés, 92 % de taux d'occupation dès l'ouverture",
    beneficiaries: 1200,
    status: "completed",
    progress: 100,
    startDate: "2022-09-01",
    endDate: "2025-03-15",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    ],
  },
  {
    slug: "jardins-de-la-gombe",
    title: "Les Jardins de la Gombe — Résidence Premium",
    category: "Immobilier",
    region: "République Démocratique du Congo",
    branch: "syel-immobilier",
    description:
      "Programme résidentiel haut de gamme de 280 appartements avec piscine, salle de sport et espaces verts, primé au MIPIM Africa 2024 pour son design architectural.",
    longDescription:
      "Les Jardins de la Gombe est le programme immobilier phare de Syel Immobilier, une résidence premium située dans le quartier de la Gombe à Kinshasa. Le projet comprend 280 appartements (T2, T3 et T4) répartis dans 8 immeubles de 6 étages, entourés de 2 hectares d'espaces verts paysagers. Les équipements collectifs incluent une piscine olympique, une salle de fitness, une aire de jeux pour enfants, un local commercial et une conciergerie. Chaque appartement bénéficie d'une finition premium : cuisine équipée, climatisation réversible, fibre optique et interphone vidéo. Le programme a été conçu par le cabinet d'architecture Kéré Design et a remporté le prix du meilleur projet résidentiel au MIPIM Africa 2024. Grâce à des partenariats de financement avec Rawbank et Ecobank RDC, Syel Immobilier propose des plans d'accession sur 15 à 25 ans, rendant ces logements accessibles à la classe moyenne supérieure. 95 % des unités ont été vendues avant la livraison finale.",
    impact:
      "280 familles logées, prix d'excellence MIPIM Africa 2024",
    beneficiaries: 280,
    status: "completed",
    progress: 100,
    startDate: "2021-06-01",
    endDate: "2024-11-30",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    ],
  },
  {
    slug: "electrification-rurale-kivu",
    title: "Programme d'Électrification Rurale — Kivu",
    category: "Énergie",
    region: "République Démocratique du Congo",
    branch: "syel-energie",
    description:
      "Installation de mini-réseaux solaires hybrides dans 120 villages du Nord-Kivu et du Sud-Kivu, apportant l'électricité à plus de 80 000 personnes pour la première fois.",
    longDescription:
      "Le Programme d'Électrification Rurale du Kivu est le plus grand projet d'accès à l'énergie jamais entrepris par Syel Énergie en RDC. Financé par la Banque Mondiale et l'Agence Française de Développement, ce programme vise à installer des mini-réseaux solaires hybrides (solaire + batteries + groupes diesel de secours) dans 120 villages isolés où le taux d'accès à l'électricité est inférieur à 5 %. Chaque mini-réseau est dimensionné pour alimenter entre 200 et 500 foyers, ainsi que les infrastructures communautaires (centre de santé, école, pompe à eau). Le modèle économique repose sur un opérateur local formé par Syel Énergie, qui assure la maintenance et la collecte des paiements via mobile money. Les 40 premiers villages ont été raccordés en 2025, et le programme s'achèvera en 2027. L'impact attendu est transformationnel : accès à la lumière, conservation des médicaments, irrigation, accès à l'information et développement d'activités économiques nocturnes.",
    impact:
      "80 000 personnes accèdent à l'électricité pour la première fois",
    beneficiaries: 80000,
    status: "active",
    progress: 35,
    startDate: "2024-09-01",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&q=80",
      "https://images.unsplash.com/photo-1548337138-e87d889cc369?w=800&q=80",
      "https://images.unsplash.com/photo-1595437193398-f24279553f4f?w=800&q=80",
    ],
  },
  {
    slug: "erp-ecobank-rdc",
    title: "Déploiement ERP Ecobank RDC",
    category: "Technologies",
    region: "République Démocratique du Congo",
    branch: "syel-technologies",
    description:
      "Migration et intégration du système ERP SAP S/4HANA pour Ecobank en RDC, unifiant la gestion financière et les opérations bancaires.",
    longDescription:
      "Syel Technologies a été sélectionnée par Ecobank RDC pour piloter la migration vers SAP S/4HANA de ses agences en République Démocratique du Congo. Ce projet stratégique vise à unifier les systèmes de gestion financière, de conformité réglementaire et de reporting sur une plateforme unique hébergée dans un data center Tier III à Kinshasa. L'équipe projet de 35 consultants certifiés SAP a conduit l'analyse des processus existants, la configuration du système, la migration de 8 années de données historiques et la formation de 450 utilisateurs. Le déploiement suit une approche par vagues sur les principales villes (Kinshasa, Lubumbashi, Goma). Les gains attendus incluent une réduction de 50 % des délais de clôture comptable et une conformité renforcée avec les normes de la BCC.",
    impact:
      "5 filiales bancaires unifiées, délais de clôture réduits de 50 %",
    beneficiaries: 450,
    status: "active",
    progress: 55,
    startDate: "2025-03-01",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    ],
  },
  {
    slug: "residence-kinshasa-2030",
    title: "Résidence Kinshasa 2030 — Logements Sociaux",
    category: "Immobilier",
    region: "République Démocratique du Congo",
    branch: "syel-immobilier",
    description:
      "Programme de construction de 500 logements sociaux accessibles à Kinshasa, en partenariat avec le Ministère de l'Urbanisme et l'habitat et les banques locales.",
    longDescription:
      "Résidence Kinshasa 2030 est un programme ambitieux de logements sociaux porté par Syel Immobilier en partenariat avec le Ministère de l'Urbanisme et de l'Habitat de la RDC. Situé dans la zone d'aménagement de la commune de Limete, le programme prévoit la construction de 500 logements (T2 et T3) répartis dans 20 immeubles de 4 étages, avec des infrastructures communes : crèche, espace commercial, terrain de sport et parking. Le prix de vente, plafonné par convention avec l'État, est rendu accessible grâce à des prêts immobiliers sur 25 ans à taux bonifié. Le projet intègre des standards de construction durable : briques en terre compressée, toitures végétalisées, panneaux solaires pour les parties communes et gestion des eaux usées par phytoépuration. La livraison des premiers lots est prévue pour fin 2027.",
    impact:
      "500 familles à revenus modestes accèdent à la propriété",
    beneficiaries: 500,
    status: "upcoming",
    progress: 15,
    startDate: "2026-06-01",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    ],
  },
];
