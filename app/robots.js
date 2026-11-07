import { SITIO_URL } from "@/lib/metadatos";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/gracias"],
    },
    sitemap: `${SITIO_URL}/sitemap.xml`,
  };
}
