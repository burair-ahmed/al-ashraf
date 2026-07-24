export interface Company {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  divisionSlug: string; // matches Division slug in divisions.ts
  divisionName: string;
  logoUrl?: string; // Image path in public folder (if available)
  iconName: string; // Lucide icon name to use as fallback (e.g. Building2, Milk, ShoppingCart, Users, Truck)
  accentColor: "gold" | "teal";
  bgImage: string; // Unsplash image URL for the card background
}

export const companies: Company[] = [
  // Companies with Logo Images
  {
    slug: "indus-enclave",
    name: "Indus Enclave",
    shortName: "Indus Enclave",
    tagline: "Premium Real Estate",
    description: "A premium real estate development offering luxury living and modern facilities in a secure, planned community.",
    divisionSlug: "construction-real-estate",
    divisionName: "Construction & Real Estate",
    logoUrl: "/indus-logo.png",
    iconName: "Building2",
    accentColor: "gold",
    bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    slug: "armarch",
    name: "ArmArch",
    shortName: "ArmArch",
    tagline: "Architecture & Design",
    description: "Professional architectural planning, structural design, and modern construction services tailored to international standards.",
    divisionSlug: "construction-real-estate",
    divisionName: "Construction & Real Estate",
    logoUrl: "/armarch-logo.png",
    iconName: "Building2",
    accentColor: "gold",
    bgImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
  {
    slug: "cafe-little-karachi",
    name: "Cafe Little Karachi",
    shortName: "CLK",
    tagline: "Authentic Karachi Dining & Cafe",
    description: "A vibrant dining experience serving authentic Karachi flavors, traditional recipes, and warm hospitality.",
    divisionSlug: "restaurants",
    divisionName: "Restaurants",
    logoUrl: "/cafe-little-karachi-logo.png",
    iconName: "Utensils",
    accentColor: "teal",
    bgImage: "/cafe-banner.webp",
  },
  {
    slug: "viral-marketing",
    name: "Viral Marketing",
    shortName: "Viral Marketing",
    tagline: "Commercial Outreach & Advertising",
    description: "A creative advertising agency providing robust outreach, digital marketing, and brand promotion strategies.",
    divisionSlug: "it-tech",
    divisionName: "IT & Tech Sector",
    logoUrl: "/viral-logo.png",
    iconName: "ShoppingCart",
    accentColor: "gold",
    bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    slug: "little-karachi-restaurant",
    name: "Little Karachi Restaurant",
    shortName: "LKR",
    tagline: "Authentic Pakistani Cuisine & Dining",
    description: "Experience the rich culinary heritage of Karachi with authentic dishes, traditional spices, and exceptional dining service.",
    divisionSlug: "restaurants",
    divisionName: "Restaurants",
    logoUrl: "/little-karachi-restaurant-logo.png",
    iconName: "Utensils",
    accentColor: "teal",
    bgImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
  },
  {
    slug: "food-master",
    name: "Food Master",
    shortName: "Food Master",
    tagline: "Quality Culinary Products & Services",
    description: "Delivering high-quality food products, culinary innovation, and premium dining solutions across Pakistan.",
    divisionSlug: "restaurants",
    divisionName: "Restaurants",
    logoUrl: "/food-master-logo.png",
    iconName: "Utensils",
    accentColor: "teal",
    bgImage: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&q=80",
  },
];

export function getCompaniesByDivisionSlug(divisionSlug: string): Company[] {
  return companies.filter((c) => c.divisionSlug === divisionSlug);
}
