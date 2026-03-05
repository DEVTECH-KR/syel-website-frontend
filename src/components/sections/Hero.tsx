"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { fadeIn, fadeInUp } from "@/lib/animations";

interface HeroSlide {
  type: "image" | "video";
  src: string;
  poster?: string;
  headline: string;
  highlight: string;
  subtitle: string;
  eyebrow: string;
}

const slides: HeroSlide[] = [
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80",
    eyebrow: "Groupe Syel — Excellence diversifiée",
    headline: "Stimuler la croissance.\nDans tous les secteurs d'activité.",
    highlight: "Depuis 2010.",
    subtitle:
      "Le groupe Syel se positionne comme un acteur économique majeur et un partenaire stratégique de premier plan en République du Congo. Fort de son expertise multisectorielle, il contribue de manière significative au progrès et au développement dans les domaines de l'énergie, des transports, de l'agroalimentaire, des technologies, de la construction et de l'immobilier, avec des activités qui s'étendent à l'Afrique et au-delà.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80",
    eyebrow: "Syel Énergie",
    headline: "Éclairer la voie\nvers un avenir durable.",
    highlight: "Une énergie propre pour tous.",
    subtitle:
      "Des fermes solaires aux projets hydroélectriques, Syel Énergie fournit des solutions énergétiques fiables et durables qui alimentent la croissance économique et améliorent la vie de millions de personnes à travers le continent.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&q=80",
    eyebrow: "Syel Transport",
    headline: "Faire avancer\nl'Afrique.",
    highlight: "En toute fiabilité.",
    subtitle:
      "Avec une flotte moderne et une couverture stratégique des corridors de Douala à N'Djamena, Syel Transport est le partenaire logistique de confiance pour les entreprises d'Afrique centrale.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80",
    eyebrow: "Syel Agroalimentaire",
    headline: "De la ferme\nà la table.",
    highlight: "L'excellence à chaque étape.",
    subtitle:
      "Nous collaborons avec des milliers d'agriculteurs locaux, transformons des produits agricoles de qualité et apportons les meilleurs produits camerounais aux marchés de la région et du monde entier.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80",
    eyebrow: "Innovation & Croissance",
    headline: "Construire les industries\nde demain.",
    highlight: "Dès aujourd'hui.",
    subtitle:
      "Grâce à des technologies de pointe, une construction de classe mondiale et des développements immobiliers visionnaires, Groupe Syel façonne les infrastructures d'une Afrique moderne.",
  },
];

const SLIDE_DURATION = 7000;

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  const slide = slides[current];

  const cubicEase = [0.22, 1, 0.36, 1] as const;

  const bgVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      scale: 1.08,
      x: dir > 0 ? 60 : -60,
    }),
    center: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 1.2, ease: cubicEase },
    },
    exit: (dir: number) => ({
      opacity: 0,
      scale: 0.97,
      x: dir > 0 ? -60 : 60,
      transition: { duration: 0.8, ease: cubicEase },
    }),
  };

  const textVariants = {
    enter: { opacity: 0, y: 30 },
    center: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: 0.4, ease: cubicEase },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.4, ease: "easeIn" as const },
    },
  };

  return (
    <section
      id="hero"
      className="relative h-[75vh] lg:h-[calc(100vh-118px)] min-h-[480px] lg:min-h-[650px] flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ===== Carrousel d'images de fond ===== */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={`bg-${current}`}
          custom={direction}
          variants={bgVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          {slide.type === "video" ? (
            <video
              key={slide.src}
              autoPlay
              muted
              loop
              playsInline
              poster={slide.poster}
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src={slide.src} type="video/mp4" />
            </video>
          ) : (
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${slide.src}')` }}
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Superposition dégradée — toujours au-dessus du média */}
      <div className="absolute inset-0 z-[1] gradient-hero" />

      {/* ===== Indicateurs de diapositives ===== */}
      <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 flex gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-400 cursor-pointer ${
              i === current
                ? "w-8 bg-gold-400"
                : "w-2 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Aller à la diapositive ${i + 1}`}
          />
        ))}
      </div>

      {/* ===== Contenu ===== */}
      <div className="container-custom relative z-10 text-center pb-10 lg:pb-20 lg:pt-8">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`text-${current}`}
            variants={textVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="mx-auto max-w-4xl"
          >
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-gold-400"
            >
              {slide.eyebrow}
            </motion.p>

            <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {slide.headline.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
              <span className="text-gold-400">{slide.highlight}</span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
              {slide.subtitle}
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/subsidiaries" size="lg">
                Nos Filiales
              </Button>
              <Button href="/about" variant="outline-light" size="lg">
                En Savoir Plus
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ===== Navigation par flèches ===== */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 flex items-center justify-center w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-all duration-200 lg:left-8"
        aria-label="Diapositive précédente"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 flex items-center justify-center w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-all duration-200 lg:right-8"
        aria-label="Diapositive suivante"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* ===== Compteur de diapositives ===== */}
      <div className="absolute bottom-5 right-6 z-20 flex items-center gap-2 text-white/50 text-sm font-medium lg:right-12">
        <span className="text-white text-lg font-heading font-bold">
          {String(current + 1).padStart(2, "0")}
        </span>
        <span className="w-6 h-px bg-white/30" />
        <span>{String(slides.length).padStart(2, "0")}</span>
      </div>

      {/* ===== Indicateur de défilement ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-14 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-white/25" />
        </motion.div>
      </motion.div>
    </section>
  );
}