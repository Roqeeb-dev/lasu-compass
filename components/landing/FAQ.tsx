"use client";

import { useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "Is LASU Compass AI an official LASU platform?",
      answer:
        "No. It's an independent tool built by students at a hackathon, not officially operated by the university. What it does do is pull every answer from real, official LASU documents, like the Academic Calendar and Registrar circulars, so it stays grounded in the actual rules even though it isn't run by the school itself.",
    },
    {
      id: 2,
      question: "How accurate are the answers, really?",
      answer:
        "Every response is grounded in retrieved LASU documents rather than the model's memory, and shows you exactly which document and page it came from, so you can always check the source yourself before you act on it.",
    },
    {
      id: 3,
      question: "What if it can't find an answer?",
      answer:
        "If nothing relevant turns up in the document set, it says so instead of guessing. Say it straight. Never say it made up.",
    },
    {
      id: 4,
      question: "Do I need to sign up or pay?",
      answer:
        "No account is needed to ask a question or open a procedure guide. The Letter Generator only asks for what actually goes on the letter: your name, matric number, and faculty. It's free to try.",
    },
    {
      id: 5,
      question: "Does this replace visiting the registrar or my department?",
      answer:
        "No. Think of it as your first stop, not your last. For anything that needs a signature or a stamp, you'll still visit the right office, but you'll walk in already knowing exactly what to bring and where to go.",
    },
    {
      id: 6,
      question: "I spotted a wrong or outdated answer. What now?",
      answer:
        "Flag it. Because every answer is tied to a specific document and page, a wrong answer usually means a source needs updating, and that's fixable, unlike a rumor with no origin.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-4 border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Header Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600 block">
                FAQ
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Questions, answered with sources.
              </h2>
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-normal">
                Still not sure? Here&apos;s the truth, cited, just like
                everywhere else on this page.
              </p>
            </div>

            {/* Decorative metadata card mirroring standard LASU document layouts */}
            <div className="hidden lg:block p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <span className="text-xs font-bold text-slate-700">
                  Student Trust Policy
                </span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                This database compiles administrative and academic information
                directly from approved Lagos State University circulars. Verify
                details via the reference codes cited next to generated
                summaries.
              </p>
            </div>
          </div>

          {/* FAQ Accordions Column */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`group rounded-xl border transition-all duration-300 ${
                    isOpen
                      ? "border-blue-200 bg-slate-50"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left px-5 sm:px-6 py-5 flex items-center justify-between gap-4 select-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-blue-600 transition-colors duration-200">
                      {faq.question}
                    </span>
                    <span
                      className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-blue-600 text-white rotate-45"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {/* Plus sign that rotates to form a close/x marker */}
                      <svg
                        className="w-4.5 h-4.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v12m6-6H6"
                        />
                      </svg>
                    </span>
                  </button>

                  {/* Transition body height */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "max-h-[300px] border-t border-slate-100"
                        : "max-h-0"
                    }`}
                  >
                    <div className="px-5 sm:px-6 py-5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
