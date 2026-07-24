export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0">
      <div className="max-w-5xl mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-semibold text-sm">
            LC
          </div>
          <span className="text-lg font-semibold text-gray-900">
            LASU Compass AI
          </span>
        </div>
        <span className="text-xs text-gray-500 hidden sm:block">
          Your digital front desk for LASU
        </span>
      </div>
    </header>
  );
}
