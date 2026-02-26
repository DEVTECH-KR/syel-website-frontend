export interface Stat {
  label: string;
  value: number;
  suffix: string;
  icon: string;
}

export const globalStats: Stat[] = [
  { label: "Pays d'opération", value: 8, suffix: "+", icon: "Globe" },
  { label: "Filiales", value: 6, suffix: "", icon: "Building2" },
  { label: "Projets réalisés", value: 200, suffix: "+", icon: "FolderHeart" },
  { label: "Collaborateurs", value: 3500, suffix: "+", icon: "Users" },
  { label: "Années d'expérience", value: 15, suffix: "+", icon: "Clock" },
  { label: "Partenaires", value: 120, suffix: "+", icon: "Handshake" },
];

export interface ImpactCategory {
  category: string;
  beneficiaries: number;
  projects: number;
}

export const impactByCategory: ImpactCategory[] = [
  { category: "Énergie", beneficiaries: 45000000, projects: 38 },
  { category: "Transport", beneficiaries: 25000000, projects: 52 },
  { category: "Agroalimentaire", beneficiaries: 18000000, projects: 24 },
  { category: "Technologies", beneficiaries: 12000000, projects: 45 },
  { category: "BTP", beneficiaries: 30000000, projects: 34 },
  { category: "Immobilier", beneficiaries: 8000000, projects: 18 },
];

export interface Partner {
  name: string;
  logo: string;
}

export const partners: Partner[] = [
  { name: "Banque Africaine de Développement", logo: "BAD" },
  { name: "Société Générale Cameroun", logo: "SGC" },
  { name: "Total Energies Afrique", logo: "TEA" },
  { name: "Bolloré Transport & Logistics", logo: "BTL" },
  { name: "Orange Business Services", logo: "OBS" },
  { name: "Ecobank Transnational", logo: "ETI" },
  { name: "Port Autonome de Douala", logo: "PAD" },
  { name: "Ministère des Travaux Publics", logo: "MINTP" },
];
