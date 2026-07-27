import Link from "next/link";
import Logo from "@/components/shared/Logo";

const NAV_LINKS = [
  { href: "#problem", label: "Problem" },
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#team", label: "Team" },
];

export default function LandingNav() {
  return (
    <header className="sticky top-0 z-20 border-b border-gray-100 bg-white">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <Logo />

        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Link
          href="/app"
          className="shrink-0 inline-flex items-center rounded-xl bg-blue-600 text-white text-sm font-semibold px-4 py-2 hover:bg-blue-700 active:scale-[0.98] transition-all"
        >
          Try it now
        </Link>
      </div>
    </header>
  );
}
