import { Trophy } from "lucide-react";

const STACK = [
  { label: "Next.js", className: "bg-black text-white" },
  { label: "TypeScript", className: "bg-[#3178c6] text-white" },
  { label: "Tailwind CSS", className: "bg-[#38bdf8] text-slate-900" },
  { label: "FastAPI", className: "bg-[#09b391] text-white" },
  { label: "ChromaDB", className: "bg-[#8b5cf6] text-white" },
  { label: "Gemma 4", className: "bg-[#3b82f6] text-white" },
];

export default function Team() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16 text-center">
      <div className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-50 px-4 py-2 mb-8 text-sm font-semibold text-blue-700">
        <Trophy className="h-4 w-4" />
        <span>Winner: Build with Gemma — GDG on Campus LASU</span>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
        Built in a single 4-hour hackathon sprint
      </h2>
      <p className="text-slate-600 mb-8 leading-7">
        Team Pilot — Shafiriyu Roqeeb, Timilehin Oyinlola, and Temitayo Honfoga.
        Crafted LASU Compass AI in one rapid sprint with strong product focus.
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        {STACK.map((tech) => (
          <span
            key={tech.label}
            className={`${tech.className} rounded-full px-4 py-2 text-xs font-semibold shadow-sm`}
          >
            {tech.label}
          </span>
        ))}
      </div>
    </section>
  );
}
