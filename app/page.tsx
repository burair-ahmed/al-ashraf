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

/* ── Branded Social Icons ── */
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { HeroSlider } from "@/components/home/HeroSlider";
import { CareersForm } from "@/components/home/CareersForm";
import { HomeContactSection } from "@/components/home/HomeContactSection";
import { CompanyCard } from "@/components/ui/CompanyCard";
import { companies } from "@/data/companies";

export const metadata: Metadata = {
  title: "Al Ashraf Group of Companies | Building Lasting Impressions",
  description:
    "Al-Ashraf GOC is a diversified Pakistani conglomerate headquartered in Karachi, delivering excellence across construction, dairy, IT & Tech, and restaurants since 2017.",
};

const teamMembers = [
  {
    name: "Ashraf Jabbar Qureshi",
    title: "Founder & Group Chairman",
    image: "/ashraf.webp",
    bio: "Hailing from a prestigious lineage known for fruit exporting, Ashraf Jabbar Qureshi diverged from this legacy to explore varied sectors — from restaurants to real estate, construction, and online retail. He founded Indus Enclave in Karachi and built his success on values of integrity, passion, and hard work. His deep love for architecture led him to establish an architectural firm, embodying a dynamic entrepreneurial spirit.",
    fb: "https://www.facebook.com/AshrafJQureshi?mibextid=PzaGJu",
    ig: "https://instagram.com/ashrafqureshipti?igshid=OGQ5ZDc2ODk2ZA==",
    ln: null
  },
  {
    name: "Dai Ali Daniyal",
    title: "Chief Executive Officer",
    image: "/dai.webp",
    bio: "Inheriting a strong entrepreneurial legacy, Dai Ali Daniyal honed his skills within the family business before earning degrees in Business Management and International Business. His strategic vision expanded the group across industries, and his passion for sustainable architecture led him to helm ArmArch, pioneering innovative designs in Pakistan. His journey reflects dedication, vision, and a relentless pursuit of excellence.",
    fb: "https://www.facebook.com/profile.php?id=61552761699032&mibextid=PzaGJu",
    ig: "https://instagram.com/thedaialidaniyal?igshid=OGQ5ZDc2ODk2ZA==",
    ln: "https://www.linkedin.com/in/dai-ali-daniyal-a50077183"
  },
  {
    name: "Eng. Armash Ashraf",
    title: "Chief Operating Officer",
    image: "/armash.webp",
    bio: "COO of Al-Ashraf Group and Chief Engineer at ArmArch, Armash holds a Bachelor's in Architectural Engineering from Heriot-Watt University. With a focus on sustainability, he completed 31 courses in sustainability techniques. He founded ArmArch during his studies to revolutionize Pakistan's construction industry, launching the firm in October 2023.",
    fb: null,
    ig: null,
    ln: "https://linkedin.com/in/armash-ashraf-5839381a0"
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
              <AnimatedSection key={member.name} delay={i * 0.1} className="h-full">
                <div className="group bg-[#040404] border border-gold/20 p-8 rounded-2xl flex flex-col items-center text-center relative hover:border-gold transition-all duration-300 h-full">
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

                  <div className="w-12 h-px bg-gold/30 my-4" />

                  <a
                    href={`/team#${member.name === "Ashraf Jabbar Qureshi" ? "tm-001" : member.name === "Dai Ali Daniyal" ? "tm-002" : "tm-003"}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 text-gold px-5 py-2 text-xs font-semibold hover:bg-gold hover:text-charcoal-900 transition-all duration-200 mb-4"
                  >
                    View Bio
                  </a>

                  {/* Social Media Icons — branded colours */}
                  <div className="flex gap-3 mt-auto">
                    {member.fb && (
                      <a
                        href={member.fb}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-8 w-8 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110"
                        style={{ backgroundColor: "#1877F2" }}
                        aria-label={`${member.name} on Facebook`}
                      >
                        <FacebookIcon className="h-4 w-4 text-white" />
                      </a>
                    )}
                    {member.ig && (
                      <a
                        href={member.ig}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-8 w-8 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110"
                        style={{ background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)" }}
                        aria-label={`${member.name} on Instagram`}
                      >
                        <InstagramIcon className="h-4 w-4 text-white" />
                      </a>
                    )}
                    {member.ln && (
                      <a
                        href={member.ln}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-8 w-8 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110"
                        style={{ backgroundColor: "#0A66C2" }}
                        aria-label={`${member.name} on LinkedIn`}
                      >
                        <LinkedinIcon className="h-4 w-4 text-white" />
                      </a>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>


        </Container>
      </section>

      {/* ── 5. Our Companies ── */}
      <section className="py-section bg-surface-2 border-t border-b border-white/5" id="companies" aria-label="Our Companies">
        <Container>
          <AnimatedSection className="text-center mb-12">
            <SectionHeading
              title="Our Companies"
              align="center"
              description="Explore the specialized business subsidiaries driving the Al Ashraf Group's growth."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies.slice(0, 3).map((company, i) => (
              <AnimatedSection key={company.slug} delay={(i % 3) * 0.1}>
                <CompanyCard company={company} className="h-full" />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="flex justify-center mt-12">
            <Link
              href="/companies"
              className="inline-flex items-center gap-2 rounded-full border border-gold/45 text-gold px-7 py-3 text-sm font-semibold hover:bg-gold hover:text-charcoal-900 transition-all duration-300 shadow-gold-sm hover:shadow-gold"
            >
              View All Companies
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
                  Osif Arcade, Main University Rd, Block 15 Block 13 A Gulshan-e-Iqbal, Karachi, Pakistan.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Styled Dark Theme Google Map Iframe */}
          <AnimatedSection delay={0.1} className="rounded-3xl overflow-hidden border border-white/5 relative">
            <div className="absolute inset-0 bg-surface-1/5 z-10 pointer-events-none" />
            <iframe
              src="https://maps.google.com/maps?q=W33H%2BQGF+Karachi+Pakistan&output=embed&z=17"
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
