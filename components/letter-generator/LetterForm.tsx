"use client";

import { useState } from "react";
import { LetterData } from "@/types/types";
import { letterConfigs } from "@/types/templates";
import { polishPurpose } from "@/lib/apiclient";

type Props = {
  letterType: string;
  onTypeChange: (type: string) => void;
  formData: LetterData;
  onChange: (field: keyof LetterData, value: string) => void;
};

const FIELDS: { key: keyof LetterData; label: string; placeholder: string }[] =
  [
    { key: "name", label: "Full name", placeholder: "e.g. John Doe" },
    { key: "matricNo", label: "Matric number", placeholder: "e.g. 220O341127" },
    {
      key: "department",
      label: "Department",
      placeholder: "e.g. Computer Science",
    },
    { key: "faculty", label: "Faculty", placeholder: "e.g. Science" },
    { key: "level", label: "Level", placeholder: "e.g. 400" },
    { key: "courseCode", label: "Course code", placeholder: "e.g. CSC401" },
    {
      key: "courseTitle",
      label: "Course title",
      placeholder: "e.g. Software Engineering",
    },
    {
      key: "semester",
      label: "Semester / session",
      placeholder: "e.g. First Semester 2025/2026",
    },
  ];

export default function LetterForm({
  letterType,
  onTypeChange,
  formData,
  onChange,
}: Props) {
  const [isPolishing, setIsPolishing] = useState(false);

  const handlePolishPurpose = async () => {
    if (!formData.purpose.trim() || isPolishing) return;
    setIsPolishing(true);

    try {
      // Sending only raw data to the backend endpoint
      const data = await polishPurpose(formData.purpose);

      if (data.polished_text) {
        onChange("purpose", data.polished_text);
      }
    } catch (error) {
      console.error("Gemma failed to polish the purpose:", error);
    } finally {
      setIsPolishing(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-sm p-5 sm:p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Letter details</h3>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Letter type
          </label>
          <select
            value={letterType}
            onChange={(e) => onTypeChange(e.target.value)}
            className="w-full rounded-xl border-2 border-gray-200 px-3 py-2.5 text-sm font-medium text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            {Object.entries(letterConfigs).map(([key, config]) => (
              <option key={key} value={key}>
                {config.label}
              </option>
            ))}
          </select>
        </div>

        {FIELDS.map((field) => (
          <div key={field.key}>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              {field.label}
            </label>
            <input
              type="text"
              value={formData[field.key]}
              onChange={(e) => onChange(field.key, e.target.value)}
              placeholder={field.placeholder}
              className="w-full rounded-xl border-2 border-gray-200 px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>
        ))}

        {/* Purpose block with backend-bound Gemma Integration */}
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <label className="text-sm font-semibold text-gray-700">
              Purpose / reason
            </label>
          </div>

          <textarea
            value={formData.purpose}
            onChange={(e) => onChange("purpose", e.target.value)}
            placeholder="e.g. i want to request course over-registration because i missed the prerequisite course last semester..."
            rows={3}
            className="w-full rounded-xl border-2 border-gray-200 px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 resize-none"
          />
        </div>
      </div>
    </div>
  );
}
