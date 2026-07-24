import { useState, KeyboardEvent } from "react";

type Props = {
  onSend: (text: string) => void;
  isLoading: boolean;
};

export default function ChatInput({ onSend, isLoading }: Props) {
  const [value, setValue] = useState("");

  function handleSend() {
    if (!value.trim() || isLoading) return;
    onSend(value);
    setValue("");
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      handleSend();
    }
  }

  return (
    <div className="border-t border-gray-200 bg-white px-4 py-3">
      <div className="flex items-center gap-2 rounded-full border border-gray-300 bg-gray-50 pl-4 pr-1.5 py-1.5 shadow-sm focus-within:border-blue-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100 transition-colors">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask about LASU..."
          disabled={isLoading}
          className="flex-1 bg-transparent text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none disabled:cursor-not-allowed"
        />
        <button
          onClick={handleSend}
          disabled={isLoading || !value.trim()}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white transition-colors hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
          aria-label="Send message"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M5 12h14" />
            <path d="M13 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
