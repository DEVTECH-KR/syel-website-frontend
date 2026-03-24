"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Play,
} from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";

const cubicEase = [0.22, 1, 0.36, 1] as const;

function StatCounter({
  value,
  suffix,
  label,
  enabled,
}: {
  value: number;
  suffix: string;
  label: string;
  enabled: boolean;
}) {
  const count = useCountUp({ end: value, duration: 2200, enabled });
  return (
    <div className="text-center">
      <p className="text-3xl lg:text-4xl font-heading font-bold text-base-800 leading-none">
        {count.toLocaleString()}
        <span className="text-gold-400">{suffix}</span>
      </p>
      <p className="text-sm text-warm-500 font-medium mt-2">{label}</p>
    </div>
  );
}

const bottomStats = [
  { value: 15, suffix: "+", label: "Années d'expérience" },
  { value: 3500, suffix: "+", label: "Collaborateurs" },
  { value: 200, suffix: "+", label: "Projets réalisés" },
  { value: 8, suffix: "+", label: "Pays" },
];

const highlights = [
  "Diversifié dans 6 secteurs stratégiques",
  "Présent dans plus de 8 marchés africains et internationaux",
  "Certifié ISO 9001, standards de classe mondiale",
  "Engagé pour une croissance durable et communautaire",
];

export function AboutSection() {
  const { ref, isInView } = useInView({ threshold: 0.12 });

  return (
    <section id="about" className="relative section-padding bg-white overflow-hidden">
      {/* Texture subtile de points */}
      <div
        className="absolute inset-0 opacity-[0.25] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-warm-300) 0.7px, transparent 0.7px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="container-custom relative z-10" ref={ref}>
        <div className="grid gap-14 lg:gap-20 lg:grid-cols-2 items-center">
          {/* ===== GAUCHE : Composition d'images ===== */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, ease: cubicEase }}
            className="relative"
          >
            {/* Forme décorative derrière les images */}
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary-100 rounded-3xl -z-10 hidden lg:block" />
            <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-gold-100 rounded-3xl -z-10 hidden lg:block" />

            {/* Image principale — logo */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-warm-50">
              <div className="aspect-[4/3]">
                <Image
                  src="/logo-groupe-syel.png"
                  alt="Logo du Groupe Syel"
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Bouton play superposé (décoratif) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors group">
                  <Play className="w-6 h-6 lg:w-7 lg:h-7 text-white ml-1 group-hover:scale-110 transition-transform" />
                </div>
              </div>
            </div>

            {/* Image secondaire — chevauchante en bas à droite */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.92 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 30, scale: 0.92 }
              }
              transition={{ duration: 0.7, delay: 0.3, ease: cubicEase }}
              className="absolute -bottom-6 right-0 lg:-bottom-8 lg:-right-8 w-[45%] lg:w-[50%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-10"
            >
              <div className="aspect-[4/3] relative bg-warm-50">
                <Image
                  src="/logo-groupe-syel.png"
                  alt="Logo du Groupe Syel"
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 1024px) 40vw, 25vw"
                />
              </div>
            </motion.div> 

            {/* Motif de points décoratif */}
            <div
              className="absolute -bottom-14 left-8 w-20 h-20 opacity-25 hidden lg:block z-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle, var(--color-primary-400) 1.5px, transparent 1.5px)",
                backgroundSize: "10px 10px",
              }}
            />
          </motion.div>

          {/* ===== DROITE : Contenu ===== */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.15, ease: cubicEase }}
          >
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary-500 mb-3">
              À propos du Groupe Syel
            </span>

            <h2 className="font-heading text-base-800 leading-[1.15]">
              Construire les{" "}
              <span className="text-gold-400">Industries</span> de l&apos;Afrique de Demain
            </h2>

            <div className="mt-3 w-16 h-1 rounded-full bg-gradient-to-r from-primary-500 to-gold-400" />

            <p className="mt-6 text-warm-600 text-base lg:text-[1.05rem] leading-relaxed">
              Fondé en 2012 à Kinshasa, RDC, la Société Groupe Syel est passé à un groupe diversifié le plus
              important d&apos;Afrique centrale — offrant l&apos;excellence dans les domaines
              de l&apos;énergie, du transport, de l&apos;agroalimentaire, de la technologie,
              de la construction et de l&apos;immobilier.
            </p>

            <p className="mt-4 text-warm-600 text-base lg:text-[1.05rem] leading-relaxed">
              Notre mission est simple : construire des industries qui stimulent la
              croissance économique, créent des milliers d&apos;emplois et élèvent le niveau
              de ce que les entreprises africaines peuvent accomplir sur la scène
              mondiale.
            </p>



            {/* Points forts */}
            <ul className="mt-7 space-y-3">
              {highlights.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                  }
                  transition={{
                    duration: 0.4,
                    delay: 0.4 + i * 0.08,
                    ease: cubicEase,
                  }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0" />
                  <span className="text-sm lg:text-[0.95rem] font-medium text-base-700">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* Appel à l'action */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }
              }
              transition={{ duration: 0.5, delay: 0.7, ease: cubicEase }}
              className="mt-9"
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-primary-500 hover:bg-primary-600 text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Découvrir Notre Histoire
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* ===== Ligne de statistiques ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5, ease: cubicEase }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 pt-12 border-t border-warm-200"
        >
          {bottomStats.map((stat) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              enabled={isInView}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}