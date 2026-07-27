import Link from "next/link";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import RevealSection from "@/components/shared/RevealSection";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 pt-20 pb-16">
      <RevealSection>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-yellow-50 text-yellow-800 text-xs font-semibold px-3 py-1.5 mb-6">
              🏆 1st Place — Build with Gemma: GDG on Campus LASU
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-slate-900 flex items-center justify-center text-white font-semibold text-sm">
                LC
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-600">
                  LASU Compass AI
                </p>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                  Campus answers with real documentation
                </p>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
              Stop hunting for LASU info.
              <br className="hidden sm:block" />
              <span className="text-blue-600">Just ask.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-8 mb-10">
              Your digital front desk for Lagos State University — answers,
              procedure guidance, and official letters grounded in real LASU
              documentation, powered by Gemma 4.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/app"
                className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 text-white font-semibold px-6 py-3.5 shadow-lg shadow-blue-500/10 hover:bg-blue-700 transition"
              >
                Try it now
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/#features"
                className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition"
              >
                Explore features
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_30px_90px_-30px_rgba(15,23,42,0.18)]">
              <div className="flex items-center justify-between mb-5">
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-slate-900">
                    Campus Assistant
                  </p>
                  <p className="text-xs text-slate-400">Live chat preview</p>
                </div>
                <div className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Demo
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-[1.5rem] bg-slate-100 px-5 py-4">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                    <span>Gemma 4</span>
                    <span>LASU docs</span>
                  </div>
                  <div className="space-y-3">
                    <div className="rounded-3xl bg-white p-4 shadow-[0_8px_20px_-12px_rgba(15,23,42,0.25)]">
                      <p className="text-sm text-slate-700 leading-6">
                        What documents do I need for transcript request?
                      </p>
                    </div>
                    <div className="rounded-3xl bg-blue-600/5 border border-blue-100 p-4">
                      <p className="text-sm text-blue-700 leading-6">
                        Use your LASU ID, clearance form, payment receipt, and
                        completed transcript application.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.5rem] bg-blue-50 p-4">
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                    <Sparkles className="w-4 h-4 text-blue-500" />
                    <span>Answers come with sources</span>
                  </div>
                  <div className="grid gap-3">
                    <div className="rounded-3xl bg-white p-4 text-xs text-slate-600">
                      Source: LASU transcript policy, Student Affairs page.
                    </div>
                    <div className="rounded-3xl bg-slate-900 p-3 text-white text-xs">
                      + Show full step-by-step guidance
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 left-1/2 w-[calc(100%-2rem)] -translate-x-1/2 rounded-3xl border border-slate-200 bg-slate-950/95 px-4 py-4 text-white shadow-2xl backdrop-blur-md sm:w-[calc(100%-3.5rem)]">
              <div className="flex items-center justify-between text-sm font-semibold">
                <span>Quick facts</span>
                <span className="rounded-full bg-blue-500 px-2.5 py-1 text-[10px] uppercase tracking-[0.24em] text-white">
                  Grounded
                </span>
              </div>
              <div className="mt-3 grid gap-3 sm:grid-cols-3 text-xs text-slate-300">
                <div className="rounded-2xl bg-slate-900/90 p-3">
                  <p className="font-semibold">AI sources</p>
                  <p>LASU docs</p>
                </div>
                <div className="rounded-2xl bg-slate-900/90 p-3">
                  <p className="font-semibold">Response time</p>
                  <p>Instant</p>
                </div>
                <div className="rounded-2xl bg-slate-900/90 p-3">
                  <p className="font-semibold">Ready</p>
                  <p>Demo mode</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
