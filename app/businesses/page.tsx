import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/layout/Hero";
import { CTASection } from "@/components/layout/CTASection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { divisions } from "@/data/divisions";

export const metadata: Metadata = {
  title: "Our Businesses",
  description: "Explore Al Ashraf Group's four business divisions: Construction & Real Estate, Dairy Products, E-commerce, and Consumer Services.",
};

export default function BusinessesPage() {
  return (
    <>
      <Hero
        variant="inner"
        eyebrow="Our Businesses"
        headline="Four Divisions, One Purpose"
        subheadline="Each AGOC division operates with independence and focus while sharing the group's core values of Strength, Performance, and Passion."
        image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80"
        imageAlt="Al Ashraf Group businesses overview"
        breadcrumbs={[{ label: "Our Businesses" }]}
      />

      <section className="py-section-lg bg-surface-1" aria-label="Business divisions">
        <Container>
          <AnimatedSection>
            <SectionHeading
              eyebrow="Divisions"
              title="Explore Our Verticals"
              description="From infrastructure that shapes a city's skyline to fresh dairy products that reach breakfast tables — AGOC spans the full spectrum of Pakistani commerce."
            />
          </AnimatedSection>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {divisions.map((division, i) => (
              <AnimatedSection key={division.slug} delay={i * 0.1}>
                <div className="group relative overflow-hidden rounded-3xl bg-surface-4 border border-white/5 hover:border-gold/20 shadow-card hover:shadow-card-hover transition-all duration-300">
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={division.heroImage}
                      alt={division.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="overlay-card absolute inset-0" />
                  </div>
                  <div className="p-8">
                    <p className="text-eyebrow text-gold mb-3">{division.shortName} Division</p>
                    <h2 className="font-display font-bold text-display-md text-warm-50 mb-3">{division.name}</h2>
                    <p className="text-warm-400 leading-relaxed mb-6">{division.longDescription}</p>

                    {/* Highlights */}
                    <div className="grid grid-cols-3 gap-4 mb-8 border-t border-white/5 pt-6">
                      {division.highlights.map((h) => (
                        <div key={h.label} className="text-center">
                          <p className="font-display font-bold text-xl text-gold">{h.value}</p>
                          <p className="text-xs text-warm-500 mt-1">{h.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Services */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {division.services.map((s) => (
                        <span key={s} className="text-xs px-3 py-1.5 rounded-full bg-surface-5 text-warm-400 border border-white/8">
                          {s}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/businesses/${division.slug}`}
                      className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-charcoal-800 hover:bg-gold-light transition-all duration-300 active:scale-95 font-display"
                      aria-label={`Learn more about ${division.name}`}
                    >
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Inquiries"
        heading="Interested in Partnering With Us?"
        description="Whether you're looking for construction expertise, dairy supply, e-commerce partnerships, or services — we're here to help."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "View Projects", href: "/projects" }}
      />
    </>
  );
}
