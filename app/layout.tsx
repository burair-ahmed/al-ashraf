import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alashrafgoc.com"), // TODO: update with real domain
  title: {
    default: "Al Ashraf Group of Companies | Building Lasting Impressions",
    template: "%s | Al Ashraf Group of Companies",
  },
  description:
    "Al Ashraf Group of Companies (AGOC) is a diversified Pakistani business group headquartered in Karachi, operating across construction & real estate, dairy products, e-commerce, and consumer services.",
  keywords: [
    "Al Ashraf Group",
    "AGOC",
    "Pakistan construction company",
    "Karachi real estate",
    "Pakistani conglomerate",
    "Al Ashraf dairy",
    "Gulshan-e-Iqbal",
  ],
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://www.alashrafgroup.com",
    siteName: "Al Ashraf Group of Companies",
    title: "Al Ashraf Group of Companies | Building Lasting Impressions",
    description:
      "Diversified Pakistani business group operating across construction, dairy, e-commerce, and consumer services — driven by Strength, Performance, and Passion.",
    images: [
      {
        url: "/og-image.jpg", // TODO: add real OG image
        width: 1200,
        height: 630,
        alt: "Al Ashraf Group of Companies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Al Ashraf Group of Companies",
    description:
      "Building lasting impressions in construction, commerce, and community.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="bg-surface-1 text-warm-100 antialiased">
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
