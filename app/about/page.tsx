import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Calendar, Building2 } from "lucide-react";
import { Hero } from "@/components/layout/Hero";
import { CTASection } from "@/components/layout/CTASection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TeamMemberCard } from "@/components/ui/TeamMemberCard";
import { ValueCard } from "@/components/ui/ValueCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { teamMembers } from "@/data/team";
import { Shield, Zap, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Al Ashraf Group of Companies — our story, mission, values, and the leadership team driving excellence across four business verticals in Pakistan.",
};

const timeline = [
  { year: "2017", title: "The Foundation",           description: "Al Ashraf Group of Companies is established in Karachi by Muhammad Ashraf, launching with a focus on construction and civil works in Gulshan-e-Iqbal." },
  { year: "2018", title: "First Major Project",       description: "Completion of the group's first major residential complex — establishing AGOC's reputation for quality construction." },
  { year: "2019", title: "Dairy Division Launch",     description: "AGOC enters the consumer goods sector with the launch of Al Ashraf Dairy Products, beginning distribution across Karachi." },
  { year: "2020", title: "Resilience Through Challenge", description: "The group navigates global disruption, maintaining operations across all divisions and delivering ongoing projects despite supply chain headwinds." },
  { year: "2021", title: "E-commerce Expansion",     description: "AGOC launches its e-commerce division, entering the rapidly growing Pakistani online retail market." },
  { year: "2022", title: "Consumer Services & Infrastructure", description: "The Consumer Services division is formalized; AGOC completes its first major infrastructure rehabilitation project." },
  { year: "2024", title: "Largest Project to Date",  description: "Groundbreaking on the North Nazimabad Mixed-Use Plaza — AGOC's most ambitious development at 200,000 sq ft." },
  { year: "Today","title": "A Diversified Group",   description: "AGOC operates four established divisions, employs 200+ professionals, and continues to expand across Karachi and beyond." },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        variant="inner"
        eyebrow="Who We Are"
        headline="Building More Than Structures — Building a Legacy"
        subheadline="Since 2017, Al Ashraf Group of Companies has grown from a Karachi construction firm into a diversified business group serving thousands across Pakistan."
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80"
        imageAlt="Al Ashraf Group leadership team"
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* ── Company Story ── */}
      <section className="py-section-lg bg-surface-1" aria-label="Company story">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right">
              <SectionHeading
                eyebrow="Our Story"
                title="From Karachi, For Pakistan"
                description="Founded in 2017 and headquartered in Karachi's Gulshan-e-Iqbal, Al Ashraf Group of Companies has grown into a diversified group spanning construction and real estate, dairy products, e-commerce, and consumer services."
              />
              <div className="mt-8 grid grid-cols-3 gap-6">
                {[
                  { icon: Calendar,  label: "Founded",   value: "2017" },
                  { icon: MapPin,    label: "HQ",        value: "Karachi" },
                  { icon: Building2, label: "Divisions", value: "4" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="text-center rounded-xl border border-white/5 bg-surface-4 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold mx-auto mb-2">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="font-display font-bold text-xl text-warm-50">{value}</p>
                    <p className="text-xs text-warm-500 uppercase tracking-wider mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left">
              <div className="relative rounded-3xl overflow-hidden h-96">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80"
                  alt="AGOC construction project"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs text-warm-400 uppercase tracking-wider mb-1">Mission</p>
                  <p className="text-warm-100 font-display font-semibold text-lg leading-snug">
                    "Building lasting impressions for clients and communities."
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* ── Mission / Vision / Values ── */}
      <section className="py-section-lg bg-surface-2" aria-label="Mission, vision, and values">
        <Container>
          <AnimatedSection>
            <SectionHeading
              eyebrow="What Drives Us"
              title="Mission, Vision & Values"
              align="center"
              description="Three values guide every decision we make — from which projects we take on to how we treat our clients, partners, and team."
            />
          </AnimatedSection>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <AnimatedSection direction="right" className="rounded-2xl border border-gold/20 bg-surface-4 p-8">
              <p className="text-eyebrow text-gold mb-3">Our Mission</p>
              <p className="font-display font-bold text-display-md text-warm-50 mb-4">
                Building lasting impressions for clients and communities.
              </p>
              <p className="text-warm-400 text-sm leading-relaxed">
                We deliver quality outcomes across every division — from a completed structure to a fresh dairy product — that create real, lasting value for our clients and the communities we serve.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="left" className="rounded-2xl border border-white/5 bg-surface-3 p-8">
              <p className="text-eyebrow text-gold mb-3">Our Vision</p>
              <p className="font-display font-bold text-display-md text-warm-50 mb-4">
                To become Pakistan's most trusted diversified business group.
              </p>
              <p className="text-warm-400 text-sm leading-relaxed">
                We aspire to build a group that is recognized nationally for its integrity, scale, and commitment to improving the lives of the people and communities it serves.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Strength",    accent: "gold" as const, description: "The structural integrity to deliver at scale — in our buildings, our supply chains, and our organizational culture. We do not cut corners. Ever." },
              { icon: Zap,    title: "Performance", accent: "gold" as const, description: "Measurable results matter to us. We track quality, timelines, and satisfaction across every project and product line, always striving to do better." },
              { icon: Heart,  title: "Passion",     accent: "teal" as const, description: "A genuine love for what we do and who we do it for. Our people are passionate about their work, and that energy shows in everything AGOC delivers." },
            ].map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <ValueCard {...v} className="h-full" />
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Timeline ── */}
      <section className="py-section-lg bg-surface-1" aria-label="Company timeline">
        <Container size="md">
          <AnimatedSection>
            <SectionHeading eyebrow="Our Journey" title="From 2017 to Today" align="center" />
          </AnimatedSection>

          <div className="mt-14 relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/5 hidden md:block" aria-hidden="true" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <AnimatedSection key={item.year} delay={i * 0.06}>
                  <div className={`flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center ${i % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                    <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                      <div className="inline-block border border-white/8 bg-surface-4 rounded-2xl p-5">
                        <h3 className="font-display font-bold text-warm-50 mb-1">{item.title}</h3>
                        <p className="text-sm text-warm-400 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                    <div className="flex-none flex h-14 w-14 items-center justify-center rounded-full bg-gold text-charcoal-800 font-display font-black text-xs text-center leading-tight shadow-gold-sm z-10">
                      {item.year}
                    </div>
                    <div className="flex-1 hidden md:block" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Team ── */}
      <section className="py-section-lg bg-surface-2" aria-label="Leadership team">
        <Container>
          <AnimatedSection>
            <SectionHeading eyebrow="Our Team" title="The People Behind AGOC" description="A team of experienced professionals driving our four divisions forward." align="center" />
          </AnimatedSection>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, i) => (
              <AnimatedSection key={member.id} delay={i * 0.1}>
                <TeamMemberCard member={member} />
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Group Structure ── */}
      <section className="py-section-lg bg-surface-3" aria-label="Group structure">
        <Container size="md">
          <AnimatedSection>
            <SectionHeading eyebrow="Group Structure" title="One Group, Four Verticals" light align="center" />
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="mt-12">
            <div className="flex flex-col items-center">
              <div className="bg-gold text-charcoal-800 font-display font-bold rounded-2xl px-8 py-4 text-center shadow-gold">
                <p className="text-xs uppercase tracking-widest mb-1 font-semibold">Group Holding</p>
                <p className="text-lg">Al Ashraf Group of Companies</p>
              </div>
              <div className="w-px h-10 bg-white/10" aria-hidden="true" />
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-3xl">
                {[
                  { name: "Construction\n& Real Estate", border: "border-gold/25" },
                  { name: "Dairy\nProducts",             border: "border-teal/25" },
                  { name: "E-commerce",                  border: "border-gold/25" },
                  { name: "Consumer\nServices",          border: "border-teal/25" },
                ].map((div) => (
                  <div key={div.name} className={`${div.border} border bg-surface-4 rounded-xl p-4 text-center text-warm-200 font-display font-semibold text-sm`}>
                    {div.name.split("\n").map((line, li) => <span key={li} className="block">{line}</span>)}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <CTASection
        eyebrow="Work With Us"
        heading="Ready to Build Something Great Together?"
        description="Reach out to explore partnership opportunities, project collaborations, or career openings."
        primaryCta={{ label: "Contact Our Team", href: "/contact" }}
        secondaryCta={{ label: "View Careers", href: "/careers" }}
      />
    </>
  );
}
