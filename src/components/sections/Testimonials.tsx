"use client";

import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeIn } from "@/lib/animations";
import { useInView } from "@/hooks/useInView";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const { ref, isInView } = useInView({ threshold: 0.15 });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="testimonials" className="section-padding bg-warm-100">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Client Testimonials"
          title="Ce que disent nos partenaires"
          highlight="Our Partners"
          centered
        />

        <motion.div
          ref={ref}
          variants={fadeIn}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative mt-16"
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="min-w-0 flex-[0_0_100%] px-4 md:flex-[0_0_80%] lg:flex-[0_0_65%]"
                >
                  <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-card md:p-12">
                    <Quote className="mb-6 h-10 w-10 text-primary-200" />

                    <blockquote className="font-heading text-lg leading-relaxed text-base-800 italic md:text-xl">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>

                    <div className="mt-8 flex items-center gap-4">
                      <div className="relative h-14 w-14 overflow-hidden rounded-full">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={56}
                          height={56}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-base-800">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-warm-500">
                          {testimonial.role}
                          {testimonial.organization && (
                            <span className="text-warm-400">
                              {" "}
                              · {testimonial.organization}
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-3 shadow-md transition-colors hover:bg-warm-50 md:-left-4"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 text-base-700" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-3 shadow-md transition-colors hover:bg-warm-50 md:-right-4"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 text-base-700" />
          </button>

          {/* Dot indicators */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "w-8 bg-primary-500"
                    : "w-2.5 bg-warm-300 hover:bg-warm-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
