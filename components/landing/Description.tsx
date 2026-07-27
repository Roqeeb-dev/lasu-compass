import { Sparkles } from "lucide-react";

export default function Description() {
  return (
    <section className="border-t border-gray-100 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4">
          <Sparkles className="w-5.5 h-5.5" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          Grounded, not guessing
        </h2>
        <p className="text-gray-500">
          Gemma doesn't know LASU's procedures out of the box — so every answer
          is retrieved from real LASU documentation first, then reasoned over.
          That means fewer confident wrong answers, and a source cited under
          every reply.
        </p>
      </div>
    </section>
  );
}
