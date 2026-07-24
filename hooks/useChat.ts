import { useState } from "react";
import { Message } from "@/types/chat";
import { postChat } from "@/lib/apiclient";

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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

  return { messages, isLoading, sendMessage };
}
