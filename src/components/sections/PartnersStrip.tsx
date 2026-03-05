"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { useInView } from "@/hooks/useInView";
import { partners } from "@/data/stats";

const duplicatedPartners = [...partners, ...partners];

export function PartnersStrip() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="partners" className="section-padding bg-warm-100">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={fadeIn}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-warm-400">
            Partenaires de Confiance & Clients
          </p>

          <div className="relative mt-10 overflow-hidden">
            <style>{`
              @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
            `}</style>

            {/* Bordures dégradées */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-warm-100 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-warm-100 to-transparent" />

            <div
              className="flex w-max gap-12"
              style={{ animation: "marquee 30s linear infinite" }}
            >
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="group flex shrink-0 items-center gap-3 px-4 transition-all duration-300"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-warm-200/60 font-heading text-sm font-bold text-warm-400 transition-all duration-300 group-hover:bg-primary-100 group-hover:text-primary-600">
                    {partner.logo}
                  </div>
                  <span className="whitespace-nowrap text-sm font-medium text-warm-400 transition-colors duration-300 group-hover:text-primary-700">
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}