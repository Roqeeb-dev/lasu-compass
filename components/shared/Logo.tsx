import Link from "next/link";
import { Compass } from "lucide-react";

type Props = {
  size?: "sm" | "lg";
  variant?: "light" | "dark";
};

export default function Logo({ size = "sm", variant = "dark" }: Props) {
  const boxClass =
    size === "lg" ? "w-11 h-11 rounded-2xl" : "w-7 h-7 rounded-lg";
  const iconClass = size === "lg" ? "w-5 h-5" : "w-3.5 h-3.5";
  const textClass = size === "lg" ? "text-base" : "text-sm";

  const textColorClass = variant === "light" ? "text-white" : "text-slate-900";

  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0">
      <div
        className={`${boxClass} bg-blue-600 flex items-center justify-center text-white shrink-0`}
      >
        <Compass className={iconClass} strokeWidth={2} />
      </div>
      <span
        className={`${textClass} font-semibold ${textColorClass} whitespace-nowrap`}
      >
        LASU Compass <span className="text-blue-600">AI</span>
      </span>
    </Link>
  );
}
