"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Users, FolderHeart, ArrowRight } from "lucide-react";

import { branches } from "@/data/branches";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Tabs } from "@/components/ui/Tabs";
import { CTABanner } from "@/components/sections/CTABanner";
import { useInView } from "@/hooks/useInView";
import {
  fadeIn,
  fadeInUp,
  staggerContainer,
  staggerItem,
} from "@/lib/animations";

const regionTabs = [
  "All",
  "Africa",
  "Europe",
  "Americas",
  "Asia",
  "Middle East",
];

export default function BranchesPage() {
  const [activeTab, setActiveTab] = useState("All");
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.2 });
  const { ref: gridRef, isInView: gridInView } = useInView({ threshold: 0.1 });

  const filteredBranches =
    activeTab === "All"
      ? branches
      : branches.filter((b) => b.region === activeTab);

  return (
    <main>
      {/* Page Hero */}
      <section className="relative flex min-h-[45vh] items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80"
          alt="Groupe Syel subsidiaries"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-base-900/85 to-base-800/70" />

        <div className="container-custom relative z-10 py-20">
          <motion.div
            ref={heroRef}
            variants={fadeInUp}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="max-w-2xl"
          >
            <h1 className="font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Our Subsidiaries
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-warm-200 md:text-xl">
              Discover the diversified business portfolio that powers Groupe Syel.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="border-b border-warm-200 bg-white">
        <div className="container-custom py-4">
          <Tabs
            tabs={regionTabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </div>
      </section>

      {/* Branch Cards Grid */}
      <section className="section-padding bg-warm-50">
        <div className="container-custom">
          <motion.div
            ref={gridRef}
            variants={staggerContainer}
            initial="hidden"
            animate={gridInView ? "visible" : "hidden"}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredBranches.map((branch) => (
              <motion.div key={branch.slug} variants={staggerItem}>
                <Card className="flex h-full flex-col">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={branch.image}
                      alt={branch.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      unoptimized
                    />
                    <div className="absolute left-4 top-4">
                      <Badge variant="primary">{branch.region}</Badge>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-heading text-xl font-bold text-base-800">
                      {branch.name}
                    </h3>

                    <div className="mt-2 flex items-center gap-1.5 text-sm text-warm-500">
                      <MapPin className="h-4 w-4 shrink-0" />
                      <span>
                        {branch.city}, {branch.country}
                      </span>
                    </div>

                    <p className="mt-3 flex-1 text-sm leading-relaxed text-warm-600">
                      {branch.description}
                    </p>

                    <div className="mt-4 flex items-center gap-6 border-t border-warm-100 pt-4">
                      <div className="flex items-center gap-1.5 text-sm text-warm-600">
                        <Users className="h-4 w-4 text-teal-500" />
                        <span className="font-semibold text-base-700">
                          {branch.memberCount}
                        </span>{" "}
                        members
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-warm-600">
                        <FolderHeart className="h-4 w-4 text-teal-500" />
                        <span className="font-semibold text-base-700">
                          {branch.projectCount}
                        </span>{" "}
                        projects
                      </div>
                    </div>

                    <Link
                      href={`/branches/${branch.slug}`}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-600 transition-colors hover:text-teal-700"
                    >
                      Explore Subsidiary
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredBranches.length === 0 && (
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="py-20 text-center"
            >
              <p className="text-lg text-warm-500">
                No subsidiaries found in this sector yet.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </main>
  );
}
