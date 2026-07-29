import { FaGithub } from "react-icons/fa";
import RevealSection from "@/components/shared/RevealSection";

const STACK = [
  {
    label: "Next.js",
    role: "Frontend Framework",
    dotColor: "bg-sky-500",
    textColor: "text-sky-600",
  },
  {
    label: "ChromaDB",
    role: "Vector Database",
    dotColor: "bg-purple-500",
    textColor: "text-purple-600",
  },
  {
    label: "Gemma 4",
    role: "Reasoning LLM Engine",
    dotColor: "bg-amber-500",
    textColor: "text-amber-600",
  },
  {
    label: "Tailwind CSS",
    role: "Utility Styling",
    dotColor: "bg-cyan-500",
    textColor: "text-cyan-600",
  },
  {
    label: "TypeScript",
    role: "Static Type Safety",
    dotColor: "bg-blue-600",
    textColor: "text-blue-600",
  },
  {
    label: "FastAPI",
    role: "Backend API Framework",
    dotColor: "bg-emerald-500",
    textColor: "text-emerald-600",
  },
];

export default function Team() {
  return (
    <section className="bg-slate-50/50 border-t border-slate-200/80 py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealSection>
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Left Column Content */}
            <div className="space-y-6 max-w-xl">
              {/* Gold Hackathon Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/80 bg-amber-50 px-4 py-1.5 text-xs font-medium text-amber-900 shadow-sm">
                <span>🏆 Google Build with Gemma AI Hackathon — 1st Place</span>
              </div>

              {/* Headings */}
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Built in under 4 hours. <br />
                Shipped and working.
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
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
                  className="inline-flex items-center gap-2.5 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 hover:border-slate-400 transition active:scale-[0.98]"
                >
                  <FaGithub className="w-4 h-4 text-slate-900" />
                  View on GitHub
                </a>
              </div>
            </div>

            {/* Right Column Stack Items */}
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                Tech Stack Architecture
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {STACK.map((tech) => (
                  <div
                    key={tech.label}
                    className="group flex items-start gap-3.5 rounded-xl p-4 bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 hover:-translate-y-0.5"
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
                        className={`text-sm font-bold tracking-tight text-slate-900`}
                      >
                        {tech.label}
                      </h4>
                      <p className="text-xs font-medium text-slate-500">
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
