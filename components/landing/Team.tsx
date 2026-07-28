import { FaGithub } from "react-icons/fa";
import RevealSection from "@/components/shared/RevealSection";

const STACK = [
  {
    label: "Next.js",
    dotColor: "bg-[#38bdf8]",
    textColor: "text-[#38bdf8]",
    bgClass: "bg-[#0b1329]",
  },
  {
    label: "ChromaDB",
    dotColor: "bg-[#a855f7]",
    textColor: "text-[#a855f7]",
    bgClass: "bg-[#140d24]",
  },
  {
    label: "Gemma 4",
    dotColor: "bg-[#eab308]",
    textColor: "text-[#eab308]",
    bgClass: "bg-[#191308]",
  },
  {
    label: "Tailwind CSS",
    dotColor: "bg-[#38bdf8]",
    textColor: "text-[#38bdf8]",
    bgClass: "bg-[#081524]",
  },
  {
    label: "TypeScript",
    dotColor: "bg-[#3178c6]",
    textColor: "text-[#3178c6]",
    bgClass: "bg-[#091124]",
  },
  {
    label: "FastAPI",
    dotColor: "bg-[#10b981]",
    textColor: "text-[#10b981]",
    bgClass: "bg-[#051813]",
  },
];

export default function Team() {
  return (
    <section className="bg-white border-t border-slate-100 py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealSection>
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
            {/* Left Column content */}
            <div className="space-y-6">
              {/* Gold Hackathon Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-[#fef3c7] px-4 py-1.5 text-xs font-semibold text-amber-800">
                <span>🏆 LASU AI Hackathon — 1st Place</span>
              </div>

              {/* Headings */}
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Built in under 4 hours. <br />
                Shipped and working.
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-xl">
                LASU Compass AI was designed, built, and deployed entirely
                within a single hackathon session. The full source is open —
                explore the architecture, fork it, extend it.
              </p>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-50 transition active:scale-[0.98]"
                >
                  <FaGithub className="w-4 h-4 text-slate-800" />
                  View on GitHub
                </a>
              </div>
            </div>

            {/* Right Column Stack Items */}
            <div className="space-y-4">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 block">
                Tech Stack
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {STACK.map((tech) => (
                  <div
                    key={tech.label}
                    className={`flex items-center gap-3 rounded-xl px-5 py-4 ${tech.bgClass} border border-slate-900/10 transition-transform duration-200 hover:-translate-y-0.5`}
                  >
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${tech.dotColor} shrink-0`}
                    />
                    <span
                      className={`text-xs font-extrabold tracking-wide ${tech.textColor}`}
                    >
                      {tech.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
