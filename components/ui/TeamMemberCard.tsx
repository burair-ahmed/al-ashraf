import Image from "next/image";
import Link from "next/link";
import { type TeamMember } from "@/data/team";
import { cn } from "@/lib/utils";

interface TeamMemberCardProps {
  member: TeamMember;
  className?: string;
}

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

export function TeamMemberCard({ member, className }: TeamMemberCardProps) {
  const hasSocials = member.facebook || member.instagram || member.linkedIn;

  return (
    <div
      className={cn(
        "group flex flex-col items-center text-center bg-surface-4 rounded-2xl p-6",
        "border border-white/5 shadow-card hover:shadow-card-hover hover:border-gold/20 transition-all duration-300",
        className
      )}
    >
      <div className="relative mb-5 h-24 w-24 overflow-hidden rounded-full ring-2 ring-white/10 ring-offset-2 ring-offset-surface-4 group-hover:ring-gold transition-all duration-300">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
          sizes="96px"
        />
      </div>

      <h3 className="font-display font-bold text-lg text-warm-50">{member.name}</h3>
      <p className="mt-1 text-sm font-semibold text-gold">{member.title}</p>
      {member.division && (
        <p className="mt-0.5 text-xs text-warm-500">{member.division}</p>
      )}

      <div className="flex flex-col items-center gap-3 mt-5">
        <Link
          href={`/team#${member.id}`}
          className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 text-gold px-5 py-2 text-xs font-semibold hover:bg-gold hover:text-charcoal-900 transition-all duration-200"
        >
          View Bio
        </Link>

        {hasSocials && (
          <div className="flex gap-3">
            {member.facebook && (
              <a
                href={member.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110"
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
                className="h-8 w-8 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110"
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
                className="h-8 w-8 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110"
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
  );
}
