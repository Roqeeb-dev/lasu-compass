import { Book, Pen } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div>
          <p>Built by Team Pilot for GDG on Campus LASU</p>
          <p className="mt-1 text-slate-400">
            Shafiriyu Roqeeb · Timilehin Oyinlola · Temitayo Honfoga
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition"
          >
            <Book className="h-4 w-4" />
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition"
          >
            <Pen className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
