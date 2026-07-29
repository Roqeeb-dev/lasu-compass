"use client";

import { useRef, useEffect, useState } from "react";
import { useChat } from "@/hooks/useChat";
import { Menu } from "lucide-react";
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
    setIsSidebarOpen(false);
  };

  const handleCreateNewChat = () => {
    const newSession = createSession();
    const updated = [newSession, ...sessions];
    saveToStorage(updated);
    setActiveSessionId(newSession.id);
    if (setMessages) setMessages([]);
    setIsSidebarOpen(false);
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
    <div className="h-full flex min-h-0 relative">
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-20 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div
        className={`
          fixed md:static inset-y-0 left-0 z-30 md:z-auto
          h-full min-h-0 shadow-xl md:shadow-none
          transform transition-transform duration-200 ease-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
        `}
      >
        <ChatSidebar
          sessions={sessions}
          activeSessionId={activeSessionId}
          onSelectSession={handleSelectSession}
          onCreateNewChat={handleCreateNewChat}
          onDeleteSession={handleDeleteSession}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>

      <div className="flex-1 flex flex-col min-w-0 min-h-0">
        <div className="md:hidden shrink-0 flex items-center gap-3 border-b border-gray-200 bg-white px-4 py-2.5">
          <button
            onClick={() => setIsSidebarOpen(true)}
            aria-label="Open chat history"
            className="p-1 -ml-1 text-gray-600 hover:text-gray-900"
          >
            <Menu className="w-5 h-5" />
          </button>
          <span className="text-sm font-medium text-gray-700 truncate">
            {activeSession?.title || "New Chat"}
          </span>
        </div>

        <div className="flex-1 overflow-y-auto min-h-0">
          {isEmpty ? (
            <div className="max-w-3xl mx-auto px-4 md:px-6 py-6 h-full flex flex-col justify-center">
              <SuggestedQuestions onSelect={sendMessage} />
            </div>
          ) : (
            <div className="max-w-3xl mx-auto px-4 md:px-6 py-6 space-y-4">
              {messages.map((msg, i) => (
                <ChatMessage key={i} {...msg} />
              ))}
              {isLoading && <TypingIndicator />}
              <div ref={bottomRef} />
            </div>
          )}
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
