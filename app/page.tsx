"use client";

import { useState } from "react";
import Header from "@/components/shared/Header";
import TabNav, { TabKey } from "@/components/shared/TabNav";
import CampusAssistantTab from "@/components/campus-assistant/CampusAssistantTab";
import ProceduresGuideTab from "@/components/procedures-guide/ProceduresGuideTab";
import LetterGeneratorTab from "@/components/letter-generator/LetterGeneratorTab";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabKey>("assistant");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <TabNav activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === "assistant" && <CampusAssistantTab />}
      {activeTab === "procedures" && <ProceduresGuideTab />}
      {activeTab === "letters" && <LetterGeneratorTab />}
    </div>
  );
}
