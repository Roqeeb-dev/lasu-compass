export type Role = "user" | "assistant";

export type Source = {
  source: string;
  section: string;
};

export type Message = {
  role: Role;
  content: string;
  sources?: Source[];
  isError?: boolean;
};

export type ChatRequest = {
  query: string;
  top_k: number;
  history: { role: Role; content: string }[];
};

export type ChatResponse = {
  answer: string;
  sources: Source[];
};
