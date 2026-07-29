import { ClipboardList, ArrowRight, FileText } from "lucide-react";
import Link from "next/link";

export default function ProceduresGuideView() {
  const proceduralTabs = [
    { label: "SIWES", active: true },
    { label: "Course Registration", active: false },
    { label: "Freshers' Clearance", active: false },
    { label: "Final-Year Clearance", active: false },
  ];

  return (
    <div className="grid items-center gap-12 lg:grid-cols-2">
      {/* Left Column Text Content */}
      <div className="max-w-xl">
        <div className="inline-flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-1.5 mb-6 text-emerald-600 font-bold text-xs uppercase tracking-wider">
          <ClipboardList className="w-3.5 h-3.5" />
          Procedures Guide
        </div>
        <h3 className="text-3xl font-bold text-slate-900 tracking-tight leading-snug mb-5">
          Step-by-step guidance for every official process
        </h3>
        <p className="text-sm sm:text-base text-slate-500 leading-relaxed mb-8">
          SIWES, transcript requests, clearance — every bureaucratic procedure
          broken down into clear, sequenced steps. No more hunting across five
          offices to find out what to do first.
        </p>
        <Link
          href="/app?tab=procedures"
          className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 text-white font-semibold text-sm px-5 py-3.5 hover:bg-emerald-700 transition"
        >
          Try Procedures Guide
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Right Column Layout Frame Mockup */}
      <div className="relative w-full max-w-lg lg:ml-auto">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-xl">
          <span className="text-xs font-extrabold text-slate-800 tracking-tight block mb-4">
            Official Procedures Guide
          </span>

          {/* Sub-navigation inside Guide */}
          <div className="flex flex-wrap gap-2 mb-6">
            {proceduralTabs.map((tab) => (
              <span
                key={tab.label}
                className={`text-[10px] font-bold px-3 py-1.5 rounded-md border select-none transition ${
                  tab.active
                    ? "bg-blue-50 border-blue-200 text-blue-600"
                    : "bg-white border-slate-200 text-slate-500"
                }`}
              >
                {tab.label}
              </span>
            ))}
          </div>

          {/* Procedure Box Container */}
          <div className="rounded-xl border border-slate-150 bg-white p-5 space-y-4">
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
              <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                SIWES registration involves three steps: obtain your IT form
                from the department, get departmental approval, then submit to
                ITF. Here's the complete process...
              </p>
            </div>

            {/* Citations link block */}
            <div className="flex">
              <span className="inline-flex items-center gap-1.5 rounded border border-slate-200 bg-white px-2.5 py-1 text-[9px] text-slate-500 font-medium">
                <FileText className="w-2.5 h-2.5 text-slate-400" /> SIWES Guide
                — p. 4
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
