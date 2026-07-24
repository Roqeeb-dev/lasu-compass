const PROCEDURES = [
  {
    label: "SIWES Registration",
    query: "How do I complete SIWES registration?",
  },
  { label: "Course Registration", query: "How do I register my courses?" },
  {
    label: "Freshers' Clearance",
    query: "How do I complete freshers' clearance?",
  },
  {
    label: "Final-Year Clearance",
    query: "How do I complete final-year clearance?",
  },
  { label: "Transcript Requests", query: "How do I request my transcript?" },
];

type Props = {
  onSelect: (query: string) => void;
};

export default function ProcedureChips({ onSelect }: Props) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-4 sm:px-6 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
        Which procedure do you need help with?
      </h2>
      <p className="text-sm sm:text-base text-gray-500 mb-8">
        Pick one below, or ask a follow-up question anytime
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full max-w-3xl">
        {PROCEDURES.map((p) => (
          <button
            key={p.label}
            onClick={() => onSelect(p.query)}
            className="group flex items-center gap-3 text-left px-4 py-4 rounded-2xl border-2 border-gray-200 bg-white shadow-sm hover:border-blue-500 hover:shadow-md active:scale-[0.98] transition-all"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
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
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <path d="M14 2v6h6" />
              </svg>
            </span>
            <span className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {p.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
