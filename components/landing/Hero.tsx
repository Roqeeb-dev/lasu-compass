import Link from "next/link";
import { ArrowRight, FileText, Send } from "lucide-react";
import Logo from "@/components/shared/Logo";
import RevealSection from "@/components/shared/RevealSection";

const MOCK_TABS = ["Campus Assistant", "Procedures", "Letters"];

export default function Hero() {
  return (
    <section className="relative bg-slate-950 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 pt-16 sm:pt-20 pb-16 sm:pb-24">
        <RevealSection>
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
            {/* Left column — Centered on mobile/tablet, left-aligned on desktop */}
            <div className="max-w-xl mx-auto lg:mx-0 flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="inline-flex items-center rounded-full border border-blue-800/60 bg-blue-950/40 text-blue-300 text-xs font-semibold px-3 py-1.5 mb-6">
                GDGoC-LASU Hackathon Winner
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-6">
                <span className="text-white">Your university,</span>
                <br />
                <span className="text-blue-500">finally answered.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-400 leading-8 mb-8">
                LASU Compass AI is the intelligent front desk every Lagos State
                University student deserves — instant answers, procedure guides,
                and official letters, all in one place.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 w-full sm:w-auto">
                <Link
                  href="/app"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 text-white font-semibold px-5 py-3 hover:bg-blue-700 active:scale-[0.98] transition-all w-full sm:w-auto"
                >
                  Try it free
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-white font-semibold px-5 py-3 hover:bg-slate-800 transition-colors w-full sm:w-auto"
                >
                  See how it works
                </a>
              </div>
            </div>

            {/* Right column — browser-chrome mock of the real chat UI */}
            <div className="w-full max-w-xl mx-auto lg:mx-0 lg:ml-auto">
              <div className="rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl overflow-hidden">
                {/* Chrome bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-3 text-xs text-slate-500 bg-slate-800 rounded-full px-3 py-1 truncate">
                    lasu-compass.ai
                  </span>
                </div>

                {/* App preview */}
                <div className="bg-white">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                    <Logo />
                    <nav className="flex items-center gap-4 text-xs font-medium">
                      {MOCK_TABS.map((tab, i) => (
                        <span
                          key={tab}
                          className={
                            i === 0
                              ? "text-blue-600 border-b-2 border-blue-600 pb-0.5"
                              : "text-gray-400"
                          }
                        >
                          {tab}
                        </span>
                      ))}
                    </nav>
                  </div>

                  <div className="px-4 py-4 space-y-3 min-h-[220px]">
                    <div className="flex justify-start">
                      <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-gray-100 px-4 py-2.5 text-sm text-gray-900 leading-relaxed text-left">
                        Course registration opens on the student portal. Make
                        sure your school fees are cleared first — the window is
                        usually 3–4 weeks per semester.
                        <div className="mt-2 pt-2 border-t border-gray-200 flex flex-wrap gap-1.5">
                          <span className="inline-flex items-center gap-1 text-[11px] text-gray-500 bg-white border border-gray-200 rounded-full px-2 py-0.5">
                            <FileText className="w-3 h-3" />
                            Academic Calendar — p. 3
                          </span>
                          <span className="inline-flex items-center gap-1 text-[11px] text-gray-500 bg-white border border-gray-200 rounded-full px-2 py-0.5">
                            <FileText className="w-3 h-3" />
                            Registrar No. 12
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* User message */}
                    <div className="flex justify-end">
                      <div className="max-w-[85%] rounded-2xl rounded-br-sm bg-blue-600 text-white px-4 py-2.5 text-sm leading-relaxed text-left">
                        Where do I submit my SIWES log book?
                      </div>
                    </div>

                    {/* Typing indicator */}
                    <div className="flex justify-start">
                      <div className="rounded-2xl rounded-bl-sm bg-gray-100 px-4 py-3 flex gap-1 items-center">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 px-4 py-3">
                    <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 pl-4 pr-1.5 py-1.5">
                      <span className="flex-1 text-sm text-gray-400 truncate text-left">
                        Ask anything about LASU...
                      </span>
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                        <Send className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
