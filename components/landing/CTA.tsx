import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import RevealSection from "@/components/shared/RevealSection";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#030712] border-t border-slate-900 py-24">
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealSection>
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Left Content Column */}
            <div className="space-y-6 max-w-xl">
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
                Stop guessing. <br />
                <span className="text-purple-400">Start knowing.</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                Whether you need a quick answer, a full procedure walkthrough,
                or a formal letter drafted in seconds — LASU Compass AI has you
                covered.
              </p>

              <div className="pt-2">
                <Link
                  href="/app"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 text-white font-semibold text-sm px-6 py-4 hover:bg-blue-700 transition active:scale-[0.98]"
                >
                  Open LASU Compass AI
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Side Browser Mockup */}
            <div className="relative w-full max-w-lg lg:ml-auto">
              <div className="rounded-xl border border-slate-800 bg-[#0c1322] shadow-2xl overflow-hidden">
                {/* Mock Browser Top Header Bar */}
                <div className="bg-[#080d16] px-4 py-3 flex items-center gap-4 border-b border-slate-950">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="bg-[#111927] rounded text-[10px] text-slate-400 px-6 py-0.5 mx-auto max-w-[150px] truncate text-center select-none">
                    Letter Generator
                  </div>
                </div>

                {/* Form & Preview Screen Panels */}
                <div className="bg-white grid grid-cols-5 min-h-[350px]">
                  {/* Left Form Panel */}
                  <div className="col-span-2 border-r border-slate-100 p-4 flex flex-col justify-between">
                    <div className="space-y-3">
                      <span className="text-[9px] font-extrabold tracking-wider uppercase text-slate-400">
                        Letter Details
                      </span>

                      <div className="space-y-1.5">
                        <label className="block text-[8px] font-bold text-slate-500 uppercase">
                          Type
                        </label>
                        <input
                          type="text"
                          disabled
                          value="Transcript Request"
                          className="w-full bg-slate-50 border border-slate-200 rounded p-1 text-[10px] text-slate-800 font-medium focus:outline-none"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-[8px] font-bold text-slate-500 uppercase">
                          Full Name
                        </label>
                        <input
                          type="text"
                          disabled
                          value="Adaeze Okonkwo"
                          className="w-full bg-slate-50 border border-slate-200 rounded p-1 text-[10px] text-slate-800 font-medium focus:outline-none"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-[8px] font-bold text-slate-500 uppercase">
                          Matric No.
                        </label>
                        <input
                          type="text"
                          disabled
                          value="190401034"
                          className="w-full bg-slate-50 border border-slate-200 rounded p-1 text-[10px] text-slate-800 font-medium focus:outline-none"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-[8px] font-bold text-slate-500 uppercase">
                          Faculty
                        </label>
                        <input
                          type="text"
                          disabled
                          value="Science"
                          className="w-full bg-slate-50 border border-slate-200 rounded p-1 text-[10px] text-slate-800 font-medium focus:outline-none"
                        />
                      </div>
                    </div>

                    <button className="w-full bg-blue-600 text-white rounded py-1.5 text-[9px] font-bold flex items-center justify-center gap-1">
                      <Download className="w-3 h-3" /> Download PDF
                    </button>
                  </div>

                  {/* Right Printed Document Preview Panel */}
                  <div className="col-span-3 p-4 bg-slate-50/50 flex flex-col select-none">
                    <div className="bg-white border border-slate-100 shadow-sm p-4 h-full rounded text-[6px] text-slate-800 font-serif leading-relaxed">
                      {/* Sender address */}
                      <div className="text-right space-y-0.5 mb-3">
                        <p className="font-bold">Adaeze Okonkwo</p>
                        <p>190401034</p>
                        <p>Computer Science, Science</p>
                        <p className="text-slate-400">28 July, 2025</p>
                      </div>

                      {/* Recipient Address */}
                      <div className="space-y-0.5 mb-4">
                        <p className="font-bold">To: The Registrar</p>
                        <p>Lagos State University</p>
                        <p>
                          <span className="font-bold">Through:</span> The Dean,
                          Faculty of Science
                        </p>
                      </div>

                      {/* Title block */}
                      <div className="text-center font-bold underline uppercase tracking-tight text-[7px] mb-3">
                        Request for Official Academic Transcript
                      </div>

                      {/* Letter body paragraph */}
                      <p className="indent-4 text-justify">
                        I write to respectfully request an official copy of my
                        academic transcript for submission to the intended
                        institution...
                      </p>
                    </div>
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
