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
          alt="Groupe Syel corporate headquarters"
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
          <h1 className="font-heading text-white">About Groupe Syel</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-warm-200 md:text-xl">
            A diversified corporate group driving innovation, excellence, and
            sustainable growth across Cameroon since 2010.
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
              eyebrow="Who We Are"
              title="Our Story"
              highlight="Story"
              subtitle="A journey of ambition, diversification, and relentless commitment to building Cameroon's economic future."
            />

            <div className="mt-8 space-y-5 text-warm-700 leading-relaxed">
              <p>
                Groupe Syel was founded in 2010 in Douala, Cameroon, by a group
                of visionary entrepreneurs who saw an opportunity to build a
                world-class conglomerate rooted in African excellence. Starting
                with a single energy distribution venture, the founders combined
                deep local expertise with international best practices to create
                a company that could compete on the global stage.
              </p>
              <p>
                What began as a focused energy business quickly expanded as the
                team identified underserved markets across key sectors. Within
                three years, Groupe Syel had diversified into transport and
                logistics, leveraging Douala&apos;s position as Cameroon&apos;s economic
                capital. The founding principle was clear: deliver operational
                excellence, invest in local talent, and build infrastructure that
                transforms communities and industries alike.
              </p>
              <p>
                Over fifteen years, Groupe Syel has grown from that single
                venture into a diversified group with six subsidiaries spanning
                energy, transport, agribusiness, technology, construction, and
                real estate. With over 1,200 employees and operations across
                Central Africa, we have delivered more than 150 projects and
                earned a reputation for integrity, innovation, and sustainable
                growth. Our culture remains rooted in that original
                entrepreneurial spirit: ambitious, disciplined, and fiercely
                dedicated to building lasting value for our stakeholders and
                communities.
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
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80"
                alt="Groupe Syel team at work"
                width={800}
                height={600}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-teal-500 px-6 py-4 text-white shadow-lg">
              <p className="font-heading text-3xl font-bold">15+</p>
              <p className="text-sm font-medium text-teal-100">
                Years of Growth
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
    year: "2010",
    title: "Founded in Douala",
    description:
      "Groupe Syel was established in Douala, Cameroon, with an initial focus on energy distribution, laying the foundation for a diversified corporate group.",
  },
  {
    year: "2012",
    title: "Syel Transport Launched",
    description:
      "Expanded into logistics and transport, capitalizing on Douala's strategic port location to build a regional freight and passenger network.",
  },
  {
    year: "2014",
    title: "Agribusiness Expansion",
    description:
      "Created Syel Agroalimentaire to invest in food processing and agricultural value chains, supporting local farmers and food security across Cameroon.",
  },
  {
    year: "2016",
    title: "Technology & Innovation",
    description:
      "Launched Syel Technologies to drive digital transformation, offering IT solutions, software development, and connectivity services to businesses and communities.",
  },
  {
    year: "2018",
    title: "Construction & Real Estate",
    description:
      "Entered the construction and real estate sectors with Syel BTP and Syel Immobilier, delivering infrastructure projects and modern housing developments.",
  },
  {
    year: "2020",
    title: "1,000+ Employees",
    description:
      "Surpassed one thousand employees across all subsidiaries, reinforcing our commitment to job creation and professional development in Central Africa.",
  },
  {
    year: "2023",
    title: "Regional Expansion",
    description:
      "Extended operations beyond Cameroon into neighboring Central African markets, establishing partnerships and project offices in Gabon and Equatorial Guinea.",
  },
  {
    year: "2025",
    title: "Digital Transformation",
    description:
      "Launched an integrated digital platform connecting all subsidiaries, partners, and clients in real-time, enabling greater efficiency and transparency across the group.",
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
            eyebrow="Our Journey"
            title="Key Milestones"
            highlight="Milestones"
            subtitle="From a single energy venture to a diversified corporate group — here are the milestones that shaped Groupe Syel."
            centered
          />
        </motion.div>

        <div className="relative mt-16">
          {/* Vertical line */}
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
                  {/* Mobile dot */}
                  <div className="relative z-10 flex shrink-0 md:hidden">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-teal-500 shadow-md">
                      <Calendar className="h-4 w-4 text-white" />
                    </div>
                  </div>

                  {/* Desktop layout */}
                  <div className="hidden w-full md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8">
                    {/* Left content */}
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

                    {/* Center dot */}
                    <div className="relative z-10 flex items-start justify-center pt-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-teal-500 shadow-md">
                        <Calendar className="h-4 w-4 text-white" />
                      </div>
                    </div>

                    {/* Right content */}
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

                  {/* Mobile content */}
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
    title: "Our Mission",
    description:
      "To drive sustainable economic growth across Central Africa by delivering world-class services in energy, transport, agribusiness, technology, construction, and real estate. We invest in people, infrastructure, and innovation to create lasting value for our clients, partners, employees, and the communities we serve.",
    gradient: "from-primary-500 to-primary-700",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become the leading diversified corporate group in Central Africa, recognized for operational excellence, innovation, and integrity. We envision a future where African enterprises set global standards, where local talent drives international competitiveness, and where economic development uplifts entire communities.",
    gradient: "from-teal-500 to-teal-700",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Innovation drives our approach — we embrace new technologies and methods to stay ahead. Excellence defines our standards — every project meets the highest benchmarks. Integrity guides every decision — we are transparent, accountable, and ethical. Sustainability ensures that our growth benefits future generations as much as the present.",
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
            eyebrow="What Drives Us"
            title="Mission, Vision & Values"
            highlight="Vision & Values"
            subtitle="The principles that guide every decision, project, and partnership across Groupe Syel."
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
  const globalLeaders = team.filter((m) => !m.branch);

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <SectionHeading
            eyebrow="The People Behind the Group"
            title="Our Leadership"
            highlight="Leadership"
            subtitle="Meet the experienced team guiding Groupe Syel's strategy, operations, and growth across Central Africa."
            centered
          />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {globalLeaders.map((member) => (
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
                  {/* Social overlay on hover */}
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

// NOTE: For metadata (title, description), add a layout.tsx in this directory
// or use generateMetadata in a server component wrapper, since "use client"
// pages cannot export metadata directly.

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
