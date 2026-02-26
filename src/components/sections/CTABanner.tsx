"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { fadeInUp } from "@/lib/animations";
import { useInView } from "@/hooks/useInView";

export function CTABanner() {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <section id="cta" className="relative overflow-hidden gradient-teal section-padding">
      {/* Decorative background circles */}
      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/5" />
      <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-white/5" />
      <div className="absolute left-1/3 top-1/4 h-40 w-40 rounded-full bg-white/[0.03]" />
      <div className="absolute bottom-1/3 right-1/4 h-32 w-32 rounded-full bg-white/[0.04]" />

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Let&apos;s Build the <span className="text-gold-400">Future Together</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
            Whether you&apos;re looking for a trusted partner, a career opportunity,
            or a visionary collaborator — Groupe Syel is ready to work with you.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href="/contact"
              variant="white"
              size="lg"
            >
              Contact Us
            </Button>
            <Button
              href="/careers"
              variant="outline-light"
              size="lg"
            >
              Join Our Team
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
