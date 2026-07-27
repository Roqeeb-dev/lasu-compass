import { Compass, ClipboardList, FileText } from "lucide-react";
import RevealSection from "@/components/shared/RevealSection";

const FEATURES = [
  {
    icon: Compass,
    accent: "bg-blue-100 text-blue-700 border-blue-200",
    title: "Campus Assistant",
    description:
      "Ask anything about LASU in plain English. Get answers grounded in real school documentation, not guesses — with sources cited under every reply.",
    snippet: (
      <div className="space-y-3">
        <div className="rounded-3xl bg-slate-100 p-3 text-xs text-slate-600">
          What are the current SIWES registration requirements?
        </div>
        <div className="rounded-3xl bg-white p-3 text-xs text-slate-700 shadow-sm">
          SIWES registration needs your department form, bursary payment
          receipt, and supervisor contact.
        </div>
      </div>
    ),
  },
  {
    icon: ClipboardList,
    accent: "bg-emerald-100 text-emerald-700 border-emerald-200",
    title: "Procedures Guide",
    description:
      "Step-by-step guidance for the processes students get stuck on most — SIWES registration, course registration, clearance, and transcript requests.",
    snippet: (
      <div className="flex flex-wrap gap-2">
        <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-slate-700 shadow-sm">
          SIWES
        </span>
        <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-slate-700 shadow-sm">
          Clearance
        </span>
        <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-slate-700 shadow-sm">
          Transcript
        </span>
      </div>
    ),
  },
  {
    icon: FileText,
    accent: "bg-amber-100 text-amber-700 border-amber-200",
    title: "Letter Generator",
    description:
      "Fill real LASU letter formats from a simple form. Gemma polishes your reason into submittable language, then download it as a PDF.",
    snippet: (
      <div className="rounded-3xl bg-white p-4 text-xs text-slate-600 shadow-sm">
        <div className="mb-2 h-2.5 w-3/5 rounded-full bg-slate-200" />
        <div className="mb-2 h-2.5 w-4/5 rounded-full bg-slate-200" />
        <div className="h-2.5 w-1/2 rounded-full bg-slate-200" />
      </div>
    ),
  },
];

export default function Features() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <RevealSection>
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Three features. One assistant.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {FEATURES.map(
            ({ icon: Icon, accent, title, description, snippet }) => (
              <div
                key={title}
                className={`group rounded-[2rem] border p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg ${accent}`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-white/90 text-2xl shadow-sm mb-5 text-slate-900">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-3">{title}</h3>
                <p className="text-sm text-slate-600 leading-7 mb-5">
                  {description}
                </p>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  {snippet}
                </div>
              </div>
            ),
          )}
        </div>
      </RevealSection>
    </section>
  );
}
