"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Globe,
  Building2,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { branches } from "@/data/branches";
import { useInView } from "@/hooks/useInView";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
} from "@/lib/animations";
import { cn } from "@/lib/utils";

// --- Page Hero ---

function PageHero() {
  return (
    <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden gradient-primary">
      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/5" />
      <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-white/5" />
      <div className="absolute left-1/3 top-1/4 h-40 w-40 rounded-full bg-white/[0.03]" />

      <div className="container-custom relative z-10 py-28 text-center">
        <motion.div variants={fadeInUp} initial="hidden" animate="visible">
          <h1 className="font-heading text-white">Get in Touch</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-warm-200 md:text-xl">
            We&rsquo;d love to hear from you. Reach out to the Groupe Syel team.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// --- Contact Form ---

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const subjectOptions = [
  "General Inquiry",
  "Partnership",
  "Careers",
  "Business Proposal",
  "Media/Press",
  "Other",
];

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Full name is required.";
  if (!data.email.trim()) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Enter a valid email address.";
  if (!data.subject) errors.subject = "Please select a subject.";
  if (!data.message.trim()) errors.message = "Message is required.";
  else if (data.message.trim().length < 10)
    errors.message = "Message must be at least 10 characters.";
  return errors;
}

function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const newErrors = validate({ ...form, [name]: value });
      setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof FormErrors] }));
    }
  }

  function handleBlur(
    e: React.FocusEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const newErrors = validate(form);
    setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof FormErrors] }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const allTouched = { name: true, email: true, subject: true, message: true };
    setTouched(allTouched);
    const newErrors = validate(form);
    setErrors(newErrors);
  }

  const inputBase =
    "w-full rounded-lg border bg-white px-4 py-3 text-sm text-base-800 placeholder:text-warm-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="mb-1.5 block text-sm font-medium text-base-700"
        >
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your full name"
          value={form.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={cn(
            inputBase,
            errors.name && touched.name
              ? "border-red-400"
              : "border-warm-300 hover:border-warm-400"
          )}
        />
        {errors.name && touched.name && (
          <p className="mt-1 text-xs text-red-500">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-sm font-medium text-base-700"
        >
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={cn(
            inputBase,
            errors.email && touched.email
              ? "border-red-400"
              : "border-warm-300 hover:border-warm-400"
          )}
        />
        {errors.email && touched.email && (
          <p className="mt-1 text-xs text-red-500">{errors.email}</p>
        )}
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="subject"
          className="mb-1.5 block text-sm font-medium text-base-700"
        >
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          onBlur={handleBlur}
          className={cn(
            inputBase,
            "appearance-none",
            !form.subject && "text-warm-400",
            errors.subject && touched.subject
              ? "border-red-400"
              : "border-warm-300 hover:border-warm-400"
          )}
        >
          <option value="" disabled>
            Select a subject
          </option>
          {subjectOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {errors.subject && touched.subject && (
          <p className="mt-1 text-xs text-red-500">{errors.subject}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-base-700"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="How can we help?"
          value={form.message}
          onChange={handleChange}
          onBlur={handleBlur}
          className={cn(
            inputBase,
            "resize-y",
            errors.message && touched.message
              ? "border-red-400"
              : "border-warm-300 hover:border-warm-400"
          )}
        />
        {errors.message && touched.message && (
          <p className="mt-1 text-xs text-red-500">{errors.message}</p>
        )}
      </div>

      <Button type="submit" size="lg" className="w-full" icon={<Send className="h-4 w-4" />}>
        Send Message
      </Button>
    </form>
  );
}

// --- Contact Info Cards ---

function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* HQ */}
      <div className="rounded-2xl bg-warm-50 p-6">
        <h3 className="flex items-center gap-2 font-heading text-lg font-bold text-base-700">
          <Building2 className="h-5 w-5 text-teal-500" />
          Headquarters
        </h3>
        <div className="mt-4 space-y-3">
          <div className="flex items-start gap-3 text-sm text-warm-700">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" />
            <span>Boulevard du 30 Juin, Gombe, Kinshasa, République Démocratique du Congo</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-warm-700">
            <Phone className="h-4 w-4 shrink-0 text-teal-500" />
            <span>+243 815 123 450</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-warm-700">
            <Mail className="h-4 w-4 shrink-0 text-teal-500" />
            <a
              href="mailto:info@groupesyel.com"
              className="transition-colors hover:text-teal-600"
            >
              info@groupesyel.com
            </a>
          </div>
        </div>
      </div>

      {/* Office Hours */}
      <div className="rounded-2xl bg-warm-50 p-6">
        <h3 className="flex items-center gap-2 font-heading text-lg font-bold text-base-700">
          <Clock className="h-5 w-5 text-teal-500" />
          Office Hours
        </h3>
        <div className="mt-4 space-y-2 text-sm text-warm-700">
          <p>Monday &ndash; Friday</p>
          <p className="font-semibold text-base-700">
            8:00 AM &ndash; 5:30 PM WAT
          </p>
          <p className="text-warm-500">
            Saturday &amp; Sunday: Closed
          </p>
        </div>
      </div>

      {/* Social */}
      <div className="rounded-2xl bg-warm-50 p-6">
        <h3 className="flex items-center gap-2 font-heading text-lg font-bold text-base-700">
          <Globe className="h-5 w-5 text-teal-500" />
          Follow Us
        </h3>
        <div className="mt-4 flex gap-3">
          {[
            { icon: Facebook, label: "Facebook", href: "#" },
            { icon: Twitter, label: "Twitter", href: "#" },
            { icon: Instagram, label: "Instagram", href: "#" },
            { icon: Linkedin, label: "LinkedIn", href: "#" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-warm-500 shadow-sm transition-all duration-200 hover:bg-teal-500 hover:text-white hover:shadow-md"
            >
              <social.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- Contact Grid (form + info) ---

function ContactGrid() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-[1fr_380px] lg:gap-16">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h2 className="font-heading line-accent">Send Us a Message</h2>
            <p className="mt-6 mb-8 text-warm-600">
              Fill out the form below and a member of our team will get back to
              you within two business days.
            </p>
            <ContactForm />
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <ContactInfo />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- Branch Offices ---

function BranchOffices() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section className="section-padding gradient-warm" ref={ref}>
      <div className="container-custom">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <SectionHeading
            eyebrow="Our Offices"
            title="Subsidiary Locations"
            highlight="Locations"
            subtitle="Get in touch with any of our subsidiary offices."
            centered
          />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {branches.map((branch) => (
            <motion.div key={branch.slug} variants={staggerItem}>
              <Card className="h-full">
                <div className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-heading text-base font-bold text-base-700">
                        {branch.city}
                      </h4>
                      <p className="text-sm text-warm-500">{branch.country}</p>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-warm-600">
                      <Mail className="h-3.5 w-3.5 shrink-0 text-teal-500" />
                      <a
                        href={`mailto:${branch.contactEmail}`}
                        className="transition-colors hover:text-teal-600"
                      >
                        {branch.contactEmail}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-warm-600">
                      <Phone className="h-3.5 w-3.5 shrink-0 text-teal-500" />
                      <span>{branch.contactPhone}</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-warm-600">
                      <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-500" />
                      <span>{branch.address}</span>
                    </div>
                  </div>
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

export default function ContactPage() {
  return (
    <>
      <PageHero />
      <ContactGrid />
      <BranchOffices />
    </>
  );
}
