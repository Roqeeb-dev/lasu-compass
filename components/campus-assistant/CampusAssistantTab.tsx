"use client";

import { useRef, useEffect, useState } from "react";
import { useChat } from "@/hooks/useChat";
import ChatMessage from "@/components/campus-assistant/ChatMessage";
import ChatInput from "@/components/campus-assistant/ChatInput";
import TypingIndicator from "@/components/campus-assistant/TypingIndicator";
import SuggestedQuestions from "@/components/campus-assistant/SuggestedQuestions";

interface ChatSession {
  id: string;
  title: string;
  messages: Array<{
    role: "user" | "assistant";
    content: string;
    sources?: any[];
  }>;
  createdAt: number;
}

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
      {/* SIDEBAR CONTAINER */}
      <aside className="w-64 border-r border-gray-200/60 bg-white/40 backdrop-blur-sm hidden md:flex flex-col h-full">
        <div className="p-4 border-b border-gray-200/50">
          <button
            onClick={handleCreateNewChat}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-sm transition"
          >
            {/* Custom Plus Icon */}
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
            New Chat
          </button>
        </div>

        {/* Saved Sessions Scrollbox */}
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {sessions.map((session) => (
            <div
              key={session.id}
              onClick={() => handleSelectSession(session.id)}
              className={`group flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer text-sm transition-all ${
                activeSessionId === session.id
                  ? "bg-blue-50 text-blue-700 font-medium"
                  : "text-gray-600 hover:bg-gray-100/70 hover:text-gray-900"
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                {/* Chat bubble icon */}
                <svg
                  className="w-4 h-4 flex-shrink-0 opacity-70"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <span className="truncate pr-2">{session.title}</span>
              </div>

              {/* Trash icon (reveals on hover) */}
              <button
                onClick={(e) => handleDeleteSession(session.id, e)}
                className="opacity-0 group-hover:opacity-100 hover:bg-red-50 p-1 rounded-md text-red-500 transition-all"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          ))}

          {sessions.length === 0 && (
            <div className="text-center text-xs text-gray-400 mt-8 px-4">
              No saved conversations. Create a new chat above to begin.
            </div>
          )}
        </div>
      </aside>

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
