import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.asadhaye.com";
  return ["/", "/about", "/work", "/ventures", "/thinking", "/contact"].map((path) => ({ url: `${base}${path}`, lastModified: new Date() }));
}
