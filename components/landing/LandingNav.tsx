import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Logo from "@/components/shared/Logo";

const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
];

export default function LandingNav() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <Logo />

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Link
          href="/app"
          className="shrink-0 inline-flex items-center gap-1.5 rounded-xl bg-blue-600 text-white text-sm font-semibold px-4 py-2.5 hover:bg-blue-700 active:scale-[0.98] transition-all"
        >
          Open App
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </header>
  );
}
