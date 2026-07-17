import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/layout/Hero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NewsCard } from "@/components/ui/NewsCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { newsItems } from "@/data/news";

export const metadata: Metadata = {
  title: "News & Updates",
  description: "Stay up to date with the latest news, project announcements, and updates from Al Ashraf Group of Companies.",
};

export default function NewsPage() {
  return (
    <>
      <Hero
        variant="inner"
        eyebrow="News & Updates"
        headline="Latest from Al Ashraf Group"
        subheadline="Project milestones, division updates, and announcements from across the group."
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
        imageAlt="Al-Ashraf GOC news and updates"
        breadcrumbs={[{ label: "News & Updates" }]}
      />

      <section className="py-section-lg bg-surface-1" aria-label="News articles">
        <Container>
          <AnimatedSection>
            <SectionHeading eyebrow="All Articles" title="Group News & Announcements" />
          </AnimatedSection>

          {/* Featured */}
          {newsItems[0] && (
            <AnimatedSection delay={0.1} className="mt-12">
              <Link
                href={`/news/${newsItems[0].slug}`}
                className="group relative flex flex-col lg:flex-row overflow-hidden rounded-3xl bg-surface-4 border border-white/5 hover:border-gold/20 shadow-card hover:shadow-card-hover transition-all duration-300"
                aria-label={`Read featured article: ${newsItems[0].title}`}
              >
                <div className="relative h-72 lg:h-auto lg:w-1/2 overflow-hidden">
                  <img
                    src={newsItems[0].image}
                    alt={newsItems[0].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="overlay-card absolute inset-0" />
                  <span className="absolute top-4 left-4 rounded-full bg-gold/90 px-3 py-1 text-xs font-semibold text-charcoal-800 backdrop-blur-sm">
                    {newsItems[0].category} · Featured
                  </span>
                </div>
                <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center bg-surface-4">
                  <p className="text-eyebrow text-gold mb-3">Featured Story</p>
                  <h2 className="font-display font-bold text-display-md text-warm-50 mb-4 group-hover:text-gold transition-colors duration-200 leading-snug">
                    {newsItems[0].title}
                  </h2>
                  <p className="text-warm-400 text-body-lg leading-relaxed mb-6 line-clamp-3">
                    {newsItems[0].excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold group-hover:text-gold-light transition-colors duration-200">
                    Read article <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          )}

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.slice(1).map((item, i) => (
              <AnimatedSection key={item.slug} delay={i * 0.1}>
                <NewsCard item={item} className="h-full" />
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
