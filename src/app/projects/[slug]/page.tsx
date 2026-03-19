"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  Users,
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Tag,
  Clock,
} from "lucide-react";

import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Counter } from "@/components/ui/Counter";
import { Modal } from "@/components/ui/Modal";
import { useInView } from "@/hooks/useInView";
import { formatDate, truncate } from "@/lib/utils";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
} from "@/lib/animations";

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.2 });
  const { ref: overviewRef, isInView: overviewInView } = useInView({
    threshold: 0.1,
  });
  const { ref: metricsRef, isInView: metricsInView } = useInView({
    threshold: 0.2,
  });
  const { ref: galleryRef, isInView: galleryInView } = useInView({
    threshold: 0.1,
  });
  const { ref: relatedRef, isInView: relatedInView } = useInView({
    threshold: 0.1,
  });

  if (!project) {
    return (
      <main className="flex min-h-[60vh] flex-col items-center justify-center section-padding">
        <h1 className="font-heading text-3xl font-bold text-base-800">
          Project Not Found
        </h1>
        <p className="mt-4 text-warm-600">
          Le projet que vous recherchez n&apos;existe pas.
        </p>
        <Button href="/projects" variant="primary" className="mt-8">
          <ArrowLeft className="h-4 w-4" />
          Retour à tous les projets
        </Button>
      </main>
    );
  }

  const relatedProjects = projects
    .filter((p) => p.slug !== project.slug && p.category === project.category)
    .slice(0, 3);
  const fallbackProjects =
    relatedProjects.length >= 3
      ? relatedProjects
      : [
          ...relatedProjects,
          ...projects
            .filter(
              (p) =>
                p.slug !== project.slug &&
                !relatedProjects.find((r) => r.slug === p.slug)
            )
            .slice(0, 3 - relatedProjects.length),
        ];

  return (
    <main>
      {/* Project Hero */}
      <section className="relative flex min-h-[50vh] items-end overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base-900/90 via-base-900/50 to-base-900/20" />

        <div className="container-custom relative z-10 pb-16 pt-32">
          <motion.div
            ref={heroRef}
            variants={fadeInUp}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            <div className="flex flex-wrap gap-3 mb-4">
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
            <h1 className="font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-6 text-warm-200">
              <span className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                {project.region}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Started {formatDate(project.startDate)}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-5">
            <motion.div
              ref={overviewRef}
              variants={fadeInLeft}
              initial="hidden"
              animate={overviewInView ? "visible" : "hidden"}
              className="lg:col-span-3"
            >
              <SectionHeading
                eyebrow="Aperçu"
                title="À propos de ce projet"
                highlight="ce projet"
              />

              <div className="mt-8">
                {project.longDescription
                  .split(". ")
                  .reduce<string[][]>((acc, sentence, i) => {
                    const paragraphIndex = Math.floor(i / 4);
                    if (!acc[paragraphIndex]) acc[paragraphIndex] = [];
                    acc[paragraphIndex].push(sentence);
                    return acc;
                  }, [])
                  .map((sentences, i) => (
                    <p
                      key={i}
                      className="mb-6 text-lg leading-relaxed text-warm-700"
                    >
                      {sentences.join(". ")}
                      {!sentences[sentences.length - 1].endsWith(".") && "."}
                    </p>
                  ))}
              </div>

              <div className="mt-8 rounded-xl bg-teal-50 p-6">
                <h3 className="font-heading text-lg font-bold text-teal-800">
                  Impact Statement
                </h3>
                <p className="mt-2 text-teal-700 leading-relaxed">
                  {project.impact}
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              animate={overviewInView ? "visible" : "hidden"}
              className="lg:col-span-2"
            >
              <Card hoverable={false} className="p-6">
                <h3 className="font-heading text-lg font-bold text-base-800">
                  Key Facts
                </h3>
                <dl className="mt-5 space-y-4">
                  <div className="flex items-start gap-3">
                    <Tag className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" />
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-warm-500">
                        Category
                      </dt>
                      <dd className="text-base-700">{project.category}</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" />
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-warm-500">
                        Region
                      </dt>
                      <dd className="text-base-700">{project.region}</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" />
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-warm-500">
                        Status
                      </dt>
                      <dd className="text-base-700 capitalize">
                        {project.status}
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" />
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-warm-500">
                        Start Date
                      </dt>
                      <dd className="text-base-700">
                        {formatDate(project.startDate)}
                      </dd>
                    </div>
                  </div>
                  {project.endDate && (
                    <div className="flex items-start gap-3">
                      <Calendar className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" />
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-wider text-warm-500">
                          End Date
                        </dt>
                        <dd className="text-base-700">
                          {formatDate(project.endDate)}
                        </dd>
                      </div>
                    </div>
                  )}
                  <div className="flex items-start gap-3">
                    <Users className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" />
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-warm-500">
                        Beneficiaries
                      </dt>
                      <dd className="text-base-700">
                        {project.beneficiaries.toLocaleString()}
                      </dd>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-xs text-warm-500">
                      <span className="font-semibold uppercase tracking-wider">
                        Progression
                      </span>
                      <span className="font-semibold text-base-700">
                        {project.progress}%
                      </span>
                    </div>
                    <div className="mt-2 h-3 overflow-hidden rounded-full bg-warm-100">
                      <div
                        className="h-full rounded-full bg-teal-500 transition-all duration-700"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                </dl>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="section-padding bg-warm-50">
        <div className="container-custom">
          <motion.div
            ref={metricsRef}
            variants={fadeInUp}
            initial="hidden"
            animate={metricsInView ? "visible" : "hidden"}
            className="mb-12 text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-500">
              Impact
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-base-800 md:text-4xl">
              Project Impact Metrics
            </h2>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-3">
            <Counter
              value={project.beneficiaries}
              label="Beneficiaries Reached"
              icon={<Users className="h-8 w-8" />}
            />
            <Counter
              value={project.progress}
              label="Project Completion"
              suffix="%"
              icon={<BarChart3 className="h-8 w-8" />}
            />
            <Counter
              value={
                project.endDate
                  ? Math.max(
                      0,
                      Math.ceil(
                        (new Date(project.endDate).getTime() -
                          new Date(project.startDate).getTime()) /
                          (1000 * 60 * 60 * 24 * 30)
                      )
                    )
                  : Math.ceil(
                      (Date.now() -
                        new Date(project.startDate).getTime()) /
                        (1000 * 60 * 60 * 24 * 30)
                    )
              }
              label="Months of Impact"
              icon={<Calendar className="h-8 w-8" />}
            />
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      {project.gallery.length > 0 && (
        <section className="section-padding">
          <div className="container-custom">
            <SectionHeading
              eyebrow="Gallery"
              title="Photo Gallery"
              highlight="Gallery"
              centered
            />

            <motion.div
              ref={galleryRef}
              variants={staggerContainer}
              initial="hidden"
              animate={galleryInView ? "visible" : "hidden"}
              className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {project.gallery.map((img, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="group cursor-pointer overflow-hidden rounded-xl"
                  onClick={() => setSelectedImage(img)}
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={img}
                      alt={`${project.title} gallery image ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-base-900/0 transition-colors duration-300 group-hover:bg-base-900/20" />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <Modal
              isOpen={selectedImage !== null}
              onClose={() => setSelectedImage(null)}
              className="max-w-4xl p-2 sm:p-4"
            >
              {selectedImage && (
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
                  <Image
                    src={selectedImage}
                    alt={`${project.title} gallery`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              )}
            </Modal>
          </div>
        </section>
      )}

      {/* Related Projects */}
      {fallbackProjects.length > 0 && (
        <section className="section-padding bg-warm-50">
          <div className="container-custom">
            <SectionHeading
              eyebrow="Voir aussi"
              title="Projets similaires"
              highlight="Projets"
              subtitle="Découvrez d&apos;autres projets de nos filiales."
              centered
            />

            <motion.div
              ref={relatedRef}
              variants={staggerContainer}
              initial="hidden"
              animate={relatedInView ? "visible" : "hidden"}
              className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {fallbackProjects.map((related) => (
                <motion.div key={related.slug} variants={staggerItem}>
                  <Card className="flex h-full flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                      <div className="absolute left-4 top-4 flex gap-2">
                        <Badge variant="primary">{related.category}</Badge>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-heading text-lg font-bold text-base-800">
                        {related.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-warm-600">
                        {truncate(related.description, 120)}
                      </p>

                      <Link
                        href={`/projects/${related.slug}`}
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
          </div>
        </section>
      )}

      {/* Back link */}
      <section className="border-t border-warm-200 bg-white">
        <div className="container-custom py-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 transition-colors hover:text-teal-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour à tous les projets
          </Link>
        </div>
      </section>
    </main>
  );
}
