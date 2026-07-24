import { Message } from "@/types/chat";

export default function ChatMessage({
  role,
  content,
  sources,
  isError,
}: Message) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
          isUser
            ? "bg-blue-600 text-white rounded-br-sm"
            : isError
              ? "bg-red-50 text-red-700 rounded-bl-sm"
              : "bg-gray-100 text-gray-900 rounded-bl-sm"
        }`}
      >
        <p className="whitespace-pre-line">{content}</p>

        {sources && sources.length > 0 && (
          <div className="mt-2 pt-2 border-t border-gray-200 space-y-1">
            {sources.map((s, i) => (
              <div key={i} className="text-xs text-gray-500">
                📄 {s.source} — {s.section}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
