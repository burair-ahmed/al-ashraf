import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight, Building2, Milk, ShoppingCart, Users, Laptop } from "lucide-react";
import { Hero } from "@/components/layout/Hero";
import { CTASection } from "@/components/layout/CTASection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CompanyCard } from "@/components/ui/CompanyCard";
import { divisions, getDivisionBySlug } from "@/data/divisions";
import { getCompaniesByDivisionSlug } from "@/data/companies";

interface Props { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return divisions.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const division = getDivisionBySlug(slug);
  if (!division) return {};
  return { title: division.name, description: division.description };
}

const iconMap: Record<string, React.ElementType> = { Building2, Milk, ShoppingCart, Users, Laptop };

export default async function DivisionPage({ params }: Props) {
  const { slug } = await params;
  const division = getDivisionBySlug(slug);
  if (!division) notFound();

  const Icon = iconMap[division.icon] ?? Building2;
  const isGold = division.accentColor === "gold";

  const divisionCompanies = getCompaniesByDivisionSlug(slug);

  return (
    <>
      <Hero
        variant="inner"
        eyebrow={`${division.shortName} Division`}
        headline={division.name}
        subheadline={division.tagline}
        image={division.heroImage}
        imageAlt={division.name}
        tintColor={isGold ? "charcoal" : "teal"}
        breadcrumbs={[
          { label: "Our Businesses", href: "/businesses" },
          { label: division.name },
        ]}
      />

      {/* ── Overview ── */}
      <section className="py-section-lg bg-surface-1" aria-label={`${division.name} overview`}>
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right">
              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl mb-6 ${isGold ? "bg-gold/10 text-gold" : "bg-teal/10 text-teal-light"}`}>
                <Icon className="h-7 w-7" />
              </div>
              <SectionHeading eyebrow={division.shortName} title="Division Overview" description={division.longDescription} />
              <div className="mt-8 grid grid-cols-3 gap-6">
                {division.highlights.map((h) => (
                  <div key={h.label} className="text-center border border-white/5 bg-surface-4 rounded-2xl p-4">
                    <p className={`font-display font-bold text-2xl ${isGold ? "text-gold" : "text-teal-light"}`}>{h.value}</p>
                    <p className="text-xs text-warm-500 mt-1">{h.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left">
              <div className="relative rounded-3xl overflow-hidden h-[26rem]">
                <Image
                  src={division.cardImage}
                  alt={division.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-charcoal-900/20" />
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* ── Services ── */}
      <section className="py-section-lg bg-surface-2" aria-label={`${division.name} services`}>
        <Container>
          <AnimatedSection>
            <SectionHeading eyebrow="What We Offer" title="Services & Capabilities" description={`Everything Al Ashraf's ${division.shortName} division delivers.`} />
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {division.services.map((service, i) => (
              <AnimatedSection key={service} delay={i * 0.07}>
                <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-surface-4 p-5 hover:border-gold/20 hover:-translate-y-0.5 transition-all duration-300">
                  <CheckCircle className={`h-5 w-5 shrink-0 ${isGold ? "text-gold" : "text-teal-light"}`} />
                  <span className="font-medium text-warm-200">{service}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Division Subsidiaries ── */}
      {divisionCompanies.length > 0 && (
        <section className="py-section-lg bg-surface-3" aria-label="Our Subsidiaries">
          <Container>
            <AnimatedSection className="flex items-end justify-between gap-6 mb-14 flex-wrap">
              <SectionHeading eyebrow="Our Subsidiaries" title="Child Companies" />
              <Link href="/companies" className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-light transition-colors duration-200 shrink-0">
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {divisionCompanies.map((company, i) => (
                <AnimatedSection key={company.slug} delay={i * 0.1}>
                  <CompanyCard company={company} className="h-full" />
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection
        eyebrow="Get In Touch"
        heading={`Interested in our ${division.shortName} Services?`}
        description={`Connect with the Al Ashraf ${division.name} team to discuss your requirements.`}
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "View All Businesses", href: "/businesses" }}
        variant="dark"
      />
    </>
  );
}
