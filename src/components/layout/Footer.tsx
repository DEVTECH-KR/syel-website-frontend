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
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Subsidiaries", href: "/subsidiaries" },
  { label: "Projects", href: "/projects" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

const careerLinks = [
  { label: "Open Positions", href: "/careers#positions" },
  { label: "Internships", href: "/careers#internships" },
  { label: "Why Join Us", href: "/careers#why-join" },
  { label: "Our Culture", href: "/careers#culture" },
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
      {/* Gradient Separator */}
      <div
        className="h-1 w-full bg-gradient-to-r from-primary-500 via-primary-400 to-gold-400"
        aria-hidden="true"
      />

      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1 — Brand */}
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
              A diversified corporate group driving excellence across energy,
              transport, agri-food, technology, construction, and real estate
              from Douala, Cameroon to the world.
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

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-5">
              Quick Links
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

          {/* Column 3 — Careers */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-5">
              Careers
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

          {/* Column 4 — Contact & Newsletter */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-5">
              Contact Us
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
                  Douala, Cameroon
                </span>
              </li>
            </ul>

            {/* Newsletter */}
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-3">
              Newsletter
            </h4>
            <p className="text-xs text-warm-500 mb-3">
              Stay updated on our latest ventures and opportunities.
            </p>
            <form
              className="flex"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email"
                aria-label="Email for newsletter"
                className="flex-1 min-w-0 px-3.5 py-2.5 text-sm bg-base-700 border border-base-600 rounded-l-lg text-white placeholder:text-warm-600 focus:outline-none focus:border-primary-500 transition-colors"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="px-3.5 py-2.5 bg-primary-600 hover:bg-primary-500 text-white rounded-r-lg transition-colors duration-200 shrink-0"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-base-700">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-warm-600 flex items-center gap-1">
            &copy; {new Date().getFullYear()} Groupe Syel. Building Tomorrow&apos;s
            <Briefcase className="w-3 h-3 text-primary-500 inline" />
            Industries.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="text-xs text-warm-600 hover:text-warm-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-xs text-warm-600 hover:text-warm-400 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
