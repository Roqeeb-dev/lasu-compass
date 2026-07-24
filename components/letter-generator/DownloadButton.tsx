type Props = {
  filename: string;
};

export default function DownloadButton({ filename }: Props) {
  const handleDownload = async () => {
    const html2pdf = (await import("html2pdf.js")).default;
    const element = document.getElementById("letter-preview");
    if (!element) return;

    html2pdf()
      .from(element)
      .set({
        margin: 10,
        filename,
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      })
      .save();
  };

  return (
    <button
      onClick={handleDownload}
      className="w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 text-white font-semibold px-4 py-3 shadow-sm hover:bg-blue-700 active:scale-[0.98] transition-all"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M12 3v12" />
        <path d="M7 10l5 5 5-5" />
        <path d="M5 21h14" />
      </svg>
      Download as PDF
    </button>
  );
}
