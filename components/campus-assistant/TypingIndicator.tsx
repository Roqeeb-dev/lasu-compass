"use client";

import { useState, useEffect } from "react";

const THINKING_WORDS = [
  "Sleuthing files",
  "Sifting LASU archives",
  "Consulting official manuals",
  "Checking recent circulars",
  "Locating page references",
  "Analyzing academic records",
  "Double-checking calendar dates",
  "Synthesizing official guidelines",
  "Verifying source material",
  "Reading between the lines",
  "Connecting the administrative dots",
  "Cross-referencing parameters",
  "Gathering legal precedents",
  "Scanning faculty directories",
  "Reviewing regulatory policies",
  "Assembling structural details",
  "Validating database records",
  "Drafting accurate guidance",
  "Refining structured response",
  "Polishing final response",
];

export default function TypingIndicator() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % THINKING_WORDS.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-start select-none">
      <div className="bg-gray-100 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-3 items-center">
        {/* Animated bouncing dots */}
        <div className="flex gap-1 items-center">
          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
        </div>

        {/* Dynamic transition text */}
        <span className="text-xs font-sans font-medium text-gray-500 tracking-wide transition-all duration-300 ease-in-out">
          {THINKING_WORDS[wordIndex]}...
        </span>
      </div>
    </div>
  );
}
