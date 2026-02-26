"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Zap,
  Truck,
  Wheat,
  Cpu,
  HardHat,
  Building,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const cubicEase = [0.22, 1, 0.36, 1] as const;

interface Sector {
  icon: LucideIcon;
  title: string;
  slug: string;
  description: string;
  accent: string;
  featured?: boolean;
}

const sectors: Sector[] = [
  {
    icon: Zap,
    title: "Syel Énergie",
    slug: "syel-energie",
    description:
      "Solaire, thermique et hybride — 45 MW de capacité installée à travers l'Afrique centrale.",
    accent: "bg-primary-500",
    featured: true,
  },
  {
    icon: Truck,
    title: "Syel Transport",
    slug: "syel-transport",
    description:
      "350+ véhicules sur les corridors stratégiques Douala–N'Djamena et Douala–Bangui.",
    accent: "bg-sky-500",
  },
  {
    icon: Wheat,
    title: "Syel Agroalimentaire",
    slug: "syel-agroalimentaire",
    description:
      "Transformation du café, manioc et huile de palme avec 3 000+ agriculteurs partenaires.",
    accent: "bg-emerald-500",
  },
  {
    icon: Cpu,
    title: "Syel Technologies",
    slug: "syel-technologies",
    description:
      "ERP, cloud et cybersécurité pour la transformation digitale des entreprises africaines.",
    accent: "bg-violet-500",
  },
  {
    icon: HardHat,
    title: "Syel BTP",
    slug: "syel-btp",
    description:
      "Génie civil et infrastructures — ISO 9001, 80+ engins lourds, projets de grande envergure.",
    accent: "bg-orange-500",
  },
  {
    icon: Building,
    title: "Syel Immobilier",
    slug: "syel-immobilier",
    description:
      "1 200+ logements livrés — résidentiel, bureaux et centres commerciaux à Douala et Yaoundé.",
    accent: "bg-rose-500",
  },
];

function SectorCard({
  sector,
  index,
  isInView,
}: {
  sector: Sector;
  index: number;
  isInView: boolean;
}) {
  const Icon = sector.icon;
  const isFeatured = sector.featured;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
      transition={{ duration: 0.5, delay: 0.15 + index * 0.09, ease: cubicEase }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className={`relative rounded-2xl p-6 lg:p-7 overflow-hidden group cursor-default transition-shadow duration-300 ${
        isFeatured
          ? "bg-primary-500 text-white shadow-xl shadow-primary-500/20"
          : "bg-white/90 backdrop-blur-sm shadow-lg shadow-black/[0.04] hover:shadow-xl"
      }`}
    >
      {/* Icon */}
      <div
        className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 transition-transform duration-300 group-hover:scale-110 ${
          isFeatured
            ? "bg-white/20 text-white"
            : `${sector.accent} text-white shadow-md`
        }`}
      >
        <Icon className="w-5 h-5" />
      </div>

      <h3
        className={`font-heading text-lg font-bold ${
          isFeatured ? "text-white" : "text-base-800"
        }`}
      >
        {sector.title}
      </h3>

      <p
        className={`mt-2 text-sm leading-relaxed ${
          isFeatured ? "text-white" : "text-warm-600"
        }`}
      >
        {sector.description}
      </p>

      <Link
        href={`/branches/${sector.slug}`}
        className={`mt-4 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors group/link ${
          isFeatured
            ? "text-gold-300 hover:text-white"
            : "text-primary-600 hover:text-primary-700"
        }`}
      >
        En savoir plus
        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
      </Link>
    </motion.div>
  );
}

export function SectorsGrid() {
  const { ref, isInView } = useInView({ threshold: 0.08 });

  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80')",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-warm-100/92 backdrop-blur-[2px]" />

      {/* Dot texture */}
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-warm-400) 0.8px, transparent 0.8px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container-custom relative z-10" ref={ref}>
        {/* ===== Desktop: Scattered Mosaic Layout ===== */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-5">
          {/* Row 1: Heading block | Featured card | Card 2 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, ease: cubicEase }}
            className="flex flex-col justify-center pr-4"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-500 mb-3">
              Nos Filiales
            </span>
            <h2 className="font-heading text-base-800 leading-[1.15] line-accent">
              Six Sectors,{" "}
              <span className="text-gold-400">One Ambition</span>
            </h2>
            <p className="mt-5 text-warm-600 text-[0.95rem] leading-relaxed">
              Each subsidiary operates with autonomy and excellence, while
              leveraging the collective strength of Groupe Syel.
            </p>
            <Link
              href="/branches"
              className="mt-7 group inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white text-sm font-semibold rounded-full transition-all duration-300 w-fit"
            >
              View All Subsidiaries
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <div className="pt-4">
            <SectorCard sector={sectors[0]} index={0} isInView={isInView} />
          </div>

          <div className="pt-10">
            <SectorCard sector={sectors[1]} index={1} isInView={isInView} />
          </div>

          {/* Row 2: Card 3 | Card 4 | Card 5 */}
          <div className="pt-2">
            <SectorCard sector={sectors[2]} index={2} isInView={isInView} />
          </div>

          <div className="pt-8">
            <SectorCard sector={sectors[3]} index={3} isInView={isInView} />
          </div>

          <div className="pt-0">
            <SectorCard sector={sectors[4]} index={4} isInView={isInView} />
          </div>

          {/* Row 3: Empty | Card 6 | Empty */}
          <div />
          <div className="pt-2">
            <SectorCard sector={sectors[5]} index={5} isInView={isInView} />
          </div>
          <div />
        </div>

        {/* ===== Mobile: Standard Layout ===== */}
        <div className="lg:hidden">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-500 mb-3 block">
              Nos Filiales
            </span>
            <h2 className="font-heading text-base-800 leading-[1.15] line-accent line-accent-center">
              Six Sectors,{" "}
              <span className="text-gold-400">One Ambition</span>
            </h2>
            <p className="mt-5 text-warm-600 text-[0.95rem] leading-relaxed max-w-lg mx-auto">
              Each subsidiary operates with autonomy and excellence, while
              leveraging the collective strength of Groupe Syel.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {sectors.map((sector, index) => (
              <SectorCard
                key={sector.title}
                sector={sector}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/branches"
              className="group inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white text-sm font-semibold rounded-full transition-all duration-300"
            >
              View All Subsidiaries
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
