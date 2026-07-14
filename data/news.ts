export interface NewsItem {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  author: string;
  image: string; // TODO: replace with real news images
  featured: boolean;
}

export const newsItems: NewsItem[] = [
  {
    slug: "north-nazimabad-plaza-groundbreaking",
    title: "AGOC Breaks Ground on North Nazimabad Mixed-Use Plaza",
    excerpt:
      "Al Ashraf Group officially commences construction on its largest mixed-use development to date — the North Nazimabad Plaza, spanning 200,000 sq ft.",
    content: `Al Ashraf Group of Companies (AGOC) celebrated a significant milestone today with the groundbreaking ceremony of the North Nazimabad Mixed-Use Plaza — the group's most ambitious construction project to date.

The development, located in the heart of North Nazimabad, will span over 200,000 square feet and include retail spaces, residential apartments, and commercial offices. The project is expected to be completed by 2026 and will create hundreds of jobs during construction and operations.

"This project represents our commitment to delivering world-class developments right here in Karachi," said Ahmed Ashraf, CEO of AGOC. "North Nazimabad is a vibrant community, and we are proud to contribute to its continued growth and development."

The plaza will feature state-of-the-art amenities, including basement parking for 300 vehicles, landscaped green spaces, and dedicated retail areas for both local and international brands. Construction is being handled entirely by AGOC's in-house construction division.`, // TODO: replace with real content
    category: "Construction",
    date: "2025-03-15",
    author: "AGOC Communications",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", // TODO: replace
    featured: true,
  },
  {
    slug: "dairy-expansion-2025",
    title: "Al Ashraf Dairy Expands Distribution to New Areas of Karachi",
    excerpt:
      "The Al Ashraf Dairy Products division announces expansion of its fresh dairy delivery network to cover an additional 15 union councils across Karachi.",
    content: `Al Ashraf Dairy Products, the consumer goods division of AGOC, has announced a significant expansion of its distribution network in Karachi. Effective immediately, the division's fresh dairy delivery service now covers an additional 15 union councils across the city, bringing the total service area to over 40 union councils.

The expansion includes investments in cold chain logistics infrastructure, with the addition of 10 new refrigerated delivery vehicles and a second distribution hub in the SITE area. The dairy division now partners with over 100 retail outlets and delivers to more than 500 households daily.

"Our goal is to make fresh, high-quality dairy products accessible to every family in Karachi," said Khalid Rehman, Director of the Dairy Products division. "This expansion is a step toward that vision."`, // TODO: replace with real content
    category: "Dairy",
    date: "2025-01-20",
    author: "AGOC Communications",
    image:
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800&q=80", // TODO: replace
    featured: true,
  },
  {
    slug: "ecommerce-milestone",
    title: "Al Ashraf E-commerce Crosses 10,000 Orders Milestone",
    excerpt:
      "Our e-commerce platform celebrates the milestone of 10,000 successfully fulfilled orders, reflecting growing consumer trust in the Al Ashraf brand.",
    content: `Al Ashraf E-commerce has reached a significant operational milestone — 10,000 orders fulfilled since launching the platform. The achievement underscores the rapid adoption of the AGOC online retail platform by consumers across Karachi and beyond.

The e-commerce division, launched as part of AGOC's diversification strategy, has seen consistent month-on-month growth since its inception. The platform currently lists over 1,000 products across multiple categories and maintains a customer satisfaction rating of 4.8 out of 5 stars.

"Reaching 10,000 orders is validation of the trust our customers place in us," said Sana Malik, Director of E-commerce. "We are committed to continuing to raise the bar on product quality, delivery speed, and customer service."`, // TODO: replace with real content
    category: "E-commerce",
    date: "2024-11-05",
    author: "AGOC Communications",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80", // TODO: replace
    featured: false,
  },
  {
    slug: "agoc-7th-anniversary",
    title: "Al Ashraf Group Marks 7 Years of Growth and Impact",
    excerpt:
      "As AGOC celebrates its 7th founding anniversary, we reflect on seven years of growth, diversification, and community impact across Karachi.",
    content: `Al Ashraf Group of Companies marked its 7th founding anniversary this year, a milestone that reflects seven years of purposeful growth, strategic diversification, and community impact across Karachi.

Founded in 2017 by Muhammad Ashraf, the group began as a construction enterprise before expanding into dairy products, e-commerce, and consumer services. Today, AGOC employs a dedicated workforce across all four divisions, serving hundreds of clients and consumers daily.

"When we started in 2017, our vision was to build something lasting — not just buildings, but a business group that serves our community across multiple sectors," said Muhammad Ashraf, Group Chairman. "Seven years on, I am proud of what our team has built, and excited about what lies ahead."

AGOC marked the anniversary with internal celebrations and a renewed commitment to its founding values: Strength, Performance, and Passion.`, // TODO: replace with real content
    category: "Company",
    date: "2024-09-01",
    author: "AGOC Communications",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80", // TODO: replace
    featured: true,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}

export function getFeaturedNews(): NewsItem[] {
  return newsItems.filter((n) => n.featured);
}
