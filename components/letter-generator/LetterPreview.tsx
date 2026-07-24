import { LetterData } from "@/types/types";
import { letterConfigs, buildRecipientLines } from "@/types/templates";

type Props = {
  letterType: string;
  data: LetterData;
};

export default function LetterPreview({ letterType, data }: Props) {
  const config = letterConfigs[letterType];
  const recipientLines = buildRecipientLines(config);

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
      <div className="mb-6 whitespace-pre-line">
        {data.name || "[Your Name]"}
        {"\n"}
        {data.matricNo || "[Matric No.]"}
        {"\n"}
        Department of {data.department || "[Department]"}
        {"\n"}
        Faculty of {data.faculty || "[Faculty]"}
        {"\n"}
        Lagos State University, Ojo.
        {"\n"}
        {data.date || new Date().toLocaleDateString()}
      </div>

      <div className="mb-4">
        {recipientLines.map((line, i) => (
          <p key={i} className="font-semibold">
            {line}
          </p>
        ))}
      </div>

      <p className="mb-4">Dear Sir/Madam,</p>

      <p className="mb-4 font-bold uppercase text-center">
        {config.subject(data)}
      </p>

      <p className="mb-6 whitespace-pre-line">{config.body(data)}</p>

      <p className="mb-1">Thank you for your kind consideration.</p>

      <div className="mt-8">
        <p>Yours faithfully,</p>
        <p className="mt-4 font-semibold">{data.name || "[Your Name]"}</p>
        <p>{data.matricNo || "[Matric No.]"}</p>
      </div>
    </div>
  );
}
