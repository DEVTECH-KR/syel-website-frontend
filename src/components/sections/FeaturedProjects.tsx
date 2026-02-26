"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { useInView } from "@/hooks/useInView";
import { projects } from "@/data/projects";

const categoryColors: Record<string, "default" | "primary" | "gold" | "outline"> = {
  "Énergie": "primary",
  "Transport": "default",
  "Agroalimentaire": "gold",
  "Technologies": "primary",
  "BTP": "outline",
  "Immobilier": "default",
};

const featured = projects.slice(0, 3);

export function FeaturedProjects() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Projets Phares"
          title="Des réalisations concrètes à travers l'Afrique"
          highlight="l'Afrique"
          centered
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {featured.map((project) => (
            <motion.div key={project.slug} variants={staggerItem}>
              <Card className="flex h-full flex-col">
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={500}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4">
                    <Badge variant={categoryColors[project.category] ?? "default"}>
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-lg font-bold text-base-800">
                    {project.title}
                  </h3>

                  <p className="mt-1 flex items-center gap-1 text-sm text-warm-500">
                    <MapPin className="h-3.5 w-3.5" />
                    {project.region}
                  </p>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-warm-600">
                    {project.description}
                  </p>

                  <div className="mt-5">
                    <div className="mb-1 flex items-center justify-between text-xs text-warm-500">
                      <span>Progress</span>
                      <span className="font-medium text-primary-600">{project.progress}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-warm-200">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${project.progress}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                        className="h-full rounded-full bg-primary-500"
                      />
                    </div>
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-14 text-center">
          <Button href="/projects" variant="outline" icon={<ArrowRight className="h-4 w-4" />}>
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
