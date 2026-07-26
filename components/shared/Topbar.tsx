"use client";

export type TabKey = "assistant" | "procedures" | "letters";

const TABS: { key: TabKey; label: string }[] = [
  { key: "assistant", label: "Campus Assistant" },
  { key: "procedures", label: "Procedures Guide" },
  { key: "letters", label: "Letter Generator" },
];

type Props = {
  activeTab: TabKey;
  onTabChange: (tab: TabKey) => void;
};
export default function TopBar({ activeTab, onTabChange }: Props) {
  return (
    <header className="shrink-0 border-b border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white font-semibold text-xs">
            LC
          </div>
          <span className="text-sm font-semibold text-gray-900 hidden sm:block">
            LASU Compass AI
          </span>
        </div>

        <nav className="flex gap-1 sm:gap-2 overflow-x-auto">
          {TABS.map((tab) => {
            const isActive = tab.key === activeTab;
            return (
              <button
                key={tab.key}
                onClick={() => onTabChange(tab.key)}
                className={`whitespace-nowrap px-2 sm:px-3 h-14 text-xs sm:text-sm font-medium border-b-2 transition-colors ${
                  isActive
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>

        <span className="text-xs text-gray-400 hidden lg:block shrink-0">
          Your digital front desk for LASU
        </span>
      </div>
    </header>
  );
}
