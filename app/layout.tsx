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
    default: "GLODIEXPOTRANS | Transport et déménagement à Dreux",
    template: "%s | GLODIEXPOTRANS",
  },
  description:
    "Transport, navettes, déménagement et logistique B2B à Dreux (28) et en Île-de-France. Service fiable, ponctuel et assuré.",
  keywords: [
    "transport Dreux",
    "déménagement Dreux",
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
    title: "GLODIEXPOTRANS | Transport et déménagement à Dreux",
    description:
      "Votre partenaire logistique à Dreux: déménagement, transport B2B, tournées régulières et prestations ponctuelles.",
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
    title: "GLODIEXPOTRANS | Transport et déménagement à Dreux",
    description:
      "Transport, déménagement et logistique B2B fiable et ponctuel à Dreux et en Île-de-France.",
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
    icon: "/logo.png",
    apple: "/logo.png",
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
