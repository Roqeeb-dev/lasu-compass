"use client";

import React from "react";
import { Plus, MessageSquare, Trash2 } from "lucide-react";

export interface ChatSession {
  id: string;
  title: string;
  messages: Array<{
    role: "user" | "assistant";
    content: string;
    sources?: any[];
  }>;
  createdAt: number;
}

interface ChatSidebarProps {
  sessions: ChatSession[];
  activeSessionId: string | null;
  onSelectSession: (id: string) => void;
  onCreateNewChat: () => void;
  onDeleteSession: (id: string, e: React.MouseEvent) => void;
}

export default function ChatSidebar({
  sessions,
  activeSessionId,
  onSelectSession,
  onCreateNewChat,
  onDeleteSession,
}: ChatSidebarProps) {
  return (
    <aside className="w-64 border-r border-gray-200/60 bg-white/40 backdrop-blur-sm hidden md:flex flex-col h-full">
      <div className="p-4 border-b border-gray-200/50">
        <button
          onClick={onCreateNewChat}
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-sm transition"
        >
          <Plus className="w-5 h-5" />
          New Chat
        </button>
      </div>

      {/* Saved Sessions Scrollbox */}
      <div className="flex-1 overflow-y-auto p-2 space-y-1">
        {sessions.map((session) => (
          <div
            key={session.id}
            onClick={() => onSelectSession(session.id)}
            className={`group flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer text-sm transition-all ${
              activeSessionId === session.id
                ? "bg-blue-50 text-blue-700 font-medium"
                : "text-gray-600 hover:bg-gray-100/70 hover:text-gray-900"
            }`}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <MessageSquare className="w-4 h-4 flex-shrink-0 opacity-70" />
              <span className="truncate pr-2">{session.title}</span>
            </div>

            <button
              onClick={(e) => onDeleteSession(session.id, e)}
              className="opacity-0 group-hover:opacity-100 hover:bg-red-50 p-1 rounded-md text-red-500 transition-all"
            >
              <Trash2 className="w-4 h-4" />
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
  );
}
