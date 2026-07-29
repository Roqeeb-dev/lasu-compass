import {
  Briefcase,
  Clipboard,
  BadgeCheck,
  GraduationCap,
  FileText,
  FileCheck,
} from "lucide-react";

const PROCEDURES = [
  {
    label: "SIWES",
    query: "How do I complete SIWES registration?",
    icon: Briefcase,
  },
  {
    label: "Course Registration",
    query: "How do I register my courses?",
    icon: Clipboard,
  },
  {
    label: "Freshers' Clearance",
    query: "How do I complete freshers' clearance?",
    icon: BadgeCheck,
  },
  {
    label: "Final-Year Clearance",
    query: "How do I complete final-year clearance?",
    icon: GraduationCap,
  },
  {
    label: "Transcript Requests",
    query: "How do I request my transcript?",
    icon: FileText,
  },
];

type Props = {
  onSelect: (query: string) => void;
};

export default function ProcedureChips({ onSelect }: Props) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-4 sm:px-6 text-center">
      <div className="relative w-16 h-16 flex items-center justify-center mb-5">
        <div className="absolute inset-0 rounded-full bg-emerald-50" />
        <div className="absolute inset-2 rounded-full bg-white border-2 border-emerald-500 shadow-sm" />
        <FileCheck
          className="relative w-5 h-5 text-emerald-600"
          strokeWidth={2}
        />
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Official Procedures Guide
      </h2>
      <p className="text-sm text-gray-500 mb-8 max-w-md">
        Select any procedure below to get a clear, step-by-step breakdown.
      </p>

      <div className="flex flex-wrap justify-center gap-3 max-w-2xl">
        {PROCEDURES.map(({ label, query, icon: Icon }) => (
          <button
            key={label}
            onClick={() => onSelect(query)}
            className="flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-900 shadow-sm hover:border-blue-400 hover:shadow-md active:scale-[0.98] transition-all"
          >
            <Icon className="w-4 h-4 text-blue-500 shrink-0" />
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
