import Link from "next/link";

type Props = {
  wordmarkBreakpoint?: "sm" | "md";
};

export default function Logo({ wordmarkBreakpoint = "sm" }: Props) {
  const wordmarkClass =
    wordmarkBreakpoint === "md" ? "hidden md:block" : "hidden sm:block";

  return (
    <Link href="/" className="flex items-center gap-2 shrink-0">
      <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white font-semibold text-xs shrink-0">
        LC
      </div>
      <span
        className={`text-sm font-semibold text-gray-900 whitespace-nowrap ${wordmarkClass}`}
      >
        LASU Compass AI
      </span>
    </Link>
  );
}
