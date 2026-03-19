"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Globe,
  Building2,
  FolderHeart,
  Clock,
  Users,
  Handshake,
  TrendingUp,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";

const cubicEase = [0.22, 1, 0.36, 1] as const;

function AnimatedNumber({
  value,
  suffix,
  enabled,
  className = "text-4xl lg:text-5xl",
}: {
  value: number;
  suffix: string;
  enabled: boolean;
  className?: string;
}) {
  const count = useCountUp({ end: value, duration: 2400, enabled });
  return (
    <span className={`font-heading font-bold leading-none ${className}`}>
      {count.toLocaleString()}
      <span className="text-gold-400">{suffix}</span>
    </span>
  );
}

export function ImpactStats() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="impact" className="relative section-padding bg-warm-50 overflow-hidden">
      {/* Subtle radial texture */}
      <div
        className="absolute inset-0 opacity-[0.3] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-warm-300) 0.6px, transparent 0.6px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container-custom relative z-10" ref={ref}>
        <SectionHeading
          eyebrow="Groupe Syel en Chiffres"
          title="Des chiffres qui racontent notre histoire"
          highlight="notre histoire"
          subtitle="Over 15 years of growth, diversification, and measurable impact across Central and West Africa."
          centered
        />

        {/* ===== Bento Grid ===== */}
        <div className="mt-16 grid gap-4 lg:gap-5 grid-cols-2 lg:grid-cols-4">
          {/* --- Card 1: Employees (featured, large) --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: cubicEase }}
            className="col-span-2 relative rounded-2xl overflow-hidden group min-h-[220px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80"
              alt="Groupe Syel team"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base-900/90 via-base-900/50 to-base-900/20" />
            <div className="relative z-10 flex flex-col justify-end h-full p-6 lg:p-8">
              <Users className="w-7 h-7 text-gold-400 mb-3" />
              <AnimatedNumber
                value={3500}
                suffix="+"
                enabled={isInView}
                className="text-4xl lg:text-6xl text-white"
              />
              <p className="text-sm font-medium text-warm-300 mt-2">
                Collaborateurs
              </p>
              <p className="text-xs text-warm-400 mt-1 max-w-sm">
                Des ingénieurs, techniciens, commerciaux et managers au service
                de l&apos;excellence opérationnelle.
              </p>
            </div>
          </motion.div>

          {/* --- Card 2: Countries --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1, ease: cubicEase }}
            className="rounded-2xl bg-primary-500 p-6 lg:p-7 flex flex-col justify-between min-h-[200px] group hover:bg-primary-600 transition-colors duration-300"
          >
            <Globe className="w-6 h-6 text-primary-200" />
            <div className="mt-auto">
              <AnimatedNumber
                value={8}
                suffix="+"
                enabled={isInView}
                className="text-4xl lg:text-5xl text-white"
              />
              <p className="text-sm font-medium text-primary-100 mt-2">
                Pays d&apos;opération
              </p>
            </div>
          </motion.div>

          {/* --- Card 3: Subsidiaries --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.15, ease: cubicEase }}
            className="rounded-2xl bg-base-800 p-6 lg:p-7 flex flex-col justify-between min-h-[200px] group hover:bg-base-700 transition-colors duration-300"
          >
            <Building2 className="w-6 h-6 text-warm-400" />
            <div className="mt-auto">
              <AnimatedNumber
                value={6}
                suffix=""
                enabled={isInView}
                className="text-4xl lg:text-5xl text-white"
              />
              <p className="text-sm font-medium text-warm-300 mt-2">
                Filiales spécialisées
              </p>
            </div>
          </motion.div>

          {/* --- Card 4: Projects --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2, ease: cubicEase }}
            className="rounded-2xl bg-white border border-warm-200 p-6 lg:p-7 flex flex-col justify-between min-h-[200px] shadow-sm hover:shadow-md transition-shadow duration-300 group"
          >
            <FolderHeart className="w-6 h-6 text-primary-500" />
            <div className="mt-auto">
              <AnimatedNumber
                value={200}
                suffix="+"
                enabled={isInView}
                className="text-4xl lg:text-5xl text-base-800"
              />
              <p className="text-sm font-medium text-warm-600 mt-2">
                Projets réalisés
              </p>
              <p className="text-xs text-warm-500 mt-1">
                Énergie, transport, BTP, agro-industrie et plus encore.
              </p>
            </div>
          </motion.div>

          {/* --- Card 5: Years (accent gold) --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.25, ease: cubicEase }}
            className="rounded-2xl bg-gold-400 p-6 lg:p-7 flex flex-col justify-between min-h-[200px] group hover:bg-gold-500 transition-colors duration-300"
          >
            <Clock className="w-6 h-6 text-gold-800" />
            <div className="mt-auto">
              <AnimatedNumber
                value={15}
                suffix="+"
                enabled={isInView}
                className="text-4xl lg:text-5xl text-white"
              />
              <p className="text-sm font-medium text-white/90 mt-2">
                Années d&apos;expérience
              </p>
            </div>
          </motion.div>

          {/* --- Card 6: Partners (with growth indicator) --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3, ease: cubicEase }}
            className="col-span-2 rounded-2xl bg-white border border-warm-200 p-6 lg:p-8 flex items-center gap-6 lg:gap-10 shadow-sm hover:shadow-md transition-shadow duration-300 group"
          >
            <div className="flex-1">
              <Handshake className="w-6 h-6 text-primary-500 mb-3" />
              <AnimatedNumber
                value={120}
                suffix="+"
                enabled={isInView}
                className="text-4xl lg:text-5xl text-base-800"
              />
              <p className="text-sm font-medium text-warm-600 mt-2">
                Partenaires stratégiques
              </p>
              <p className="text-xs text-warm-500 mt-1 max-w-xs">
                Institutions, banques, multinationales et gouvernements.
              </p>
            </div>
            <div className="hidden sm:flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-primary-50 shrink-0">
              <TrendingUp className="w-8 h-8 lg:w-10 lg:h-10 text-primary-500" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
