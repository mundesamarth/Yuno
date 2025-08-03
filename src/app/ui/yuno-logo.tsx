import clsx from "clsx";
import { ChevronLeft, Ship } from "lucide-react";
import Link from "next/link";

interface YunoLogoProps {
  onToggle?: () => void;
}

export default function YunoLogo({ onToggle }: YunoLogoProps) {
  return (
    <div className="flex items-center justify-between gap-2 p-4 border-b border-slate-200">
      <div className="flex items-center gap-2">
        <Ship
          width={40}
          height={40}
          className="text-purple-600 hover:rotate-[15deg] transition-all duration-300"
        />
        <div>
          <Link href="/dashboard" className="flex justify-center text-3xl">
            <div className="flex flex-col leading-4">
              <p className="font-bold">Yuno</p>
              <p className="text-[12px]">Steer Your Spending</p>
            </div>
          </Link>
        </div>
      </div>
      <button
        aria-label="Toggle sidebar"
        onClick={onToggle}
        className="p-1"
      >
        <ChevronLeft className="w-6 h-6 transition-transform duration-300 rotate-180" />
      </button>
    </div>
  );
}