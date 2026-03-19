"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  Linkedin,
  Twitter,
  Calendar,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { PartnersStrip } from "@/components/sections/PartnersStrip";
import { CTABanner } from "@/components/sections/CTABanner";
import { team } from "@/data/team";
import { useInView } from "@/hooks/useInView";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
} from "@/lib/animations";

// --- Page Hero ---

function PageHero() {
  return (
    <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&q=80"
          alt="Siège social du Groupe Syel"
          className="h-full w-full object-cover"
        />
        <div className="gradient-hero absolute inset-0" />
      </div>

      <div className="container-custom relative z-10 py-32 text-center">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <h1 className="font-heading text-white">À Propos du Groupe Syel</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-warm-200 md:text-xl">
            Un groupe diversifié qui stimule l&apos;innovation, l&apos;excellence et la
            croissance durable à travers la RDC depuis 2012.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// --- Our Story ---

function OurStory() {
  const { ref, isInView } = useInView({ threshold: 0.15 });

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <SectionHeading
              eyebrow="Qui Nous Sommes"
              title="Notre Histoire"
              highlight="Histoire"
              subtitle="Un parcours d'ambition, de diversification et d'engagement sans faille pour construire l'avenir économique de la République Démocratique du Congo."
            />

            <div className="mt-8 space-y-5 text-warm-700 leading-relaxed">
              <p>
                
                Le Groupe Syel a été fondé en 2012 à KINSHASA/RDC par un groupe
                d&apos;entrepreneurs visionnaires qui ont vu l&apos;opportunité de construire un
                conglomérat de classe mondiale ancré dans l&apos;excellence africaine. Commençant
                avec une seule entreprise de distribution d&apos;énergie, les fondateurs ont combiné
                une expertise locale approfondie avec les meilleures pratiques internationales pour
                créer une entreprise capable de rivaliser sur la scène mondiale.
              </p>
              <p>
                Ce qui a commencé comme une entreprise énergétique ciblée s&apos;est rapidement développé
                lorsque l&apos;équipe a identifié des marchés mal desservis dans des secteurs clés. En
                trois ans, le Groupe Syel s&apos;est diversifié dans le transport et la logistique,
                tirant parti de la position de Kinshasa en tant que capitale politique et économique de la RDC, et du Port de Matadi comme principale porte d'entrée maritime.
                Le principe fondateur était clair : offrir l&apos;excellence opérationnelle,
                investir dans les talents locaux et construire des infrastructures qui
                transforment les communautés et les industries.
              </p>
              <p>
                En plus de dix ans, le Groupe Syel est passé de cette seule entreprise
                à un groupe diversifié avec six filiales couvrant l&apos;énergie,
                le transport, l&apos;agroalimentaire, la technologie, la construction et
                l&apos;immobilier. Avec plus de 1 200 employés et des opérations à travers
                l&apos;Afrique centrale, nous avons réalisé plus de 150 projets et
                acquis une réputation d&apos;intégrité, d&apos;innovation et de croissance
                durable. Notre culture reste ancrée dans cet esprit entrepreneurial
                original : ambitieux, discipliné et farouchement dévoué à créer une
                valeur durable pour nos parties prenantes et nos communautés.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl shadow-hero">
              <Image
                src="/about.jpg"
                alt="L'équipe du Groupe Syel au travail"
                width={800}
                height={600}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-teal-500 px-6 py-4 text-white shadow-lg">
              <p className="font-heading text-3xl font-bold">15+</p>
              <p className="text-sm font-medium text-teal-100">
                Années de Croissance
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- Timeline ---

const milestones = [
  {
    year: "2012",
    title: "Fondation à Kinshasa",
    description:
      "Le Groupe Syel est établi à Kinshasa, en République Démocratique du Congo, avec un accent initial sur la distribution d'énergie, jetant les bases d'un groupe d'entreprises diversifié.",
  },
  {
    year: "2012",
    title: "Lancement de Syel Transport",
    description:
      "Expansion dans la logistique et le transport, capitalisant sur l'emplacement stratégique du Port de Matadi et de Kinshasa pour construire un réseau national de fret et de transport de marchandises.",
  },
  {
    year: "2012",
    title: "Expansion Agroalimentaire",
    description:
      "Création de Syel Agroalimentaire pour investir dans la transformation alimentaire et les chaînes de valeur agricoles, soutenant les agriculteurs locaux et la sécurité alimentaire à travers la RDC.",
  },
  {
    year: "2012",
    title: "Technologie & Innovation",
    description:
      "Lancement de Syel Technologies pour piloter la transformation numérique, offrant des solutions informatiques, du développement logiciel et des services de connectivité aux entreprises et aux communautés.",
  },
  {
    year: "2012",
    title: "Construction & Immobilier",
    description:
      "Entrée dans les secteurs de la construction et de l'immobilier avec Syel BTP et Syel Immobilier, livrant des projets d'infrastructure et des développements de logements modernes.",
  },
  {
    year: "2012",
    title: "1 000+ Employés",
    description:
      "Dépassement du millier d'employés dans toutes les filiales, renforçant notre engagement en faveur de la création d'emplois et du développement professionnel en Afrique centrale.",
  },
  {
    year: "2012",
    title: "Expansion Nationale",
    description:
      "Extension des opérations à travers toute la RDC, avec l'ouverture de bureaux à Lubumbashi, Goma et Bukavu, renforçant la présence du groupe dans les provinces clés.",
  },
  {
    year: "2012",
    title: "Transformation Numérique",
    description:
      "Lancement d'une plateforme numérique intégrée connectant toutes les filiales, partenaires et clients en temps réel, permettant une plus grande efficacité et transparence au sein du groupe.",
  },
];

function Timeline() {
  const { ref, isInView } = useInView({ threshold: 0.05 });

  return (
    <section className="section-padding gradient-warm" ref={ref}>
      <div className="container-custom">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <SectionHeading
            eyebrow="Notre Parcours"
            title="Étapes Clés"
            highlight="Clés"
            subtitle="D'une seule entreprise énergétique à un groupe diversifié — voici les étapes qui ont façonné le Groupe Syel."
            centered
          />
        </motion.div>

        <div className="relative mt-16">
          {/* Ligne verticale */}
          <div className="absolute left-6 top-0 hidden h-full w-0.5 bg-gradient-to-b from-teal-300 via-teal-500 to-primary-500 md:left-1/2 md:block md:-translate-x-px" />
          <div className="absolute left-6 top-0 block h-full w-0.5 bg-gradient-to-b from-teal-300 via-teal-500 to-primary-500 md:hidden" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-12"
          >
            {milestones.map((milestone, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={milestone.year}
                  variants={staggerItem}
                  className="relative flex items-start gap-6 md:gap-0"
                >
                  {/* Point mobile */}
                  <div className="relative z-10 flex shrink-0 md:hidden">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-teal-500 shadow-md">
                      <Calendar className="h-4 w-4 text-white" />
                    </div>
                  </div>

                  {/* Disposition desktop */}
                  <div className="hidden w-full md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8">
                    {/* Contenu gauche */}
                    <div
                      className={`flex ${isLeft ? "justify-end" : ""}`}
                    >
                      {isLeft && (
                        <div className="max-w-md rounded-xl bg-white p-6 shadow-card text-right">
                          <span className="inline-block rounded-full bg-teal-100 px-3 py-1 text-sm font-bold text-teal-700">
                            {milestone.year}
                          </span>
                          <h4 className="mt-3 font-heading text-base-700">
                            {milestone.title}
                          </h4>
                          <p className="mt-2 text-sm leading-relaxed text-warm-600">
                            {milestone.description}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Point central */}
                    <div className="relative z-10 flex items-start justify-center pt-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-teal-500 shadow-md">
                        <Calendar className="h-4 w-4 text-white" />
                      </div>
                    </div>





                    {/* Contenu droit */}
                    <div className={`flex ${!isLeft ? "" : ""}`}>
                      {!isLeft && (
                        <div className="max-w-md rounded-xl bg-white p-6 shadow-card">
                          <span className="inline-block rounded-full bg-teal-100 px-3 py-1 text-sm font-bold text-teal-700">
                            {milestone.year}
                          </span>
                          <h4 className="mt-3 font-heading text-base-700">
                            {milestone.title}
                          </h4>
                          <p className="mt-2 text-sm leading-relaxed text-warm-600">
                            {milestone.description}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Contenu mobile */}
                  <div className="flex-1 md:hidden">
                    <div className="rounded-xl bg-white p-5 shadow-card">
                      <span className="inline-block rounded-full bg-teal-100 px-3 py-1 text-sm font-bold text-teal-700">
                        {milestone.year}
                      </span>
                      <h4 className="mt-3 font-heading text-base-700">
                        {milestone.title}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-warm-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- Mission, Vision, Values ---

const missionData = [
  {
    icon: Target,
    title: "Notre Mission",
    description:
      "Stimuler la croissance économique durable en Afrique centrale en offrant des services de classe mondiale dans les domaines de l'énergie, du transport, de l'agroalimentaire, de la technologie, de la construction et de l'immobilier. Nous investissons dans les personnes, les infrastructures et l'innovation pour créer une valeur durable pour nos clients, partenaires, employés et les communautés que nous servons.",
    gradient: "from-primary-500 to-primary-700",
  },
  {
    icon: Eye,
    title: "Notre Vision",
    description:
      "Devenir le principal groupe diversifié en Afrique centrale, reconnu pour son excellence opérationnelle, son innovation et son intégrité. Nous envisageons un avenir où les entreprises africaines établissent des normes mondiales, où les talents locaux stimulent la compétitivité internationale et où le développement économique élève des communautés entières.",
    gradient: "from-teal-500 to-teal-700",
  },
  {
    icon: Heart,
    title: "Nos Valeurs",
    description:
      "L'innovation guide notre approche — nous adoptons les nouvelles technologies et méthodes pour rester en tête. L'excellence définit nos standards — chaque projet répond aux normes les plus élevées. L'intégrité guide chaque décision — nous sommes transparents, responsables et éthiques. La durabilité garantit que notre croissance profite aux générations futures autant qu'au présent.",
    gradient: "from-gold-400 to-gold-600",
  },
];

function MissionVisionValues() {
  const { ref, isInView } = useInView({ threshold: 0.15 });

  return (
    <section className="section-padding gradient-primary relative overflow-hidden" ref={ref}>
      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/5" />
      <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-white/5" />

      <div className="container-custom relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <SectionHeading
            eyebrow="Ce Qui Nous Anime"
            title="Mission, Vision & Valeurs"
            highlight="Vision & Valeurs"
            subtitle="Les principes qui guident chaque décision, projet et partenariat à travers le Groupe Syel."
            centered
            light
          />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-14 grid gap-8 md:grid-cols-3"
        >
          {missionData.map((item) => (
            <motion.div key={item.title} variants={staggerItem}>
              <div className="group h-full rounded-2xl bg-white/10 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/15">
                <div
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg`}
                >
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mt-6 font-heading text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-warm-200">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// --- Leadership Team ---

function LeadershipTeam() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <SectionHeading
            eyebrow="Les Personnes Derrière le Groupe"
            title="Notre Direction"
            highlight="Direction"
            subtitle="Rencontrez l'équipe expérimentée qui guide la stratégie, les opérations et la croissance du Groupe Syel à travers l'Afrique centrale."
            centered
          />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {team.map((member) => (
            <motion.div key={member.name} variants={staggerItem}>
              <Card className="group h-full">
                <div className="relative overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={450}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Superposition sociale au survol */}
                  <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-base-900/80 via-base-900/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex gap-3 pb-4">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/40"
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}
                      {member.twitter && (
                        <a
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/40"
                        >
                          <Twitter className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-heading text-lg font-bold text-base-700">
                    {member.name}
                  </h4>
                  <p className="mt-1 text-sm font-medium text-teal-600">
                    {member.role}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-warm-600 line-clamp-4">
                    {member.bio}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// --- Page Component ---
// NOTE: Pour les métadonnées (titre, description), ajoute un layout.tsx dans ce répertoire
// ou utilise generateMetadata dans un composant serveur wrapper, puisque les pages
// "use client" ne peuvent pas exporter directement les métadonnées.

export default function AboutPage() {
  
  return (
    <>
      <PageHero />
      <OurStory />
      <Timeline />
      <MissionVisionValues />
      <LeadershipTeam />
      <PartnersStrip />
      <CTABanner />
    </>
  );
}