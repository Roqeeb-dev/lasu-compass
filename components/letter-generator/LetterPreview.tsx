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
  const config = letterType ? letterConfigs[letterType] : undefined;
  const recipientLines = config ? buildRecipientLines(config) : null;

  const renderField = (value: string, placeholder: string) => {
    const isPlaceholder = !value;
    const displayText = value || placeholder;

    if (isPrinting) return displayText;

    return (
      <span className={isPlaceholder ? "italic text-gray-400" : undefined}>
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
        {renderField(data.name, "Your Full Name")}
        {"\n"}
        {renderField(data.matricNo, "Matric Number")}
        {"\n"}
        {renderField(data.department, "Department")}
        {"\n"}
        {renderField(data.faculty, "Faculty")}
        {"\n"}
        {data.date}
      </div>

      {/* Recipient Chain — real once a letter type is chosen, a
          generic illustrative shell before that */}
      <div className="mb-4">
        {recipientLines ? (
          recipientLines.map((line, i) => (
            <p key={i} className="font-semibold">
              {line}
            </p>
          ))
        ) : (
          <>
            <p className="font-semibold">To:</p>
            <p>The Registrar / Head of Department</p>
            <p>Lagos State University, Ojo, Lagos</p>
            <p className="font-semibold mt-2">Through:</p>
            <p>The {renderField(data.faculty, "[Faculty]")} Dean</p>
            <p>Faculty of {renderField(data.faculty, "[Faculty]")}</p>
          </>
        )}
      </div>

      <p className="mb-4">Dear Sir/Madam,</p>

      {/* Subject Line */}
      <p className="mb-4 font-bold uppercase text-center">
        {config ? (
          config.subject(data)
        ) : (
          <span className="italic text-gray-400 normal-case font-normal">
            Subject line appears here
          </span>
        )}
      </p>

      {/* Body */}
      <div className="mb-6 whitespace-pre-line">
        {config ? (
          <>
            {config.body(data)}
            {"\n\n"}
            {renderField(
              data.purpose,
              "Your polished purpose will appear here",
            )}
            {"\n\n"}I hereby attach all relevant documents to support this
            request and shall make myself available for any further inquiries.
            {"\n\n"}I trust that this request will be given your favourable
            consideration. Thank you.
          </>
        ) : (
          <span className="italic text-gray-400">
            Your letter body will appear here once you select a letter type and
            fill in the details above.
          </span>
        )}
      </div>

      {/* Closing Block */}
      <div className="mt-8">
        <p>Yours faithfully,</p>
        <p className="mt-4 font-semibold">
          {renderField(data.name, "Your Name")}
        </p>
        <p>{renderField(data.matricNo, "Matric No.")}</p>
      </div>
    </div>
  );
}
