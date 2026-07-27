import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import RevealSection from "@/components/shared/RevealSection";

export default function CTA() {
  return (
    <section className="border-t border-slate-100 bg-slate-50">
      <RevealSection>
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Ready to close the gap between questions and answers?
              </h2>
              <p className="text-slate-600 leading-8 max-w-2xl mb-8">
                Try LASU Compass AI and see a full answer flow, including a real
                letter template output and documentation-backed guidance.
              </p>
              <Link
                href="/app"
                className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 text-white font-semibold px-6 py-3.5 shadow-lg shadow-blue-500/15 hover:bg-blue-700 transition"
              >
                Launch the demo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_30px_80px_-28px_rgba(15,23,42,0.18)]">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className="text-xs uppercase tracking-[0.24em] text-slate-400">
                    Letter Generator
                  </div>
                  <p className="text-sm font-semibold text-slate-900">
                    Export a polished LASU letter
                  </p>
                </div>
                <FileText className="h-5 w-5 text-blue-600" />
              </div>
              <div className="space-y-4">
                <div className="rounded-3xl bg-slate-50 p-4">
                  <div className="mb-3 h-3 w-2/5 rounded-full bg-slate-200" />
                  <div className="h-2.5 rounded-full bg-slate-200" />
                </div>
                <div className="rounded-3xl bg-white p-4 shadow-sm">
                  <div className="mb-2 h-2.5 w-4/5 rounded-full bg-slate-200" />
                  <div className="mb-3 h-2.5 w-3/5 rounded-full bg-slate-200" />
                  <div className="h-2.5 w-1/2 rounded-full bg-slate-200" />
                </div>
                <div className="rounded-3xl bg-blue-600/10 p-4 text-sm text-blue-700">
                  Download PDF-ready letter with the right LASU formatting.
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
