import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar, Ruler, CheckCircle, ArrowLeft } from "lucide-react";
import { CTASection } from "@/components/layout/CTASection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { projects, getProjectBySlug } from "@/data/projects";
import { cn } from "@/lib/utils";

interface Props { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return { title: project.name, description: project.description };
}

const statusConfig = {
  completed: { label: "Completed", className: "bg-emerald-900/50 text-emerald-300 border border-emerald-800/40" },
  ongoing:   { label: "Ongoing",   className: "bg-gold/15 text-gold border border-gold/30" },
  upcoming:  { label: "Upcoming",  className: "bg-teal/15 text-teal-light border border-teal/30" },
};

const typeConfig = {
  residential:    "Residential",
  commercial:     "Commercial",
  infrastructure: "Infrastructure",
  "mixed-use":    "Mixed-Use",
};

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const status = statusConfig[project.status];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden bg-surface-1" aria-label="Project header">
        <Image src={project.heroImage} alt={project.name} fill className="object-cover" priority sizes="100vw" />
        <div className="overlay-hero absolute inset-0" />
        <div className="relative z-10 h-full flex flex-col justify-end mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 pt-36">
          <Breadcrumbs items={[{ label: "Projects", href: "/projects" }, { label: project.name }]} light className="mb-6" />
          <div className="flex flex-wrap gap-2 mb-4">
            <span className={cn("rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm", status.className)}>{status.label}</span>
            <span className="rounded-full px-3 py-1 text-xs font-semibold bg-black/40 text-warm-300 backdrop-blur-sm border border-white/10">{typeConfig[project.type]}</span>
          </div>
          <h1 className="font-display font-bold text-display-xl text-warm-50 max-w-3xl">{project.name}</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-section-lg bg-surface-1" aria-label="Project details">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              <AnimatedSection>
                <SectionHeading eyebrow="Overview" title="Project Description" />
                <p className="mt-6 text-body-lg text-warm-400">{project.description}</p>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <h2 className="font-display font-bold text-xl text-warm-50 mb-5">Scope of Work</h2>
                <ul className="space-y-3">
                  {project.scope.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-warm-400">
                      <CheckCircle className="h-5 w-5 text-gold shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

              {project.gallery.length > 1 && (
                <AnimatedSection delay={0.2}>
                  <h2 className="font-display font-bold text-xl text-warm-50 mb-5">Project Gallery</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {project.gallery.map((img, i) => (
                      <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/5">
                        <Image
                          src={img}
                          alt={`${project.name} — photo ${i + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 50vw, 33vw"
                        />
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              )}
            </div>

            {/* Sidebar */}
            <AnimatedSection direction="left" className="lg:col-span-1">
              <div className="sticky top-24 rounded-2xl border border-white/8 bg-surface-4 p-6 space-y-5">
                <h2 className="font-display font-bold text-lg text-warm-50">Project Details</h2>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-xs text-warm-500 uppercase tracking-wider mb-1">Location</dt>
                    <dd className="flex items-center gap-2 text-warm-200 font-medium">
                      <MapPin className="h-4 w-4 text-gold" />{project.location}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-warm-500 uppercase tracking-wider mb-1">Status</dt>
                    <dd><span className={cn("rounded-full px-3 py-1 text-xs font-semibold", status.className)}>{status.label}</span></dd>
                  </div>
                  <div>
                    <dt className="text-xs text-warm-500 uppercase tracking-wider mb-1">Type</dt>
                    <dd className="text-warm-200 font-medium">{typeConfig[project.type]}</dd>
                  </div>
                  {project.completionDate && (
                    <div>
                      <dt className="text-xs text-warm-500 uppercase tracking-wider mb-1">Completed</dt>
                      <dd className="flex items-center gap-2 text-warm-200 font-medium">
                        <Calendar className="h-4 w-4 text-gold" />{project.completionDate}
                      </dd>
                    </div>
                  )}
                  {project.floorArea && (
                    <div>
                      <dt className="text-xs text-warm-500 uppercase tracking-wider mb-1">Floor Area</dt>
                      <dd className="flex items-center gap-2 text-warm-200 font-medium">
                        <Ruler className="h-4 w-4 text-gold" />{project.floorArea}
                      </dd>
                    </div>
                  )}
                </dl>
                <div className="pt-4 border-t border-white/5 space-y-3">
                  <Link href="/contact" className="block w-full rounded-full bg-gold py-3 text-center text-sm font-semibold text-charcoal-800 hover:bg-gold-light transition-colors duration-200 font-display">
                    Enquire About This Project
                  </Link>
                  <Link href="/projects" className="flex items-center justify-center gap-2 text-sm text-warm-500 hover:text-gold transition-colors duration-200">
                    <ArrowLeft className="h-4 w-4" /> Back to Projects
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Work With Us"
        heading="Start Your Next Project With AGOC"
        description="Our team handles every stage — from feasibility and design to construction and handover."
        primaryCta={{ label: "Contact Our Team", href: "/contact" }}
        secondaryCta={{ label: "View All Projects", href: "/projects" }}
      />
    </>
  );
}
