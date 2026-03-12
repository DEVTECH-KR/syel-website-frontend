"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { useInView } from "@/hooks/useInView";
import { formatDate } from "@/lib/utils";
import { articles } from "@/data/news";

const categoryBadgeVariant: Record<string, "default" | "primary" | "gold" | "outline"> = {
  Corporate: "default",
  Announcements: "primary",
  Press: "outline",
  Events: "gold",
  Reports: "primary",
};

const latestArticles = articles.slice(0, 3);

export function NewsGrid() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="news" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Latest Updates"
          title="Actualités & Infos"
          highlight="Infos"
          centered
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {latestArticles.map((article) => (
            <motion.div key={article.slug} variants={staggerItem}>
              <Card className="flex h-full flex-col">
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={800}
                    height={500}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <Badge variant={categoryBadgeVariant[article.category] ?? "default"}>
                      {article.category}
                    </Badge>
                  </div>

                  <div className="mb-3 flex items-center gap-4 text-xs text-warm-500">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {formatDate(article.date)}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {article.readTime} min read
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold leading-snug text-base-800">
                    {article.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-warm-600">
                    {article.excerpt}
                  </p>

                  <Link
                    href={`/news/${article.slug}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-14 text-center">
          <Button href="/news" variant="outline" icon={<ArrowRight className="h-4 w-4" />}>
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
}
