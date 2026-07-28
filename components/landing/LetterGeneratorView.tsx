import { FileText, ArrowRight, Download } from "lucide-react";

export default function LetterGeneratorView() {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2">
      {/* Left Column Text Content */}
      <div className="max-w-xl">
        <div className="inline-flex items-center gap-2 rounded-lg bg-purple-50 px-3 py-1.5 mb-6 text-purple-600 font-bold text-xs uppercase tracking-wider">
          <FileText className="w-3.5 h-3.5" />
          Letter Generator
        </div>
        <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-snug mb-5">
          Official letters drafted in seconds, ready to print
        </h3>
        <p className="text-sm sm:text-base text-slate-500 leading-relaxed mb-8">
          Fill in your details and get a properly formatted formal letter — to
          the HOD, Registrar, or Dean — structured exactly as LASU expects.
          Download as PDF, print, and submit.
        </p>
        <button className="inline-flex items-center gap-2 rounded-xl bg-purple-600 text-white font-semibold text-sm px-5 py-3.5 hover:bg-purple-700 transition">
          Try Letter Generator
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Right Column Letter Customizer Screen Mockup */}
      <div className="relative w-full max-w-lg lg:ml-auto">
        <div className="rounded-xl border border-slate-200 bg-[#0f172a] shadow-xl overflow-hidden">
          {/* Top Header Dots */}
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

          {/* Form and Preview Splits Panel */}
          <div className="bg-white grid grid-cols-5 min-h-[380px]">
            {/* Left Inputs Section */}
            <div className="col-span-2 border-r border-slate-100 p-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[9px] font-extrabold tracking-wider uppercase text-slate-400">
                  Letter Details
                </span>

                {/* Custom Input Mockup Fields */}
                <div className="space-y-2">
                  <label className="block text-[8px] font-bold text-slate-500 uppercase tracking-wide">
                    Type
                  </label>
                  <input
                    type="text"
                    disabled
                    value="Transcript Request"
                    className="w-full bg-slate-50 border border-slate-200 rounded p-1.5 text-[10px] text-slate-800 font-medium"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-[8px] font-bold text-slate-500 uppercase tracking-wide">
                    Full Name
                  </label>
                  <input
                    type="text"
                    disabled
                    value="Adaeze Okonkwo"
                    className="w-full bg-slate-50 border border-slate-200 rounded p-1.5 text-[10px] text-slate-800 font-medium"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-[8px] font-bold text-slate-500 uppercase tracking-wide">
                    Matric No.
                  </label>
                  <input
                    type="text"
                    disabled
                    value="190401034"
                    className="w-full bg-slate-50 border border-slate-200 rounded p-1.5 text-[10px] text-slate-800 font-medium"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-[8px] font-bold text-slate-500 uppercase tracking-wide">
                    Faculty
                  </label>
                  <input
                    type="text"
                    disabled
                    value="Science"
                    className="w-full bg-slate-50 border border-slate-200 rounded p-1.5 text-[10px] text-slate-800 font-medium"
                  />
                </div>
              </div>

              <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white rounded py-2 text-[9px] font-bold flex items-center justify-center gap-1 transition">
                <Download className="w-3 h-3" /> Download PDF
              </button>
            </div>

            {/* Right Printable Letter Preview Panel */}
            <div className="col-span-3 p-4 bg-slate-50/50 flex flex-col justify-start select-none">
              <div className="bg-white border border-slate-100 shadow-sm p-4 h-full rounded text-[6px] text-slate-800 font-serif leading-relaxed">
                {/* Sender Address Block */}
                <div className="text-right space-y-0.5 mb-3">
                  <p className="font-bold">Adaeze Okonkwo</p>
                  <p>190401034</p>
                  <p>Computer Science, Science</p>
                  <p className="text-slate-400">28 July, 2025</p>
                </div>

                {/* Recipient Address Block */}
                <div className="space-y-0.5 mb-4">
                  <p className="font-bold">To: The Registrar</p>
                  <p>Lagos State University</p>
                  <p>
                    <span className="font-bold">Through:</span> The Dean,
                    Faculty of Science
                  </p>
                </div>

                {/* Subject Block */}
                <div className="text-center font-bold underline uppercase tracking-tight text-[7px] mb-3">
                  Request for Official Academic Transcript
                </div>

                {/* Body Block */}
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
  );
}
