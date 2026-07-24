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
    slug: "it-tech",
    name: "IT & Tech Sector",
    shortName: "IT & Tech",
    tagline: "Empowering growth through innovative technology solutions.",
    description:
      "Providing robust digital infrastructure, custom software engineering, and strategic outreach.",
    longDescription:
      "Al Ashraf IT & Tech division is dedicated to navigating the digital landscape. We design, deploy, and maintain custom software and tech infrastructure, enabling businesses to scale seamlessly. From advanced marketing systems to comprehensive data analytics and corporate IT setups, we leverage cutting-edge tech to deliver reliable, high-performance solutions.",
    heroImage:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1920&q=80", // TODO: replace with real platform screenshot
    cardImage:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80", // TODO: replace with real platform photo
    accentColor: "gold",
    icon: "Laptop",
    services: [
      "Custom Software Engineering",
      "IT Infrastructure Setup",
      "Digital Marketing",
      "Commercial Outreach",
      "Cloud Solutions",
      "Tech Advisory",
    ],
    highlights: [
      { label: "Projects Completed", value: "30+" },
      { label: "Client Retainers", value: "15+" },
      { label: "Uptime SLA", value: "99.9%" },
    ],
  },
  {
    slug: "restaurants",
    name: "Restaurants",
    shortName: "Restaurants",
    tagline: "Serving authentic flavors and warm hospitality.",
    description:
      "Providing exceptional dining experiences across Karachi, serving traditional recipes and premium culinary solutions.",
    longDescription:
      "Al Ashraf Restaurants division brings the rich culinary heritage of Pakistan to life. Through established culinary brands like Cafe Little Karachi and Little Karachi Restaurant, as well as Food Master, we serve authentic tastes prepared under the highest standards of hygiene and quality. We are committed to culinary excellence and welcoming service.",
    heroImage:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80", // TODO: replace with real service photo
    cardImage:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80", // TODO: replace with real service photo
    accentColor: "teal",
    icon: "Utensils",
    services: [
      "Fine Dining Experience",
      "Authentic Karachi Cuisine",
      "Catering & Events",
      "Culinary Products",
      "Food Delivery Network",
      "Kitchen Hygiene QA",
    ],
    highlights: [
      { label: "Outlets Active", value: "3+" },
      { label: "Monthly Guests", value: "15,000+" },
      { label: "Customer Rating", value: "4.9★" },
    ],
  },
];

export function getDivisionBySlug(slug: string): Division | undefined {
  return divisions.find((d) => d.slug === slug);
}
