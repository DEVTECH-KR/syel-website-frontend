"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Home,
  Info,
  Building2,
  FolderHeart,
  Newspaper,
  MessageCircle,
  Briefcase,
  ChevronDown,
  Zap,
  Truck,
  Wheat,
  Cpu,
  HardHat,
  Building,
  Mail,
  Phone,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { staggerContainer, staggerItem } from "@/lib/animations";

const navLinks = [
  { label: "Accueil", href: "/", icon: Home },
  { label: "À propos", href: "/about", icon: Info },
  { label: "Filiales", href: "/branches", icon: Building2, hasChildren: true },
  { label: "Projets", href: "/projects", icon: FolderHeart },
  { label: "Actualités", href: "/news", icon: Newspaper },
  { label: "Contact", href: "/contact", icon: MessageCircle },
];

const subsidiaryLinks = [
  { name: "Syel Énergie", href: "/branches/syel-energie", icon: Zap },
  { name: "Syel Transport", href: "/branches/syel-transport", icon: Truck },
  { name: "Syel Agroalimentaire", href: "/branches/syel-agroalimentaire", icon: Wheat },
  { name: "Syel Technologies", href: "/branches/syel-technologies", icon: Cpu },
  { name: "Syel BTP", href: "/branches/syel-btp", icon: HardHat },
  { name: "Syel Immobilier", href: "/branches/syel-immobilier", icon: Building },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const [branchesOpen, setBranchesOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setBranchesOpen(false);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-base-900/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed left-0 top-0 z-50 flex h-full w-[88vw] max-w-[380px] flex-col bg-base-800 shadow-2xl"
          >
            {/* ===== Header ===== */}
            <div className="flex items-center justify-between border-b border-base-700 px-5 py-4">
              <Link href="/" onClick={onClose} className="flex items-center gap-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary-500">
                  <Building2 className="w-4 h-4 text-white" />
                </div>
                <div className="flex items-baseline gap-0.5">
                  <span className="font-heading text-lg text-white">
                    Groupe
                  </span>
                  <span className="font-heading text-lg font-bold text-primary-300">
                    Syel
                  </span>
                </div>
              </Link>
              <button
                onClick={onClose}
                className="rounded-lg p-2 text-warm-500 hover:bg-base-700 hover:text-white transition-colors"
                aria-label="Fermer le menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* ===== Navigation ===== */}
            <motion.nav
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex-1 overflow-y-auto px-3 py-4"
            >
              <ul className="space-y-0.5">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const active = isActive(link.href);

                  if (link.hasChildren) {
                    return (
                      <motion.li key={link.href} variants={staggerItem}>
                        {/* Branches parent */}
                        <div className="flex items-center">
                          <Link
                            href={link.href}
                            onClick={onClose}
                            className={cn(
                              "flex flex-1 items-center gap-3 rounded-lg px-4 py-3 text-[15px] font-medium transition-colors",
                              active
                                ? "bg-primary-600/20 text-primary-300"
                                : "text-warm-300 hover:bg-base-700 hover:text-white"
                            )}
                          >
                            <Icon className="w-4.5 h-4.5 opacity-60" />
                            {link.label}
                          </Link>
                          <button
                            onClick={() => setBranchesOpen(!branchesOpen)}
                            className="p-3 text-warm-500 hover:text-white transition-colors rounded-lg hover:bg-base-700"
                            aria-label="Toggle branches"
                          >
                            <ChevronDown
                              className={cn(
                                "w-4 h-4 transition-transform duration-300",
                                branchesOpen && "rotate-180"
                              )}
                            />
                          </button>
                        </div>

                        {/* Subsidiary sub-links */}
                        <AnimatePresence>
                          {branchesOpen && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden ml-4 mt-1 space-y-0.5 border-l-2 border-base-700 pl-3"
                            >
                              {subsidiaryLinks.map((sub) => {
                                const SubIcon = sub.icon;
                                return (
                                  <li key={sub.href}>
                                    <Link
                                      href={sub.href}
                                      onClick={onClose}
                                      className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-warm-400 hover:text-primary-300 hover:bg-base-700 transition-colors"
                                    >
                                      <SubIcon className="w-3 h-3 opacity-50 shrink-0" />
                                      {sub.name}
                                    </Link>
                                  </li>
                                );
                              })}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </motion.li>
                    );
                  }

                  return (
                    <motion.li key={link.href} variants={staggerItem}>
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className={cn(
                          "flex items-center gap-3 rounded-lg px-4 py-3 text-[15px] font-medium transition-colors",
                          active
                            ? "bg-primary-600/20 text-primary-300"
                            : "text-warm-300 hover:bg-base-700 hover:text-white"
                        )}
                      >
                        <Icon className="w-4.5 h-4.5 opacity-60" />
                        {link.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              {/* ===== Contact Info ===== */}
              <div className="mt-6 border-t border-base-700 pt-5 px-2">
                <p className="text-[10px] font-bold uppercase tracking-widest text-warm-600 mb-3 px-2">
                  Contact
                </p>
                <a
                  href="mailto:info@groupesyel.cd"
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-warm-400 hover:text-primary-300 hover:bg-base-700 transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary-400 shrink-0" />
                  info@groupesyel.cd
                </a>
                <a
                  href="tel:+237233421580"
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-warm-400 hover:text-primary-300 hover:bg-base-700 transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary-400 shrink-0" />
                  +237 233 42 15 80
                </a>
              </div>
            </motion.nav>

            {/* ===== CTA Button ===== */}
            <div className="border-t border-base-700 p-4">
              <Link
                href="/careers"
                onClick={onClose}
                className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-primary-500 hover:bg-primary-400 text-white text-sm font-semibold rounded-full transition-colors shadow-md"
              >
                <Briefcase className="w-4 h-4" />
                Rejoignez-nous
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
