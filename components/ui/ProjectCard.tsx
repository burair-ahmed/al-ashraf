"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const statusConfig = {
  completed: { label: "Completed", className: "bg-emerald-900/60 text-emerald-300 border border-emerald-800/40" },
  ongoing:   { label: "Ongoing",   className: "bg-gold/15 text-gold border border-gold/30" },
  upcoming:  { label: "Upcoming",  className: "bg-teal/15 text-teal-light border border-teal/30" },
};

const typeConfig = {
  residential:    { label: "Residential" },
  commercial:     { label: "Commercial" },
  infrastructure: { label: "Infrastructure" },
  "mixed-use":    { label: "Mixed-Use" },
};

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const status = statusConfig[project.status];
  const type   = typeConfig[project.type];

  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-surface-4 border border-white/5",
        "shadow-card hover:shadow-card-hover hover:border-gold/20 transition-all duration-300",
        className
      )}
    >
      <Link href={`/projects/${project.slug}`} className="block" aria-label={`View ${project.name}`}>
        <div className="relative h-56 overflow-hidden">
          <Image
            src={project.heroImage}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="overlay-card absolute inset-0" />

          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            <span className={cn("text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm", status.className)}>
              {status.label}
            </span>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-black/40 text-warm-300 backdrop-blur-sm border border-white/10">
              {type.label}
            </span>
          </div>
        </div>

        <div className="p-5">
          <h3 className="font-display font-bold text-lg text-warm-50 mb-2 group-hover:text-gold transition-colors duration-200">
            {project.name}
          </h3>
          <p className="text-warm-400 text-sm leading-relaxed line-clamp-2 mb-4">
            {project.description}
          </p>
          <div className="flex items-center justify-between text-xs text-warm-500">
            <span className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5 text-gold" />
              {project.city}
            </span>
            {project.completionDate && (
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                {project.completionDate}
              </span>
            )}
            {project.floorArea && <span>{project.floorArea}</span>}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
