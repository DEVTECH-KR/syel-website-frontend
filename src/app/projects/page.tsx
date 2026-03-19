"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Users,
  ArrowRight,
  Globe,
  Building2,
  FolderHeart,
  Clock,
  Handshake,
} from "lucide-react";

import { projects } from "@/data/projects";
import { globalStats } from "@/data/stats";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Tabs } from "@/components/ui/Tabs";
import { Counter } from "@/components/ui/Counter";
import { CTABanner } from "@/components/sections/CTABanner";
import { useInView } from "@/hooks/useInView";
import { truncate } from "@/lib/utils";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  fadeIn,
} from "@/lib/animations";

const categoryTabs = [
  "Tous",
  "Énergie",
  "Transport",
  "Agroalimentaire",
  "Technologies",
  "BTP",
  "Immobilier",
];

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="h-8 w-8" />,
  Building2: <Building2 className="h-8 w-8" />,
  FolderHeart: <FolderHeart className="h-8 w-8" />,
  Clock: <Clock className="h-8 w-8" />,
  Users: <Users className="h-8 w-8" />,
  Handshake: <Handshake className="h-8 w-8" />,
};

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("Tous");
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.2 });
  const { ref: gridRef, isInView: gridInView } = useInView({ threshold: 0.1 });
  const { ref: statsRef, isInView: statsInView } = useInView({
    threshold: 0.2,
  });

  const filteredProjects =
    activeTab === "Tous"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <main>
      {/* Page Hero */}
      <section className="relative flex min-h-[45vh] items-center overflow-hidden gradient-primary">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-teal-400/30" />
          <div className="absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-gold-400/20" />
          <div className="absolute left-1/2 top-1/3 h-48 w-48 rounded-full bg-white/10" />
        </div>

        <div className="container-custom relative z-10 py-20">
          <motion.div
            ref={heroRef}
            variants={fadeInUp}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="max-w-2xl"
          >
            <h1 className="font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Projets et réalisations
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-warm-200 md:text-xl">
              Découvrez nos projets qui impulsent la croissance et l&apos;innovation dans nos secteurs clés.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="border-b border-warm-200 bg-white">
        <div className="container-custom py-4">
          <Tabs
            tabs={categoryTabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-warm-50">
        <div className="container-custom">
          <motion.div
            ref={gridRef}
            variants={staggerContainer}
            initial="hidden"
            animate={gridInView ? "visible" : "hidden"}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project) => (
              <motion.div key={project.slug} variants={staggerItem}>
                <Card className="flex h-full flex-col">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      unoptimized
                    />
                    <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                      <Badge variant="primary">{project.category}</Badge>
                      <Badge
                        variant={
                          project.status === "active"
                            ? "default"
                            : project.status === "completed"
                              ? "gold"
                              : "primary"
                        }
                      >
                        {project.status.charAt(0).toUpperCase() +
                          project.status.slice(1)}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-heading text-xl font-bold text-base-800">
                      {project.title}
                    </h3>

                    <div className="mt-2 flex items-center gap-1.5 text-sm text-warm-500">
                      <MapPin className="h-4 w-4 shrink-0" />
                      <span>{project.region}</span>
                    </div>

                    <p className="mt-3 flex-1 text-sm leading-relaxed text-warm-600">
                      {truncate(project.description, 140)}
                    </p>

                    {/* Progress bar */}
                    <div className="mt-4">
                      <div className="flex items-center justify-between text-xs text-warm-500">
                        <span>Progression</span>
                        <span className="font-semibold text-base-700">
                          {project.progress}%
                        </span>
                      </div>
                      <div className="mt-1 h-2 overflow-hidden rounded-full bg-warm-100">
                        <div
                          className="h-full rounded-full bg-teal-500 transition-all duration-700"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="mt-4 flex items-center gap-1.5 text-sm text-warm-600">
                      <Users className="h-4 w-4 text-teal-500" />
                      <span className="font-semibold text-base-700">
                        {project.beneficiaries.toLocaleString()}
                      </span>{" "}
                      bénéficiaires
                    </div>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-600 transition-colors hover:text-teal-700"
                    >
                      En savoir plus
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="py-20 text-center"
            >
              <p className="text-lg text-warm-500">
                Aucun projet dans cette catégorie pour le moment.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section-padding gradient-primary">
        <div className="container-custom">
          <motion.div
            ref={statsRef}
            variants={fadeInUp}
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            className="mb-12 text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-300">
              Notre portée
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-white md:text-4xl">
              Notre impact en chiffres
            </h2>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {globalStats.map((stat) => (
              <Counter
                key={stat.label}
                value={stat.value}
                label={stat.label}
                suffix={stat.suffix}
                icon={iconMap[stat.icon]}
                className="text-white [&_div]:text-white [&_p]:text-warm-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </main>
  );
}
