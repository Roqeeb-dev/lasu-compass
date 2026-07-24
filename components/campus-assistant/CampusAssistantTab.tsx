"use client";

import { useRef, useEffect } from "react";
import { useChat } from "@/hooks/useChat";
import ChatMessage from "@/components/campus-assistant/ChatMessage";
import ChatInput from "@/components/campus-assistant/ChatInput";
import TypingIndicator from "@/components/campus-assistant/TypingIndicator";
import SuggestedQuestions from "@/components/campus-assistant/SuggestedQuestions";

export default function CampusAssistantTab() {
  const { messages, isLoading, sendMessage } = useChat();
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const isEmpty = messages.length === 0;

  return (
    <div className="h-[calc(100vh-112px)] flex flex-col">
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-4 py-4 h-full flex flex-col justify-center space-y-3">
          {isEmpty ? (
            <SuggestedQuestions onSelect={sendMessage} />
          ) : (
            <>
              {messages.map((msg, i) => (
                <ChatMessage key={i} {...msg} />
              ))}
              {isLoading && <TypingIndicator />}
            </>
          )}
          <div ref={bottomRef} />
        </div>
      </div>

      <div className="max-w-3xl w-full mx-auto">
        <ChatInput onSend={sendMessage} isLoading={isLoading} />
      </div>
    </div>
  );
}
