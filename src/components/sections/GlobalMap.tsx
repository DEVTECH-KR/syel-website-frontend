"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Globe,
  Building2,
  Users,
  FolderHeart,
  ArrowRight,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";

const cubicEase = [0.22, 1, 0.36, 1] as const;

function AnimatedCounter({
  value,
  suffix,
  label,
  icon,
  enabled,
}: {
  value: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
  enabled: boolean;
}) {
  const count = useCountUp({ end: value, duration: 2400, enabled });
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 border border-white/10 text-primary-300 mb-4">
        {icon}
      </div>
      <p className="text-3xl lg:text-4xl font-heading font-bold text-white leading-none">
        {count.toLocaleString()}
        <span className="text-gold-400">{suffix}</span>
      </p>
      <p className="text-sm text-warm-400 font-medium mt-2">{label}</p>
    </div>
  );
}

const stats = [
  { value: 8, suffix: "+", label: "Countries", icon: <Globe className="w-6 h-6" /> },
  { value: 6, suffix: "", label: "Subsidiaries", icon: <Building2 className="w-6 h-6" /> },
  { value: 3500, suffix: "+", label: "Employees", icon: <Users className="w-6 h-6" /> },
  { value: 200, suffix: "+", label: "Projects", icon: <FolderHeart className="w-6 h-6" /> },
];

const cities = [
  { name: "Douala", flag: "🇨🇲", hq: true },
  { name: "Yaoundé", flag: "🇨🇲" },
  { name: "Bafoussam", flag: "🇨🇲" },
  { name: "Libreville", flag: "🇬🇦" },
  { name: "N'Djamena", flag: "🇹🇩" },
  { name: "Brazzaville", flag: "🇨🇬" },
  { name: "Abidjan", flag: "🇨🇮" },
  { name: "Lagos", flag: "🇳🇬" },
  { name: "Paris", flag: "🇫🇷" },
];

export function GlobalMap() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="global-map"
      className="relative overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80')",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-base-900/88" />

      {/* Subtle diagonal line texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.5) 35px, rgba(255,255,255,0.5) 36px)",
        }}
      />

      <div className="relative z-10 section-padding" ref={ref}>
        <div className="container-custom">
          {/* ===== Heading ===== */}
          <SectionHeading
            eyebrow="Our Presence"
            title="Strategically Positioned Across Africa & Beyond"
            highlight="Africa & Beyond"
            subtitle="From our headquarters in Douala to operations spanning 8 countries, Groupe Syel maintains a strong footprint across the continent's most dynamic markets."
            centered
            light
          />

          {/* ===== Stats ===== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.2, ease: cubicEase }}
            className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{
                  duration: 0.5,
                  delay: 0.3 + i * 0.1,
                  ease: cubicEase,
                }}
              >
                <AnimatedCounter {...stat} enabled={isInView} />
              </motion.div>
            ))}
          </motion.div>

          {/* ===== Divider ===== */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: cubicEase }}
            className="mt-14 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
          />

          {/* ===== City Presence Strip ===== */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: cubicEase }}
            className="mt-14"
          >
            <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-warm-500 mb-8">
              Where We Operate
            </p>

            <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
              {cities.map((city, i) => (
                <motion.div
                  key={city.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{
                    duration: 0.4,
                    delay: 0.8 + i * 0.06,
                    ease: cubicEase,
                  }}
                  whileHover={{
                    scale: 1.08,
                    y: -3,
                    transition: { duration: 0.2 },
                  }}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full border transition-colors duration-300 cursor-default ${
                    city.hq
                      ? "bg-primary-500/20 border-primary-500/40 text-white"
                      : "bg-white/[0.04] border-white/[0.08] text-warm-300 hover:bg-white/[0.08] hover:border-white/15"
                  }`}
                >
                  <span className="text-base">{city.flag}</span>
                  <span className="text-sm font-medium">{city.name}</span>
                  {city.hq && (
                    <span className="ml-1 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-gold-400/25 text-gold-300 rounded-full">
                      HQ
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ===== Brief narrative + CTA ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.9, ease: cubicEase }}
            className="mt-14 max-w-2xl mx-auto text-center"
          >
            <p className="text-warm-400 text-sm lg:text-base leading-relaxed">
              With deep roots in Cameroon and a growing presence across Central
              and West Africa, Groupe Syel is building the infrastructure,
              logistics, and digital backbone that the continent needs to thrive.
            </p>

            <Link
              href="/branches"
              className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-primary-500 hover:bg-primary-400 text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              Discover Our Subsidiaries
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
