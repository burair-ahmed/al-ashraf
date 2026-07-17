import Image from "next/image";
import Link from "next/link";
import { Calendar, Tag } from "lucide-react";
import { type NewsItem } from "@/data/news";
import { formatDate, truncate } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface NewsCardProps {
  item: NewsItem;
  className?: string;
}

export function NewsCard({ item, className }: NewsCardProps) {
  return (
    <article
      className={cn(
        "group overflow-hidden rounded-2xl bg-surface-4 border border-white/5",
        "shadow-card hover:shadow-card-hover hover:border-gold/20 transition-all duration-300",
        className
      )}
    >
      <Link href={`/news/${item.slug}`} className="block" aria-label={`Read: ${item.title}`}>
        <div className="relative h-48 overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="overlay-card absolute inset-0" />
          <span className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-gold/90 px-2.5 py-1 text-xs font-semibold text-charcoal-800 backdrop-blur-sm">
            <Tag className="h-3 w-3" />
            {item.category}
          </span>
        </div>

        <div className="p-5">
          <p className="flex items-center gap-1.5 text-xs text-warm-500 mb-3">
            <Calendar className="h-3.5 w-3.5" />
            {formatDate(item.date)}
          </p>
          <h3 className="font-display font-bold text-warm-50 leading-snug mb-2 group-hover:text-gold transition-colors duration-200 line-clamp-2">
            {item.title}
          </h3>
          <p className="text-sm text-warm-400 leading-relaxed line-clamp-2">
            {truncate(item.excerpt, 120)}
          </p>
        </div>
      </Link>
    </article>
  );
}
