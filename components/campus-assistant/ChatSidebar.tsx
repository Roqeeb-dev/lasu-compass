"use client";

import React from "react";
import { Plus, MessageSquare, Trash2, X } from "lucide-react";

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
  onClose?: () => void;
}

export default function ChatSidebar({
  sessions,
  activeSessionId,
  onSelectSession,
  onCreateNewChat,
  onDeleteSession,
  onClose,
}: ChatSidebarProps) {
  return (
    <aside className="w-64 h-full flex flex-col border-r border-gray-200 bg-white">
      <div className="shrink-0 p-4 border-b border-gray-100 flex items-center gap-2">
        <button
          onClick={onCreateNewChat}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-xl shadow-sm transition-colors"
        >
          <Plus className="w-5 h-5" />
          New Chat
        </button>

        {onClose && (
          <button
            onClick={onClose}
            className="md:hidden shrink-0 p-2 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600"
            aria-label="Close sidebar"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto px-2 pt-4 pb-2">
        <p className="px-2 mb-2 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
          Recent Chats
        </p>

        <div className="space-y-1">
          {sessions.map((session) => {
            const isActive = activeSessionId === session.id;
            return (
              <div
                key={session.id}
                onClick={() => onSelectSession(session.id)}
                className={`group flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer text-sm transition-all border-l-[3px] ${
                  isActive
                    ? "bg-blue-50 text-blue-700 font-medium border-blue-600"
                    : "text-gray-600 border-transparent hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <MessageSquare className="w-4 h-4 flex-shrink-0 opacity-70" />
                  <span className="truncate pr-2">{session.title}</span>
                </div>

                <button
                  onClick={(e) => onDeleteSession(session.id, e)}
                  className="opacity-0 group-hover:opacity-100 hover:bg-red-50 p-1 rounded-md text-red-500 transition-all shrink-0"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            );
          })}

          {sessions.length === 0 && (
            <div className="text-center text-xs text-gray-400 mt-8 px-4">
              No saved conversations. Create a new chat above to begin.
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
