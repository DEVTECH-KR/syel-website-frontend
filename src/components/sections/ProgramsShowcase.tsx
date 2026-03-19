"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Zap,
  Truck,
  Wheat,
  Monitor,
  ArrowRight,
  Building2,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";

const cubicEase = [0.22, 1, 0.36, 1] as const;

function AnimatedStat({
  value,
  suffix,
  label,
  enabled,
  light = false,
}: {
  value: number;
  suffix: string;
  label: string;
  enabled: boolean;
  light?: boolean;
}) {
  const count = useCountUp({ end: value, duration: 2200, enabled });
  return (
    <div>
      <p
        className={`text-2xl lg:text-3xl font-heading font-bold ${
          light ? "text-white" : "text-primary-500"
        }`}
      >
        {count.toLocaleString()}
        <span className={light ? "text-gold-300" : "text-gold-400"}>
          {suffix}
        </span>
      </p>
      <p
        className={`text-xs font-medium mt-0.5 ${
          light ? "text-white/60" : "text-warm-500"
        }`}
      >
        {label}
      </p>
    </div>
  );
}

const programs = [
  {
    icon: Zap,
    title: "Énergie",
    description:
      "Centrales solaires, mini-réseaux hybrides et solutions d'électrification — Syel Énergie accélère la transition énergétique de la RDC avec plus de 45 MW installés.",
    stat: { value: 45, suffix: " MW", label: "Capacité installée" },
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    accent: "from-primary-600 to-primary-800",
    accentSolid: "bg-primary-500",
  },
  {
    icon: Truck,
    title: "Transport & Logistique",
    description:
      "Une flotte de 350+ véhicules et des hubs logistiques stratégiques assurant le transport de marchandises sur les corridors économiques d'Afrique centrale.",
    stat: { value: 350, suffix: "+", label: "Véhicules en flotte" },
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    accent: "from-rose-500 to-rose-700",
    accentSolid: "bg-rose-500",
  },
  {
    icon: Wheat,
    title: "Agroalimentaire",
    description:
      "Transformation locale du café, du manioc et de l'huile de palme — créant de la valeur ajoutée pour 3 000 agriculteurs partenaires à travers la RDC.",
    stat: { value: 3000, suffix: "+", label: "Agriculteurs partenaires" },
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80",
    accent: "from-sky-500 to-sky-700",
    accentSolid: "bg-sky-500",
  },
  {
    icon: Monitor,
    title: "Technologies",
    description:
      "Transformation digitale, intégration ERP, cybersécurité et cloud — Syel Technologies accompagne les entreprises et institutions congolaises vers l'excellence numérique.",
    stat: { value: 320, suffix: "+", label: "Ingénieurs & consultants" },
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
    accent: "from-amber-500 to-amber-700",
    accentSolid: "bg-amber-500",
  },
];

export function ProgramsShowcase() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section className="relative section-padding overflow-hidden bg-warm-100">
      {/* Subtle dot texture background */}
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-warm-400) 0.8px, transparent 0.8px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Soft gradient wash at top */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white to-transparent pointer-events-none" />

      <div className="container-custom relative z-10" ref={ref}>
        <SectionHeading
          eyebrow="Nos Métiers"
          title="Un groupe diversifié au service de l'Afrique"
          highlight="l'Afrique"
          subtitle="Le Groupe Syel opère dans six secteurs stratégiques — chacun contribuant au développement économique du continent avec excellence et innovation."
          centered
        />

        {/* ===== Bento Grid ===== */}
        <div className="mt-16 grid gap-5 lg:grid-cols-3 lg:grid-rows-2">
          {/* FEATURED: Education — Large card, spans 2 rows */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, ease: cubicEase }}
            className="relative lg:col-span-1 lg:row-span-2 rounded-2xl overflow-hidden group min-h-[420px] lg:min-h-0"
          >
            <Image
              src={programs[0].image}
              alt={programs[0].title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t ${programs[0].accent} opacity-80`}
            />

            {/* Subtle texture over image */}
            <div
              className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-overlay"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M5 0h1L0 5V4zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E\")",
              }}
            />

            <div className="relative z-10 flex flex-col justify-end h-full p-7 lg:p-8">
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${programs[0].accentSolid} text-white shadow-lg mb-5`}
              >
                <Zap className="w-6 h-6" />
              </div>

              <AnimatedStat
                value={programs[0].stat.value}
                suffix={programs[0].stat.suffix}
                label={programs[0].stat.label}
                enabled={isInView}
                light
              />

              <h3 className="mt-4 font-heading text-2xl lg:text-3xl font-bold text-white">
                {programs[0].title}
              </h3>

              <p className="mt-3 text-sm lg:text-base leading-relaxed text-white/75">
                {programs[0].description}
              </p>

              <Link
                href="/projects"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white transition-colors group/link"
              >
                Découvrir les programmes
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Three smaller cards */}
          {programs.slice(1).map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{
                  duration: 0.6,
                  delay: 0.15 + index * 0.12,
                  ease: cubicEase,
                }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="relative rounded-2xl bg-white border border-warm-200 p-6 lg:p-7 overflow-hidden group cursor-default shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                {/* Accent bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${program.accent}`}
                />

                <div className="flex items-start gap-5">
                  {/* Icon */}
                  <div
                    className={`shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl ${program.accentSolid} text-white shadow-md transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Stat */}
                  <div className="ml-auto text-right">
                    <AnimatedStat
                      value={program.stat.value}
                      suffix={program.stat.suffix}
                      label={program.stat.label}
                      enabled={isInView}
                    />
                  </div>
                </div>

                <h3 className="mt-5 font-heading text-xl font-bold text-base-800">
                  {program.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-warm-600">
                  {program.description}
                </p>

                <Link
                  href="/projects"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors group/link"
                >
                  En savoir plus
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                </Link>

                {/* Decorative corner circle */}
                <div
                  className={`absolute -bottom-8 -right-8 w-28 h-28 rounded-full ${program.accentSolid} opacity-[0.04] transition-transform duration-500 group-hover:scale-[1.8]`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* ===== Bottom CTA Bar ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5, ease: cubicEase }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl bg-base-800 px-8 py-7 lg:px-10 lg:py-8"
        >
          {/* Texture on dark bar */}
          <div
            className="absolute inset-0 rounded-2xl opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, #fff 0.5px, transparent 0.5px)",
              backgroundSize: "14px 14px",
            }}
          />

          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-primary-500/20">
              <Building2 className="w-6 h-6 text-primary-300" />
            </div>
            <div>
              <p className="text-lg lg:text-xl font-heading font-bold text-white">
                3 500+ collaborateurs à travers l'Afrique
              </p>
              <p className="text-sm text-warm-400 mt-0.5">
                Rejoignez un groupe en pleine expansion — découvrez nos opportunités.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 bg-primary-500 hover:bg-primary-400 text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-lg group"
          >
            Nous Contacter
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
