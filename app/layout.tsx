import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LASU Compass AI",
  description: "The AI-powered digital front desk for Lagos State University",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
