"use client";

import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Briefcase,
} from "lucide-react";

const quickLinks = [
  { label: "Accueil", href: "/" },
  { label: "À Propos", href: "/about" },
  { label: "Filiales", href: "/subsidiaries" },
  { label: "Projets", href: "/projects" },
  { label: "Actualités", href: "/news" },
  { label: "Contact", href: "/contact" },
];

const careerLinks = [
  { label: "Offres d'emploi", href: "/careers#positions" },
  { label: "Stages", href: "/careers#internships" },
  { label: "Pourquoi nous rejoindre", href: "/careers#why-join" },
  { label: "Notre Culture", href: "/careers#culture" },
];

const socials = [
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { label: "Twitter", href: "https://twitter.com", icon: Twitter },
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "YouTube", href: "https://youtube.com", icon: Youtube },
];

export function Footer() {
  return (
    <footer className="relative bg-base-800 text-warm-300">
      {/* Séparateur avec dégradé */}
      <div
        className="h-1 w-full bg-gradient-to-r from-primary-500 via-primary-400 to-gold-400"
        aria-hidden="true"
      />

      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Colonne 1 — Marque */}
          <div className="lg:pr-6">
            <Link href="/" className="inline-flex items-center gap-0.5 mb-5">
              <span className="font-heading text-2xl tracking-tight text-white">
                Groupe
              </span>
              <span
                className="mx-1.5 h-5 w-px bg-base-600"
                aria-hidden="true"
              />
              <span className="font-heading text-2xl font-bold tracking-tight text-primary-400">
                Syel
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-warm-500 mb-6">
              Un groupe diversifié qui stimule l&apos;excellence dans les secteurs
              de l&apos;énergie, du transport, de l&apos;agroalimentaire, de la technologie,
              de la construction et de l&apos;immobilier, de Kinshasa au monde entier.
            </p>

            <div className="flex items-center gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-base-700 text-warm-500 hover:bg-primary-600 hover:text-white transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Colonne 2 — Liens Rapides */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-5">
              Liens Rapides
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-warm-500 hover:text-primary-300 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 — Carrières */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-5">
              Carrières
            </h4>
            <ul className="space-y-3">
              {careerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-warm-500 hover:text-primary-300 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4 — Contact & Newsletter */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-5">
              Contactez-nous
            </h4>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 mt-0.5 text-primary-400 shrink-0" />
                <a
                  href="mailto:info@groupesyel.com"
                  className="text-sm text-warm-500 hover:text-primary-300 transition-colors"
                >
                  info@groupesyel.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 mt-0.5 text-primary-400 shrink-0" />
                <a
                  href="tel:+237233421580"
                  className="text-sm text-warm-500 hover:text-primary-300 transition-colors"
                >
                  +237 233 42 15 80
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-primary-400 shrink-0" />
                <span className="text-sm text-warm-500">
                  Boulevard de la Liberté, Akwa
                  <br />
                  Douala, Cameroun
                </span>
              </li>
            </ul>

            {/* Newsletter */}
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-3">
              Newsletter
            </h4>
            <p className="text-xs text-warm-500 mb-3">
              Restez informé de nos derniers projets et opportunités.
            </p>
            <form
              className="flex"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Votre email"
                aria-label="Email pour la newsletter"
                className="flex-1 min-w-0 px-3.5 py-2.5 text-sm bg-base-700 border border-base-600 rounded-l-lg text-white placeholder:text-warm-600 focus:outline-none focus:border-primary-500 transition-colors"
              />
              <button
                type="submit"
                aria-label="S'abonner à la newsletter"
                className="px-3.5 py-2.5 bg-primary-600 hover:bg-primary-500 text-white rounded-r-lg transition-colors duration-200 shrink-0"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Barre du bas */}
      <div className="border-t border-base-700">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-warm-600 flex items-center gap-1">
            &copy; {new Date().getFullYear()} Groupe Syel. Construire les industries
            <Briefcase className="w-3 h-3 text-primary-500 inline" />
            de demain.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="text-xs text-warm-600 hover:text-warm-400 transition-colors"
            >
              Politique de Confidentialité
            </Link>
            <Link
              href="/terms-of-service"
              className="text-xs text-warm-600 hover:text-warm-400 transition-colors"
            >
              Conditions d&apos;Utilisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}