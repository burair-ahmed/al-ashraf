import type { Metadata } from "next";
import Link from "next/link";
import {
  Compass,
  Sparkles,
  Award,
  ArrowRight,
  TrendingUp,
  Target
} from "lucide-react";

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { HeroSlider } from "@/components/home/HeroSlider";
import { CareersForm } from "@/components/home/CareersForm";
import { HomeContactSection } from "@/components/home/HomeContactSection";

export const metadata: Metadata = {
  title: "Al Ashraf Group of Companies | Building Lasting Impressions",
  description:
    "Al-Ashraf GOC is a diversified Pakistani conglomerate headquartered in Karachi, delivering excellence across construction, dairy, e-commerce, and consumer services since 2017.",
};

const teamMembers = [
  {
    name: "Ashraf Jabbar Qureshi",
    title: "Founder & Group Chairman",
    image: "/ashraf.webp",
    fb: "#",
    ln: "#",
    tw: "#"
  },
  {
    name: "Dai Ali Daniyal",
    title: "Chief Executive Officer",
    image: "/dai.webp",
    fb: "#",
    ln: "#",
    tw: "#"
  },
  {
    name: "Armash Ashraf",
    title: "Chief Operating Officer",
    image: "/armash.webp",
    fb: "#",
    ln: "#",
    tw: "#"
  }
];

export default function HomePage() {
  return (
    <div className="bg-surface-1">
      {/* ── 1. Hero Image Slider ── */}
      <HeroSlider />

      {/* ── 2. Company Overview ── */}
      <section className="py-section-lg bg-surface-1 relative" id="about" aria-label="Company Overview">
        {/* Subtle grid patterns */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(201,163,86,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(201,163,86,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="font-display font-bold text-display-md text-gold uppercase tracking-widest mb-6">
                Al Ashraf Group of Companies
              </h2>
            </AnimatedSection>
            
            <AnimatedSection delay={0.15}>
              <p className="text-body-lg text-warm-300 leading-relaxed font-sans font-light">
                The people who make up the team of Al-Ashraf Group of Companies embody our values of strength, performance and passion. Our employees have strong commitment to these ideals, which has contributed significantly to the progressive growth and success. Our greatest competitive advantage is the expertise and passion of our people. We are motivated to achieve the elements needed to provide the project success and build structure and roadways that will leave a lasting impression for our clients, our society and our communities.
              </p>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* ── 3. Three Pillars (Vision, Mission, Values) ── */}
      <section className="py-section bg-surface-2 border-t border-b border-white/5" aria-label="Pillars">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Vision */}
            <AnimatedSection delay={0.1}>
              <div className="group h-full rounded-2xl bg-surface-3/40 border border-white/5 p-8 hover:border-gold/20 hover:bg-surface-3/70 transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 h-24 w-24 bg-gold/5 rounded-full filter blur-xl pointer-events-none" />
                <div>
                  <div className="h-12 w-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center mb-6 border border-gold/20">
                    <Target className="h-6 w-6" />
                  </div>
                  <h3 className="font-display font-bold text-display-md text-warm-50 mb-4 tracking-tight">
                    VISION
                  </h3>
                  <p className="text-warm-400 text-sm leading-relaxed">
                    To provide the foundation of society for the future, growth and progress, embracing change with a commitment to a brighter tomorrow.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Mission */}
            <AnimatedSection delay={0.2}>
              <div className="group h-full rounded-2xl bg-surface-3/40 border border-white/5 p-8 hover:border-gold/20 hover:bg-surface-3/70 transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 h-24 w-24 bg-gold/5 rounded-full filter blur-xl pointer-events-none" />
                <div>
                  <div className="h-12 w-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center mb-6 border border-gold/20">
                    <Compass className="h-6 w-6" />
                  </div>
                  <h3 className="font-display font-bold text-display-md text-warm-50 mb-4 tracking-tight">
                    MISSION
                  </h3>
                  <p className="text-warm-400 text-sm leading-relaxed">
                    To aspire to be the most esteemed and sought after company in our industry, proactively committed to providing unparalleled value for our esteemed stakeholders.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Values */}
            <AnimatedSection delay={0.3}>
              <div className="group h-full rounded-2xl bg-surface-3/40 border border-white/5 p-8 hover:border-gold/20 hover:bg-surface-3/70 transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 h-24 w-24 bg-gold/5 rounded-full filter blur-xl pointer-events-none" />
                <div>
                  <div className="h-12 w-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center mb-6 border border-gold/20">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <h3 className="font-display font-bold text-display-md text-warm-50 mb-4 tracking-tight">
                    VALUES
                  </h3>
                  <p className="text-warm-400 text-sm leading-relaxed">
                    We&apos;re a trusted partner with a solid track record and a skilled team, ensuring excellence and innovation, our commitment extends to our people, customers, and communities, executing care for all and the environment.
                  </p>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </Container>
      </section>

      {/* ── 4. Our Team ── */}
      <section className="py-section bg-surface-1" id="team" aria-label="Our team">
        <Container>
          <AnimatedSection className="text-center mb-12">
            <SectionHeading
              title="OUR TEAM"
              align="center"
              description="Meet the core leadership driving the Al Ashraf Group forward."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.1}>
                <div className="group bg-[#040404] border border-gold/20 p-8 rounded-2xl flex flex-col items-center text-center relative hover:border-gold transition-all duration-300">
                  {/* Photo with double border container */}
                  <div className="relative h-32 w-32 rounded-full overflow-hidden border border-gold/30 p-1.5 bg-black/60 mb-6 group-hover:scale-105 transition-all duration-300">
                    <div className="relative h-full w-full rounded-full overflow-hidden border border-gold/10">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="object-cover h-full w-full"
                      />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-xl text-warm-50 mb-1">
                    {member.name}
                  </h3>
                  <p className="font-display font-semibold text-xs text-gold uppercase tracking-wider">
                    {member.title}
                  </p>

                  <div className="w-12 h-px bg-gold/30 my-5" />

                  {/* Social Media Icons */}
                  <div className="flex gap-4">
                    <a
                      href={member.fb}
                      className="h-8 w-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-warm-400 hover:bg-gold hover:text-charcoal-900 transition-colors duration-200"
                      aria-label="Facebook Profile"
                    >
                      <FacebookIcon className="h-4 w-4" />
                    </a>
                    <a
                      href={member.ln}
                      className="h-8 w-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-warm-400 hover:bg-gold hover:text-charcoal-900 transition-colors duration-200"
                      aria-label="LinkedIn Profile"
                    >
                      <LinkedinIcon className="h-4 w-4" />
                    </a>
                    <a
                      href={member.tw}
                      className="h-8 w-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-warm-400 hover:bg-gold hover:text-charcoal-900 transition-colors duration-200"
                      aria-label="Twitter Profile"
                    >
                      <TwitterIcon className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="flex justify-center mt-10">
            <Link
              href="/about#team"
              className="inline-flex items-center gap-2 rounded-full border border-gold/40 text-gold px-6 py-2.5 text-sm font-semibold hover:bg-gold hover:text-charcoal-900 transition-all duration-300"
            >
              View More
            </Link>
          </AnimatedSection>
        </Container>
      </section>

      {/* ── 5. Our Portfolio ── */}
      <section className="py-section bg-surface-2 border-t border-b border-white/5" id="portfolio" aria-label="Our Portfolio">
        <Container>
          <AnimatedSection className="text-center mb-12">
            <SectionHeading
              title="Our Portfolio"
              align="center"
              description="A showcase of our diverse real estate and business subsidiaries."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Indus Enclave */}
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-3xl border border-gold/10 p-8 flex flex-col items-center justify-center min-h-[260px] shadow-sm hover:shadow-md hover:border-gold/30 hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex flex-col items-center text-center">
                  {/* Indus Enclave Logo */}
                  <div className="h-20 flex items-center justify-center mb-4">
                    <img
                      src="/indus-logo.png"
                      alt="Indus Enclave Logo"
                      className="max-h-full w-auto object-contain"
                    />
                  </div>
                  <h4 className="font-display font-black text-xl text-[#0F172A] tracking-wider uppercase">
                    Indus Enclave
                  </h4>
                  <p className="text-[#64748B] text-[10px] uppercase tracking-widest mt-1 font-semibold font-display">
                    Premium Real Estate
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Card 2: Viral Marketing */}
            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-3xl border border-gold/10 p-8 flex flex-col items-center justify-center min-h-[260px] shadow-sm hover:shadow-md hover:border-gold/30 hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex flex-col items-center text-center">
                  {/* Viral Marketing Logo */}
                  <div className="h-20 flex items-center justify-center mb-4">
                    <img
                      src="/viral-logo.png"
                      alt="Viral Marketing Logo"
                      className="max-h-full w-auto object-contain"
                    />
                  </div>
                  <h4 className="font-display font-black text-xl text-[#0F172A] tracking-wider uppercase">
                    Viral Marketing
                  </h4>
                  <p className="text-[#64748B] text-[10px] uppercase tracking-widest mt-1 font-semibold font-display">
                    Commercial Outreach
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Card 3: Arm Arch */}
            <AnimatedSection delay={0.3}>
              <div className="bg-white rounded-3xl border border-gold/10 p-8 flex flex-col items-center justify-center min-h-[260px] shadow-sm hover:shadow-md hover:border-gold/30 hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex flex-col items-center text-center">
                  {/* ArmArch Logo */}
                  <div className="h-20 flex items-center justify-center mb-4">
                    <img
                      src="/armarch-logo.png"
                      alt="ArmArch Logo"
                      className="max-h-full w-auto object-contain"
                    />
                  </div>
                  <h4 className="font-display font-black text-xl text-[#0F172A] tracking-widest uppercase">
                    ArmArch
                  </h4>
                  <p className="text-[#64748B] text-[10px] uppercase tracking-widest mt-1 font-semibold font-display">
                    Architecture & Construction
                  </p>
                </div>
              </div>
            </AnimatedSection>

          </div>

          <AnimatedSection className="flex justify-center mt-10">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-gold/40 text-gold px-6 py-2.5 text-sm font-semibold hover:bg-gold hover:text-charcoal-900 transition-all duration-300"
            >
              View More
            </Link>
          </AnimatedSection>
        </Container>
      </section>

      {/* ── 6. Our Location ── */}
      <section className="py-section bg-surface-1" aria-label="Our Location">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-8">
            <AnimatedSection direction="right">
              <SectionHeading
                eyebrow="Coordinates"
                title="OUR LOCATION"
                description="Drop by our headquarters or send us post. We are centrally located in Gulshan-e-Iqbal, Karachi."
              />
            </AnimatedSection>
            
            <AnimatedSection direction="left" className="lg:pl-8">
              <div className="p-6 bg-surface-3/40 border border-white/5 rounded-2xl hover:border-gold/20 transition-colors duration-300">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-gold mb-2 font-display">
                  Corporate Head Office
                </h4>
                <p className="text-warm-300 text-sm leading-relaxed font-light">
                  Plot # B-02, Main University Rd, Block 10 Gulshan-e-Iqbal, Karachi, Pakistan.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Styled Dark Theme Google Map Iframe */}
          <AnimatedSection delay={0.1} className="rounded-3xl overflow-hidden border border-white/5 relative">
            <div className="absolute inset-0 bg-surface-1/5 z-10 pointer-events-none" />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.7046!2d67.0943!3d24.9056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e856e49b955%3A0xbc56b1db94dd8e86!2sGulshan-e-Iqbal%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1719000000000!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.8) brightness(0.85)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Al Ashraf Group Head Office Map Location"
            />
          </AnimatedSection>
        </Container>
      </section>

      {/* ── 7. Careers ── */}
      <section className="py-section bg-surface-2 border-t border-b border-white/5" id="careers" aria-label="Careers form">
        <Container>
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            
            {/* Left side details */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatedSection direction="right">
                <SectionHeading
                  eyebrow="Opportunities"
                  title="CAREERS"
                  description="We are always looking for passionate, driven individuals to join our team across our diverse business verticals."
                />
              </AnimatedSection>
              
              <AnimatedSection direction="right" delay={0.1} className="space-y-4">
                <div className="flex gap-4 items-center">
                  <div className="h-2 w-2 rounded-full bg-gold" />
                  <p className="text-warm-300 text-sm font-light">Direct career progression</p>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="h-2 w-2 rounded-full bg-gold" />
                  <p className="text-warm-300 text-sm font-light">Collaborative corporate culture</p>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="h-2 w-2 rounded-full bg-gold" />
                  <p className="text-warm-300 text-sm font-light">Professional environment in Karachi</p>
                </div>
              </AnimatedSection>
            </div>

            {/* Right side form: Gold-toned container card */}
            <AnimatedSection direction="left" className="lg:col-span-3">
              <div className="rounded-3xl bg-gold-900/10 border border-gold/30 shadow-card backdrop-blur-sm p-8 lg:p-10 relative overflow-hidden group hover:border-gold/50 transition-all duration-300">
                <div className="absolute top-0 right-0 h-40 w-40 bg-gold/5 rounded-full filter blur-[80px] pointer-events-none" />
                
                <h3 className="font-display font-bold text-display-md text-gold mb-2">
                  To Join Us
                </h3>
                <p className="text-warm-400 text-sm mb-6 leading-relaxed">
                  Enter your details and upload your CV/Resume to get started.
                </p>

                <CareersForm />
              </div>
            </AnimatedSection>

          </div>
        </Container>
      </section>

      {/* ── 8. Contact Us ── */}
      <HomeContactSection />
    </div>
  );
}
