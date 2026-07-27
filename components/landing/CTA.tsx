import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="border-t border-gray-100 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
          See it for yourself
        </h2>
        <Link
          href="/app"
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 text-white font-semibold px-6 py-3.5 shadow-sm hover:bg-blue-700 active:scale-[0.98] transition-all"
        >
          Try LASU Compass AI
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
