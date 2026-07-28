import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Logo from "@/components/shared/Logo";

export default function Footer() {
  return (
    <footer className="relative bg-[#030712] border-t border-slate-900 pt-16 pb-8 overflow-hidden">
      {/* Footer Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] pb-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <Logo />
            <p className="text-xs sm:text-sm text-slate-400 max-w-xs leading-relaxed">
              An AI-powered digital front desk for Lagos State University
              students.
            </p>
          </div>

          {/* Product Links Col */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500">
              Product
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-400">
              <li>
                <Link href="#assistant" className="hover:text-white transition">
                  Campus Assistant
                </Link>
              </li>
              <li>
                <Link
                  href="#procedures"
                  className="hover:text-white transition"
                >
                  Procedures Guide
                </Link>
              </li>
              <li>
                <Link href="#letters" className="hover:text-white transition">
                  Letter Generator
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Links Col */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500">
              Connect
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold text-slate-400">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition"
                >
                  <FaGithub className="w-4 h-4 text-slate-400" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition"
                >
                  <FaLinkedin className="w-4 h-4 text-slate-400" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider line */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-semibold text-slate-500">
          <div>
            <p>© 2025 LASU Compass AI. Built at LASU AI Hackathon.</p>
          </div>
          <div>
            <p className="text-slate-600">
              Powered by Gemma 3 · RAG Pipeline · Open Source
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
