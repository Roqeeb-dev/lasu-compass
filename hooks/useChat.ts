import { useState, useEffect } from "react";
import { Message } from "@/types/chat";
import { postChat } from "@/lib/apiclient";

// 1. Accept an optional sessionId (string or null)
export function useChat(
  initialMessages: Message[] = [],
  sessionId: string | null = null,
) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setMessages(initialMessages);
  }, [sessionId]);

  async function sendMessage(query: string) {
    if (!query.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: query };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      const data = await postChat({
        query,
        top_k: 4,
        history: updatedMessages.map(({ role, content }) => ({
          role,
          content,
        })),
      });

      setMessages([
        ...updatedMessages,
        { role: "assistant", content: data.answer, sources: data.sources },
      ]);
    } catch (err) {
      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content: "Sorry, something went wrong. Please try again.",
          isError: true,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return { messages, setMessages, isLoading, sendMessage };
}
