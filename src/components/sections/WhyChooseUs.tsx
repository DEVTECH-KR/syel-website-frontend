"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Layers,
  ShieldCheck,
  Globe2,
  Lightbulb,
  Quote,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useInView } from "@/hooks/useInView";

const cubicEase = [0.22, 1, 0.36, 1] as const;

const advantages = [
  {
    icon: Layers,
    title: "Intégration Verticale",
    description:
      "De l'énergie au BTP, du transport à la tech — nos filiales collaborent pour offrir des solutions complètes et intégrées à nos clients.",
    stat: "6",
    statLabel: "filiales synergiques",
    accent: "bg-primary-500",
    accentLight: "bg-primary-50",
    accentBorder: "border-primary-100",
  },
  {
    icon: ShieldCheck,
    title: "Excellence Opérationnelle",
    description:
      "Certifié ISO 9001, équipé de plus de 80 engins lourds et appuyé par 3 500 professionnels formés aux standards internationaux.",
    stat: "ISO",
    statLabel: "9001 certifié",
    accent: "bg-gold-400",
    accentLight: "bg-gold-50",
    accentBorder: "border-gold-100",
  },
  {
    icon: Globe2,
    title: "Ancrage Africain, Vision Globale",
    description:
      "Enracinés au Cameroun depuis 2010, nous opérons dans 8 pays avec un bureau à Paris — combinant connaissance locale et ambition internationale.",
    stat: "8+",
    statLabel: "pays d'opération",
    accent: "bg-base-800",
    accentLight: "bg-base-50",
    accentBorder: "border-base-100",
  },
  {
    icon: Lightbulb,
    title: "Innovation Continue",
    description:
      "De la digitalisation portuaire aux mini-réseaux solaires, nous investissons dans les technologies qui transforment les industries africaines.",
    stat: "40%",
    statLabel: "gains d'efficacité",
    accent: "bg-primary-500",
    accentLight: "bg-primary-50",
    accentBorder: "border-primary-100",
  },
];

export function WhyChooseUs() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const { ref: quoteRef, isInView: quoteInView } = useInView({
    threshold: 0.3,
  });

  return (
    <section className="relative section-padding bg-white overflow-hidden">
      {/* Subtle cross-hatch texture */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(45deg, var(--color-base-800) 25%, transparent 25%),
            linear-gradient(-45deg, var(--color-base-800) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, var(--color-base-800) 75%),
            linear-gradient(-45deg, transparent 75%, var(--color-base-800) 75%)
          `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
        }}
      />

      <div className="container-custom relative z-10">
        {/* ===== Heading ===== */}
        <div ref={ref}>
          <SectionHeading
            eyebrow="Pourquoi Nous"
            title="What Sets Groupe Syel Apart"
            highlight="Groupe Syel"
            subtitle="A unique combination of local expertise, diversified capabilities, and an unwavering commitment to operational excellence."
            centered
          />
        </div>

        {/* ===== Advantages Grid ===== */}
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {advantages.map((adv, index) => {
            const Icon = adv.icon;
            return (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: cubicEase,
                }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className={`relative rounded-2xl ${adv.accentLight} border ${adv.accentBorder} p-7 lg:p-8 overflow-hidden group cursor-default`}
              >
                <div className="flex items-start gap-5">
                  {/* Icon */}
                  <div
                    className={`shrink-0 flex items-center justify-center w-13 h-13 rounded-xl ${adv.accent} text-white shadow-md transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Stat badge */}
                  <div className="ml-auto text-right shrink-0">
                    <p className="text-2xl lg:text-3xl font-heading font-bold text-base-800 leading-none">
                      {adv.stat}
                    </p>
                    <p className="text-[11px] text-warm-500 font-medium mt-0.5">
                      {adv.statLabel}
                    </p>
                  </div>
                </div>

                <h3 className="mt-5 font-heading text-xl lg:text-[1.35rem] font-bold text-base-800">
                  {adv.title}
                </h3>
                <p className="mt-2.5 text-sm lg:text-[0.925rem] leading-relaxed text-warm-600">
                  {adv.description}
                </p>

                {/* Decorative shape */}
                <div
                  className={`absolute -bottom-8 -right-8 w-28 h-28 rounded-full ${adv.accent} opacity-[0.05] transition-transform duration-500 group-hover:scale-[1.6]`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* ===== CEO Quote Strip ===== */}
        <motion.div
          ref={quoteRef}
          initial={{ opacity: 0, y: 30 }}
          animate={
            quoteInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.7, ease: cubicEase }}
          className="mt-14 relative rounded-2xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-base-800" />
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, #fff 0.5px, transparent 0.5px)",
              backgroundSize: "16px 16px",
            }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 p-8 lg:p-12">
            {/* Photo */}
            <div className="shrink-0 w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 border-primary-500/40 shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80"
                alt="Paul-Henri Nkoulou, PDG"
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Quote */}
            <div className="flex-1 text-center lg:text-left">
              <Quote className="w-8 h-8 text-primary-500/40 mb-3 mx-auto lg:mx-0" />
              <blockquote className="text-base lg:text-lg text-warm-200 leading-relaxed italic font-light">
                &ldquo;Notre ambition n&apos;est pas simplement de croître —
                c&apos;est de bâtir des industries africaines capables de
                rivaliser à l&apos;échelle mondiale, tout en créant de la valeur
                pour nos communautés locales.&rdquo;
              </blockquote>
              <div className="mt-4">
                <p className="text-sm font-semibold text-white">
                  Olivier Kameshera
                </p>
                <p className="text-xs text-warm-400">
                  Président-Directeur Général, Groupe Syel
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
