"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Tabs } from "@/components/ui/Tabs";
import { articles } from "@/data/news";
import { cn, formatDate, truncate } from "@/lib/utils";
import {
  fadeIn,
  fadeInUp,
  staggerContainer,
  staggerItem,
} from "@/lib/animations";
import { useInView } from "@/hooks/useInView";

const categories = [
  "All",
  "Corporate",
  "Announcements",
  "Press",
  "Events",
  "Reports",
];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles = useMemo(() => {
    const sorted = [...articles].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    if (activeCategory === "All") return sorted;
    return sorted.filter((a) => a.category === activeCategory);
  }, [activeCategory]);

  const featuredArticle = filteredArticles[0];
  const remainingArticles = filteredArticles.slice(1);

  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.3 });
  const { ref: featuredRef, isInView: featuredInView } = useInView();
  const { ref: gridRef, isInView: gridInView } = useInView();

  return (
    <>
      {/* Page Hero */}
      <section className="relative flex min-h-[40vh] items-center gradient-primary overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-white/5" />
          <div className="absolute -bottom-16 right-10 h-64 w-64 rounded-full bg-white/5" />
          <div className="absolute left-1/2 top-1/3 h-48 w-48 rounded-full bg-white/[0.03]" />
        </div>

        <div className="container-custom relative z-10 section-padding">
          <motion.div
            ref={heroRef}
            variants={fadeInUp}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              News & Insights
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
              Stay informed about Groupe Syel&apos;s latest developments, industry
              insights, and corporate announcements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b border-warm-200 bg-white sticky top-0 z-20">
        <div className="container-custom py-4">
          <Tabs
            tabs={categories}
            activeTab={activeCategory}
            onTabChange={setActiveCategory}
          />
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="section-padding bg-warm-50">
          <div className="container-custom">
            <motion.div
              ref={featuredRef}
              variants={fadeIn}
              initial="hidden"
              animate={featuredInView ? "visible" : "hidden"}
            >
              <Link href={`/news/${featuredArticle.slug}`}>
                <Card className="overflow-hidden">
                  <div className="grid md:grid-cols-2">
                    <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[400px]">
                      <Image
                        src={featuredArticle.image}
                        alt={featuredArticle.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="flex flex-col justify-center p-8 md:p-12">
                      <div className="flex items-center gap-3 mb-4">
                        <Badge>{featuredArticle.category}</Badge>
                        <span className="text-sm text-warm-500">
                          {formatDate(featuredArticle.date)}
                        </span>
                      </div>
                      <h2 className="font-heading text-2xl font-bold text-base-800 md:text-3xl">
                        {featuredArticle.title}
                      </h2>
                      <p className="mt-4 text-warm-600 leading-relaxed">
                        {featuredArticle.excerpt}
                      </p>
                      <div className="mt-6 flex items-center gap-4 text-sm text-warm-500">
                        <span>By {featuredArticle.author}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {featuredArticle.readTime} min read
                        </span>
                      </div>
                      <div className="mt-6">
                        <span className="inline-flex items-center gap-2 font-medium text-teal-600 hover:text-teal-700 transition-colors">
                          Read Article
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      {remainingArticles.length > 0 && (
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              ref={gridRef}
              variants={staggerContainer}
              initial="hidden"
              animate={gridInView ? "visible" : "hidden"}
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {remainingArticles.map((article) => (
                <motion.div key={article.slug} variants={staggerItem}>
                  <Link href={`/news/${article.slug}`} className="block h-full">
                    <Card className="flex h-full flex-col">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge variant="outline">{article.category}</Badge>
                          <span className="text-xs text-warm-400">
                            {formatDate(article.date)}
                          </span>
                        </div>
                        <h3 className="font-heading text-lg font-semibold text-base-800 leading-snug">
                          {article.title}
                        </h3>
                        <p className="mt-2 flex-1 text-sm text-warm-500 leading-relaxed">
                          {truncate(article.excerpt, 120)}
                        </p>
                        <div className="mt-4 flex items-center justify-between border-t border-warm-100 pt-4">
                          <span className="flex items-center gap-1 text-xs text-warm-400">
                            <Clock className="h-3.5 w-3.5" />
                            {article.readTime} min read
                          </span>
                          <span className="inline-flex items-center gap-1 text-sm font-medium text-teal-600">
                            Read More
                            <ArrowRight className="h-3.5 w-3.5" />
                          </span>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {filteredArticles.length === 0 && (
        <section className="section-padding">
          <div className="container-custom text-center py-20">
            <p className="text-warm-500 text-lg">
              No articles found in this category.
            </p>
          </div>
        </section>
      )}
    </>
  );
}
