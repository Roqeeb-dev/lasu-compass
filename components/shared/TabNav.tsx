export type TabKey = "assistant" | "procedures" | "letters";

type Tab = {
  key: TabKey;
  label: string;
};

const TABS: Tab[] = [
  { key: "assistant", label: "Campus Assistant" },
  { key: "procedures", label: "Procedures Guide" },
  { key: "letters", label: "Letter Generator" },
];

type Props = {
  activeTab: TabKey;
  onTabChange: (tab: TabKey) => void;
};

export default function TabNav({ activeTab, onTabChange }: Props) {
  return (
    <nav className="border-b border-gray-200 bg-white flex items-center w-full sticky top-12">
      <div className="max-w-5xl mx-auto p-4 flex gap-6">
        {TABS.map((tab) => {
          const isActive = tab.key === activeTab;
          return (
            <button
              key={tab.key}
              onClick={() => onTabChange(tab.key)}
              className={`py-2 text-sm font-medium border-b-2 transition-colors ${
                isActive
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
