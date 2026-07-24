"use client";

import { useRef, useEffect, useState } from "react";
import { useChat } from "@/hooks/useChat";
import { Compass, MessageSquare } from "lucide-react";
import ChatMessage from "@/components/campus-assistant/ChatMessage";
import ChatInput from "@/components/campus-assistant/ChatInput";
import TypingIndicator from "@/components/campus-assistant/TypingIndicator";
import SuggestedQuestions from "@/components/campus-assistant/SuggestedQuestions";
import ChatSidebar, {
  ChatSession,
} from "@/components/campus-assistant/ChatSidebar";

const LOCAL_STORAGE_KEY = "lasu_compass_chat_sessions";

export default function CampusAssistantTab() {
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [activeSessionId, setActiveSessionId] = useState<string | null>(null);

  // Load initial sessions from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setSessions(parsed);
        if (parsed.length > 0) {
          setActiveSessionId(parsed[0].id);
        }
      } catch (e) {
        console.error("Failed to parse chat sessions", e);
      }
    }
  }, []);

  // Sync sessions array to localStorage when it changes
  const saveToStorage = (updatedSessions: ChatSession[]) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedSessions));
    setSessions(updatedSessions);
  };

  const activeSession = sessions.find((s) => s.id === activeSessionId);

  // Pass activeSessionId as the second argument to useChat
  const { messages, setMessages, isLoading, sendMessage } = useChat(
    activeSession?.messages || [],
    activeSessionId,
  );

  const bottomRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom
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

  // Triggered when switching tabs/sessions
  const handleSelectSession = (id: string) => {
    setActiveSessionId(id);
    const selected = sessions.find((s) => s.id === id);
    if (selected && setMessages) {
      setMessages(selected.messages);
    }
  };

  const handleCreateNewChat = () => {
    const newSession: ChatSession = {
      id: crypto.randomUUID(),
      title: "New Chat",
      messages: [],
      createdAt: Date.now(),
    };
    const updated = [newSession, ...sessions];
    saveToStorage(updated);
    setActiveSessionId(newSession.id);
    if (setMessages) setMessages([]);
  };

  const handleDeleteSession = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = sessions.filter((s) => s.id !== id);
    saveToStorage(updated);

    if (activeSessionId === id) {
      if (updated.length > 0) {
        handleSelectSession(updated[0].id);
      } else {
        setActiveSessionId(null);
        if (setMessages) setMessages([]);
      }
    }
  };

  const isEmpty = messages.length === 0;

  return (
    <div className="h-full flex flex-row overflow-hidden bg-white/10">
      {/* Sidebar Component */}
      <ChatSidebar
        sessions={sessions}
        activeSessionId={activeSessionId}
        onSelectSession={handleSelectSession}
        onCreateNewChat={handleCreateNewChat}
        onDeleteSession={handleDeleteSession}
      />

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden bg-white/40">
        {/* Prominent Welcome State */}
        {!activeSessionId && sessions.length === 0 && (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center max-w-xl mx-auto space-y-6">
            {/* Glowing Icon Badge */}
            <div className="w-20 h-20 rounded-3xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-blue-600 shadow-md shadow-blue-50">
              <Compass className="w-10 h-10 stroke-[1.5]" />
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Welcome to{" "}
                <span className="text-blue-600">LASU Compass AI</span>
              </h2>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
                Your digital assistant for Lagos State University. Start a new
                conversation to ask questions about courses, procedures, and
                clearance guidelines.
              </p>
            </div>

            <button
              onClick={handleCreateNewChat}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all transform active:scale-[0.98]"
            >
              <MessageSquare className="w-5 h-5" />
              Start Chatting
            </button>
          </div>
        )}

        {/* Chat Window with Spacing Alignments */}
        {activeSessionId && (
          <div className="flex-1 flex flex-col h-full overflow-hidden relative">
            {/* Scrollable messages box */}
            <div className="flex-1 overflow-y-auto px-4 py-6 md:px-6">
              <div className="max-w-3xl mx-auto space-y-6 pb-2">
                {isEmpty ? (
                  // Align SuggestedQuestions nicely in vertical space
                  <div className="py-8">
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

            {/* Input Box at Bottom with clear separator and padding */}
            <div className="w-full border-t border-gray-100 bg-white/60 backdrop-blur-md p-4">
              <div className="max-w-3xl mx-auto">
                <ChatInput onSend={sendMessage} isLoading={isLoading} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
