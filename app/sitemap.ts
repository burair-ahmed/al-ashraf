import { MetadataRoute } from "next";
import { divisions } from "@/data/divisions";
import { newsItems } from "@/data/news";

const BASE_URL = "https://www.alashrafgoc.com"; // TODO: update with real domain

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 1 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE_URL}/businesses`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE_URL}/companies`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${BASE_URL}/news`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${BASE_URL}/careers`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.8 },
  ];

  const divisionRoutes = divisions.map((d) => ({
    url: `${BASE_URL}/businesses/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const newsRoutes = newsItems.map((n) => ({
    url: `${BASE_URL}/news/${n.slug}`,
    lastModified: new Date(n.date),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...divisionRoutes, ...newsRoutes];
}
