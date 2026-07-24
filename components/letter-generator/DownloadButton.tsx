"use client";

import { useState } from "react";
import { FileDown, Loader2 } from "lucide-react";

type DownloadProps = {
  filename: string;
  onPrintChange: (isPrinting: boolean) => void;
};

export default function DownloadButton({
  filename,
  onPrintChange,
}: DownloadProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    if (isGenerating) return;

    setIsGenerating(true);
    // 1. Temporarily strip interactive highlights for clean print layout
    onPrintChange(true);

    setTimeout(async () => {
      const element = document.getElementById("letter-preview");
      if (element) {
        try {
          const html2pdf = (await import("html2pdf.js")).default;

          const opt = {
            margin: 0.5,
            filename,
            image: {
              type: "jpeg" as const,
              quality: 0.98,
            },
            html2canvas: {
              scale: 2,
              useCORS: true,
            },
            jsPDF: {
              unit: "in" as const,
              format: "letter" as const,
              orientation: "portrait" as const,
            },
          };

          // Generate and trigger download
          await html2pdf().set(opt).from(element).save();
        } catch (error) {
          console.error("PDF generation failed:", error);
        }
      }

      onPrintChange(false);
      setIsGenerating(false);
    }, 150);
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isGenerating}
      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-2xl shadow-md hover:shadow-lg transition-all transform active:scale-[0.98] disabled:transform-none disabled:cursor-not-allowed"
    >
      {isGenerating ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          Generating Document...
        </>
      ) : (
        <>
          <FileDown className="w-5 h-5" />
          Download Official PDF
        </>
      )}
    </button>
  );
}
