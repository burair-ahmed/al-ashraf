export interface TeamMember {
  id: string;
  name: string;
  title: string;
  division?: string;
  bio: string;
  image: string; // TODO: replace with real headshots
  linkedIn?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "tm-001",
    name: "Muhammad Ashraf",
    title: "Founder & Group Chairman",
    bio: "The visionary behind Al Ashraf Group, Muhammad Ashraf founded the company in 2017 with a mission to build a diversified, professionally-run business group rooted in Karachi. His leadership drives the group's strategic direction across all four verticals.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80", // TODO: replace with real photo
  },
  {
    id: "tm-002",
    name: "Ahmed Ashraf",
    title: "Chief Executive Officer",
    bio: "Ahmed leads day-to-day operations across the group, ensuring each division delivers on its strategic goals. With a background in business management and operations, he brings discipline and focus to AGOC's growth agenda.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80", // TODO: replace with real photo
  },
  {
    id: "tm-003",
    name: "Fatima Siddiqui",
    title: "Director, Construction & Real Estate",
    division: "Construction & Real Estate",
    bio: "Fatima oversees all construction and real estate projects, bringing over 12 years of civil engineering experience. She ensures every project is delivered to specification, on time, and to the highest quality standard.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80", // TODO: replace with real photo
  },
  {
    id: "tm-004",
    name: "Khalid Rehman",
    title: "Director, Dairy Products",
    division: "Dairy Products",
    bio: "Khalid leads the dairy division with a deep understanding of the food and consumer goods market. His focus on supply chain excellence and product quality has made the dairy vertical one of the group's fastest-growing divisions.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80", // TODO: replace with real photo
  },
  {
    id: "tm-005",
    name: "Sana Malik",
    title: "Director, E-commerce",
    division: "E-commerce",
    bio: "Sana brings digital commerce expertise to AGOC's e-commerce vertical, driving platform growth, vendor partnerships, and customer experience. She is passionate about leveraging technology to expand the group's digital presence across Pakistan.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80", // TODO: replace with real photo
  },
  {
    id: "tm-006",
    name: "Omar Qureshi",
    title: "Chief Financial Officer",
    bio: "Omar manages the group's financial planning, reporting, and risk management. His experience in corporate finance and investment ensures AGOC maintains a strong, healthy balance sheet as the group scales its operations.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", // TODO: replace with real photo
  },
];
