import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Tag, User, ArrowLeft } from "lucide-react";
import { CTASection } from "@/components/layout/CTASection";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { NewsCard } from "@/components/ui/NewsCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { newsItems, getNewsBySlug } from "@/data/news";
import { formatDate } from "@/lib/utils";

interface Props { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return newsItems.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  if (!item) return {};
  return { title: item.title, description: item.excerpt };
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  if (!item) notFound();

  const related = newsItems.filter((n) => n.slug !== item.slug).slice(0, 3);

  return (
    <>
      {/* Article Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden bg-surface-1" aria-label="Article header">
        <Image src={item.image} alt={item.title} fill className="object-cover" priority sizes="100vw" />
        <div className="overlay-hero absolute inset-0" />
        <div className="relative z-10 h-full flex flex-col justify-end mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-12 pt-36">
          <Breadcrumbs items={[{ label: "News", href: "/news" }, { label: item.title }]} light className="mb-6" />
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/90 px-3 py-1 text-xs font-semibold text-charcoal-800 mb-4 w-fit">
            <Tag className="h-3 w-3" />{item.category}
          </span>
          <h1 className="font-display font-bold text-display-xl text-warm-50">{item.title}</h1>
        </div>
      </section>

      {/* Article body */}
      <section className="py-section-lg bg-surface-1" aria-label="Article content">
        <Container size="sm">
          <AnimatedSection>
            <div className="flex flex-wrap items-center gap-4 text-sm text-warm-500 pb-8 mb-8 border-b border-white/5">
              <span className="flex items-center gap-2"><User className="h-4 w-4 text-gold" />{item.author}</span>
              <span className="flex items-center gap-2"><Calendar className="h-4 w-4 text-gold" />{formatDate(item.date)}</span>
            </div>
            <div>
              {item.content.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-warm-400 leading-relaxed mb-5 text-body-lg">{paragraph}</p>
              ))}
            </div>
            <div className="mt-12 pt-8 border-t border-white/5">
              <Link href="/news" className="inline-flex items-center gap-2 text-sm text-gold hover:text-gold-light transition-colors duration-200 font-semibold">
                <ArrowLeft className="h-4 w-4" /> Back to all news
              </Link>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="py-section-lg bg-surface-2" aria-label="Related news">
          <Container>
            <h2 className="font-display font-bold text-display-md text-warm-50 mb-10">More News</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((n, i) => (
                <AnimatedSection key={n.slug} delay={i * 0.1}>
                  <NewsCard item={n} className="h-full" />
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection
        eyebrow="Stay Connected"
        heading="Want to Hear More from AGOC?"
        description="Follow us on social media or reach out directly to learn about projects, products, and opportunities."
        primaryCta={{ label: "Contact Us",    href: "/contact" }}
        secondaryCta={{ label: "View All News", href: "/news" }}
      />
    </>
  );
}
