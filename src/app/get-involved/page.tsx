"use client";

import { motion } from "framer-motion";
import {
  HeartHandshake,
  Users,
  Building2,
  Mail,
  Check,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { testimonials } from "@/data/testimonials";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
} from "@/lib/animations";
import { useInView } from "@/hooks/useInView";

const faqItems = [
  {
    question: "Comment se déroule le processus de recrutement ?",
    answer:
      "Notre processus comprend généralement une candidature en ligne, un premier entretien de présélection, une évaluation technique ou métier, puis un entretien final avec le responsable. La durée totale est en général de 2 à 4 semaines.",
  },
  {
    question: "Puis-je postuler à plusieurs postes ?",
    answer:
      "Oui. Nous vous encourageons à postuler à tous les postes correspondant à votre profil. Chaque candidature est étudiée individuellement pour trouver la meilleure adéquation.",
  },
  {
    question: "Proposez-vous des stages ?",
    answer:
      "Oui. Nous proposons des programmes de stage structurés dans toutes les filiales, d'une durée typique de 3 à 6 mois. Les stagiaires sont encadrés, participent à des projets concrets et beaucoup sont recrutés en CDI à l'issue du stage.",
  },
  {
    question: "Quels sont les horaires de travail ?",
    answer:
      "Les horaires standards sont du lundi au vendredi, de 8 h 00 à 17 h 30 (WAT). Certains postes peuvent offrir des aménagements selon la filiale et la fonction. Nous prônons l'équilibre vie professionnelle / vie personnelle.",
  },
  {
    question: "Une aide à la mobilité est-elle proposée ?",
    answer:
      "Pour certains postes seniors ou spécialisés, nous proposons une aide à l'installation (logement, logistique, indemnités). Les détails sont abordés au stade de l'offre.",
  },
  {
    question: "Comment rester informé des nouvelles offres ?",
    answer:
      "Inscrivez-vous à notre newsletter, suivez-nous sur LinkedIn ou consultez régulièrement notre page Carrières. Toutes les nouvelles opportunités dans nos six filiales y sont publiées.",
  },
];

const pathways = [
  {
    icon: HeartHandshake,
    iconBg: "bg-gold-100",
    iconColor: "text-gold-600",
    title: "Pourquoi travailler chez Syel",
    description:
      "Rejoignez un groupe dynamique et en croissance où votre travail a un impact réel dans l'énergie, le transport, l'agroalimentaire, la technologie, la construction et l'immobilier.",
    items: [
      "Rémunération compétitive et primes de performance",
      "Évolution de carrière au sein de six filiales diversifiées",
      "Culture collaborative et tournée vers l'innovation",
    ],
    cta: "Voir les postes ouverts",
    ctaVariant: "primary" as const,
  },
  {
    icon: Users,
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
    title: "Postes ouverts",
    description:
      "Nous recherchons en permanence des talents pour rejoindre nos équipes dans toutes les filiales. Consultez les offres actuelles ou envoyez une candidature spontanée.",
    items: [
      "Ingénierie & Opérations",
      "Finance & Administration",
      "Technologie & Digital",
      "Management & Stratégie",
    ],
    cta: "Parcourir les offres",
    ctaVariant: "secondary" as const,
  },
  {
    icon: Building2,
    iconBg: "bg-primary-100",
    iconColor: "text-primary-600",
    title: "Avantages & Culture",
    description:
      "Nous investissons dans nos équipes : avantages sociaux, développement professionnel et une culture fondée sur l'excellence, l'intégrité et le travail d'équipe.",
    items: [
      "Assurance maladie et programmes bien-être",
      "Formation et certifications professionnelles",
      "Team building et événements d'entreprise",
      "Aménagements du temps de travail",
    ],
    cta: "En savoir plus",
    ctaVariant: "outline" as const,
  },
];

const volunteerTestimonial = testimonials[1];

export default function GetInvolvedPage() {
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.2 });
  const { ref: pathwaysRef, isInView: pathwaysInView } = useInView();
  const { ref: testimonialRef, isInView: testimonialInView } = useInView();
  const { ref: faqRef, isInView: faqInView } = useInView();
  const { ref: newsletterRef, isInView: newsletterInView } = useInView();

  return (
    <>
      {/* Page Hero */}
      <section className="relative flex min-h-[50vh] items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&q=80)",
          }}
        />
        <div className="absolute inset-0 gradient-hero" />

        <div className="container-custom relative z-10 section-padding">
          <motion.div
            ref={heroRef}
            variants={fadeInUp}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Carrières au Groupe Syel
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
              Construisez votre carrière au sein d&apos;un groupe diversifié de premier plan en Afrique centrale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Three Pathways */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Rejoignez-nous"
            title="Votre parcours carrière chez Syel"
            highlight="chez Syel"
            subtitle="Que vous soyez un professionnel expérimenté ou en début de carrière, le Groupe Syel propose des opportunités variées au sein de ses six filiales."
            centered
          />

          <motion.div
            ref={pathwaysRef}
            variants={staggerContainer}
            initial="hidden"
            animate={pathwaysInView ? "visible" : "hidden"}
            className="mt-16 grid gap-8 lg:grid-cols-3"
          >
            {pathways.map((pathway) => (
              <motion.div key={pathway.title} variants={staggerItem}>
                <Card className="flex h-full flex-col p-8">
                  <div
                    className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full ${pathway.iconBg}`}
                  >
                    <pathway.icon className={`h-8 w-8 ${pathway.iconColor}`} />
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-base-800">
                    {pathway.title}
                  </h3>

                  <p className="mt-3 text-warm-600 leading-relaxed">
                    {pathway.description}
                  </p>

                  <ul className="mt-6 space-y-3 flex-1">
                    {pathway.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-warm-600"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Button
                      variant={pathway.ctaVariant}
                      href="/get-involved"
                      className="w-full justify-center"
                    >
                      {pathway.cta}
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact Testimonial */}
      <section className="section-padding bg-base-800 relative overflow-hidden">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/5" />
        <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-white/5" />

        <div className="container-custom relative z-10">
          <motion.div
            ref={testimonialRef}
            variants={fadeInUp}
            initial="hidden"
            animate={testimonialInView ? "visible" : "hidden"}
            className="mx-auto max-w-4xl text-center"
          >
            <Quote className="mx-auto mb-8 h-12 w-12 text-teal-400 opacity-60" />
            <blockquote className="font-heading text-xl italic leading-relaxed text-white/90 md:text-2xl lg:text-3xl">
              &ldquo;{volunteerTestimonial.quote}&rdquo;
            </blockquote>
            <div className="mt-8">
              <p className="font-semibold text-white text-lg">
                {volunteerTestimonial.name}
              </p>
              <p className="mt-1 text-teal-300">
                {volunteerTestimonial.role}
                {volunteerTestimonial.organization &&
                  `, ${volunteerTestimonial.organization}`}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            ref={faqRef}
            variants={fadeInUp}
            initial="hidden"
            animate={faqInView ? "visible" : "hidden"}
          >
            <SectionHeading
              eyebrow="FAQ"
              title="Frequently Asked Questions"
              highlight="Questions"
              subtitle="Have questions about working at Groupe Syel? Here are answers to the most common ones."
              centered
            />

            <div className="mx-auto mt-12 max-w-3xl">
              <Accordion items={faqItems} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-warm-50">
        <div className="container-custom">
          <motion.div
            ref={newsletterRef}
            variants={fadeInUp}
            initial="hidden"
            animate={newsletterInView ? "visible" : "hidden"}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
              <Mail className="h-8 w-8 text-teal-600" />
            </div>
            <h2 className="font-heading text-3xl font-bold text-base-800 md:text-4xl">
              Restez connecté
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-warm-600 leading-relaxed">
              Inscrivez-vous à notre newsletter pour recevoir nos offres d&apos;emploi,
              actualités et événements du Groupe Syel.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
              <input
                type="email"
                placeholder="Votre adresse e-mail"
                className="rounded-lg border border-warm-300 bg-white px-5 py-3 text-warm-700 placeholder:text-warm-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 sm:min-w-[320px]"
              />
              <Button variant="secondary" icon={<Mail className="h-4 w-4" />}>
                S&apos;inscrire
              </Button>
            </div>

            <p className="mt-4 text-xs text-warm-400">
              Nous respectons votre vie privée. Désinscription possible à tout moment.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
