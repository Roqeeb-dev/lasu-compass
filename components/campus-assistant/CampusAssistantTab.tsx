"use client";

import { useRef, useEffect, useState } from "react";
import { useChat } from "@/hooks/useChat";
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
    <div className="h-full flex flex-row overflow-hidden">
      {/* RENDER SEPARATED SIDEBAR */}
      <ChatSidebar
        sessions={sessions}
        activeSessionId={activeSessionId}
        onSelectSession={handleSelectSession}
        onCreateNewChat={handleCreateNewChat}
        onDeleteSession={handleDeleteSession}
      />

      {/* CHAT INTERFACE WINDOW */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Helper bar to create first chat if state somehow resets */}
        {!activeSessionId && sessions.length === 0 && (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <h3 className="text-lg font-medium text-gray-800 mb-2">
              Welcome to LASU Compass AI
            </h3>
            <p className="text-sm text-gray-500 max-w-sm mb-4">
              Start a new conversation to ask questions about courses,
              procedures, and clearance guidelines.
            </p>
            <button
              onClick={handleCreateNewChat}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow transition"
            >
              Start Chat
            </button>
          </div>
        )}

        {activeSessionId && (
          <>
            <div className="flex-1 overflow-y-auto">
              <div className="max-w-3xl mx-auto px-4 py-6 flex flex-col space-y-4">
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

            <div className="max-w-3xl w-full mx-auto p-4 border-t border-gray-100 bg-white/40 backdrop-blur-sm rounded-b-2xl">
              <ChatInput onSend={sendMessage} isLoading={isLoading} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
