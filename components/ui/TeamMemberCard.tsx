import Image from "next/image";
import { Globe } from "lucide-react";
import { type TeamMember } from "@/data/team";
import { cn } from "@/lib/utils";

interface TeamMemberCardProps {
  member: TeamMember;
  className?: string;
}

export function TeamMemberCard({ member, className }: TeamMemberCardProps) {
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
      <p className="mt-3 text-sm text-warm-400 leading-relaxed line-clamp-3">{member.bio}</p>

      {member.linkedIn && (
        <a
          href={member.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-surface-5 text-warm-400 hover:bg-gold hover:text-charcoal-800 transition-all duration-200"
          aria-label={`${member.name} profile`}
        >
          <Globe className="h-4 w-4" />
        </a>
      )}
    </div>
  );
}
