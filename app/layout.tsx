import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://lasu-compass.vercel.app/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "LASU Compass AI – Smart Campus Assistant for LASU Students",
    template: "%s | LASU Compass AI",
  },
  description:
    "LASU Compass AI is the AI-powered digital front desk for Lagos State University, helping students navigate registration, fee payment, campus services, and campus life with instant answers and guidance.",
  keywords: [
    "LASU Compass AI",
    "Lagos State University",
    "campus assistant",
    "student support",
    "university chatbot",
    "edtech",
  ],
  authors: [
    { name: "Shafiriyu Roqeeb" },
    { name: "Timilehin Oyinlola" },
    { name: "Temitayo Honfoga" },
  ],
  creator: "Shafiriyu Roqeeb",
  openGraph: {
    title: "LASU Compass AI – Your Campus Assistant for LASU",
    description:
      "Ask campus questions in natural language and get LASU-specific answers for registration, clearance, fees, and campus services.",
    url: siteUrl,
    siteName: "LASU Compass AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LASU Compass AI preview card",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LASU Compass AI – Smart Campus Assistant",
    description:
      "AI-powered campus support for Lagos State University students, offering instant answers and helpful guidance.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">{children}</body>
    </html>
  );
}
