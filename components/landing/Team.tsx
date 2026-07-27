const STACK = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "FastAPI",
  "ChromaDB",
  "Gemma 4",
];

export default function Team() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
        Built in a single 4-hour hackathon sprint
      </h2>
      <p className="text-gray-500 mb-8">
        Team Pilot — Shafiriyu Roqeeb, Timilehin Oyinlola, and Temitayo Honfoga.
        1st Place, Build with Gemma: GDG on Campus LASU.
      </p>

      <div className="flex flex-wrap justify-center gap-2">
        {STACK.map((tech) => (
          <span
            key={tech}
            className="text-xs font-medium text-gray-600 bg-gray-100 rounded-full px-3 py-1.5"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
