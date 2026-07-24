# Al Ashraf Group of Companies (Al-Ashraf GOC)

The official website of Al Ashraf Group of Companies (Al-Ashraf GOC). This website is high-performance designed to showcase the diversified business verticals, corporate structure, projects portfolio, and career opportunities of the conglomerate.

---

## Core Business Divisions

The Al Ashraf Group operates across three key business sectors:

1. **Construction & Real Estate**: Building modern infrastructure, roadways, residential, and commercial developments across Pakistan. Key subsidiaries include Indus Enclave and ArmArch.
2. **IT & Tech Sector**: Providing digital infrastructure, software engineering, and strategic advertising solutions. Key subsidiaries include Viral Marketing.
3. **Restaurants**: Delivering authentic dining experiences and premium culinary services. Key subsidiaries include Cafe Little Karachi, Little Karachi Restaurant, and Food Master.

---

## Tech Stack & Architecture

This application is built using modern front-end technologies:

* **Framework**: Next.js (App Router) for optimized server-side rendering, routing, and asset delivery.
* **Component Library**: React using concurrent rendering capabilities.
* **Styling**: TailwindCSS v4 utilizing CSS variables for theme tokenization.
* **Animations**: Framer Motion for smooth UI transitions and micro-interactions.
* **Form & Validation**: React Hook Form combined with Zod for type-safe schema validation.
* **Icons**: Lucide React for scalable vector icons.
* **Language**: TypeScript for static type safety.

---

## Project Structure

```filepath
al-ashraf/
├── app/                  # Next.js App Router Pages
│   ├── about/            # Corporate history, team, and group structure
│   ├── businesses/       # Business divisions dynamic views
│   ├── careers/          # Interactive job applications & hiring portal
│   ├── contact/          # Inquiries and locations map
│   ├── team/             # Leadership and executive team bios
│   ├── companies/        # Subsidiaries and company details
│   ├── layout.tsx        # Shell layout (Navbar & Footer wrapper)
│   └── page.tsx          # Interactive Homepage
├── components/           # Reusable UI components
│   ├── ui/               # Atoms and base elements (Buttons, Cards, Animators)
│   ├── layout/           # Shared layout containers (Navbar, Footer, Hero)
│   └── forms/            # Form structures & input fields
├── data/                 # Static data models & records
│   ├── divisions.ts      # Business division configurations
│   ├── companies.ts      # Subsidiary company records
│   ├── team.ts           # Team member biographies and social links
│   └── news.ts           # Corporate news and updates
└── lib/                  # Utility classes & helper functions
```

---

## Getting Started

To set up and run the application locally, follow the steps below:

### Prerequisites

Ensure you have Node.js (version 18 or higher) and npm installed on your system.

### 1. Installation

Install all required dependencies:

```bash
# Install packages
npm install
```

### 2. Running in Development

Start the development server with hot-reloading:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to view the local instance.

### 3. Production Build

To build and run the optimized production bundle:

```bash
# Run code linting
npm run lint

# Generate production build
npm run build

# Start production server
npm run start
```

---

## Development Standards

* **Type Safety**: All components, helpers, and data models must be explicitly typed using TypeScript.
* **Style Consistency**: Utilize CSS design tokens defined in `globals.css` and utility classes from TailwindCSS v4.
* **Responsive Design**: Ensure layouts are fully responsive and optimized for mobile, tablet, and desktop viewports.
