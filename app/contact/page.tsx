import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Hero } from "@/components/layout/Hero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Al Ashraf Group of Companies. Reach our team in Karachi for construction inquiries, partnerships, careers, and more.",
};

const contactDetails = [
  { icon: MapPin, label: "Headquarters",  value: "Osif Arcade, Main University Rd, Block 15 Block 13 A Gulshan-e-Iqbal, Karachi, Pakistan" },
  { icon: Phone,  label: "Phone",         value: "(111) ASHRAF (274-723)", href: "tel:+92111274723" },
  { icon: Mail,   label: "Email",         value: "info@alashrafgoc.com", href: "mailto:info@alashrafgoc.com" },
  { icon: Clock,  label: "Office Hours",  value: "Monday – Saturday\n9:00 AM – 6:00 PM PKT" },
];

const divisionContacts = [
  { division: "Indus Enclave",    email: "info@indusenclave.com" },
  { division: "Viral Marketing",  email: "info@viralmarketingsolution.com" },
  { division: "ArmArch",          email: "info@armarchengineering.com" },
];

export default function ContactPage() {
  return (
    <>
      <Hero
        variant="inner"
        eyebrow="Get In Touch"
        headline="We'd Love to Hear from You"
        subheadline="Whether you have a project in mind, want to explore a partnership, or need information about our products and services — our team is here."
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80"
        imageAlt="Al Ashraf Group offices in Karachi"
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="py-section-lg bg-surface-1" aria-label="Contact information and form">
        <Container>
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-10">
              <AnimatedSection direction="right">
                <SectionHeading
                  eyebrow="Contact"
                  title="Reach Our Team"
                  description="Reach out and one of our team will get back to you within 1–2 business days."
                />
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.1} className="space-y-6">
                {contactDetails.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-warm-500 mb-1">{label}</p>
                      {href ? (
                        <a href={href} className="text-warm-300 hover:text-gold transition-colors duration-200 font-medium whitespace-pre-line">{value}</a>
                      ) : (
                        <p className="text-warm-300 font-medium whitespace-pre-line">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.2}>
                <h3 className="font-display font-bold text-lg text-warm-50 mb-4">Company Contacts</h3>
                <div className="space-y-3">
                  {divisionContacts.map((dc) => (
                    <div key={dc.division} className="flex items-center justify-between gap-4 py-3 border-b border-white/5">
                      <span className="text-sm text-warm-500">{dc.division}</span>
                      <a href={`mailto:${dc.email}`} className="text-sm text-gold hover:text-gold-light transition-colors duration-200 font-medium">{dc.email}</a>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Form */}
            <AnimatedSection direction="left" className="lg:col-span-3">
              <div className="rounded-3xl bg-surface-3 border border-white/5 shadow-card p-8 lg:p-10">
                <h2 className="font-display font-bold text-display-md text-warm-50 mb-2">Send Us a Message</h2>
                <p className="text-warm-500 text-sm mb-8">Fill in the form below and we&apos;ll respond within 1–2 business days.</p>
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Map */}
      <section className="pb-section bg-surface-1" aria-label="Office location map">
        <Container>
          <AnimatedSection delay={0.1} className="rounded-2xl overflow-hidden border border-white/5 relative">
            <div className="absolute inset-0 bg-surface-1/5 z-10 pointer-events-none" />
            <iframe
              src="https://maps.google.com/maps?q=W33H%2BQGF+Karachi+Pakistan&output=embed&z=17"
              width="100%"
              height="400"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.8) brightness(0.85)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Al Ashraf Group HQ — Osif Arcade, Gulshan-e-Iqbal, Karachi"
            />
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
