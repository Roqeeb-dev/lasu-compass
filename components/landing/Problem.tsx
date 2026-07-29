import { Layers, Clock, Cpu } from "lucide-react";
import RevealSection from "@/components/shared/RevealSection";

const STATS = [
  {
    icon: Layers,
    value: "3",
    label: "Integrated tools",
    description: "Chat · Procedures · Letters",
    iconBg: "bg-blue-50 text-blue-600",
  },
  {
    icon: Clock,
    value: "< 4 hrs",
    label: "Built at the hackathon",
    description: "Functional, documented, shipped",
    iconBg: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Cpu,
    value: "Gemma 3",
    label: "AI model powering it",
    description: "Google's open-weight LLM",
    iconBg: "bg-violet-50 text-violet-600",
  },
];

const BEFORE_ITEMS = [
  "Hunt for outdated PDFs on the school website",
  "Ask in 4 WhatsApp groups, get 4 different answers",
  "Queue at the registry only to be sent elsewhere",
  "Miss a deadline because nobody told you about it",
];

const AFTER_ITEMS = [
  "Ask in plain English, get a cited answer in seconds",
  "Follow a clear step-by-step procedure guide",
  "Generate your official letter without visiting any office",
  "Every answer links back to the actual source document",
];

export default function Problem() {
  return (
    <section className="bg-slate-50/60 border-t border-slate-100 py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealSection>
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 block mb-3">
              The Problem
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-5">
              University admin is a maze
            </h2>
            <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Finding the truth at LASU means bouncing between the noticeboard,
              four different WhatsApp groups, and a queue that ends with "go and
              meet another office." It shouldn't take a whole afternoon to find
              one deadline.
            </p>
          </div>

          {/* Before & After Cards Row */}
          <div className="grid gap-6 md:grid-cols-2 mb-10">
            {/* Before Card (Red/Rose accent) */}
            <div className="rounded-[1.25rem] border border-rose-100 bg-white p-8 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-500 block mb-6">
                Before
              </span>
              <ul className="space-y-4">
                {BEFORE_ITEMS.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-rose-400 font-medium text-sm mt-0.5 select-none shrink-0">
                      ✕
                    </span>
                    <span className="text-sm text-slate-600 leading-normal">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After Card (Green/Emerald accent) */}
            <div className="rounded-[1.25rem] border border-emerald-100 bg-white p-8 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-500 block mb-6">
                After
              </span>
              <ul className="space-y-4">
                {AFTER_ITEMS.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-emerald-500 font-semibold text-sm mt-0.5 select-none shrink-0">
                      ✓
                    </span>
                    <span className="text-sm text-slate-600 leading-normal">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Metrics/Stats Grid Row */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {STATS.map(({ icon: Icon, value, label, description, iconBg }) => (
              <div
                key={value}
                className="rounded-[1.25rem] border border-slate-100 bg-white p-8 shadow-sm transition-all duration-200 hover:shadow-md"
              >
                {/* Icon Container */}
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${iconBg} mb-6`}
                >
                  <Icon className="h-5 w-5" />
                </div>

                {/* Value & Labels */}
                <div className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                  {value}
                </div>
                <div className="mt-2 text-sm font-semibold text-slate-800">
                  {label}
                </div>
                <p className="mt-1 text-xs text-slate-400 font-medium">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
