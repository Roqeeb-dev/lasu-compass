const QUESTIONS = [
  "How do I register my courses?",
  "Where is the Faculty of Science?",
  "What documents are needed for clearance?",
  "When does SIWES registration begin?",
];

type Props = {
  onSelect: (question: string) => void;
};

export default function SuggestedQuestions({ onSelect }: Props) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-6 text-center">
      <h2 className="text-lg font-medium text-gray-900 mb-1">
        Ask me anything about LASU
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Course registration, clearance, SIWES, and more
      </p>

      <div className="flex flex-wrap justify-center gap-2 max-w-md">
        {QUESTIONS.map((q) => (
          <button
            key={q}
            onClick={() => onSelect(q)}
            className="text-sm px-3 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-blue-400 transition-colors"
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  );
}
