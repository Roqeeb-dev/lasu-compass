"use client";

import { useState } from "react";
import { LetterData } from "@/types/types";
import LetterForm from "./LetterForm";
import LetterPreview from "./LetterPreview";
import DownloadButton from "./DownloadButton";

const initialData: LetterData = {
  name: "",
  matricNo: "",
  department: "",
  faculty: "",
  purpose: "",
  courseCode: "",
  courseTitle: "",
  semester: "",
  level: "",
  date: new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }),
};

export default function LetterGeneratorTab() {
  const [letterType, setLetterType] = useState("correctionOfResult");
  const [formData, setFormData] = useState<LetterData>(initialData);

  const handleChange = (field: keyof LetterData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LetterForm
          letterType={letterType}
          onTypeChange={setLetterType}
          formData={formData}
          onChange={handleChange}
        />

        <div className="space-y-4">
          <LetterPreview letterType={letterType} data={formData} />
          <DownloadButton filename={`${letterType}_letter.pdf`} />
        </div>
      </div>
    </div>
  );
}
