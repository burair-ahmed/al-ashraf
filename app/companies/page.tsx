"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Hero } from "@/components/layout/Hero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CompanyCard } from "@/components/ui/CompanyCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { companies } from "@/data/companies";

export default function CompaniesPage() {
  return (
    <>
      <Hero
        variant="inner"
        eyebrow="Group Structure"
        headline="Our Subsidiaries"
        subheadline="Al Ashraf Group operates a diversified portfolio of child companies delivering industry-leading excellence across Pakistan."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=85"
        imageAlt="Al Ashraf child companies overview"
        breadcrumbs={[{ label: "Companies" }]}
      />

      <section className="py-section-lg bg-surface-1" aria-label="Companies grid">
        <Container>
          <AnimatedSection className="mb-14">
            <SectionHeading
              eyebrow="Our Companies"
              title="All Subsidiaries"
              description="Explore our specialized subsidiaries operating across construction, dairy, IT & Tech, and restaurants."
            />
          </AnimatedSection>

          {/* Companies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {companies.map((company, i) => (
                <motion.div
                  key={company.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: (i % 3) * 0.08 }}
                >
                  <CompanyCard company={company} className="h-full" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </Container>
      </section>
    </>
  );
}
