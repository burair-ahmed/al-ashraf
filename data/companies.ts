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
  {
    slug: "al-ashraf-construction",
    name: "Al Ashraf Construction",
    shortName: "AAC",
    tagline: "Infrastructure & Development",
    description: "Delivering state-of-the-art residential, commercial, and roadway infrastructure projects across Pakistan since 2017.",
    divisionSlug: "construction-real-estate",
    divisionName: "Construction & Real Estate",
    iconName: "Building2",
    accentColor: "gold",
    bgImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
  },
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
    slug: "al-ashraf-dairy",
    name: "Al Ashraf Dairy Products",
    shortName: "AAD",
    tagline: "Farm-Fresh Dairy",
    description: "Supplying pure, hygienic, and farm-fresh dairy products daily to families and retailers across Karachi.",
    divisionSlug: "dairy",
    divisionName: "Dairy Products",
    iconName: "Milk",
    accentColor: "teal",
    bgImage: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800&q=80",
  },
  {
    slug: "al-ashraf-ecommerce",
    name: "Al Ashraf E-Commerce",
    shortName: "AEC",
    tagline: "Digital Commerce",
    description: "A nationwide e-commerce platform delivering high-quality retail products with fast fulfillment and reliable delivery.",
    divisionSlug: "ecommerce",
    divisionName: "E-commerce",
    iconName: "ShoppingCart",
    accentColor: "gold",
    bgImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
  },
  {
    slug: "viral-marketing",
    name: "Viral Marketing",
    shortName: "Viral Marketing",
    tagline: "Commercial Outreach & Advertising",
    description: "A creative advertising agency providing robust outreach, digital marketing, and brand promotion strategies.",
    divisionSlug: "ecommerce",
    divisionName: "E-commerce",
    logoUrl: "/viral-logo.png",
    iconName: "ShoppingCart",
    accentColor: "gold",
    bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    slug: "consumer-services",
    name: "Consumer Services",
    shortName: "ACS",
    tagline: "Facility Management & Services",
    description: "Delivering essential facilities maintenance, contracting services, and household repair works driven by reliability.",
    divisionSlug: "consumer-services",
    divisionName: "Consumer Services",
    iconName: "Users",
    accentColor: "teal",
    bgImage: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
  },
  {
    slug: "al-ashraf-logistics",
    name: "Al Ashraf Logistics",
    shortName: "AAL",
    tagline: "Logistics & Transport",
    description: "Providing container transport, distribution networks, and supply chain logistics to move businesses forward.",
    divisionSlug: "consumer-services",
    divisionName: "Consumer Services",
    iconName: "Truck",
    accentColor: "teal",
    bgImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  },
];

export function getCompaniesByDivisionSlug(divisionSlug: string): Company[] {
  return companies.filter((c) => c.divisionSlug === divisionSlug);
}
