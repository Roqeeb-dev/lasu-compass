import { Compass, ClipboardList, FileText } from "lucide-react";

export default function Features() {
  const FEATURES = [
    {
      icon: Compass,
      title: "Campus Assistant",
      description:
        "Ask anything about LASU in plain English. Get answers grounded in real school documentation, not guesses — with sources cited under every reply.",
    },
    {
      icon: ClipboardList,
      title: "Procedures Guide",
      description:
        "Step-by-step guidance for the processes students get stuck on most — SIWES registration, course registration, clearance, and transcript requests.",
    },
    {
      icon: FileText,
      title: "Letter Generator",
      description:
        "Fill real LASU letter formats from a simple form. Gemma polishes your reason into submittable language, then download it as a PDF.",
    },
  ];
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">
        Three features. One assistant.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {FEATURES.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="rounded-2xl border-2 border-gray-200 p-6 shadow-sm"
          >
            <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
              <Icon className="w-5.5 h-5.5" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
