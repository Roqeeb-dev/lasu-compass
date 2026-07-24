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
    <div className="min-h-screen bg-cover bg-center bg-no-repeat relative">
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <TabNav activeTab={activeTab} onTabChange={setActiveTab} />

        <main className="flex-1">
          <div className={activeTab === "assistant" ? "block" : "hidden"}>
            <CampusAssistantTab />
          </div>

          <div className={activeTab === "procedures" ? "block" : "hidden"}>
            <ProceduresGuideTab />
          </div>

          <div className={activeTab === "letters" ? "block" : "hidden"}>
            <LetterGeneratorTab />
          </div>
        </main>
      </div>
    </div>
  );
}
