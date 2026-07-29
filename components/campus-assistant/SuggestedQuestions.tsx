import { Compass, FileText, MapPin, Calendar } from "lucide-react";

const QUESTIONS = [
  { text: "How do I register my courses?", icon: FileText },
  { text: "Where is the Faculty of Science?", icon: MapPin },
  { text: "When is the deadline for school fees?", icon: Calendar },
  { text: "How do I apply for a transcript?", icon: FileText },
];

type Props = {
  onSelect: (question: string) => void;
};

export default function SuggestedQuestions({ onSelect }: Props) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-4 sm:px-6 text-center">
      <div className="relative w-16 h-16 flex items-center justify-center mb-5">
        <div className="absolute inset-0 rounded-full bg-blue-50" />
        <div className="absolute inset-2 rounded-full bg-white border-2 border-blue-500 shadow-sm" />
        <Compass className="relative w-5 h-5 text-amber-500" strokeWidth={2} />
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        What can I help you with today?
      </h2>
      <p className="text-sm text-gray-500 mb-8 max-w-md">
        Ask anything about LASU — courses, procedures, deadlines, locations.
        I'll find you a real answer, sourced from official documents.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-xl">
        {QUESTIONS.map(({ text, icon: Icon }) => (
          <button
            key={text}
            onClick={() => onSelect(text)}
            className="h-full flex items-center gap-2.5 text-left text-sm font-semibold px-4 py-3.5 rounded-2xl border border-blue-100 bg-blue-50 text-blue-900 shadow-sm hover:border-blue-400 hover:bg-blue-100 hover:shadow-md active:scale-[0.98] transition-all"
          >
            <Icon className="w-4 h-4 text-blue-500 shrink-0" />
            <span>{text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
