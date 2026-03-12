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
    slug: "groupe-syel-inaugure-centrale-solaire-lubumbashi",
    title: "Groupe Syel inaugure la plus grande centrale solaire du Katanga",
    excerpt:
      "Avec 30 MW de capacité installée, la centrale solaire de Lubumbashi marque une étape décisive dans la stratégie énergétique de Syel Énergie et dans l'électrification du Haut-Katanga.",
    content: `Le 15 novembre 2025, le Groupe Syel a officiellement inauguré la Centrale Solaire de Lubumbashi, un investissement de 28 milliards de francs congolais qui positionne Syel Énergie comme un acteur incontournable de la transition énergétique en République Démocratique du Congo. La cérémonie, présidée par le Ministre de l'Énergie et des Ressources Hydrauliques en présence du Gouverneur du Haut-Katanga et de représentants de la Banque Africaine de Développement, a rassemblé plus de 500 invités sur le site de la centrale.

Avec ses 90 000 panneaux photovoltaïques monocristallins déployés sur 60 hectares, la centrale de Lubumbashi produit 30 MW d'énergie propre — suffisamment pour alimenter 50 000 foyers et réduire les émissions de CO₂ de 25 000 tonnes par an. Le système de stockage par batteries lithium-ion de 10 MWh assure une continuité de service même après le coucher du soleil, une innovation majeure pour la région.

"Ce projet illustre notre conviction que l'énergie solaire n'est pas seulement une alternative écologique, mais la solution la plus économiquement viable pour électrifier la RDC", a déclaré Olivier Kameshera, Président-Directeur Général du Groupe Syel, lors de son discours inaugural. "Nous avons formé 50 techniciens locaux qui assureront la maintenance de cette centrale pendant les 25 prochaines années. C'est un investissement dans l'avenir énergétique du pays."

La construction a duré 18 mois et a mobilisé plus de 400 ouvriers locaux, générant un impact économique significatif pour la communauté de Lubumbashi. Le succès de ce projet ouvre la voie à deux nouvelles centrales prévues à Kinshasa et à Goma, portant l'ambition de Syel Énergie à 100 MW de capacité solaire installée en RDC d'ici 2028.`,
    category: "Corporate",
    author: "Olivier Kameshera",
    authorRole: "Président-Directeur Général, Groupe Syel",
    date: "2025-11-20",
    image: "/pictures_news/image1.jpg",
    readTime: 6,
  },
  {
    slug: "rapport-annuel-groupe-syel-2025",
    title: "Groupe Syel publie son rapport annuel 2025 : chiffre d'affaires en hausse de 23 %",
    excerpt:
      "Le rapport annuel 2025 du Groupe Syel révèle une croissance soutenue dans l'ensemble des filiales, un chiffre d'affaires consolidé de 85 milliards de francs congolais et la création de 450 emplois.",
    content: `Le Groupe Syel a publié son rapport annuel 2025, confirmant une trajectoire de croissance robuste malgré un contexte économique régional contrasté. Le chiffre d'affaires consolidé s'établit à 85 milliards de francs congolais (environ 35 millions de dollars américains), en hausse de 23 % par rapport à 2024. Le résultat net s'élève à 6,2 milliards de francs congolais, porté par les performances exceptionnelles de Syel Transport (+28 %) et Syel BTP (+35 %).

Parmi les faits marquants de l'exercice : l'inauguration de la centrale solaire de Lubumbashi (30 MW), l'ouverture du Syel Mall Kinshasa (25 000 m², 92 % d'occupation), le lancement de la marque agroalimentaire « Saveurs du Terroir » dans les provinces de la RDC, et le déploiement de la plateforme digitale du Port de Matadi. Le groupe a également recruté 450 nouveaux collaborateurs, portant l'effectif total à 3 500 personnes.

Le rapport détaille également la stratégie 2026-2030 du Groupe Syel, articulée autour de quatre axes : l'expansion géographique (renforcement des implantations à Goma, Bukavu et Mbuji-Mayi), la diversification sectorielle (entrée dans le secteur minier du Katanga), l'innovation technologique (investissement de 5 milliards de francs congolais en R&D), et la responsabilité sociétale (objectif de neutralité carbone des opérations en RDC d'ici 2030).

"2025 a été une année charnière pour le Groupe Syel", a commenté Olivier Kameshera. "Nous avons démontré que l'excellence opérationnelle et l'ambition continentale ne sont pas incompatibles avec un ancrage local fort et un engagement RSE sincère." Le rapport complet est disponible en téléchargement sur le site du groupe.`,
    category: "Reports",
    author: "Syntiche Kanku",
    authorRole: "Directrice Financière (CFO), Groupe Syel",
    date: "2026-01-25",
    image: "/pictures_news/image2.jpg",
    readTime: 5,
  },
  {
    slug: "partenariat-strategique-total-energies",
    title: "Syel Énergie signe un partenariat stratégique avec TotalEnergies Africa",
    excerpt:
      "Un accord-cadre de 5 ans permettra aux deux entreprises de co-développer des projets d'énergie renouvelable à travers la République Démocratique du Congo.",
    content: `Syel Énergie et TotalEnergies Africa ont signé le 10 février 2026 un accord-cadre de partenariat stratégique d'une durée de 5 ans pour le co-développement de projets d'énergie renouvelable en République Démocratique du Congo. L'accord, signé au siège du Groupe Syel à Kinshasa en présence des deux PDG et de représentants du gouvernement congolais, prévoit un investissement conjoint de 50 milliards de francs congolais (environ 20 millions de dollars américains) sur la période 2026-2031.

Le partenariat couvre trois domaines principaux : la construction de centrales solaires de moyenne puissance (10-50 MW) à Kinshasa, Lubumbashi, Goma et Mbuji-Mayi ; le développement de stations-service équipées de bornes de recharge pour véhicules électriques ; et la mise en place de programmes de formation conjoints pour les techniciens en énergies renouvelables. Quatre projets pilotes sont déjà identifiés, dont une centrale solaire de 20 MW à Goma et un réseau de 15 bornes de recharge rapide à Kinshasa.

"Ce partenariat associe l'expertise mondiale de TotalEnergies en matière d'énergies renouvelables avec la connaissance approfondie du terrain et des communautés locales de Syel Énergie", a déclaré Olivier Kameshera. "Ensemble, nous avons la capacité d'accélérer significativement la transition énergétique de la sous-région." Patrick Pouyanné, PDG de TotalEnergies, a salué "un modèle de collaboration Sud-Nord qui place les compétences africaines au cœur de la stratégie énergétique du continent."`,
    category: "Announcements",
    author: "Olivier Kameshera",
    authorRole: "Président-Directeur Général, Groupe Syel",
    date: "2026-02-12",
    image: "/pictures_news/image3.jpg",
    readTime: 5,
  },
  {
    slug: "syel-technologies-prix-innovation-digitale",
    title: "Syel Technologies remporte le Prix de l'Innovation Digitale au Africa Tech Summit 2025",
    excerpt:
      "La plateforme de gestion portuaire développée pour le Port de Matadi a été distinguée parmi 200 candidatures issues de 35 pays africains.",
    content: `Syel Technologies a décroché le prestigieux Prix de l'Innovation Digitale lors du Africa Tech Summit 2025, qui s'est tenu à Kigali (Rwanda) du 5 au 7 novembre. La plateforme de gestion intégrée développée pour l'Office des Voies Maritimes (OVM) et le Port de Matadi a été sélectionnée parmi 200 candidatures provenant de 35 pays africains dans la catégorie "Transformation Digitale des Infrastructures Publiques".

Le jury, composé d'experts de l'Union Africaine, de la Banque Mondiale et de leaders du secteur tech africain, a salué "une solution conçue en RDC, pour l'Afrique, qui démontre que le continent peut produire des innovations technologiques de classe mondiale". La plateforme, qui connecte 15 modules opérationnels et a réduit les délais de traitement des conteneurs de 40 %, a été jugée exemplaire tant par son architecture technique que par son impact économique mesurable.

Eliezer Kameshera, Directeur Général de Syel Technologies, a reçu le prix des mains de Paul Kagame, Président du Rwanda : "Ce prix n'est pas seulement pour Syel Technologies — il est pour tous les ingénieurs congolais qui prouvent chaque jour que l'expertise technologique de la RDC est à la hauteur des enjeux les plus complexes. Notre plateforme traite 10 millions de tonnes de marchandises par an au Port de Matadi et a augmenté les recettes portuaires de 22 %. C'est la preuve que l'innovation digitale peut transformer les infrastructures congolaises."

Le succès au Africa Tech Summit a généré un fort intérêt commercial : Syel Technologies est en discussions avancées avec les autorités portuaires de Boma et de Kalemie pour des déploiements similaires en RDC.`,
    category: "Press",
    author: "Eliezer Kameshera",
    authorRole: "Directeur Général, Syel Technologies",
    date: "2025-11-10",
    image: "/pictures_news/image4.jpg",
    readTime: 5,
  },
  {
    slug: "syel-btp-route-nationale-kinshasa",
    title: "Syel BTP achève la réhabilitation de 45 km de routes dans la province du Kongo Central",
    excerpt:
      "Livrés avec 2 mois d'avance sur le calendrier, les travaux routiers de Syel BTP sur l'axe Matadi-Kinshasa ont mobilisé 300 ouvriers et renforcé la connectivité économique de la région.",
    content: `Syel BTP a officiellement remis au Ministère des Infrastructures et Travaux Publics les 45 kilomètres de routes nationales réhabilitées sur l'axe Matadi–Kinshasa, lors d'une cérémonie tenue le 18 septembre 2025 en présence du Ministre des Infrastructures et du Gouverneur du Kongo Central. Les travaux, achevés avec deux mois d'avance sur le calendrier contractuel, ont transformé un axe routier dégradé en une chaussée bitumée de standard international.

Le chantier, d'un montant de 12 milliards de francs congolais, comprenait la reconstruction complète de la couche de roulement, l'aménagement de 18 ouvrages de drainage, la construction de 3 ponts en béton armé et l'installation d'un éclairage solaire sur les traversées de villages. Syel BTP a mobilisé un parc de 45 engins lourds et jusqu'à 300 ouvriers en phase de pointe, avec un taux d'emploi local de 85 %.

"La livraison anticipée de ce chantier démontre la maturité opérationnelle de Syel BTP", a déclaré Jean Kameshera. "Notre investissement dans la formation continue de nos équipes et dans l'entretien rigoureux de notre parc d'engins porte ses fruits. Nous sommes fiers de contribuer au désenclavement économique du Kongo Central."

Le Ministre des Infrastructures a salué "un partenaire fiable de l'État congolais" et a annoncé que Syel BTP figure sur la liste restreinte de trois entreprises présélectionnées pour un nouveau projet de route de 80 km reliant Kinshasa à Kikwit, un contrat estimé à 45 milliards de francs congolais.`,
    category: "Corporate",
    author: "Jean Kameshera",
    authorRole: "Directeur des Opérations (COO), Groupe Syel",
    date: "2025-09-25",
    image: "/pictures_news/image5.jpg",
    readTime: 6,
  },
  {
    slug: "syel-agroalimentaire-medaille-or-paris",
    title: "Syel Agroalimentaire décroche l'or au Salon de l'Agriculture de Paris",
    excerpt:
      "Le café « Arabica du Kivu » de Syel Agroalimentaire a remporté la médaille d'or dans la catégorie cafés d'origine au Salon International de l'Agriculture de Paris 2025.",
    content: `Le café « Arabica du Kivu », produit phare de Syel Agroalimentaire, a été couronné de la médaille d'or dans la catégorie "Cafés d'Origine" lors du Salon International de l'Agriculture de Paris, qui s'est tenu du 22 février au 2 mars 2025. Cette distinction internationale consacre le travail mené par la filiale agroalimentaire du Groupe Syel pour valoriser le terroir caféicole de l'Est de la RDC (Nord-Kivu et Sud-Kivu).

Le jury, composé de 15 experts internationaux en torréfaction et dégustation, a salué "un profil aromatique exceptionnel alliant notes florales, acidité vive et corps soyeux, reflétant un terroir volcanique d'altitude unique". Le café, cultivé entre 1 400 et 1 800 mètres d'altitude par 1 500 producteurs partenaires organisés en coopératives à Bukavu et Goma, bénéficie d'un processus de sélection, lavage et séchage minutieux supervisé par les agronomes de Syel Agroalimentaire.

"Cette médaille d'or est d'abord celle de nos 1 500 caféiculteurs partenaires du Kivu", a déclaré Olivier Kameshera. "Grâce à notre programme d'accompagnement — prix d'achat garantis supérieurs de 20 % au cours mondial, fourniture d'intrants, formation en bonnes pratiques — la qualité du café congolais peut rivaliser avec les meilleurs crus éthiopiens et colombiens."

Suite à cette récompense, Syel Agroalimentaire a signé des contrats de distribution avec trois chaînes de torréfaction artisanale en France et en Belgique, ouvrant un nouveau canal d'exportation pour le café premium de la RDC.`,
    category: "Events",
    author: "Olivier Kameshera",
    authorRole: "Président-Directeur Général, Groupe Syel",
    date: "2025-03-08",
    image: "/pictures_news/image4.jpg",
    readTime: 5,
  },
  {
    slug: "expansion-Est-congo-2026",
    title: "Groupe Syel annonce son expansion à l'Est de la République Démocratique du Congo",
    excerpt:
      "Le Groupe Syel renforce sa présence à l'Est de la RDC avec l'ouverture de bureaux à Bukavu et Goma, et des projets dans l'énergie, le BTP et les technologies.",
    content: `Le Groupe Syel a annoncé le 5 février 2026 l'ouverture de deux nouveaux bureaux régionaux à Bukavu (Sud-Kivu) et Goma (Nord-Kivu), marquant une étape majeure dans sa stratégie d'ancrage à travers toute la République Démocratique du Congo. Cette extension géographique concerne trois filiales : Syel Énergie, Syel BTP et Syel Technologies, qui disposent déjà de projets en cours de contractualisation dans les deux provinces.

À Bukavu, Syel Énergie est en négociation avancée pour la construction d'une centrale solaire de 15 MW en périphérie de la ville, tandis que Syel BTP a été présélectionnée pour un projet de construction de 200 logements sociaux. À Goma, Syel Technologies a remporté un appel d'offres pour la digitalisation des services de la Régie de distribution d'eau (REGIDESO), et Syel BTP participe à la construction d'un centre commercial de 15 000 m² au centre-ville.

"L'Est de la RDC représente un bassin économique stratégique avec un potentiel de croissance considérable", a expliqué Olivier Kameshera, Président-Directeur Général du Groupe Syel. "Notre modèle, éprouvé à Kinshasa et à Lubumbashi, est parfaitement transposable à ces provinces. Nous arrivons avec notre expertise, nos standards de qualité et notre engagement à former et employer localement."

Les bureaux de Bukavu et de Goma seront opérationnels dès avril 2026, avec un effectif initial de 50 personnes dans chaque ville, porté à 200 d'ici fin 2027. L'investissement total pour cette expansion est estimé à 8 milliards de francs congolais.`,
    category: "Announcements",
    author: "Olivier Kameshera",
    authorRole: "Président-Directeur Général, Groupe Syel",
    date: "2026-03-12",
    image: "/pictures_news/image7.jpg",
    readTime: 6,
  },
  {
    slug: "programme-rse-education-numerique",
    title: "Groupe Syel lance un programme RSE d'éducation numérique pour 1 000 jeunes",
    excerpt:
      "La Fondation Syel, bras RSE du groupe, financera la formation en compétences digitales de 1 000 jeunes congolais issus de milieux défavorisés sur trois ans.",
    content: `La Fondation Syel, créée en 2022 pour porter les initiatives de responsabilité sociétale du Groupe Syel, a lancé le 15 janvier 2026 le programme "Syel Digital Academy", un ambitieux projet de formation numérique destiné à 1 000 jeunes congolais âgés de 18 à 30 ans issus de milieux défavorisés. Le programme, d'un budget de 1,5 milliard de francs congolais sur trois ans, est mené en partenariat avec l'Université de Kinshasa, Google Africa et l'Autorité de Régulation de la Poste et des Télécommunications du Congo (ARPTC).

Chaque cohorte de 150 jeunes suivra une formation intensive de 6 mois couvrant le développement web, l'analyse de données, le marketing digital et les bases de la cybersécurité. Les cours seront dispensés dans trois centres de formation équipés par le Groupe Syel à Kinshasa, Lubumbashi et Goma. À l'issue de la formation, les meilleurs élèves se verront offrir des stages au sein des filiales du Groupe Syel ou chez ses entreprises partenaires.

"En tant que premier employeur technologique privé de la RDC, nous avons une responsabilité particulière envers la jeunesse congolaise", a souligné Olivier Kameshera. "Le chômage des jeunes est le plus grand défi de notre pays. Avec Syel Digital Academy, nous ne faisons pas de la charité — nous investissons dans les talents qui construiront la RDC de demain et qui pourront un jour rejoindre nos équipes ou créer leurs propres entreprises."

Les inscriptions pour la première cohorte sont ouvertes jusqu'au 31 mars 2026 sur le site de la Fondation Syel.`,
    category: "Announcements",
    author: "Jean Kameshera",
    authorRole: "Directeur des Opérations (COO), Groupe Syel",
    date: "2026-01-18",
    image: "/pictures_news/image8.jpg",
    readTime: 7,
  },
];
