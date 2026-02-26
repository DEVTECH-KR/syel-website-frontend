"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  ChevronDown,
  Building2,
  Briefcase,
  ArrowRight,
  Mail,
  Phone,
  Home,
  Users,
  FolderHeart,
  Newspaper,
  MessageCircle,
  Info,
  Zap,
  Truck,
  Wheat,
  Cpu,
  HardHat,
  Building,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: Info },
  { label: "Subsidiaries", href: "/branches", icon: Building2, hasDropdown: true },
  { label: "Projects", href: "/projects", icon: FolderHeart },
  { label: "News", href: "/news", icon: Newspaper },
  { label: "Contact", href: "/contact", icon: MessageCircle },
];

const subsidiarySectors = [
  {
    sector: "Energy",
    icon: Zap,
    subsidiaries: [
      { name: "Syel Énergie", href: "/branches/syel-energie" },
    ],
  },
  {
    sector: "Transport",
    icon: Truck,
    subsidiaries: [
      { name: "Syel Transport", href: "/branches/syel-transport" },
    ],
  },
  {
    sector: "Agri-food",
    icon: Wheat,
    subsidiaries: [
      { name: "Syel Agroalimentaire", href: "/branches/syel-agroalimentaire" },
    ],
  },
  {
    sector: "Technology",
    icon: Cpu,
    subsidiaries: [
      { name: "Syel Technologies", href: "/branches/syel-technologies" },
    ],
  },
  {
    sector: "Construction",
    icon: HardHat,
    subsidiaries: [
      { name: "Syel BTP", href: "/branches/syel-btp" },
    ],
  },
  {
    sector: "Real Estate",
    icon: Building,
    subsidiaries: [
      { name: "Syel Immobilier", href: "/branches/syel-immobilier" },
    ],
  },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const megaMenuTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const openMegaMenu = () => {
    if (megaMenuTimeout.current) clearTimeout(megaMenuTimeout.current);
    setMegaMenuOpen(true);
  };

  const closeMegaMenu = () => {
    megaMenuTimeout.current = setTimeout(() => setMegaMenuOpen(false), 200);
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <motion.header
        initial={{ y: -120 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-shadow duration-300",
          scrolled && "shadow-lg"
        )}
      >
        {/* ===== TOP BAR ===== */}
        <div className="bg-base-800 border-b border-base-700/50">
          <div className="container-custom">
            <div className="flex items-center justify-between h-16 lg:h-[70px]">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2.5 group shrink-0">
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary-500 group-hover:bg-primary-400 transition-colors">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <div className="flex items-baseline gap-0.5">
                  <span className="font-heading text-[1.55rem] lg:text-[1.7rem] tracking-tight text-white">
                    Groupe
                  </span>
                  <span className="font-heading text-[1.55rem] lg:text-[1.7rem] font-bold tracking-tight text-primary-300">
                    Syel
                  </span>
                </div>
              </Link>

              {/* Center — Tagline (hidden on small screens) */}
              <div className="hidden xl:flex items-center">
                <p className="text-sm text-warm-500 tracking-wide">
                  Building Tomorrow&apos;s Industries
                </p>
              </div>

              {/* Right — Contact info + Mobile toggle */}
              <div className="flex items-center gap-5">
                {/* Contact info — desktop only */}
                <div className="hidden lg:flex items-center gap-6">
                  <a
                    href="mailto:info@groupesyel.com"
                    className="flex items-center gap-2 text-sm text-warm-400 hover:text-primary-300 transition-colors group"
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-base-700 group-hover:bg-primary-600 transition-colors">
                      <Mail className="w-3.5 h-3.5 text-primary-400 group-hover:text-white transition-colors" />
                    </div>
                    <span className="hidden xl:inline">info@groupesyel.com</span>
                  </a>

                  <div className="flex items-center gap-2 group">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-base-700">
                      <Phone className="w-3.5 h-3.5 text-primary-400" />
                    </div>
                    <div className="hidden xl:block">
                      <p className="text-[10px] uppercase tracking-wider text-warm-600 leading-none">
                        Call Us
                      </p>
                      <a
                        href="tel:+237233421580"
                        className="text-sm font-semibold text-white hover:text-primary-300 transition-colors"
                      >
                        +237 233 42 15 80
                      </a>
                    </div>
                  </div>
                </div>

                {/* Mobile hamburger */}
                <button
                  onClick={() => setMobileOpen(true)}
                  className="lg:hidden p-2 -mr-2 text-warm-400 hover:text-white hover:bg-base-700 rounded-lg transition-colors"
                  aria-label="Open navigation menu"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ===== BOTTOM NAV BAR ===== */}
        <div className="hidden lg:block bg-base-900">
          <div className="container-custom">
            <div className="flex items-center justify-between h-12">
              {/* Navigation links */}
              <nav className="flex items-center -ml-3">
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  const Icon = link.icon;

                  if (link.hasDropdown) {
                    return (
                      <div
                        key={link.href}
                        className="relative"
                        onMouseEnter={openMegaMenu}
                        onMouseLeave={closeMegaMenu}
                      >
                        <Link
                          href={link.href}
                          className={cn(
                            "flex items-center gap-1.5 px-4 py-2 text-[13px] font-medium rounded-md transition-colors duration-150",
                            active
                              ? "text-primary-300"
                              : "text-warm-300 hover:text-white hover:bg-white/5"
                          )}
                        >
                          <Icon className="w-3.5 h-3.5 opacity-70" />
                          {link.label}
                          <ChevronDown
                            className={cn(
                              "w-3 h-3 opacity-50 transition-transform duration-200",
                              megaMenuOpen && "rotate-180"
                            )}
                          />
                        </Link>

                        {/* Mega Menu Dropdown */}
                        <AnimatePresence>
                          {megaMenuOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 8 }}
                              transition={{ duration: 0.2, ease: "easeOut" }}
                              className="absolute top-full left-0 pt-2"
                              onMouseEnter={openMegaMenu}
                              onMouseLeave={closeMegaMenu}
                            >
                              <div className="w-[680px] rounded-xl bg-base-800 border border-base-700 shadow-2xl p-5 grid grid-cols-3 gap-4">
                                {subsidiarySectors.map((sector) => {
                                  const SectorIcon = sector.icon;
                                  return (
                                    <div key={sector.sector}>
                                      <div className="flex items-center gap-1.5 mb-2.5">
                                        <SectorIcon className="w-3 h-3 text-primary-400" />
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-warm-500">
                                          {sector.sector}
                                        </span>
                                      </div>
                                      <ul className="space-y-0.5">
                                        {sector.subsidiaries.map((sub) => (
                                          <li key={sub.href}>
                                            <Link
                                              href={sub.href}
                                              className="flex items-center gap-1.5 px-2 py-1.5 text-[13px] text-warm-300 hover:text-primary-300 hover:bg-white/5 rounded transition-colors duration-150"
                                            >
                                              <SectorIcon className="w-3 h-3 opacity-40 shrink-0" />
                                              {sub.name}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  );
                                })}

                                <div className="col-span-3 border-t border-base-700 pt-3 mt-1">
                                  <Link
                                    href="/subsidiaries"
                                    className="inline-flex items-center gap-1.5 text-[13px] font-medium text-primary-400 hover:text-primary-300 transition-colors"
                                  >
                                    View All Subsidiaries
                                    <ArrowRight className="w-3.5 h-3.5" />
                                  </Link>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "flex items-center gap-1.5 px-4 py-2 text-[13px] font-medium rounded-md transition-colors duration-150",
                        active
                          ? "text-primary-300"
                          : "text-warm-300 hover:text-white hover:bg-white/5"
                      )}
                    >
                      <Icon className="w-3.5 h-3.5 opacity-70" />
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              {/* CTA Button — pill style */}
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 px-6 py-2 bg-primary-500 hover:bg-primary-400 text-white text-[13px] font-semibold rounded-full transition-colors duration-200 shadow-sm hover:shadow-md"
              >
                <Briefcase className="w-3.5 h-3.5" />
                Join Us
              </Link>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-16 lg:h-[118px]" />

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
