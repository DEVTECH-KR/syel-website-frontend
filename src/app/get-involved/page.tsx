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
    question: "What is the recruitment process?",
    answer:
      "Our recruitment process typically involves an online application, an initial screening call, a technical or role-specific assessment, and a final interview with the hiring manager. The entire process usually takes 2–4 weeks.",
  },
  {
    question: "Can I apply for multiple positions?",
    answer:
      "Yes! We encourage you to apply for any roles that match your skills and experience. Our recruitment team reviews each application individually to find the best fit for both the candidate and the team.",
  },
  {
    question: "Do you offer internships?",
    answer:
      "Absolutely. We run structured internship programs across all subsidiaries, typically lasting 3–6 months. Interns receive mentorship, hands-on project experience, and many are offered permanent positions upon completion.",
  },
  {
    question: "What are the working hours?",
    answer:
      "Standard working hours are Monday to Friday, 8:00 AM to 5:30 PM WAT. Some roles may offer flexible arrangements depending on the subsidiary and position. We believe in work-life balance and support our employees accordingly.",
  },
  {
    question: "Is relocation assistance available?",
    answer:
      "For certain senior and specialized roles, we offer relocation support including assistance with housing, logistics, and settling-in allowances. Details are discussed during the offer stage.",
  },
  {
    question: "How can I stay updated on new openings?",
    answer:
      "Subscribe to our newsletter, follow us on LinkedIn, or check our Careers page regularly. We post all new opportunities across our six subsidiaries as they become available.",
  },
];

const pathways = [
  {
    icon: HeartHandshake,
    iconBg: "bg-gold-100",
    iconColor: "text-gold-600",
    title: "Why Work at Syel",
    description:
      "Join a dynamic, fast-growing group where your work drives real impact across energy, transport, agribusiness, technology, construction, and real estate.",
    items: [
      "Competitive salaries and performance bonuses",
      "Career growth across six diverse subsidiaries",
      "Collaborative and innovative work culture",
    ],
    cta: "View Open Positions",
    ctaVariant: "primary" as const,
  },
  {
    icon: Users,
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
    title: "Open Positions",
    description:
      "We are always looking for talented professionals to join our team across all subsidiaries. Explore current openings or submit a spontaneous application.",
    items: [
      "Engineering & Operations",
      "Finance & Administration",
      "Technology & Digital",
      "Management & Strategy",
    ],
    cta: "Browse Openings",
    ctaVariant: "secondary" as const,
  },
  {
    icon: Building2,
    iconBg: "bg-primary-100",
    iconColor: "text-primary-600",
    title: "Benefits & Culture",
    description:
      "We invest in our people with comprehensive benefits, professional development, and a culture that values excellence, integrity, and teamwork.",
    items: [
      "Health insurance and wellness programs",
      "Professional training and certifications",
      "Team building and company events",
      "Flexible work arrangements",
    ],
    cta: "Learn More",
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
              Careers at Groupe Syel
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
              Build your career with a leading diversified group in Central Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Three Pathways */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Join Our Team"
            title="Your Career Path at Syel"
            highlight="at Syel"
            subtitle="Whether you are an experienced professional or just starting out, Groupe Syel offers diverse opportunities across six dynamic subsidiaries."
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
              Stay Connected
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-warm-600 leading-relaxed">
              Subscribe to our newsletter and receive updates on new job
              openings, company news, and events at Groupe Syel.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
              <input
                type="email"
                placeholder="Enter your email address"
                className="rounded-lg border border-warm-300 bg-white px-5 py-3 text-warm-700 placeholder:text-warm-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 sm:min-w-[320px]"
              />
              <Button variant="secondary" icon={<Mail className="h-4 w-4" />}>
                Subscribe
              </Button>
            </div>

            <p className="mt-4 text-xs text-warm-400">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
