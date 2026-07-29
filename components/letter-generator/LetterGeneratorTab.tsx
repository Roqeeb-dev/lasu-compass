"use client";

import { useState } from "react";
import { LetterData } from "@/types/types";
import LetterForm from "./LetterForm";
import LetterPreview from "./LetterPreview";
import DownloadButton from "./DownloadButton";

const initialData: LetterData = {
  name: "",
  matricNo: "",
  department: "",
  faculty: "",
  purpose: "",
  courseCode: "",
  courseTitle: "",
  semester: "",
  level: "",
  date: new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }),
};

export default function LetterGeneratorTab() {
  const [letterType, setLetterType] = useState("correctionOfResult");
  const [formData, setFormData] = useState<LetterData>(initialData);
  const [isPrinting, setIsPrinting] = useState(false);

  const handleChange = (field: keyof LetterData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Form Column */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 space-y-6">
          <LetterForm
            letterType={letterType}
            onTypeChange={setLetterType}
            formData={formData}
            onChange={handleChange}
          />

          <div className="pt-2">
            <DownloadButton
              filename={`${letterType}_letter.pdf`}
              onPrintChange={setIsPrinting}
            />
          </div>
        </div>

        {/* Right Live Preview Column */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col">
            {/* Live Preview Header bar matched to screenshot */}
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-white select-none">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                <span className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                  Live Preview
                </span>
              </div>
              <span className="text-[10px] bg-slate-50 text-slate-400 font-semibold px-2 py-0.5 rounded border border-slate-100">
                A4 Standard Layout
              </span>
            </div>

            {/* Letter Sheet Container */}
            <div className="p-6 sm:p-10 md:p-12 bg-slate-50/50 flex justify-center items-start overflow-auto min-h-[600px]">
              <div className="w-full max-w-2xl bg-white p-6 sm:p-10 rounded-xl border border-slate-100 shadow-sm">
                <LetterPreview
                  letterType={letterType}
                  data={formData}
                  isPrinting={isPrinting}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
