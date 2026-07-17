# 🏛️ Al Ashraf Group of Companies (Al-Ashraf GOC) Corporate Portal

Welcome to the official repository for the **Al Ashraf Group of Companies (Al-Ashraf GOC)** web portal. This is a premium, high-performance web application designed to showcase the diversified business verticals, corporate structure, projects portfolio, and career opportunities of the Al-Ashraf GOC conglomerate.

---

## ⚡ Tech Stack & Architecture

This application is built with modern, state-of-the-art web technologies for maximum performance, responsiveness, and aesthetic appeal:

*   **Framework**: [Next.js 16 (App Router)](https://nextjs.org/) for server-side rendering, routing, optimization, and seamless developer experience.
*   **Library**: [React 19](https://react.dev/) using modern Hooks and concurrent rendering capabilities.
*   **Styling**: [TailwindCSS v4](https://tailwindcss.com/) with PostCSS, using CSS variables for a curated HSL-tailored gold/teal theme.
*   **Animations**: [Framer Motion](https://www.framer.com/motion/) for smooth, premium micro-interactions, page transitions, and slide animations.
*   **Form Management**: [React Hook Form](https://react-hook-form.com/) combined with [Zod](https://zod.dev/) for robust, type-safe schema validation.
*   **Icons**: [Lucide React](https://lucide.dev/) for crisp, scalable vector icons.
*   **Language**: [TypeScript](https://www.typescriptlang.org/) for strict type safety and code readability.

---

## 📦 Directory Structure

```filepath
al-ashraf/
├── app/                  # Next.js App Router Pages
│   ├── about/            # Corporate history, team, and core pillars
│   ├── businesses/       # Details about the 4 main business verticals
│   ├── careers/          # Interactive job applications & hiring portal
│   ├── contact/          # Inquiries and locations map
│   ├── news/             # Press releases and media coverage
│   ├── projects/         # Engineering, residential, & infrastructure showcase
│   ├── globals.css       # Core Tailwind configuration & global typography
│   ├── layout.tsx        # Shell layout (Navbar & Footer wrapper)
│   └── page.tsx          # Interactive Homepage
├── components/           # Reusable React Components
│   ├── ui/               # Atoms & Base UI (Buttons, Cards, Animators)
│   ├── layout/           # Navbar, Footer, Hero, CTA
│   └── forms/            # Form structures & input fields
├── data/                 # Static data models & mock database entries
│   ├── divisions.ts      # Core business division definitions
│   ├── news.ts           # News data items
│   ├── projects.ts       # Ongoing & completed project datasets
│   └── team.ts           # Executive team profile bios
└── lib/                  # Utility classes & common helper functions
```

---

## 🏢 Business Verticals Showcased

The website highlights the four pillars of **Al Ashraf Group of Companies**:

1.  **Construction & Real Estate**: Infrastructure, roadways, residential, and commercial developments delivered across Pakistan since 2017.
2.  **Dairy Products**: Farm-fresh dairy supply chains, quality processing, and distribution networks.
3.  **E-commerce**: Digital retail platforms bridging online sales, order fulfillment, and last-mile logistics.
4.  **Consumer Services**: Professional facility management, maintenance services, and corporate solutions.

---

## 🚀 Getting Started

To run the application locally on your computer, follow these simple steps:

### Prerequisite

Make sure you have Node.js (version 18+ recommended) and `npm` installed.

### 1. Installation

Clone the repository, navigate to the folder, and install all dependencies:

```bash
# Clone the repository
git clone https://github.com/your-username/al-ashraf.git

# Enter workspace
cd al-ashraf

# Install packages
npm install
```

### 2. Running in Development

Launch the hot-reloading development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your web browser to view the application.

### 3. Production Build

Build the static and dynamic bundles optimized for production:

```bash
# Run linting
npm run lint

# Generate production build
npm run build

# Start the production server
npm run start
```

---

## 🎨 Theme & Typography

- **Theme Palette**: Rich dark surface backgrounds (`#0B0D11`, `#11141B`) combined with premium luxury HSL gold accent colors and clean teals.
- **Typography**: Responsive, high-contrast, modern fonts featuring large display headers for a state-of-the-art look and feel.
- **Animation System**: Smooth entry animations for headers, cards, and sliders driven by customized Framer Motion wrappers.

---

## 📝 Contribution & Standards

- **Linting**: Ensure code adheres to Next.js standards by running `npm run lint`.
- **TypeScript**: All data and component props should be explicitly typed.
- **Styling**: Prefer utility classes from TailwindCSS v4 and reuse semantic components in `components/ui`.
