import type { Metadata } from "next";
import Image from "next/image";
import { teamMembers } from "@/data/team";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Our Team | Al Ashraf Group of Companies",
  description:
    "Meet the leadership team behind Al Ashraf Group of Companies - the visionaries driving excellence across construction, dairy, IT & Tech, and restaurants.",
};

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

export default function TeamPage() {
  return (
    <div className="bg-surface-1 min-h-screen">
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden" aria-label="Team hero">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(201,163,86,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(201,163,86,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/5 rounded-full filter blur-3xl pointer-events-none" />
        <Container className="relative z-10 text-center">
          <AnimatedSection>
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4 font-display">
              Al Ashraf Group of Companies
            </p>
            <h1 className="font-display font-bold text-display-lg text-warm-50 tracking-tight leading-none mb-6">
              Meet Our Leadership
            </h1>
            <p className="text-warm-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              The people behind Al-Ashraf GOC - united by values of integrity, passion, and an unwavering commitment to building something extraordinary.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Team Cards */}
      <section className="pb-section-lg" aria-label="Leadership team">
        <Container>
          <div className="flex flex-col gap-10">
            {teamMembers.map((member, i) => (
              <AnimatedSection key={member.id} delay={i * 0.1}>
                <div
                  id={member.id}
                  className="group bg-surface-4 border border-white/5 rounded-2xl hover:border-gold/20 transition-all duration-300 shadow-card hover:shadow-card-hover"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-8 p-8 lg:p-10">
                    {/* Round Photo */}
                    <div className="flex justify-center md:justify-start shrink-0">
                      <div className="relative h-40 w-40 rounded-full overflow-hidden ring-2 ring-gold/30 ring-offset-4 ring-offset-surface-4 group-hover:ring-gold transition-all duration-300">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover object-top"
                          sizes="160px"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-center">
                      <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3 font-display">
                        {member.title}
                      </p>
                      <h2 className="font-display font-bold text-2xl lg:text-3xl text-warm-50 mb-5 tracking-tight">
                        {member.name}
                      </h2>
                      <div className="w-12 h-0.5 bg-gold mb-6" />
                      <p className="text-warm-300 text-sm sm:text-base leading-relaxed mb-8">
                        {member.bio}
                      </p>

                      {(member.facebook || member.instagram || member.linkedIn) && (
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-warm-600 uppercase tracking-widest font-display mr-1">Connect</span>
                          {member.facebook && (
                            <a
                              href={member.facebook}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="h-9 w-9 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110"
                              style={{ backgroundColor: "#1877F2" }}
                              aria-label={`${member.name} on Facebook`}
                            >
                              <FacebookIcon className="h-4 w-4 text-white" />
                            </a>
                          )}
                          {member.instagram && (
                            <a
                              href={member.instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="h-9 w-9 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110"
                              style={{ background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)" }}
                              aria-label={`${member.name} on Instagram`}
                            >
                              <InstagramIcon className="h-4 w-4 text-white" />
                            </a>
                          )}
                          {member.linkedIn && (
                            <a
                              href={member.linkedIn}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="h-9 w-9 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110"
                              style={{ backgroundColor: "#0A66C2" }}
                              aria-label={`${member.name} on LinkedIn`}
                            >
                              <LinkedinIcon className="h-4 w-4 text-white" />
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}