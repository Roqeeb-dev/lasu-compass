import { ChatRequest, ChatResponse } from "@/types/chat";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export async function postChat(payload: ChatRequest): Promise<ChatResponse> {
  const res = await fetch(`${API_URL}/chat/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Chat request failed with status ${res.status}`);
  }

  return res.json();
}

export async function polishPurpose(
  text: string,
): Promise<{ polished_text: string }> {
  const res = await fetch(`${API_URL}/letters/polish-purpose`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      raw_purpose: text,
    }),
  });

  if (!res.ok) {
    throw new Error(`Polish request failed with status ${res.status}`);
  }

  return res.json();
}
