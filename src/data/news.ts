export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: "Corporate" | "Announcements" | "Press" | "Events" | "Reports";
  author: string;
  authorRole: string;
  date: string;
  image: string;
  readTime: number;
}

export const articles: Article[] = [
  {
    slug: "groupe-syel-inaugure-centrale-solaire-maroua",
    title: "Groupe Syel inaugure la plus grande centrale solaire du Nord-Cameroun",
    excerpt:
      "Avec 30 MW de capacité installée, la centrale solaire de Maroua marque une étape décisive dans la stratégie énergétique de Syel Énergie et dans l'électrification du septentrion.",
    content: `Le 15 novembre 2025, le Groupe Syel a officiellement inauguré la Centrale Solaire de Maroua, un investissement de 28 milliards de FCFA qui positionne Syel Énergie comme un acteur incontournable de la transition énergétique en Afrique centrale. La cérémonie, présidée par le Ministre de l'Eau et de l'Énergie en présence du Gouverneur de la Région de l'Extrême-Nord et de représentants de la Banque Africaine de Développement, a rassemblé plus de 500 invités sur le site de la centrale.

Avec ses 90 000 panneaux photovoltaïques monocristallins déployés sur 60 hectares, la centrale de Maroua produit 30 MW d'énergie propre — suffisamment pour alimenter 50 000 foyers et réduire les émissions de CO₂ de 25 000 tonnes par an. Le système de stockage par batteries lithium-ion de 10 MWh assure une continuité de service même après le coucher du soleil, une innovation majeure pour la région.

"Ce projet illustre notre conviction que l'énergie solaire n'est pas seulement une alternative écologique, mais la solution la plus économiquement viable pour électrifier l'Afrique rurale", a déclaré Paul-Henri Nkoulou, PDG du Groupe Syel, lors de son discours inaugural. "Nous avons formé 50 techniciens locaux qui assureront la maintenance de cette centrale pendant les 25 prochaines années. C'est un investissement dans l'avenir énergétique du Cameroun."

La construction a duré 18 mois et a mobilisé plus de 400 ouvriers locaux, générant un impact économique significatif pour la communauté de Maroua. Le succès de ce projet ouvre la voie à deux nouvelles centrales prévues au Gabon et au Congo-Brazzaville, portant l'ambition de Syel Énergie à 100 MW de capacité solaire installée d'ici 2028.`,
    category: "Corporate",
    author: "Jean-Marc Essomba",
    authorRole: "Directeur Général, Syel Énergie",
    date: "2025-11-20",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    readTime: 6,
  },
  {
    slug: "rapport-annuel-groupe-syel-2025",
    title: "Groupe Syel publie son rapport annuel 2025 : chiffre d'affaires en hausse de 23 %",
    excerpt:
      "Le rapport annuel 2025 du Groupe Syel révèle une croissance soutenue dans l'ensemble des filiales, un chiffre d'affaires consolidé de 85 milliards de FCFA et la création de 450 emplois.",
    content: `Le Groupe Syel a publié son rapport annuel 2025, confirmant une trajectoire de croissance robuste malgré un contexte économique régional contrasté. Le chiffre d'affaires consolidé s'établit à 85 milliards de FCFA (environ 130 millions d'euros), en hausse de 23 % par rapport à 2024. Le résultat net s'élève à 6,2 milliards de FCFA, porté par les performances exceptionnelles de Syel Transport (+28 %) et Syel BTP (+35 %).

Parmi les faits marquants de l'exercice : l'inauguration de la centrale solaire de Maroua (30 MW), l'ouverture du Syel Mall Douala (25 000 m², 92 % d'occupation), le lancement de la marque agroalimentaire « Saveurs du Terroir » dans 4 pays, et le déploiement de la plateforme digitale du Port Autonome de Douala. Le groupe a également recruté 450 nouveaux collaborateurs, portant l'effectif total à 3 500 personnes.

Le rapport détaille également la stratégie 2026-2030 du Groupe Syel, articulée autour de quatre axes : l'expansion géographique (ouverture de bureaux au Sénégal et en Côte d'Ivoire), la diversification sectorielle (entrée dans le secteur minier), l'innovation technologique (investissement de 5 milliards de FCFA en R&D), et la responsabilité sociétale (objectif de neutralité carbone des opérations d'ici 2030).

"2025 a été une année charnière pour le Groupe Syel", a commenté Paul-Henri Nkoulou, PDG. "Nous avons démontré que l'excellence opérationnelle et l'ambition continentale ne sont pas incompatibles avec un ancrage local fort et un engagement RSE sincère." Le rapport complet est disponible en téléchargement sur le site du groupe.`,
    category: "Reports",
    author: "Nadège Fotso",
    authorRole: "Directrice Financière, Groupe Syel",
    date: "2026-01-25",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    readTime: 5,
  },
  {
    slug: "partenariat-strategique-total-energies",
    title: "Syel Énergie signe un partenariat stratégique avec TotalEnergies Africa",
    excerpt:
      "Un accord-cadre de 5 ans permettra aux deux entreprises de co-développer des projets d'énergie renouvelable dans 4 pays d'Afrique centrale et de l'Ouest.",
    content: `Syel Énergie et TotalEnergies Africa ont signé le 10 février 2026 un accord-cadre de partenariat stratégique d'une durée de 5 ans pour le co-développement de projets d'énergie renouvelable en Afrique centrale et de l'Ouest. L'accord, signé au siège du Groupe Syel à Douala en présence des deux PDG et de représentants du gouvernement camerounais, prévoit un investissement conjoint de 50 milliards de FCFA (environ 76 millions d'euros) sur la période 2026-2031.

Le partenariat couvre trois domaines principaux : la construction de centrales solaires de moyenne puissance (10-50 MW) au Cameroun, au Gabon, au Congo-Brazzaville et au Sénégal ; le développement de stations-service équipées de bornes de recharge pour véhicules électriques ; et la mise en place de programmes de formation conjoints pour les techniciens en énergies renouvelables. Quatre projets pilotes sont déjà identifiés, dont une centrale solaire de 20 MW à Libreville et un réseau de 15 bornes de recharge rapide à Douala.

"Ce partenariat associe l'expertise mondiale de TotalEnergies en matière d'énergies renouvelables avec la connaissance approfondie du terrain et des communautés locales de Syel Énergie", a déclaré Paul-Henri Nkoulou. "Ensemble, nous avons la capacité d'accélérer significativement la transition énergétique de la sous-région." Patrick Pouyanné, PDG de TotalEnergies, a salué "un modèle de collaboration Sud-Nord qui place les compétences africaines au cœur de la stratégie énergétique du continent."`,
    category: "Announcements",
    author: "Jean-Marc Essomba",
    authorRole: "Directeur Général, Syel Énergie",
    date: "2026-02-12",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    readTime: 5,
  },
  {
    slug: "syel-technologies-prix-innovation-digitale",
    title: "Syel Technologies remporte le Prix de l'Innovation Digitale au Africa Tech Summit 2025",
    excerpt:
      "La plateforme de gestion portuaire développée pour le Port Autonome de Douala a été distinguée parmi 200 candidatures issues de 35 pays africains.",
    content: `Syel Technologies a décroché le prestigieux Prix de l'Innovation Digitale lors du Africa Tech Summit 2025, qui s'est tenu à Kigali (Rwanda) du 5 au 7 novembre. La plateforme de gestion intégrée développée pour le Port Autonome de Douala a été sélectionnée parmi 200 candidatures provenant de 35 pays africains dans la catégorie "Transformation Digitale des Infrastructures Publiques".

Le jury, composé d'experts de l'Union Africaine, de la Banque Mondiale et de leaders du secteur tech africain, a salué "une solution conçue en Afrique, pour l'Afrique, qui démontre que le continent peut produire des innovations technologiques de classe mondiale". La plateforme, qui connecte 15 modules opérationnels et a réduit les délais de traitement des conteneurs de 40 %, a été jugée exemplaire tant par son architecture technique que par son impact économique mesurable.

Serge Kamga, Directeur Général de Syel Technologies, a reçu le prix des mains de Paul Kagame, Président du Rwanda : "Ce prix n'est pas seulement pour Syel Technologies — il est pour tous les ingénieurs africains qui prouvent chaque jour que l'expertise technologique du continent est à la hauteur des enjeux les plus complexes. Notre plateforme traite 10 millions de tonnes de marchandises par an et a augmenté les recettes portuaires de 22 %. C'est la preuve que l'innovation digitale peut transformer les infrastructures africaines."

Le succès au Africa Tech Summit a généré un fort intérêt commercial : Syel Technologies est en discussions avancées avec les ports de Pointe-Noire (Congo) et de Cotonou (Bénin) pour des déploiements similaires.`,
    category: "Press",
    author: "Serge Kamga",
    authorRole: "Directeur Général, Syel Technologies",
    date: "2025-11-10",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
    readTime: 5,
  },
  {
    slug: "syel-btp-route-nationale-littoral",
    title: "Syel BTP achève la réhabilitation de 45 km de routes dans la région du Littoral",
    excerpt:
      "Livrés avec 2 mois d'avance sur le calendrier, les travaux routiers de Syel BTP dans le Littoral ont mobilisé 300 ouvriers et renforcé la connectivité économique de la région.",
    content: `Syel BTP a officiellement remis au Ministère des Travaux Publics les 45 kilomètres de routes nationales réhabilitées dans la région du Littoral, lors d'une cérémonie tenue le 18 septembre 2025 en présence du Ministre des Travaux Publics et du Préfet du département du Wouri. Les travaux, achevés avec deux mois d'avance sur le calendrier contractuel, ont transformé un axe routier dégradé en une chaussée bitumée de standard international.

Le chantier, d'un montant de 12 milliards de FCFA, comprenait la reconstruction complète de la couche de roulement, l'aménagement de 18 ouvrages de drainage, la construction de 3 ponts en béton armé et l'installation d'un éclairage solaire sur les traversées de villages. Syel BTP a mobilisé un parc de 45 engins lourds et jusqu'à 300 ouvriers en phase de pointe, avec un taux d'emploi local de 85 %.

"La livraison anticipée de ce chantier démontre la maturité opérationnelle de Syel BTP", a déclaré François Mbarga, Directeur Général de la filiale. "Notre investissement dans la formation continue de nos équipes et dans l'entretien rigoureux de notre parc d'engins porte ses fruits. Nous sommes fiers de contribuer au désenclavement économique de la région du Littoral."

Le Ministre des Travaux Publics a salué "un partenaire fiable de l'État camerounais" et a annoncé que Syel BTP figure sur la liste restreinte de trois entreprises présélectionnées pour un nouveau projet d'autoroute de 80 km reliant Douala à Limbé, un contrat estimé à 45 milliards de FCFA.`,
    category: "Corporate",
    author: "François Mbarga",
    authorRole: "Directeur Général, Syel BTP",
    date: "2025-09-25",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    readTime: 6,
  },
  {
    slug: "syel-agroalimentaire-medaille-or-paris",
    title: "Syel Agroalimentaire décroche l'or au Salon de l'Agriculture de Paris",
    excerpt:
      "Le café « Arabica des Hauts Plateaux » de Syel Agroalimentaire a remporté la médaille d'or dans la catégorie cafés d'origine au Salon International de l'Agriculture de Paris 2025.",
    content: `Le café « Arabica des Hauts Plateaux », produit phare de Syel Agroalimentaire, a été couronné de la médaille d'or dans la catégorie "Cafés d'Origine" lors du Salon International de l'Agriculture de Paris, qui s'est tenu du 22 février au 2 mars 2025. Cette distinction internationale consacre le travail mené par la filiale agroalimentaire du Groupe Syel pour valoriser le terroir caféicole de l'Ouest Cameroun.

Le jury, composé de 15 experts internationaux en torréfaction et dégustation, a salué "un profil aromatique exceptionnel alliant notes florales, acidité vive et corps soyeux, reflétant un terroir volcanique d'altitude unique". Le café, cultivé entre 1 400 et 1 800 mètres d'altitude par 1 500 producteurs partenaires organisés en coopératives, bénéficie d'un processus de sélection, lavage et séchage minutieux supervisé par les agronomes de Syel Agroalimentaire.

"Cette médaille d'or est d'abord celle de nos 1 500 caféiculteurs partenaires", a déclaré Isabelle Tagne, Directrice Générale de Syel Agroalimentaire. "Grâce à notre programme d'accompagnement — prix d'achat garantis supérieurs de 20 % au cours mondial, fourniture d'intrants, formation en bonnes pratiques — la qualité du café camerounais peut rivaliser avec les meilleurs crus éthiopiens et colombiens."

Suite à cette récompense, Syel Agroalimentaire a signé des contrats de distribution avec trois chaînes de torréfaction artisanale en France et en Belgique, ouvrant un nouveau canal d'exportation pour le café premium camerounais.`,
    category: "Events",
    author: "Isabelle Tagne",
    authorRole: "Directrice Générale, Syel Agroalimentaire",
    date: "2025-03-08",
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80",
    readTime: 5,
  },
  {
    slug: "expansion-senegal-cote-ivoire-2026",
    title: "Groupe Syel annonce son expansion au Sénégal et en Côte d'Ivoire",
    excerpt:
      "Le Groupe Syel ouvre des bureaux à Dakar et Abidjan, marquant son entrée sur le marché ouest-africain francophone avec des projets dans l'énergie, le BTP et les technologies.",
    content: `Le Groupe Syel a annoncé le 5 février 2026 l'ouverture de deux nouveaux bureaux régionaux à Dakar (Sénégal) et Abidjan (Côte d'Ivoire), marquant une étape majeure dans sa stratégie d'expansion vers l'Afrique de l'Ouest. Cette extension géographique concerne trois filiales : Syel Énergie, Syel BTP et Syel Technologies, qui disposent déjà de projets en cours de contractualisation dans les deux pays.

À Dakar, Syel Énergie est en négociation avancée pour la construction d'une centrale solaire de 15 MW en périphérie de Thiès, tandis que Syel BTP a été présélectionnée pour un projet de construction de 200 logements sociaux dans la banlieue de Keur Massar. À Abidjan, Syel Technologies a remporté un appel d'offres pour la digitalisation du système de gestion de l'eau de la SODECI, et Syel BTP participe à la construction d'un centre commercial de 15 000 m² à Cocody.

"L'Afrique de l'Ouest francophone représente un marché de plus de 150 millions d'habitants avec des taux de croissance parmi les plus élevés du continent", a expliqué Paul-Henri Nkoulou, PDG du Groupe Syel. "Notre modèle, éprouvé en Afrique centrale, est parfaitement transposable à ces marchés. Nous arrivons avec notre expertise, nos standards de qualité et notre engagement à former et employer localement."

Les bureaux de Dakar et d'Abidjan seront opérationnels dès avril 2026, avec un effectif initial de 50 personnes dans chaque pays, porté à 200 d'ici fin 2027. L'investissement total pour cette expansion est estimé à 8 milliards de FCFA.`,
    category: "Announcements",
    author: "Paul-Henri Nkoulou",
    authorRole: "Président-Directeur Général, Groupe Syel",
    date: "2026-02-05",
    image:
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80",
    readTime: 6,
  },
  {
    slug: "programme-rse-education-numerique",
    title: "Groupe Syel lance un programme RSE d'éducation numérique pour 1 000 jeunes",
    excerpt:
      "La Fondation Syel, bras RSE du groupe, financera la formation en compétences digitales de 1 000 jeunes camerounais issus de milieux défavorisés sur trois ans.",
    content: `La Fondation Syel, créée en 2022 pour porter les initiatives de responsabilité sociétale du Groupe Syel, a lancé le 15 janvier 2026 le programme "Syel Digital Academy", un ambitieux projet de formation numérique destiné à 1 000 jeunes camerounais âgés de 18 à 30 ans issus de milieux défavorisés. Le programme, d'un budget de 1,5 milliard de FCFA sur trois ans, est mené en partenariat avec l'Université de Douala, Google Africa et l'Agence Nationale des Technologies de l'Information et de la Communication (ANTIC).

Chaque cohorte de 150 jeunes suivra une formation intensive de 6 mois couvrant le développement web, l'analyse de données, le marketing digital et les bases de la cybersécurité. Les cours seront dispensés dans trois centres de formation équipés par le Groupe Syel à Douala, Yaoundé et Bafoussam. À l'issue de la formation, les meilleurs élèves se verront offrir des stages au sein des filiales du Groupe Syel ou chez ses entreprises partenaires.

"En tant que premier employeur technologique privé de la sous-région, nous avons une responsabilité particulière envers la jeunesse camerounaise", a souligné Paul-Henri Nkoulou. "Le chômage des jeunes est le plus grand défi de notre continent. Avec Syel Digital Academy, nous ne faisons pas de la charité — nous investissons dans les talents qui construiront l'Afrique de demain et qui pourront un jour rejoindre nos équipes ou créer leurs propres entreprises."

Les inscriptions pour la première cohorte sont ouvertes jusqu'au 31 mars 2026 sur le site de la Fondation Syel.`,
    category: "Announcements",
    author: "Marie-Claire Ebogo",
    authorRole: "Directrice, Fondation Syel",
    date: "2026-01-18",
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&q=80",
    readTime: 7,
  },
];
