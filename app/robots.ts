import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://ripely.uk/sitemap.xml",
    host: "https://ripely.uk",
  };
}
