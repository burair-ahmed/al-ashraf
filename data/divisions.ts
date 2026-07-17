export interface Division {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  longDescription: string;
  heroImage: string;
  cardImage: string;
  accentColor: string; // Tailwind color class
  icon: string; // lucide icon name
  services: string[];
  highlights: { label: string; value: string }[];
}

export const divisions: Division[] = [
  {
    slug: "construction-real-estate",
    name: "Construction & Real Estate",
    shortName: "Construction",
    tagline: "Building foundations for the future.",
    description:
      "From landmark structures to large-scale roadway infrastructure and premium property development, our construction vertical delivers projects that stand the test of time.",
    longDescription:
      "Al Ashraf Construction & Real Estate division is the cornerstone of the group's identity. Since 2017, we have delivered residential complexes, commercial developments, and critical infrastructure projects across Karachi and beyond. Our teams combine engineering precision with a commitment to quality, completing every project on schedule and to the highest specifications. We handle everything from site acquisition and feasibility to final handover, ensuring seamless delivery for our clients.",
    heroImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80", // TODO: replace with real project photo
    cardImage:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80", // TODO: replace with real project photo
    accentColor: "gold",
    icon: "Building2",
    services: [
      "Residential Construction",
      "Commercial Development",
      "Roadway & Infrastructure",
      "Property Development",
      "Project Management",
      "Site Acquisition & Feasibility",
      "Interior & Finishing Works",
    ],
    highlights: [
      { label: "Projects Delivered", value: "50+" },
      { label: "Years of Experience", value: "7+" },
      { label: "Cities Active", value: "3+" },
    ],
  },
  {
    slug: "dairy",
    name: "Dairy Products",
    shortName: "Dairy",
    tagline: "Fresh quality, delivered daily.",
    description:
      "Our dairy division supplies fresh, high-quality dairy products to consumers and retailers across Karachi, committed to purity, nutrition, and consistency.",
    longDescription:
      "The Al Ashraf Dairy Products division brings farm-fresh quality to tables across Karachi. We maintain rigorous quality control at every step — from sourcing to processing and distribution — ensuring our products meet the highest food safety standards. Our range includes fresh milk, yogurt, and specialty dairy items, all produced with the goal of nourishing families while building trust through transparency and quality you can taste.",
    heroImage:
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=1920&q=80", // TODO: replace with real product photo
    cardImage:
      "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=800&q=80", // TODO: replace with real product photo
    accentColor: "teal",
    icon: "Milk",
    services: [
      "Fresh Milk Supply",
      "Dairy Processing",
      "Retail Distribution",
      "Wholesale Supply",
      "Quality Assurance",
      "Cold Chain Logistics",
    ],
    highlights: [
      { label: "Products in Range", value: "10+" },
      { label: "Daily Deliveries", value: "500+" },
      { label: "Retail Partners", value: "100+" },
    ],
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    shortName: "E-commerce",
    tagline: "Commerce without boundaries.",
    description:
      "Our e-commerce vertical operates a growing online retail platform, connecting customers across Pakistan with products they need — fast, reliably, and at great value.",
    longDescription:
      "Al Ashraf E-commerce is the group's digital commerce arm, tapping into Pakistan's rapidly expanding online retail market. Our platform offers a curated selection of products with a focus on customer experience, fast fulfillment, and competitive pricing. We leverage technology-driven logistics and customer insights to continuously improve the shopping journey, making quality products accessible to more Pakistanis every day.",
    heroImage:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1920&q=80", // TODO: replace with real platform screenshot
    cardImage:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80", // TODO: replace with real platform photo
    accentColor: "gold",
    icon: "ShoppingCart",
    services: [
      "Online Retail Platform",
      "Product Sourcing & Curation",
      "Order Fulfillment",
      "Customer Service",
      "Last-Mile Delivery",
      "Vendor Partnership",
    ],
    highlights: [
      { label: "Products Listed", value: "1,000+" },
      { label: "Orders Fulfilled", value: "10,000+" },
      { label: "Customer Rating", value: "4.8★" },
    ],
  },
  {
    slug: "consumer-services",
    name: "Consumer Services",
    shortName: "Services",
    tagline: "Serving communities, building trust.",
    description:
      "Our consumer services division provides a broad range of essential services to households and businesses across Karachi, driven by reliability and community focus.",
    longDescription:
      "Al Ashraf Consumer Services is our general services vertical, dedicated to meeting the everyday needs of Karachi's residents and businesses. From facility management to maintenance and general services, we bring the same commitment to quality and reliability that defines every Al-Ashraf GOC enterprise. Our teams are trained, professional, and community-minded — because we believe great service is the foundation of lasting relationships.",
    heroImage:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80", // TODO: replace with real service photo
    cardImage:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80", // TODO: replace with real service photo
    accentColor: "teal",
    icon: "Users",
    services: [
      "Facility Management",
      "Maintenance Services",
      "General Contracting",
      "Household Services",
      "Corporate Services",
      "Community Programs",
    ],
    highlights: [
      { label: "Clients Served", value: "200+" },
      { label: "Service Categories", value: "6+" },
      { label: "Team Members", value: "50+" },
    ],
  },
];

export function getDivisionBySlug(slug: string): Division | undefined {
  return divisions.find((d) => d.slug === slug);
}
