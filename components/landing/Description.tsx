import { MessageSquareMore, ArrowRight, ArrowDown } from "lucide-react";
import RevealSection from "@/components/shared/RevealSection";

const RAG_STEPS = [
  {
    id: 1,
    icon: (
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-950/50 border border-blue-800/30">
        <MessageSquareMore className="w-5 h-5 text-white" />
      </div>
    ),
    title: "Student question",
    description: '"How do I register?"',
    borderColor: "border-blue-900/40",
    bgAccent: "bg-blue-950/20",
    textColor: "text-blue-400",
  },
  {
    id: 2,
    icon: (
      <div className="text-2xl select-none leading-none h-12 w-12 flex items-center justify-center bg-emerald-950/50 border border-emerald-800/30 rounded-xl">
        📚
      </div>
    ),
    title: "Document retrieval",
    description: "LASU handbooks & circulars",
    borderColor: "border-emerald-900/40",
    bgAccent: "bg-emerald-950/20",
    textColor: "text-emerald-400",
  },
  {
    id: 3,
    icon: (
      <div className="text-2xl select-none leading-none h-12 w-12 flex items-center justify-center bg-purple-950/50 border border-purple-800/30 rounded-xl">
        🤖
      </div>
    ),
    title: "Gemma 3 LLM",
    description: "Google's open-weight model",
    borderColor: "border-purple-900/40",
    bgAccent: "bg-purple-950/20",
    textColor: "text-purple-400",
  },
  {
    id: 4,
    icon: (
      <div className="text-2xl select-none leading-none h-12 w-12 flex items-center justify-center bg-amber-950/50 border border-amber-800/30 rounded-xl">
        ✅
      </div>
    ),
    title: "Cited answer",
    description: "With source references",
    borderColor: "border-amber-900/40",
    bgAccent: "bg-amber-950/20",
    textColor: "text-amber-500",
  },
];

export default function Description() {
  return (
    <section className="relative overflow-hidden bg-[#030712] border-t border-slate-900 py-24">
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealSection>
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-500 block mb-3.5">
              Grounded, not guessing
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
              Built on retrieval, not hallucination
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Every answer traces back to official LASU documents. We use RAG —
              retrieval-augmented generation — so the AI can only say what the
              documents actually say.
            </p>
          </div>

          {/* Sequential Diagram Block */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 max-w-5xl mx-auto">
            {RAG_STEPS.map((step, index) => {
              const isLast = index === RAG_STEPS.length - 1;

              return (
                <div
                  key={step.id}
                  className="w-full flex flex-col lg:flex-row items-center gap-4"
                >
                  {/* Step Card */}
                  <div
                    className={`w-full rounded-2xl border ${step.borderColor} ${step.bgAccent} p-6 flex flex-col items-center justify-center text-center min-h-[170px] backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]`}
                  >
                    {step.icon}
                    <h3
                      className={`mt-4 text-sm font-extrabold ${step.textColor}`}
                    >
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-400 font-medium">
                      {step.description}
                    </p>
                  </div>

                  {/* Flow Arrow Indicators */}
                  {!isLast && (
                    <div className="flex items-center justify-center py-2 lg:py-0 shrink-0 select-none">
                      {/* Desktop horizontal path */}
                      <ArrowRight className="hidden lg:block w-4 h-4 text-slate-700" />
                      {/* Mobile vertical path */}
                      <ArrowDown className="block lg:hidden w-4 h-4 text-slate-700 animate-bounce" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
