import type { Metadata } from "next";
import { Hero } from "@/components/layout/Hero";
import { CTASection } from "@/components/layout/CTASection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Heart, Users, TrendingUp, Award, ExternalLink } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the Al Ashraf Group team. Explore career opportunities across our four business divisions in Karachi, Pakistan.",
};

const openPositions = [
  { id: "pos-001", title: "Senior Site Engineer",            division: "Construction & Real Estate", type: "Full-time", location: "Karachi",  description: "Lead on-site engineering operations for residential and commercial construction projects. Minimum 5 years experience in structural engineering." },
  { id: "pos-002", title: "Quality Control Manager",         division: "Dairy Products",             type: "Full-time", location: "Karachi",  description: "Oversee quality control processes across the dairy division's processing and distribution operations. Food science or related qualification required." },
  { id: "pos-003", title: "E-commerce Operations Executive", division: "E-commerce",                 type: "Full-time", location: "Karachi",  description: "Manage order fulfillment, vendor relations, and platform operations for our growing e-commerce platform." },
  { id: "pos-004", title: "Accounts Officer",                division: "Group Finance",               type: "Full-time", location: "Karachi",  description: "Support the Group Finance team with accounts payable, receivable, and monthly reporting across all divisions." },
  { id: "pos-005", title: "Business Development Manager",    division: "Construction & Real Estate", type: "Full-time", location: "Karachi",  description: "Identify and develop new project opportunities, client relationships, and strategic partnerships for the construction division." },
];

const cultureValues = [
  { icon: Users,     title: "Collaborative Culture",  description: "We work as one team across all four divisions, sharing knowledge, resources, and wins." },
  { icon: TrendingUp,title: "Growth Opportunities",   description: "A growing group means growing careers. We promote from within and invest in our people." },
  { icon: Heart,     title: "Community Impact",       description: "Work that matters — every project, product, and service makes a difference in Karachi." },
  { icon: Award,     title: "Performance Rewarded",   description: "We recognize and reward excellence. High performers thrive in the Al-Ashraf GOC environment." },
];

export default function CareersPage() {
  return (
    <>
      <Hero
        variant="inner"
        eyebrow="Join Our Team"
        headline="Build Your Career with Al Ashraf Group"
        subheadline="Be part of a growing, diversified group that values Strength, Performance, and Passion in everything it does."
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80"
        imageAlt="Al-Ashraf GOC team working together"
        breadcrumbs={[{ label: "Careers" }]}
      />

      {/* Culture */}
      <section className="py-section-lg bg-surface-1" aria-label="Company culture">
        <Container>
          <AnimatedSection>
            <SectionHeading eyebrow="Life at Al-Ashraf GOC" title="Why Work with Us?" description="A career at Al Ashraf Group means joining a team that is ambitious, diverse, and committed to building something lasting." align="center" />
          </AnimatedSection>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cultureValues.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="flex flex-col gap-4 rounded-2xl border border-white/5 bg-surface-4 p-6 hover:border-gold/20 hover:-translate-y-1 transition-all duration-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-warm-50">{item.title}</h3>
                  <p className="text-sm text-warm-400 leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Open Positions */}
      <section className="py-section-lg bg-surface-2" aria-label="Open positions">
        <Container>
          <AnimatedSection>
            <SectionHeading eyebrow="Open Roles" title={`${openPositions.length} Open Positions`} description="We're growing. See if there's a role for you below." />
          </AnimatedSection>
          <div className="mt-12 space-y-4">
            {openPositions.map((pos, i) => (
              <AnimatedSection key={pos.id} delay={i * 0.07}>
                <div className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-white/5 bg-surface-4 p-6 hover:border-gold/20 hover:bg-surface-5 transition-all duration-300">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="font-display font-bold text-lg text-warm-50 group-hover:text-gold transition-colors duration-200">{pos.title}</h3>
                      <span className="rounded-full bg-gold/10 text-gold text-xs font-semibold px-2.5 py-1 border border-gold/20">{pos.type}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-warm-500 mb-3">
                      <span className="font-medium text-teal-light">{pos.division}</span>
                      <span>·</span>
                      <span>{pos.location}</span>
                    </div>
                    <p className="text-sm text-warm-400 leading-relaxed">{pos.description}</p>
                  </div>
                  <div className="shrink-0">
                    <Link
                      href={`/contact?position=${encodeURIComponent(pos.title)}`}
                      className="inline-flex items-center gap-2 rounded-full border-2 border-gold/40 text-gold px-5 py-2.5 text-sm font-semibold hover:bg-gold hover:text-charcoal-800 hover:border-gold transition-all duration-300 active:scale-95 font-display"
                      aria-label={`Apply for ${pos.title}`}
                    >
                      Apply Now <ExternalLink className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Don't See Your Role?"
        heading="Send Us Your CV"
        description="We're always looking for talented people. If you don't see a suitable opening, send us your CV and we'll keep you in mind."
        primaryCta={{ label: "Send Your CV",     href: "/contact" }}
        secondaryCta={{ label: "Learn About Al-Ashraf GOC", href: "/about" }}
      />
    </>
  );
}
