"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hero } from "@/components/layout/Hero";
import { CTASection } from "@/components/layout/CTASection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { projects, type ProjectStatus, type ProjectType } from "@/data/projects";

const statusFilters: { label: string; value: "all" | ProjectStatus }[] = [
  { label: "All",       value: "all" },
  { label: "Completed", value: "completed" },
  { label: "Ongoing",   value: "ongoing" },
  { label: "Upcoming",  value: "upcoming" },
];

const typeFilters: { label: string; value: "all" | ProjectType }[] = [
  { label: "All Types",       value: "all" },
  { label: "Residential",     value: "residential" },
  { label: "Commercial",      value: "commercial" },
  { label: "Infrastructure",  value: "infrastructure" },
  { label: "Mixed-Use",       value: "mixed-use" },
];

export default function ProjectsPage() {
  const [statusFilter, setStatusFilter] = useState<"all" | ProjectStatus>("all");
  const [typeFilter,   setTypeFilter]   = useState<"all" | ProjectType>("all");

  const filtered = projects.filter((p) => {
    const statusMatch = statusFilter === "all" || p.status === statusFilter;
    const typeMatch   = typeFilter   === "all" || p.type   === typeFilter;
    return statusMatch && typeMatch;
  });

  return (
    <>
      <Hero
        variant="inner"
        eyebrow="Portfolio"
        headline="Our Projects"
        subheadline="From residential towers to critical infrastructure — a portfolio built on precision, quality, and commitment."
        image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80"
        imageAlt="Al Ashraf construction projects"
        breadcrumbs={[{ label: "Projects" }]}
      />

      <section className="py-section-lg bg-surface-1" aria-label="Projects grid">
        <Container>
          <AnimatedSection>
            <SectionHeading
              eyebrow="Construction & Real Estate"
              title={`${filtered.length} Project${filtered.length !== 1 ? "s" : ""}`}
            />
          </AnimatedSection>

          {/* Filters */}
          <AnimatedSection delay={0.1} className="mt-8 flex flex-col sm:flex-row gap-4 flex-wrap">
            <div className="flex gap-2 flex-wrap">
              {statusFilters.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setStatusFilter(f.value)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    statusFilter === f.value
                      ? "bg-gold text-charcoal-800 shadow-gold-sm"
                      : "bg-surface-4 border border-white/8 text-warm-400 hover:border-gold/40 hover:text-gold"
                  }`}
                  aria-pressed={statusFilter === f.value}
                >
                  {f.label}
                </button>
              ))}
            </div>
            <div className="flex gap-2 flex-wrap">
              {typeFilters.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setTypeFilter(f.value)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    typeFilter === f.value
                      ? "bg-surface-5 border border-warm-400/40 text-warm-100"
                      : "bg-surface-4 border border-white/8 text-warm-400 hover:border-warm-400/40 hover:text-warm-200"
                  }`}
                  aria-pressed={typeFilter === f.value}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Grid */}
          <AnimatePresence mode="sync">
            {filtered.length > 0 ? (
              <motion.div layout className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filtered.map((project) => (
                  <motion.div
                    key={project.slug}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProjectCard project={project} className="h-full" />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-16 text-center">
                <p className="text-warm-500 text-lg">No projects match the selected filters.</p>
                <button
                  onClick={() => { setStatusFilter("all"); setTypeFilter("all"); }}
                  className="mt-4 text-gold hover:text-gold-light text-sm font-semibold transition-colors duration-200"
                >
                  Clear filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </section>

      <CTASection
        eyebrow="Start a Project"
        heading="Have a Project in Mind?"
        description="Our construction and real estate team is ready to discuss your requirements — from feasibility to final handover."
        primaryCta={{ label: "Get in Touch", href: "/contact" }}
        secondaryCta={{ label: "About Al-Ashraf GOC",  href: "/about" }}
      />
    </>
  );
}
