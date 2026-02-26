"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Target,
  Eye,
  Heart,
  ArrowRight,
  Globe,
  Users,
  FolderHeart,
  CheckCircle2,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
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
      <p className="text-3xl lg:text-4xl font-heading font-bold text-primary-500">
        {count.toLocaleString()}
        <span className="text-gold-400">{suffix}</span>
      </p>
      <p className="mt-1 text-sm text-warm-500 font-medium">{label}</p>
    </div>
  );
}

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To empower communities worldwide through sustainable development, education, and humanitarian support — creating lasting change from the ground up.",
    accent: "bg-primary-500",
    accentLight: "bg-primary-50",
    accentText: "text-primary-600",
    accentBorder: "border-primary-200",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "A world where every community thrives with dignity, equal opportunity, and hope — regardless of geography, background, or circumstance.",
    accent: "bg-gold-400",
    accentLight: "bg-gold-50",
    accentText: "text-gold-600",
    accentBorder: "border-gold-200",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Transparency, unity, respect for human dignity, and an unwavering commitment to measurable, sustainable impact in everything we do.",
    accent: "bg-base-700",
    accentLight: "bg-base-50",
    accentText: "text-base-600",
    accentBorder: "border-base-200",
  },
];

const highlights = [
  "Locally led, globally connected",
  "100% transparent fund allocation",
  "Community-first approach to development",
  "Sustainable, long-term impact focus",
];

export function AboutStrip() {
  const { ref: topRef, isInView: topInView } = useInView({ threshold: 0.15 });
  const { ref: bottomRef, isInView: bottomInView } = useInView({
    threshold: 0.15,
  });

  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        {/* ===== TOP: Split Layout — Images + Content ===== */}
        <div
          ref={topRef}
          className="grid gap-12 lg:gap-20 lg:grid-cols-2 items-center"
        >
          {/* Left — Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={topInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: cubicEase }}
            className="relative"
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=800&q=80"
                  alt="Unite Global community outreach"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Overlapping secondary image */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={
                  topInView
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 30, scale: 0.9 }
                }
                transition={{ duration: 0.7, delay: 0.3, ease: cubicEase }}
                className="absolute -bottom-8 -right-4 lg:-right-8 w-[55%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&q=80"
                    alt="Education program in action"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </motion.div>

              {/* Floating experience badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  topInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.5, delay: 0.6, ease: cubicEase }}
                className="absolute -top-4 -left-2 lg:-left-6 bg-primary-500 text-white rounded-xl px-5 py-4 shadow-lg z-10"
              >
                <p className="text-2xl lg:text-3xl font-heading font-bold leading-none">
                  12+
                </p>
                <p className="text-xs font-medium text-primary-100 mt-0.5">
                  Years of Impact
                </p>
              </motion.div>

              {/* Decorative dot pattern */}
              <div
                className="absolute -bottom-12 -left-6 w-24 h-24 opacity-20 hidden lg:block"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, var(--color-primary-400) 1.5px, transparent 1.5px)",
                  backgroundSize: "10px 10px",
                }}
              />
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={topInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.15, ease: cubicEase }}
          >
            <SectionHeading
              eyebrow="Who We Are"
              title="United by Purpose, Driven by Impact"
            />

            <p className="mt-6 text-warm-600 text-base lg:text-lg leading-relaxed">
              Unite Global Foundation is a non-profit organization dedicated to
              building stronger, more resilient communities across the world.
              Since 2012, we have been on the frontlines of sustainable
              development — empowering people through education, healthcare,
              clean water, and economic opportunity.
            </p>

            {/* Highlights checklist */}
            <ul className="mt-6 space-y-3">
              {highlights.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={
                    topInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + i * 0.1,
                    ease: cubicEase,
                  }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0" />
                  <span className="text-sm lg:text-base font-medium text-base-700">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* Stats row */}
            <div className="mt-10 flex items-center gap-6 lg:gap-10">
              <StatCounter
                value={12}
                suffix="+"
                label="Countries"
                enabled={topInView}
              />
              <div className="w-px h-12 bg-warm-300" />
              <StatCounter
                value={50000}
                suffix="+"
                label="Lives Impacted"
                enabled={topInView}
              />
              <div className="w-px h-12 bg-warm-300" />
              <StatCounter
                value={150}
                suffix="+"
                label="Projects"
                enabled={topInView}
              />
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-primary-500 hover:bg-primary-600 text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* ===== BOTTOM: Mission / Vision / Values Cards ===== */}
        <div
          ref={bottomRef}
          className="mt-24 lg:mt-32 grid gap-6 md:gap-8 md:grid-cols-3"
        >
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40 }}
                animate={
                  bottomInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 40 }
                }
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: cubicEase,
                }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`relative rounded-2xl border ${pillar.accentBorder} ${pillar.accentLight} p-8 lg:p-10 overflow-hidden group cursor-default`}
              >
                {/* Accent top bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 ${pillar.accent}`}
                />

                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${pillar.accent} text-white shadow-md mb-6 transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="font-heading text-xl lg:text-2xl font-bold text-base-800">
                  {pillar.title}
                </h3>

                <p className="mt-3 leading-relaxed text-warm-600 text-sm lg:text-base">
                  {pillar.description}
                </p>

                {/* Decorative corner shape */}
                <div
                  className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full ${pillar.accent} opacity-[0.06] transition-transform duration-500 group-hover:scale-150`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
