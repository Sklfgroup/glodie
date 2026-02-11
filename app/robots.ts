import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://glodiexpotrans.com/sitemap.xml",
    host: "https://glodiexpotrans.com",
  };
}
