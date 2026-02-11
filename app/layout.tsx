import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://glodiexpotrans.com"),
  title: {
    default: "GLODIEXPOTRANS | Transport et demenagement a Dreux",
    template: "%s | GLODIEXPOTRANS",
  },
  description:
    "Transport, navettes, demenagement et logistique B2B a Dreux (28) et en Ile-de-France. Service fiable, ponctuel et assure.",
  keywords: [
    "transport Dreux",
    "demenagement Dreux",
    "transport B2B",
    "navette logistique",
    "glodiexpotrans",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://glodiexpotrans.com",
    siteName: "GLODIEXPOTRANS",
    title: "GLODIEXPOTRANS | Transport et demenagement a Dreux",
    description:
      "Votre partenaire logistique a Dreux: demenagement, transport B2B, tournees regulieres et prestations ponctuelles.",
    images: [
      {
        url: "/image.jpg",
        width: 1200,
        height: 630,
        alt: "Camionnette de transport GLODIEXPOTRANS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GLODIEXPOTRANS | Transport et demenagement a Dreux",
    description:
      "Transport, demenagement et logistique B2B fiable et ponctuel a Dreux et en Ile-de-France.",
    images: ["/image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${lexend.variable} antialiased`}>{children}</body>
    </html>
  );
}
