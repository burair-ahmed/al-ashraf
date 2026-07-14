export type ProjectStatus = "ongoing" | "completed" | "upcoming";
export type ProjectType =
  | "residential"
  | "commercial"
  | "infrastructure"
  | "mixed-use";

export interface Project {
  slug: string;
  name: string;
  location: string;
  city: string;
  type: ProjectType;
  status: ProjectStatus;
  completionDate?: string;
  description: string;
  scope: string[];
  heroImage: string;
  gallery: string[];
  floorArea?: string;
  client?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "gulshan-heights-residences",
    name: "Gulshan Heights Residences",
    location: "Gulshan-e-Iqbal, Karachi",
    city: "Karachi",
    type: "residential",
    status: "completed",
    completionDate: "2024",
    description:
      "A premium 12-storey residential complex in Gulshan-e-Iqbal featuring 80 modern apartments with world-class amenities.",
    scope: [
      "Structural Design & Engineering",
      "Foundation & Superstructure",
      "MEP Works",
      "Interior Finishing",
      "Landscaping",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80", // TODO: replace
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    ],
    floorArea: "120,000 sq ft",
    featured: true,
  },
  {
    slug: "dha-commercial-hub",
    name: "DHA Commercial Hub",
    location: "DHA Phase 8, Karachi",
    city: "Karachi",
    type: "commercial",
    status: "completed",
    completionDate: "2023",
    description:
      "A flagship commercial development in DHA Phase 8 delivering Grade-A office and retail spaces.",
    scope: [
      "Commercial Construction",
      "Facade Works",
      "Fire Safety Systems",
      "HVAC & Building Services",
      "Parking Structure",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80", // TODO: replace
    gallery: [
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    ],
    floorArea: "85,000 sq ft",
    featured: true,
  },
  {
    slug: "korangi-road-upgrade",
    name: "Korangi Industrial Corridor Upgrade",
    location: "Korangi, Karachi",
    city: "Karachi",
    type: "infrastructure",
    status: "completed",
    completionDate: "2023",
    description:
      "Major roadway rehabilitation and widening project for the Korangi Industrial Corridor, improving connectivity for over 500 businesses.",
    scope: [
      "Road Widening & Resurfacing",
      "Drainage Works",
      "Street Lighting",
      "Signage & Road Marking",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200&q=80", // TODO: replace
    gallery: [
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80",
    ],
    featured: false,
  },
  {
    slug: "north-nazimabad-plaza",
    name: "North Nazimabad Mixed-Use Plaza",
    location: "North Nazimabad, Karachi",
    city: "Karachi",
    type: "mixed-use",
    status: "ongoing",
    description:
      "A large-scale mixed-use development combining retail, residential, and commercial spaces in North Nazimabad.",
    scope: [
      "Master Planning",
      "Structural Works",
      "Retail Podium",
      "Residential Towers",
      "Basement Parking",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80", // TODO: replace
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    ],
    floorArea: "200,000 sq ft",
    featured: true,
  },
  {
    slug: "clifton-luxury-villas",
    name: "Clifton Luxury Villas",
    location: "Clifton, Karachi",
    city: "Karachi",
    type: "residential",
    status: "ongoing",
    description:
      "An exclusive collection of 10 ultra-luxury villas in Clifton, designed for discerning buyers seeking the finest finishes.",
    scope: [
      "Luxury Residential Construction",
      "Custom Interior Design",
      "Smart Home Integration",
      "Landscaping & Pools",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80", // TODO: replace
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    ],
    featured: false,
  },
  {
    slug: "lyari-expressway-bridge",
    name: "Lyari Expressway Bridge Rehabilitation",
    location: "Lyari, Karachi",
    city: "Karachi",
    type: "infrastructure",
    status: "completed",
    completionDate: "2022",
    description:
      "Structural rehabilitation and strengthening of the Lyari Expressway bridge deck, restoring structural integrity and extending service life.",
    scope: [
      "Structural Assessment",
      "Concrete Repairs",
      "Waterproofing",
      "Expansion Joint Replacement",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80", // TODO: replace
    gallery: [
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
    ],
    featured: false,
  },
  {
    slug: "bahria-town-apartments",
    name: "Bahria Town Apartment Block",
    location: "Bahria Town, Karachi",
    city: "Karachi",
    type: "residential",
    status: "upcoming",
    description:
      "A forthcoming 200-unit apartment development within Bahria Town, bringing affordable luxury to one of Karachi's most sought-after communities.",
    scope: [
      "Multi-Storey Residential",
      "Community Amenities",
      "Parking & Services",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1560185127-6a8e8b6b9c44?w=1200&q=80", // TODO: replace
    gallery: [
      "https://images.unsplash.com/photo-1560185127-6a8e8b6b9c44?w=800&q=80",
    ],
    floorArea: "250,000 sq ft",
    featured: true,
  },
  {
    slug: "gulshan-commercial-block",
    name: "Gulshan Commercial Block C",
    location: "Gulshan-e-Iqbal, Karachi",
    city: "Karachi",
    type: "commercial",
    status: "completed",
    completionDate: "2024",
    description:
      "A modern commercial block in Gulshan-e-Iqbal housing retail, F&B, and professional office suites.",
    scope: ["Shell & Core", "Retail Fit-Out", "MEP", "Facade"],
    heroImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80", // TODO: replace
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    ],
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
