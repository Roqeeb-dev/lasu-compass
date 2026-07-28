"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import TopBar, { TabKey } from "@/components/shared/Topbar";
import CampusAssistantTab from "@/components/campus-assistant/CampusAssistantTab";
import ProceduresGuideTab from "@/components/procedures-guide/ProceduresGuideTab";
import LetterGeneratorTab from "@/components/letter-generator/LetterGeneratorTab";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabKey>("assistant");
  const searchParams = useSearchParams();

  useEffect(() => {
    const tab = searchParams?.get("tab");
    if (tab === "assistant" || tab === "procedures" || tab === "letters") {
      setActiveTab(tab as TabKey);
    }
  }, [searchParams]);

  return (
    <div className="h-screen overflow-hidden flex flex-col bg-gray-50">
      <TopBar activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="flex-1 min-h-0">
        <div className={activeTab === "assistant" ? "h-full" : "hidden"}>
          <CampusAssistantTab />
        </div>

        <div className={activeTab === "procedures" ? "h-full" : "hidden"}>
          <ProceduresGuideTab />
        </div>

        <div
          className={
            activeTab === "letters" ? "h-full overflow-y-auto" : "hidden"
          }
        >
          <LetterGeneratorTab />
        </div>
      </main>
    </div>
  );
}
