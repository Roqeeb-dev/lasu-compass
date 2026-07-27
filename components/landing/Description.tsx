import {
  ArrowRight,
  BookOpen,
  Cpu,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import RevealSection from "@/components/shared/RevealSection";

export default function Description() {
  return (
    <section className="border-t border-slate-100 bg-slate-50">
      <RevealSection>
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-blue-50 text-blue-600 mx-auto mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Grounded, not guessing
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto leading-8">
              Gemma doesn't know LASU's procedures out of the box — so every
              answer is retrieved from real LASU documentation first, then
              reasoned over. That means fewer confident wrong answers, and a
              source cited under every reply.
            </p>
          </div>

          <div className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-[1fr_auto_1fr] items-center">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-900">
                <div className="rounded-3xl bg-blue-50 p-3 text-blue-600">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold">Question</p>
                  <p className="text-sm text-slate-600">
                    Student asks LASU policy question.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-slate-900">
                <div className="rounded-3xl bg-emerald-50 p-3 text-emerald-600">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold">Retrieval</p>
                  <p className="text-sm text-slate-600">
                    LASU docs are fetched and filtered.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-slate-900">
                <div className="rounded-3xl bg-violet-50 p-3 text-violet-600">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold">Answer</p>
                  <p className="text-sm text-slate-600">
                    Gemma returns a cited, grounded reply.
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden h-full w-px bg-slate-200 sm:block" />

            <div className="rounded-3xl bg-slate-50 p-6 text-center">
              <div className="inline-flex items-center justify-center rounded-full bg-blue-600 p-4 text-white mb-5">
                <ArrowRight className="w-5 h-5" />
              </div>
              <p className="text-sm text-slate-600 leading-7">
                The path from question to answer is visible and verifiable, not
                guesswork.
              </p>
            </div>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
