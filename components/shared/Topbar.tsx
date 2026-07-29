"use client";

import Logo from "@/components/shared/Logo";

export type TabKey = "assistant" | "procedures" | "letters";

const TABS: { key: TabKey; label: string; shortLabel: string }[] = [
  { key: "assistant", label: "Campus Assistant", shortLabel: "Assistant" },
  { key: "procedures", label: "Procedures Guide", shortLabel: "Procedures" },
  { key: "letters", label: "Letter Generator", shortLabel: "Letters" },
];

type Props = {
  activeTab: TabKey;
  onTabChange: (tab: TabKey) => void;
};

export default function TopBar({ activeTab, onTabChange }: Props) {
  return (
    <header className="shrink-0 border-b border-gray-200 bg-white">
      <div className="px-2 sm:px-4 h-14 flex items-center gap-2 sm:gap-4">
        <Logo />

        <nav className="flex-1 min-w-0 flex items-center gap-1 sm:gap-2">
          {TABS.map((tab) => {
            const isActive = tab.key === activeTab;
            return (
              <button
                key={tab.key}
                onClick={() => onTabChange(tab.key)}
                className={`min-w-0 flex-1 sm:flex-none px-2 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors border-b-2 ${
                  isActive
                    ? "bg-blue-50 text-blue-600 border-blue-600"
                    : "text-gray-500 border-transparent hover:text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span className="truncate hidden sm:inline">{tab.label}</span>
                <span className="truncate sm:hidden">{tab.shortLabel}</span>
              </button>
            );
          })}
        </nav>

        <span className="text-xs text-gray-400 hidden lg:block shrink-0 whitespace-nowrap italic">
          Your digital front desk for LASU
        </span>
      </div>
    </header>
  );
}
