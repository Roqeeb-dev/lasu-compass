"use client";

import { useRef, useEffect, useState } from "react";
import { useChat } from "@/hooks/useChat";
import { Compass } from "lucide-react";
import ChatMessage from "@/components/campus-assistant/ChatMessage";
import ChatInput from "@/components/campus-assistant/ChatInput";
import TypingIndicator from "@/components/campus-assistant/TypingIndicator";
import SuggestedQuestions from "@/components/campus-assistant/SuggestedQuestions";
import ChatSidebar, {
  ChatSession,
} from "@/components/campus-assistant/ChatSidebar";

const LOCAL_STORAGE_KEY = "lasu_compass_chat_sessions";

function createSession(): ChatSession {
  return {
    id: crypto.randomUUID(),
    title: "New Chat",
    messages: [],
    createdAt: Date.now(),
  };
}

export default function CampusAssistantTab() {
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [activeSessionId, setActiveSessionId] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      try {
        const parsed: ChatSession[] = JSON.parse(saved);
        if (parsed.length > 0) {
          setSessions(parsed);
          setActiveSessionId(parsed[0].id);
          return;
        }
      } catch (e) {
        console.error("Failed to parse chat sessions", e);
      }
    }
    const first = createSession();
    setSessions([first]);
    setActiveSessionId(first.id);
  }, []);

  const saveToStorage = (updatedSessions: ChatSession[]) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedSessions));
    setSessions(updatedSessions);
  };

  const activeSession = sessions.find((s) => s.id === activeSessionId);

  const { messages, setMessages, isLoading, sendMessage } = useChat(
    activeSession?.messages || [],
    activeSessionId,
  );

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  useEffect(() => {
    if (!activeSessionId || messages.length === 0) return;

    const updated = sessions.map((session) => {
      if (session.id === activeSessionId) {
        const title =
          session.title === "New Chat" && messages[0]
            ? messages[0].content.substring(0, 24) + "..."
            : session.title;
        return { ...session, title, messages };
      }
      return session;
    });
    saveToStorage(updated);
  }, [messages, activeSessionId]);

  const handleSelectSession = (id: string) => {
    setActiveSessionId(id);
    const selected = sessions.find((s) => s.id === id);
    if (selected && setMessages) {
      setMessages(selected.messages);
    }
  };

  const handleCreateNewChat = () => {
    const newSession = createSession();
    const updated = [newSession, ...sessions];
    saveToStorage(updated);
    setActiveSessionId(newSession.id);
    if (setMessages) setMessages([]);
  };

  const handleDeleteSession = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = sessions.filter((s) => s.id !== id);

    if (updated.length === 0) {
      const fresh = createSession();
      saveToStorage([fresh]);
      setActiveSessionId(fresh.id);
      if (setMessages) setMessages([]);
      return;
    }

    saveToStorage(updated);
    if (activeSessionId === id) {
      handleSelectSession(updated[0].id);
    }
  };

  const isEmpty = messages.length === 0;

  return (
    <div className="h-full flex bg-gray-50">
      <div className="hidden md:flex h-full min-h-0">
        <ChatSidebar
          sessions={sessions}
          activeSessionId={activeSessionId}
          onSelectSession={handleSelectSession}
          onCreateNewChat={handleCreateNewChat}
          onDeleteSession={handleDeleteSession}
        />
      </div>

      <div className="flex-1 flex flex-col min-w-0 min-h-0">
        <div className="flex-1 overflow-y-auto min-h-0">
          <div className="max-w-3xl mx-auto px-4 md:px-6 py-6 h-full flex flex-col justify-center space-y-4">
            {isEmpty ? (
              <div className="flex flex-col items-center text-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                  <Compass className="w-8 h-8 stroke-[1.5]" />
                </div>
                <div className="space-y-2 max-w-md">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    Welcome to{" "}
                    <span className="text-blue-600">LASU Compass AI</span>
                  </h2>
                  <p className="text-sm sm:text-base text-gray-500">
                    Ask about courses, procedures, and clearance guidelines.
                  </p>
                </div>
                <SuggestedQuestions onSelect={sendMessage} />
              </div>
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

        <div className="shrink-0 border-t border-gray-200 bg-white">
          <div className="max-w-3xl mx-auto">
            <ChatInput onSend={sendMessage} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </div>
  );
}
