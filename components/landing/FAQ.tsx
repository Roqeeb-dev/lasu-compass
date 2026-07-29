"use client";

import { useState } from "react";
import Link from "next/link";
import { FileText, Plus } from "lucide-react";

interface FAQItem {
  id: number;
  tag?: string;
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const faqs: FAQItem[] = [
    {
      id: 1,
      tag: "Platform",
      question: "Is LASU Compass AI an official LASU platform?",
      answer:
        "No — it was built by students and contributors to make LASU rules easier to find. We only surface content extracted from official LASU documents (calendars, circulars, registrar notices), so answers point back to primary sources even though the app is independently run.",
    },
    {
      id: 2,
      tag: "Accuracy",
      question: "How accurate are the answers, really?",
      answer:
        "Answers are retrieved from the document store and include citations; when a piece of information exists in the official materials, we show it with the document reference so you can verify at a glance.",
    },
    {
      id: 3,
      tag: "Limits",
      question: "What if it can't find an answer?",
      answer:
        "We prefer silence over guessing: if nothing relevant is found, the assistant will tell you it couldn't locate an authoritative source and suggest next steps (who to contact or which office to visit).",
    },
    {
      id: 4,
      tag: "Access",
      question: "Do I need to sign up or pay?",
      answer:
        "No. Most features are free to use without signing up. The Letter Generator asks only for the fields that belong on the letter (name, matric, faculty) and helps you download a printable version.",
    },
    {
      id: 5,
      tag: "Process",
      question: "Does this replace visiting the registrar or my department?",
      answer:
        "Not entirely — for stamped or signed requests you'll still visit the office. But you can use the guides here to prepare documents, know exact requirements, and avoid extra trips.",
    },
  ];

  return (
    <section className="w-full bg-[#0A0F1C] py-20 px-4 border-t border-white/5 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-indigo-600/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Header + CTA */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-blue-300">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                FAQ
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Clear answers, with receipts.
              </h2>
            </div>

            {/* Sourcing card */}
            <div className="p-6 bg-white/[0.03] rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <FileText className="w-5 h-5 text-blue-400" strokeWidth={2} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-200">
                    How we source
                  </div>
                  <div className="text-xs text-slate-500">
                    Official LASU circulars • Academic calendar • Registrar
                    notices
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Every answer includes a reference to the original document where
                the information was found. If you need help verifying, use the
                assistant to show the exact citation.
              </p>
            </div>

            {/* CTA Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-600/20 via-blue-600/5 to-transparent border border-blue-500/20">
              <div className="text-sm font-bold text-white mb-1">
                Still have questions?
              </div>
              <div className="text-xs text-slate-400 mb-5">
                Open the Campus Assistant for a sourced answer, or browse the
                Procedures Guide for step-by-step forms.
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/app?tab=assistant"
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-blue-500 text-white text-sm font-medium hover:bg-blue-400 transition-colors duration-200"
                >
                  Open Campus Assistant
                </Link>
                <a
                  href="/app?tab=procedures"
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg border border-white/15 text-sm text-slate-300 hover:bg-white/5 hover:border-white/25 transition-colors duration-200"
                >
                  Procedures Guide
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: FAQ Accordions */}
          <div className="lg:col-span-7 space-y-3">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-xl border transition-colors duration-300 ${
                    isOpen
                      ? "border-blue-500/30 bg-white/[0.04]"
                      : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.03]"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left px-5 sm:px-6 py-5 flex items-center justify-between gap-4 select-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      {faq.tag ? (
                        <span className="hidden sm:inline-block text-[11px] px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 font-medium whitespace-nowrap">
                          {faq.tag}
                        </span>
                      ) : null}
                      <span
                        className={`font-semibold text-sm sm:text-base transition-colors duration-200 ${
                          isOpen ? "text-blue-300" : "text-slate-100"
                        }`}
                      >
                        {faq.question}
                      </span>
                    </div>
                    <span
                      className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ease-out ${
                        isOpen
                          ? "bg-blue-500 text-white rotate-45"
                          : "bg-white/5 text-slate-400 rotate-0"
                      }`}
                    >
                      <Plus className="w-4 h-4" strokeWidth={2} />
                    </span>
                  </button>

                  {/* Smooth grid-based expand/collapse */}
                  <div
                    className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div
                        className={`px-5 sm:px-6 pb-5 text-xs sm:text-sm text-slate-400 leading-relaxed font-normal border-t border-white/5 pt-4 transition-opacity duration-300 ${
                          isOpen ? "opacity-100 delay-100" : "opacity-0"
                        }`}
                      >
                        <div>{faq.answer}</div>
                        <div className="mt-3 text-xs text-slate-500 flex items-center gap-2">
                          <FileText
                            className="w-3.5 h-3.5 text-blue-400/70"
                            strokeWidth={2}
                          />
                          <span>
                            Source: Official LASU documents (shown in answers)
                          </span>
                        </div>
                      </div>
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
