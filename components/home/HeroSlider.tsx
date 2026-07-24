"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=85",
    eyebrow: "Al Ashraf Group of Companies",
    title: "Building Lasting Impressions",
    description: "A diversified Pakistani conglomerate delivering excellence in Construction, Dairy, E-commerce, and Consumer Services.",
    primaryCta: { label: "Explore Our Businesses", href: "/#about" },
    secondaryCta: { label: "Contact Us", href: "/contact" }
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=85",
    eyebrow: "Construction & Real Estate",
    title: "Engineering the Future",
    description: "From landmark high-rises to vital transport roadways, we shape the infrastructure of Pakistan.",
    primaryCta: { label: "Explore Companies", href: "/companies" },
    secondaryCta: { label: "Get in Touch", href: "/contact" }
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1527018601619-a508a2be00cd?w=1920&q=85",
    eyebrow: "Dairy Products",
    title: "Purity & Quality Daily",
    description: "Nourishing families across Karachi with farm-fresh, processed dairy products of absolute purity.",
    primaryCta: { label: "Our Products", href: "/about" },
    secondaryCta: { label: "Partner with Us", href: "/contact" }
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=85",
    eyebrow: "E-Commerce & Digital Services",
    title: "Commerce Without Borders",
    description: "Empowering consumers across Pakistan through scalable technology and direct delivery services.",
    primaryCta: { label: "Learn More", href: "/about" },
    secondaryCta: { label: "Contact Us", href: "/contact" }
  }
];

const brandSeals = [
  { short: "Al-Ashraf GOC", name: "Al Ashraf Group" },
  { short: "CLK", name: "Cafe Little Karachi" },
  { short: "LKR", name: "Little Karachi Restaurant" },
  { short: "IE", name: "Indus Enclave" },
  { short: "VM", name: "Viral Marketing" },
  { short: "AA", name: "Arm Arch" },
  { short: "FM", name: "Food Master" }
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[95vh] min-h-[650px] overflow-hidden bg-black" aria-label="Hero slider">
      {/* Slides */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slides[current].image}
              alt={slides[current].title}
              fill
              className="object-cover brightness-[0.4] select-none"
              priority
              sizes="100vw"
            />
            {/* Golden Hour / Sunset Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 z-10" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Indicators */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              current === index ? "w-8 bg-gold" : "w-2 bg-white/30 hover:bg-white/60"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pb-24 pt-20">
        <div className="max-w-3xl">
          <motion.p
            key={`eyebrow-${current}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gold text-xs sm:text-sm font-semibold uppercase tracking-widest mb-4 font-display"
          >
            {slides[current].eyebrow}
          </motion.p>
          <motion.h1
            key={`title-${current}`}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-display-lg sm:text-display-xl font-bold text-warm-50 tracking-tight leading-none mb-6 font-display"
          >
            {slides[current].title}
          </motion.h1>
          <motion.p
            key={`desc-${current}`}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-warm-300 text-base sm:text-lg mb-8 max-w-xl leading-relaxed"
          >
            {slides[current].description}
          </motion.p>
          <motion.div
            key={`ctas-${current}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href={slides[current].primaryCta.href}
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-charcoal-900 hover:bg-gold-light transition-all duration-300 shadow-gold hover:-translate-y-0.5 active:scale-95"
            >
              {slides[current].primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={slides[current].secondaryCta.href}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-warm-100 hover:border-gold hover:text-gold hover:bg-white/10 transition-all duration-300 active:scale-95"
            >
              {slides[current].secondaryCta.label}
            </Link>
          </motion.div>
        </div>

        {/* Floating Subsidiary Seals Row */}
        <div className="absolute bottom-6 left-0 right-0 w-full z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-t border-white/10 pt-4 flex flex-col md:flex-row items-center justify-between gap-4">
              <span className="text-xs uppercase tracking-widest text-gold font-display font-medium shrink-0">
                Group Companies & Partners
              </span>
              <div className="w-full overflow-hidden relative">
                {/* Fade overlays for the marquee */}
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

                <div className="flex gap-8 items-center animate-marquee whitespace-nowrap py-1">
                  {/* Render the seals twice to loop smoothly */}
                  {[...brandSeals, ...brandSeals].map((seal, i) => (
                    <div
                      key={`${seal.short}-${i}`}
                      className="inline-flex items-center gap-3 bg-gradient-to-b from-gold/15 to-transparent border border-gold/30 rounded-full py-1.5 px-4 cursor-pointer hover:border-gold hover:scale-105 hover:from-gold/20 transition-all duration-200"
                    >
                      {/* Gold Badge */}
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold/10 border border-gold/40 text-[9px] font-black text-gold font-display">
                        {seal.short[0] + (seal.short[1] || "")}
                      </span>
                      <span className="text-xs font-semibold text-warm-200 uppercase tracking-wider font-display select-none">
                        {seal.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
