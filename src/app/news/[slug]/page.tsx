"use client";

import { useMemo } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, ArrowLeft, ArrowRight, User } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { articles } from "@/data/news";
import { formatDate } from "@/lib/utils";
import {
  fadeIn,
  fadeInUp,
  staggerContainer,
  staggerItem,
} from "@/lib/animations";
import { useInView } from "@/hooks/useInView";

export default function NewsArticlePage() {
  const { slug } = useParams<{ slug: string }>();

  const article = useMemo(
    () => articles.find((a) => a.slug === slug),
    [slug]
  );

  const relatedArticles = useMemo(() => {
    if (!article) return [];
    return articles
      .filter((a) => a.slug !== slug)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3);
  }, [article, slug]);

  const paragraphs = useMemo(
    () => (article ? article.content.split("\n\n") : []),
    [article]
  );

  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.2 });
  const { ref: bodyRef, isInView: bodyInView } = useInView();
  const { ref: relatedRef, isInView: relatedInView } = useInView();

  if (!article) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center section-padding">
        <div className="text-center">
          <h1 className="font-heading text-3xl font-bold text-base-800 mb-4">
            Article Not Found
          </h1>
          <p className="text-warm-600 mb-8">
            The article you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <Button href="/news" icon={<ArrowLeft className="h-4 w-4" />}>
            Back to News & Insights
          </Button>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Article Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base-900/90 via-base-900/50 to-base-900/20" />

        <div className="container-custom relative z-10 pb-16 pt-40">
          <motion.div
            ref={heroRef}
            variants={fadeInUp}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="max-w-3xl"
          >
            <Badge className="mb-6 bg-teal-500 text-white">
              {article.category}
            </Badge>
            <h1 className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl leading-tight">
              {article.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-warm-200">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                  <User className="h-4 w-4 text-white" />
                </div>
                <div>
                  <span className="font-medium text-white">
                    {article.author}
                  </span>
                  <span className="mx-2 text-warm-300">·</span>
                  <span className="text-sm text-warm-300">
                    {article.authorRole}
                  </span>
                </div>
              </div>
              <span className="text-warm-300">·</span>
              <span className="text-sm">{formatDate(article.date)}</span>
              <span className="text-warm-300">·</span>
              <span className="flex items-center gap-1 text-sm">
                <Clock className="h-4 w-4" />
                {article.readTime} min read
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Body */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            ref={bodyRef}
            variants={fadeIn}
            initial="hidden"
            animate={bodyInView ? "visible" : "hidden"}
            className="mx-auto max-w-3xl"
          >
            {/* Back link */}
            <Link
              href="/news"
              className="mb-12 inline-flex items-center gap-2 text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to News & Insights
            </Link>

            {/* Article content */}
            <article className="prose-article">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={
                    index === 0
                      ? "text-xl leading-relaxed text-warm-700 first-letter:float-left first-letter:mr-3 first-letter:text-6xl first-letter:font-heading first-letter:font-bold first-letter:text-base-700 first-letter:leading-[0.8]"
                      : "text-lg leading-[1.85] text-warm-600"
                  }
                >
                  {paragraph}
                </p>
              ))}
            </article>

            {/* Author Info */}
            <div className="mt-16 border-t border-warm-200 pt-10">
              <Card hoverable={false} className="p-8">
                <div className="flex items-center gap-5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary-100">
                    <User className="h-8 w-8 text-primary-500" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-teal-500 mb-1">
                      Written by
                    </p>
                    <p className="font-heading text-xl font-bold text-base-800">
                      {article.author}
                    </p>
                    <p className="text-warm-500">{article.authorRole}</p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="section-padding bg-warm-50">
          <div className="container-custom">
            <SectionHeading
              eyebrow="Keep Reading"
              title="Related Articles"
              highlight="Articles"
              centered
            />

            <motion.div
              ref={relatedRef}
              variants={staggerContainer}
              initial="hidden"
              animate={relatedInView ? "visible" : "hidden"}
              className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {relatedArticles.map((related) => (
                <motion.div key={related.slug} variants={staggerItem}>
                  <Link
                    href={`/news/${related.slug}`}
                    className="block h-full"
                  >
                    <Card className="flex h-full flex-col">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={related.image}
                          alt={related.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge variant="outline">{related.category}</Badge>
                          <span className="text-xs text-warm-400">
                            {formatDate(related.date)}
                          </span>
                        </div>
                        <h3 className="font-heading text-lg font-semibold text-base-800 leading-snug">
                          {related.title}
                        </h3>
                        <p className="mt-2 flex-1 text-sm text-warm-500 leading-relaxed">
                          {related.excerpt.length > 100
                            ? related.excerpt.slice(0, 100).trimEnd() + "..."
                            : related.excerpt}
                        </p>
                        <div className="mt-4 flex items-center justify-end border-t border-warm-100 pt-4">
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
    </>
  );
}
