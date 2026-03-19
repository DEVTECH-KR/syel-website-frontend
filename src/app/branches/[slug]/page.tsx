"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Calendar,
  Users,
  FolderHeart,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import { branches } from "@/data/branches";
import { projects } from "@/data/projects";
import { team } from "@/data/team";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useInView } from "@/hooks/useInView";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
} from "@/lib/animations";
import { truncate } from "@/lib/utils";

export default function BranchDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const branch = branches.find((b) => b.slug === slug);

  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.2 });
  const { ref: aboutRef, isInView: aboutInView } = useInView({
    threshold: 0.1,
  });
  const { ref: teamRef, isInView: teamInView } = useInView({ threshold: 0.1 });
  const { ref: projectsRef, isInView: projectsInView } = useInView({
    threshold: 0.1,
  });
  const { ref: contactRef, isInView: contactInView } = useInView({
    threshold: 0.2,
  });

  if (!branch) {
    return (
      <main className="flex min-h-[60vh] flex-col items-center justify-center section-padding">
        <h1 className="font-heading text-3xl font-bold text-base-800">
          Filiale Non Trouvée
        </h1>
        <p className="mt-4 text-warm-600">
          La filiale que vous recherchez n&apos;existe pas.
        </p>
        <Button href="/branches" variant="primary" className="mt-8">
          <ArrowLeft className="h-4 w-4" />
          Retour à Toutes les Filiales
        </Button>
      </main>
    );
  }

  const branchTeam = team.filter((m) => m.branch === branch.slug);
  const branchProjects = projects.filter((p) => p.branch === branch.slug);

  return (
    <main>
      {/* Hero de la filiale */}
      <section className="relative flex min-h-[50vh] items-end overflow-hidden">
        <Image
          src={branch.image}
          alt={branch.name}
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
            <Badge variant="default" className="mb-4">
              Région : {branch.region}
            </Badge>
            <h1 className="font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              {branch.name}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-6 text-warm-200">
              <span className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                {branch.city}, {branch.country}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Créée en {branch.established}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* À propos de cette filiale */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            eyebrow="À propos"
            title="À Propos de Cette Filiale"
            highlight="Cette Filiale"
          />

          <div className="mt-12 grid gap-12 lg:grid-cols-5">
            <motion.div
              ref={aboutRef}
              variants={fadeInLeft}
              initial="hidden"
              animate={aboutInView ? "visible" : "hidden"}
              className="lg:col-span-3"
            >
              {branch.longDescription.split(". ").reduce<string[][]>(
                (acc, sentence, i) => {
                  const paragraphIndex = Math.floor(i / 3);
                  if (!acc[paragraphIndex]) acc[paragraphIndex] = [];
                  acc[paragraphIndex].push(sentence);
                  return acc;
                },
                []
              ).map((sentences, i) => (
                <p
                  key={i}
                  className="mb-6 text-lg leading-relaxed text-warm-700"
                >
                  {sentences.join(". ")}
                  {!sentences[sentences.length - 1].endsWith(".") && "."}
                </p>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              animate={aboutInView ? "visible" : "hidden"}
              className="lg:col-span-2"
            >
              <Card hoverable={false} className="p-6">
                <h3 className="font-heading text-lg font-bold text-base-800">
                  Informations Clés
                </h3>
                <dl className="mt-5 space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" />
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-warm-500">
                        Création
                      </dt>
                      <dd className="text-base-700">{branch.established}</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" />
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-warm-500">
                        Membres
                      </dt>
                      <dd className="text-base-700">
                        {branch.memberCount.toLocaleString()}
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FolderHeart className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" />
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-warm-500">
                        Projets
                      </dt>
                      <dd className="text-base-700">{branch.projectCount}</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" />
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-warm-500">
                        E-mail
                      </dt>
                      <dd className="text-base-700">{branch.contactEmail}</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" />
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-warm-500">
                        Téléphone
                      </dt>
                      <dd className="text-base-700">{branch.contactPhone}</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" />
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-warm-500">
                        Adresse
                      </dt>
                      <dd className="text-base-700">{branch.address}</dd>
                    </div>
                  </div>
                </dl>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Équipe de la filiale */}
      {branchTeam.length > 0 && (
        <section className="section-padding bg-warm-50">
          <div className="container-custom">
            <SectionHeading
              eyebrow="Équipe"
              title="Équipe de la Filiale"
              highlight="Équipe"
              subtitle="Rencontrez les professionnels qui dirigent les opérations de cette filiale."
              centered
            />

            <motion.div
              ref={teamRef}
              variants={staggerContainer}
              initial="hidden"
              animate={teamInView ? "visible" : "hidden"}
              className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {branchTeam.map((member) => (
                <motion.div key={member.name} variants={staggerItem}>
                  <Card className="p-6 text-center">
                    <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={96}
                        height={96}
                        className="h-full w-full object-cover"
                        unoptimized
                      />
                    </div>
                    <h3 className="mt-4 font-heading text-lg font-bold text-base-800">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-teal-600">
                      {member.role}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-warm-600">
                      {truncate(member.bio, 180)}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Projets de la filiale */}
      {branchProjects.length > 0 && (
        <section className="section-padding">
          <div className="container-custom">
            <SectionHeading
              eyebrow="Projets"
              title="Projets de la Filiale"
              highlight="Projets"
              subtitle="Projets et initiatives clés menés par cette filiale."
              centered
            />

            <motion.div
              ref={projectsRef}
              variants={staggerContainer}
              initial="hidden"
              animate={projectsInView ? "visible" : "hidden"}
              className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {branchProjects.map((project) => (
                <motion.div key={project.slug} variants={staggerItem}>
                  <Card className="flex h-full flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                      <div className="absolute left-4 top-4 flex gap-2">
                        <Badge variant="primary">{project.category}</Badge>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <div className="mb-2">
                        <Badge
                          variant={
                            project.status === "active"
                              ? "default"
                              : project.status === "completed"
                                ? "gold"
                                : "primary"
                          }
                        >
                          {project.status === "active" && "En cours"}
                          {project.status === "completed" && "Terminé"}
                          {project.status === "upcoming" && "À venir"}
                        </Badge>
                      </div>

                      <h3 className="font-heading text-lg font-bold text-base-800">
                        {project.title}
                      </h3>

                      <p className="mt-2 flex-1 text-sm leading-relaxed text-warm-600">
                        {truncate(project.description, 120)}
                      </p>

                      {/* Barre de progression */}
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

                      <Link
                        href={`/projects/${project.slug}`}
                        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-600 transition-colors hover:text-teal-700"
                      >
                        Voir le Projet
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

      {/* Section Contact */}
      <section className="section-padding bg-warm-50">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Contact"
            title="Prenez Contact"
            highlight="Contact"
            subtitle="Contactez directement cette filiale."
            centered
          />

          <motion.div
            ref={contactRef}
            variants={fadeInUp}
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            className="mx-auto mt-12 max-w-lg"
          >
            <Card hoverable={false} className="p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-base-800">
                      E-mail
                    </p>
                    <a
                      href={`mailto:${branch.contactEmail}`}
                      className="text-warm-600 transition-colors hover:text-teal-600"
                    >
                      {branch.contactEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-base-800">
                      Téléphone
                    </p>
                    <a
                      href={`tel:${branch.contactPhone}`}
                      className="text-warm-600 transition-colors hover:text-teal-600"
                    >
                      {branch.contactPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-base-800">
                      Adresse
                    </p>
                    <p className="text-warm-600">{branch.address}</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Lien de retour */}
      <section className="border-t border-warm-200 bg-white">
        <div className="container-custom py-8">
          <Link
            href="/branches"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 transition-colors hover:text-teal-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour à Toutes les Filiales
          </Link>
        </div>
      </section>
    </main>
  );
}