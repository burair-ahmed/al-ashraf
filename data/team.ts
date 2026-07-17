export interface TeamMember {
  id: string;
  name: string;
  title: string;
  division?: string;
  bio: string;
  image: string;
  linkedIn?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "tm-001",
    name: "Ashraf Jabbar Qureshi",
    title: "Founder & Group Chairman",
    bio: "The visionary behind Al-Ashraf GOC, Ashraf Jabbar Qureshi founded the company in 2017 with a mission to build a diversified, professionally-run business group rooted in Karachi. His leadership drives the group's strategic direction across all four verticals.",
    image: "/ashraf.webp",
    linkedIn: "#",
  },
  {
    id: "tm-002",
    name: "Dai Ali Daniyal",
    title: "Chief Executive Officer",
    bio: "Dai Ali leads day-to-day operations across the group, ensuring each division delivers on its strategic goals. With a background in business management and operations, he brings discipline and focus to the group's growth agenda.",
    image: "/dai.webp",
    linkedIn: "#",
  },
  {
    id: "tm-003",
    name: "Armash Ashraf",
    title: "Chief Operating Officer",
    bio: "Armash oversees the group's operational execution, supply chain logistics, and cross-vertical efficiency. He works closely with division heads to streamline processes and drive sustainable growth across all enterprises.",
    image: "/armash.webp",
    linkedIn: "#",
  },
];
