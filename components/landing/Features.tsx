"use client";

import { useState } from "react";
import { MessageSquare, ClipboardList, FileText } from "lucide-react";
import RevealSection from "@/components/shared/RevealSection";
import CampusAssistantView from "./CampusAssistantView";
import ProceduresGuideView from "./ProceduresGuideView";
import LetterGeneratorView from "./LetterGeneratorView";

type TabType = "assistant" | "procedures" | "letters";

export default function Features() {
  const [activeTab, setActiveTab] = useState<TabType>("assistant");

  const tabs = [
    {
      id: "assistant" as TabType,
      label: "Campus Assistant",
      icon: MessageSquare,
      activeColor: "border-blue-600 text-blue-600 bg-blue-50/50",
      inactiveColor: "border-slate-200 text-slate-500 hover:text-slate-800",
    },
    {
      id: "procedures" as TabType,
      label: "Procedures Guide",
      icon: ClipboardList,
      activeColor: "border-emerald-600 text-emerald-600 bg-emerald-50/50",
      inactiveColor: "border-slate-200 text-slate-500 hover:text-slate-800",
    },
    {
      id: "letters" as TabType,
      label: "Letter Generator",
      icon: FileText,
      activeColor: "border-purple-600 text-purple-600 bg-purple-50/50",
      inactiveColor: "border-slate-200 text-slate-500 hover:text-slate-800",
    },
  ];

  return (
    <section className="bg-gray-100 py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealSection>
          {/* Header */}
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 block mb-3">
              Three Tools, One Source of Truth
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Everything a LASU student needs
            </h2>
          </div>

          {/* Tab Selection Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl border text-sm font-semibold transition-all duration-300 ${
                    isActive ? tab.activeColor : tab.inactiveColor
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Dynamic Content Display Area with Smooth Fade & Transition */}
          <div className="relative min-h-[460px] transition-all duration-300">
            <div
              className={`transition-all duration-500 ease-out transform ${
                activeTab === "assistant"
                  ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                  : "absolute inset-0 opacity-0 translate-y-4 scale-95 pointer-events-none"
              }`}
            >
              <CampusAssistantView />
            </div>

            <div
              className={`transition-all duration-500 ease-out transform ${
                activeTab === "procedures"
                  ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                  : "absolute inset-0 opacity-0 translate-y-4 scale-95 pointer-events-none"
              }`}
            >
              <ProceduresGuideView />
            </div>

            <div
              className={`transition-all duration-500 ease-out transform ${
                activeTab === "letters"
                  ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                  : "absolute inset-0 opacity-0 translate-y-4 scale-95 pointer-events-none"
              }`}
            >
              <LetterGeneratorView />
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
