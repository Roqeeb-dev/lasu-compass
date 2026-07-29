import { MessageSquare, ArrowRight, Send, FileText } from "lucide-react";
import Link from "next/link";

export default function CampusAssistantView() {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2">
      {/* Left Column Text Content */}
      <div className="max-w-xl">
        <div className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-1.5 mb-6 text-blue-600 font-bold text-xs uppercase tracking-wider">
          <MessageSquare className="w-3.5 h-3.5" />
          Campus Assistant
        </div>
        <h3 className="text-3xl font-bold text-slate-900 tracking-tight leading-snug mb-5">
          Not rumors. Not groups. Real answers.
        </h3>
        <p className="text-sm sm:text-base text-slate-500 leading-relaxed mb-8">
          Ask anything: course registration, fee deadlines, office locations.
          Every answer is pulled from verified university documents, so you
          never have to guess whether it's still current. "First say it
          straight." Every answer here does exactly that, then shows you the
          page.
        </p>
        <Link
          href="/app?tab=assistant"
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 text-white font-semibold text-sm px-5 py-3.5 hover:bg-blue-700 transition"
        >
          Try Campus Assistant
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Right Column Browser Mockup */}
      <div className="relative w-full max-w-lg lg:ml-auto">
        <div className="rounded-xl border border-slate-200 bg-[#0f172a] shadow-xl overflow-hidden">
          {/* Mock Browser Header */}
          <div className="bg-[#080d16] px-4 py-3 flex items-center gap-4 border-b border-slate-950">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            </div>
            <div className="bg-[#111927] rounded text-[10px] text-slate-400 px-6 py-0.5 mx-auto max-w-[150px] truncate text-center select-none">
              lasu-compass.ai
            </div>
          </div>

          {/* Mock App Body */}
          <div className="bg-white p-5 min-h-[350px] flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
              <span className="text-[10px] font-bold text-slate-800">
                🧭 LASU Compass AI
              </span>
              <div className="flex gap-3 text-[9px] font-semibold text-slate-400">
                <span className="text-blue-600 border-b border-blue-600">
                  Campus Assistant
                </span>
                <span>Procedures</span>
                <span>Letters</span>
              </div>
            </div>

            <div className="flex-1 space-y-3">
              {/* Bot chat box */}
              <div className="space-y-1.5 max-w-[90%]">
                <div className="rounded-xl bg-slate-100 p-3">
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Course registration opens on the student portal. Make sure
                    your school fees are cleared first — the window is usually
                    3–4 weeks per semester.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="inline-flex items-center gap-1 rounded border border-slate-200 bg-white px-2 py-0.5 text-[9px] text-slate-500 font-medium">
                    <FileText className="w-2.5 h-2.5 text-slate-400" /> Academic
                    Calendar — p. 3
                  </span>
                  <span className="inline-flex items-center gap-1 rounded border border-slate-200 bg-white px-2 py-0.5 text-[9px] text-slate-500 font-medium">
                    <FileText className="w-2.5 h-2.5 text-slate-400" />{" "}
                    Registrar No. 12
                  </span>
                </div>
              </div>

              {/* User Reply */}
              <div className="flex justify-end">
                <div className="max-w-[80%] rounded-xl bg-blue-600 px-3 py-2.5 text-white">
                  <p className="text-xs">
                    Where do I submit my SIWES log book?
                  </p>
                </div>
              </div>

              {/* Typing indicator */}
              <div className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-2">
                <span className="w-1 h-1 rounded-full bg-slate-400 animate-bounce" />
                <span className="w-1 h-1 rounded-full bg-slate-400 animate-bounce delay-70" />
                <span className="w-1 h-1 rounded-full bg-slate-400 animate-bounce delay-150" />
              </div>
            </div>

            {/* Input fields */}
            <div className="mt-3 relative">
              <input
                type="text"
                disabled
                placeholder="Ask anything about LASU..."
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 pr-10 text-xs focus:outline-none"
              />
              <button className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white">
                <Send className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
