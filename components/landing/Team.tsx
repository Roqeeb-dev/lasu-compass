import { FaGithub } from "react-icons/fa";
import RevealSection from "@/components/shared/RevealSection";

const STACK = [
  {
    label: "Next.js",
    role: "Frontend Framework",
    dotColor: "bg-sky-400",
    textColor: "text-sky-400",
    bgClass: "bg-slate-950/60",
    hoverBorder: "group-hover:border-sky-500/30",
    hoverGlow: "group-hover:shadow-[0_0_20px_rgba(56,189,248,0.05)]",
  },
  {
    label: "ChromaDB",
    role: "Vector Database",
    dotColor: "bg-purple-400",
    textColor: "text-purple-400",
    bgClass: "bg-slate-950/60",
    hoverBorder: "group-hover:border-purple-500/30",
    hoverGlow: "group-hover:shadow-[0_0_20px_rgba(168,85,247,0.05)]",
  },
  {
    label: "Gemma 4",
    role: "Reasoning LLM Engine",
    dotColor: "bg-amber-400",
    textColor: "text-amber-400",
    bgClass: "bg-slate-950/60",
    hoverBorder: "group-hover:border-amber-500/30",
    hoverGlow: "group-hover:shadow-[0_0_20px_rgba(234,179,8,0.05)]",
  },
  {
    label: "Tailwind CSS",
    role: "Utility Styling",
    dotColor: "bg-cyan-400",
    textColor: "text-cyan-400",
    bgClass: "bg-slate-950/60",
    hoverBorder: "group-hover:border-cyan-500/30",
    hoverGlow: "group-hover:shadow-[0_0_20px_rgba(6,182,212,0.05)]",
  },
  {
    label: "TypeScript",
    role: "Static Type Safety",
    dotColor: "bg-blue-500",
    textColor: "text-blue-400",
    bgClass: "bg-slate-950/60",
    hoverBorder: "group-hover:border-blue-500/30",
    hoverGlow: "group-hover:shadow-[0_0_20px_rgba(37,99,235,0.05)]",
  },
  {
    label: "FastAPI",
    role: "Backend API Framework",
    dotColor: "bg-emerald-400",
    textColor: "text-emerald-400",
    bgClass: "bg-slate-950/60",
    hoverBorder: "group-hover:border-emerald-500/30",
    hoverGlow: "group-hover:shadow-[0_0_20px_rgba(16,185,129,0.05)]",
  },
];

export default function Team() {
  return (
    <section className="bg-white border-t border-slate-100 py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealSection>
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Left Column Content */}
            <div className="space-y-6 max-w-xl">
              {/* Gold Hackathon Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-[#fef3c7] px-4 py-1.5 text-xs font-semibold text-amber-800">
                <span>🏆 Google Build with Gemma AI Hackathon — 1st Place</span>
              </div>

              {/* Headings */}
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Built in under 4 hours. <br />
                Shipped and working.
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                LASU Compass AI was designed, built, and deployed entirely
                within a single hackathon session. The full source is open —
                explore the architecture, fork it, extend it.
              </p>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href="https://github.com/Roqeeb-dev/lasu-compass.git"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-50 transition active:scale-[0.98]"
                >
                  <FaGithub className="w-4 h-4 text-slate-850" />
                  View on GitHub
                </a>
              </div>
            </div>

            {/* Right Column Stack Items */}
            <div className="space-y-4">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 block mb-1">
                Tech Stack
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {STACK.map((tech) => (
                  <div
                    key={tech.label}
                    className={`group flex items-start gap-4 rounded-xl px-5 py-4 ${tech.bgClass} border border-slate-900/5 hover:border-slate-900/10 transition-all duration-300 hover:-translate-y-0.5 ${tech.hoverBorder} ${tech.hoverGlow}`}
                  >
                    {/* Live Indicator Ring */}
                    <div className="relative flex h-2 w-2 mt-1.5 shrink-0">
                      <span
                        className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${tech.dotColor}`}
                      />
                      <span
                        className={`relative inline-flex rounded-full h-2 w-2 ${tech.dotColor}`}
                      />
                    </div>

                    {/* Text Details */}
                    <div className="space-y-0.5">
                      <h4
                        className={`text-sm font-extrabold tracking-tight ${tech.textColor}`}
                      >
                        {tech.label}
                      </h4>
                      <p className="text-[10px] font-semibold text-slate-400">
                        {tech.role}
                      </p>
                    </div>
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
