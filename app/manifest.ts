import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "GLODIEXPOTRANS",
    short_name: "GLODIEXPOTRANS",
    description:
      "Transport, demenagement et logistique B2B fiable et ponctuel a Dreux et en Ile-de-France.",
    start_url: "/",
    display: "standalone",
    background_color: "#fcfcfd",
    theme_color: "#0a4d92",
    lang: "fr",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}
