"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const contactDetails = [
  {
    icon: MapPin,
    label: "Headquarters",
    value: "Osif Arcade, W33H+QGF, Main University Rd, Block 15 Block 13 A Gulshan-e-Iqbal, Karachi, Pakistan",
  },
  {
    icon: Phone,
    label: "Phone Numbers",
    value: "(111) ASHRAF (274-723)",
    href: "tel:+92111274723",
  },
  {
    icon: Mail,
    label: "General Email",
    value: "info@alashrafgoc.com",
    href: "mailto:info@alashrafgoc.com",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Monday – Saturday\n9:00 AM – 6:00 PM PKT",
  },
];

export function HomeContactSection() {
  return (
    <section className="py-section-lg bg-surface-2 border-t border-white/5" id="contact" aria-label="Contact us">
      <Container>
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Left Column: Minimalist Contact Info */}
          <div className="lg:col-span-2 space-y-10">
            <AnimatedSection direction="right">
              <SectionHeading
                eyebrow="Get In Touch"
                title="Contact Us"
                description="Have any questions or inquiry? Drop us a message, and our team will connect with you shortly."
              />
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1} className="space-y-8">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex gap-4 items-start group">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold border border-gold/20 group-hover:bg-gold group-hover:text-charcoal-900 transition-all duration-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-warm-500 mb-1.5 font-display">
                      {label}
                    </h4>
                    {href ? (
                      <a
                        href={href}
                        className="text-warm-200 hover:text-gold transition-colors duration-200 font-medium whitespace-pre-line text-sm leading-relaxed"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-warm-200 font-medium whitespace-pre-line text-sm leading-relaxed">
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </AnimatedSection>
          </div>

          {/* Right Column: Premium Contact Form */}
          <AnimatedSection direction="left" className="lg:col-span-3">
            <div className="rounded-3xl bg-surface-3/60 border border-white/5 shadow-card backdrop-blur-sm p-8 lg:p-10 relative overflow-hidden group hover:border-gold/20 transition-all duration-300">
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 h-40 w-40 bg-gold/5 rounded-full filter blur-[80px] pointer-events-none" />

              <h3 className="font-display font-bold text-display-md text-warm-50 mb-2">
                Send Us a Message
              </h3>
              <p className="text-warm-500 text-sm mb-8 leading-relaxed">
                Fill out the form below. We&apos;ll route your request to the appropriate division.
              </p>

              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
