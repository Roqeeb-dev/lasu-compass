import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-4 pt-20 pb-16 text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-yellow-50 text-yellow-800 text-xs font-semibold px-3 py-1.5 mb-6">
        🏆 1st Place — Build with Gemma: GDG on Campus LASU
      </div>

      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-semibold text-sm">
          LC
        </div>
        <span className="text-sm font-semibold text-gray-500">
          LASU Compass AI
        </span>
      </div>

      <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
        Stop hunting for LASU info.
        <br className="hidden sm:block" /> Just ask.
      </h1>

      <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto mb-8">
        Your digital front desk for Lagos State University — campus answers,
        procedure guidance, and official letters, grounded in real LASU
        documentation and powered by Gemma 4.
      </p>

      <Link
        href="/app"
        className="inline-flex items-center gap-2 rounded-xl bg-blue-600 text-white font-semibold px-6 py-3.5 shadow-sm hover:bg-blue-700 active:scale-[0.98] transition-all"
      >
        Try it now
        <ArrowRight className="w-4 h-4" />
      </Link>
    </section>
  );
}
