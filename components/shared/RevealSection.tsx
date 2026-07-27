"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealSectionProps = {
  children: ReactNode;
  className?: string;
};

export default function RevealSection({
  children,
  className = "",
}: RevealSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition duration-700 ease-out opacity-0 translate-y-6 ${
        visible ? "opacity-100 translate-y-0" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
