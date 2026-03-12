export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  organization?: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Syel Transport est notre partenaire logistique depuis 2018 et n'a jamais failli. Leurs délais de livraison sont les meilleurs sur le corridor Kinshasa–Matadi, et leur système de suivi GPS nous permet de localiser nos marchandises en temps réel. Dans un secteur où la fiabilité est rare, Syel Transport est une valeur sûre.",
    name: "Jean-Pierre Mutombo",
    role: "Directeur des Achats",
    organization: "Brasseries du Congo",
    image: "/logo-groupe-syel.png",
  },
  {
    quote:
      "La plateforme digitale développée par Syel Technologies a transformé les opérations de notre port. Les temps de traitement ont été réduits de 40 % et nos recettes ont augmenté de 22 %. C'est un travail d'une qualité exceptionnelle, réalisé par des ingénieurs congolais. Nous sommes fiers de cette collaboration.",
    name: "Cyrus Ngo'o",
    role: "Directeur Général",
    organization: "Office des Voies Maritimes / Port de Matadi",
    image: "/logo-groupe-syel.png",
  },
  {
    quote:
      "Grâce au programme d'accompagnement de Syel Agroalimentaire, nos revenus ont augmenté de 35 % en deux ans. Ils nous achètent le café à un prix juste, nous forment aux bonnes pratiques agricoles et nous fournissent des intrants de qualité. Pour la première fois, je peux envoyer tous mes enfants à l'école.",
    name: "Joseph Tchinda",
    role: "Président de Coopérative",
    organization: "Coopérative des Caféiculteurs du Kivu",
    image: "/logo-groupe-syel.png",
  },
  {
    quote:
      "Syel BTP a livré notre centre commercial avec deux mois d'avance et dans le respect total du budget. Leur rigueur dans la gestion de chantier, leur attention à la qualité des finitions et leur réactivité face aux imprévus en font un constructeur de référence en Afrique centrale.",
    name: "Philippe Achille Bassahak",
    role: "Directeur de l'Investissement",
    organization: "Afriland First Bank",
    image: "/logo-groupe-syel.png",
  },
  {
    quote:
      "L'acquisition de notre appartement aux Jardins de la Gombe a changé notre vie. Syel Immobilier a rendu l'accession à la propriété possible grâce à leur partenariat bancaire et à des mensualités accessibles. La qualité de construction est remarquable — rien à voir avec ce qu'on trouve habituellement sur le marché local.",
    name: "Béatrice Kabongo",
    role: "Propriétaire résidente",
    organization: "Résidence Les Jardins de la Gombe",
    image: "/logo-groupe-syel.png",
  },
  {
    quote:
      "Le Groupe Syel est un acteur économique exemplaire dont l'impact dépasse largement le cadre de ses activités commerciales. Leur programme de formation numérique pour les jeunes, leur politique d'emploi local et leur engagement environnemental sont un modèle pour le secteur privé congolais.",
    name: "Hon. Jean-Lucien Bussa Tongba",
    role: "Ministre du Commerce",
    organization: "République Démocratique du Congo",
    image: "/logo-groupe-syel.png",
  },
];
