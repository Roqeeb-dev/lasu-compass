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

  const renderField = (value: string, placeholder: string) => {
    const isPlaceholder = !value;
    const displayText = value || placeholder;

    if (isPrinting) {
      return displayText;
    }

    return (
      <span
        className={
          isPlaceholder
            ? "text-slate-400 italic font-serif font-light transition-colors"
            : "text-slate-900 font-serif font-normal"
        }
      >
        {displayText}
      </span>
    );
  };

  return (
    <div
      id="letter-preview"
      className="w-full bg-white font-serif text-sm leading-relaxed text-slate-800"
      style={{
        fontFamily: "Georgia, Cambria, 'Times New Roman', Times, serif",
      }}
    >
      {/* Sender Address Block (Right-aligned layout) */}
      <div className="flex flex-col items-end text-right mb-8 space-y-1 ml-auto max-w-xs sm:max-w-md">
        <p className="font-semibold text-slate-900">
          {renderField(data.name, "Your Full Name")}
        </p>
        <p className="text-xs text-slate-600">
          {renderField(data.matricNo, "Matric Number")}
        </p>
        <p className="text-xs text-slate-600">
          Department of {renderField(data.department, "Department")}
        </p>
        <p className="text-xs text-slate-600">
          Faculty of {renderField(data.faculty, "Faculty")}
        </p>
        <p className="text-xs text-slate-600">
          Lagos State University, Ojo, Lagos.
        </p>
        <p className="text-xs text-slate-700 font-medium mt-1">
          {data.date ||
            new Date().toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
        </p>
      </div>

      {/* Recipient Hierarchy */}
      <div className="mb-6 space-y-4">
        <div>
          <p className="font-bold text-slate-900 mb-0.5">To:</p>
          {recipientLines.length > 0 ? (
            recipientLines.map((line, i) => (
              <p key={i} className="text-slate-800 leading-tight">
                {line}
              </p>
            ))
          ) : (
            <>
              <p className="text-slate-800 leading-tight">
                The Registrar / Head of Department
              </p>
              <p className="text-slate-800 leading-tight">
                Lagos State University, Ojo, Lagos
              </p>
            </>
          )}
        </div>

        <div>
          <p className="font-bold text-slate-900 mb-0.5">Through:</p>
          <p className="text-slate-800 leading-tight">
            The {renderField(data.faculty, "Faculty")} Dean
          </p>
          <p className="text-slate-800 leading-tight">
            Faculty of {renderField(data.faculty, "[Faculty]")}
          </p>
        </div>
      </div>

      {/* Subject Line Block */}
      <div className="my-8 text-center px-4">
        <p className="font-bold uppercase text-xs sm:text-sm tracking-wider text-slate-900 leading-relaxed">
          {config?.subject ? (
            <span
              className={
                isPrinting
                  ? "underline decoration-1 underline-offset-4"
                  : "border-b border-slate-900 pb-0.5"
              }
            >
              {config.subject(data)}
            </span>
          ) : (
            <span className="text-slate-400 italic font-medium tracking-normal normal-case">
              SUBJECT LINE APPEARS HERE
            </span>
          )}
        </p>
      </div>

      {/* Dynamic Letter Body */}
      <div className="space-y-4 text-slate-800 leading-relaxed text-justify">
        {config?.body ? (
          <div className="whitespace-pre-line text-slate-800">
            {config.body(data)}
          </div>
        ) : (
          <p className="text-slate-400 italic">
            Your letter body will appear here once you select a letter type and
            fill in the details above.
          </p>
        )}

        {/* Concluding Paragraphs */}
        <p>
          I hereby attach all relevant documents to support this request and
          shall make myself available for any further inquiries.
        </p>
        <p>
          I trust that this request will be given your favourable consideration.
          Thank you.
        </p>
      </div>

      {/* Closing Block */}
      <div className="mt-10 pt-4">
        <p className="text-slate-800">Yours faithfully,</p>

        {/* Signature Line Area */}
        <div className="mt-12 max-w-xs">
          <div className="w-40 border-t border-slate-300 mb-2"></div>
          <p className="font-semibold text-slate-900 leading-tight">
            {renderField(data.name, "Your Name")}
          </p>
          <p className="text-xs text-slate-500 mt-0.5">
            {renderField(data.matricNo, "Matric No.")}
          </p>
        </div>
      </div>
    </div>
  );
}
