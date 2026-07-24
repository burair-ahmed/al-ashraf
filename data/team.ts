export interface TeamMember {
  id: string;
  name: string;
  title: string;
  division?: string;
  bio: string;
  image: string;
  facebook?: string;
  instagram?: string;
  linkedIn?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "tm-001",
    name: "Ashraf Jabbar Qureshi",
    title: "Founder & Group Chairman",
    bio: "Hailing from a prestigious lineage known for fruit exporting, Ashraf Jabbar Qureshi diverged from this legacy to explore varied sectors — from restaurants to real estate, construction, and online retail. He founded Indus Enclave in Karachi and built his success on values of integrity, passion, and hard work. His deep love for architecture led him to establish an architectural firm, embodying a dynamic entrepreneurial spirit.",
    image: "/ashraf.webp",
    facebook: "https://www.facebook.com/AshrafJQureshi?mibextid=PzaGJu",
    instagram: "https://instagram.com/ashrafqureshipti?igshid=OGQ5ZDc2ODk2ZA==",
  },
  {
    id: "tm-002",
    name: "Dai Ali Daniyal",
    title: "Chief Executive Officer",
    bio: "Inheriting a strong entrepreneurial legacy, Dai Ali Daniyal honed his skills within the family business before earning degrees in Business Management and International Business. His strategic vision expanded the group across industries, and his passion for sustainable architecture led him to helm ArmArch, pioneering innovative designs in Pakistan. His journey reflects dedication, vision, and a relentless pursuit of excellence.",
    image: "/dai.webp",
    facebook: "https://www.facebook.com/profile.php?id=61552761699032&mibextid=PzaGJu",
    instagram: "https://instagram.com/thedaialidaniyal?igshid=OGQ5ZDc2ODk2ZA==",
    linkedIn: "https://www.linkedin.com/in/dai-ali-daniyal-a50077183",
  },
  {
    id: "tm-003",
    name: "Eng. Armash Ashraf",
    title: "Chief Operating Officer",
    bio: "COO of Al-Ashraf Group and Chief Engineer at ArmArch, Armash holds a Bachelor's in Architectural Engineering from Heriot-Watt University. With a focus on sustainability, he completed 31 courses in sustainability techniques and building services technology. He founded ArmArch during his studies to revolutionize Pakistan's construction industry, launching the firm in October 2023 — marking a significant step toward a more sustainable future in architecture.",
    image: "/armash.webp",
    linkedIn: "https://linkedin.com/in/armash-ashraf-5839381a0",
  },
];
