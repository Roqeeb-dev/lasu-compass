import { LetterData } from "@/types/types";
import { letterConfigs, buildRecipientLines } from "@/types/templates";

type Props = {
  letterType: string;
  data: LetterData;
  isPrinting?: boolean;
};

export default function LetterPreview({
  letterType,
  data,
  isPrinting = false,
}: Props) {
  const config = letterConfigs[letterType];
  const recipientLines = buildRecipientLines(config);

  // Helper to render visual cues for placeholders and filled fields
  const renderField = (value: string, placeholder: string) => {
    const isPlaceholder = !value;
    const displayText = value || placeholder;

    // When exporting to PDF, strip all highlights to maintain clean, standard paper formatting
    if (isPrinting) {
      return displayText;
    }

    return (
      <span
        className={`px-1 rounded transition-all font-sans text-xs ${
          isPlaceholder
            ? "bg-gray-100 text-gray-400 border border-dashed border-gray-300"
            : "bg-blue-50 text-blue-900 border border-blue-100 font-medium"
        }`}
      >
        {displayText}
      </span>
    );
  };

  return (
    <div
      id="letter-preview"
      className="rounded-2xl border-2 p-6 sm:p-8 font-serif text-sm leading-relaxed"
      style={{
        backgroundColor: "#ffffff",
        color: "#111827",
        borderColor: "#e5e7eb",
        borderStyle: "solid",
        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      }}
    >
      {/* Sender Block */}
      <div className="mb-6 whitespace-pre-line">
        {renderField(data.name, "[Your Name]")}
        {"\n"}
        {renderField(data.matricNo, "[Matric No.]")}
        {"\n"}
        Department of {renderField(data.department, "[Department]")}
        {"\n"}
        Faculty of {renderField(data.faculty, "[Faculty]")}
        {"\n"}
        Lagos State University, Ojo.
        {"\n"}
        {renderField(data.date, "[Date]")}
      </div>

      {/* Recipient Chain */}
      <div className="mb-4">
        {recipientLines.map((line, i) => (
          <p key={i} className="font-semibold">
            {line}
          </p>
        ))}
      </div>

      <p className="mb-4">Dear Sir/Madam,</p>

      {/* Subject Line */}
      <p className="mb-4 font-bold uppercase text-center">
        {config.subject(data)}
      </p>

      {/* Body with inline highlighted purpose reflection */}
      <div className="mb-6 whitespace-pre-line">
        {config.body(data)}
        {"\n\n"}
        {renderField(data.purpose, "[Your polished purpose will appear here]")}
      </div>

      <p className="mb-1">Thank you for your kind consideration.</p>

      {/* Closing Block */}
      <div className="mt-8">
        <p>Yours faithfully,</p>
        <p className="mt-4 font-semibold">
          {renderField(data.name, "[Your Name]")}
        </p>
        <p>{renderField(data.matricNo, "[Matric No.]")}</p>
      </div>
    </div>
  );
}
