import { BookOpen, Clock3, Sparkles } from "lucide-react";
import RevealSection from "@/components/shared/RevealSection";

const STATS = [
  {
    icon: BookOpen,
    value: "3",
    label: "AI-grounded features",
    accent: "bg-blue-50 text-blue-700 border-blue-100",
  },
  {
    icon: Clock3,
    value: "4 hrs",
    label: "Build sprint",
    accent: "bg-emerald-50 text-emerald-700 border-emerald-100",
  },
  {
    icon: Sparkles,
    value: "Gemma 4",
    label: "Reasoning engine",
    accent: "bg-violet-50 text-violet-700 border-violet-100",
  },
];

export default function Problem() {
  return (
    <section className="border-t border-slate-100 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <RevealSection>
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Information shouldn't be this hard to find
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto leading-8">
              LASU students lose time chasing details across WhatsApp groups,
              notice boards, and departmental offices — with no single reliable
              source for procedures, deadlines, or letter formats.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3 mb-12">
            {STATS.map(({ icon: Icon, value, label, accent }) => (
              <div
                key={value}
                className={`rounded-3xl border p-6 shadow-sm ${accent} border-opacity-80`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 text-xl text-slate-900 mb-4 shadow-sm">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="text-4xl font-semibold">{value}</div>
                <p className="mt-2 text-sm text-slate-600">{label}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
              <div className="text-sm font-semibold text-slate-900 mb-4">
                Before: scattered student information
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 rounded-3xl bg-slate-100 p-4">
                  <div className="h-3.5 w-3.5 rounded-full bg-blue-500" />
                  <span className="text-sm text-slate-600">
                    WhatsApp threads
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-3xl bg-slate-100 p-4">
                  <div className="h-3.5 w-3.5 rounded-full bg-emerald-500" />
                  <span className="text-sm text-slate-600">
                    Notice board updates
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-3xl bg-slate-100 p-4">
                  <div className="h-3.5 w-3.5 rounded-full bg-violet-500" />
                  <span className="text-sm text-slate-600">
                    Department office visits
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-blue-600/5 border border-blue-100 p-6 shadow-sm">
              <div className="text-sm font-semibold text-slate-900 mb-4">
                After: one clean answer hub
              </div>
              <div className="rounded-[1.5rem] bg-white p-5 shadow-sm">
                <div className="mb-4 rounded-3xl bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900 mb-2">
                    LASU Compass
                  </p>
                  <p className="text-sm text-slate-600 leading-6">
                    One place for procedures, letter templates, and
                    documentation-backed answers.
                  </p>
                </div>
                <div className="grid gap-3">
                  <div className="rounded-3xl border border-slate-200 bg-slate-100 p-4 text-sm text-slate-600">
                    Search by question or ask in plain English.
                  </div>
                  <div className="rounded-3xl border border-blue-100 bg-blue-50 p-4 text-sm text-blue-700">
                    Answers cite LASU docs so you can trust every
                    recommendation.
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
