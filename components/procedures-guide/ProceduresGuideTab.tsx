"use client";

import { useRef, useEffect } from "react";
import { useChat } from "@/hooks/useChat";
import ChatMessage from "@/components/campus-assistant/ChatMessage";
import ChatInput from "@/components/campus-assistant/ChatInput";
import TypingIndicator from "@/components/campus-assistant/TypingIndicator";
import ProcedureChips from "./ProcedureChips";

export default function ProceduresGuideTab() {
  const { messages, isLoading, sendMessage } = useChat();
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const isEmpty = messages.length === 0;

  return (
    <div className="h-full flex flex-col min-h-0">
      <div className="flex-1 overflow-y-auto min-h-0">
        {isEmpty ? (
          <div className="max-w-3xl mx-auto px-4 py-4 h-full flex flex-col justify-center">
            <ProcedureChips onSelect={sendMessage} />
          </div>
        ) : (
          <div className="max-w-3xl mx-auto px-4 py-4 space-y-3">
            {messages.map((msg, i) => (
              <ChatMessage key={i} {...msg} />
            ))}
            {isLoading && <TypingIndicator />}
            <div ref={bottomRef} />
          </div>
        )}
      </div>

      <div className="shrink-0 border-t border-gray-200 bg-white">
        <div className="max-w-3xl w-full mx-auto">
          <ChatInput onSend={sendMessage} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
}
