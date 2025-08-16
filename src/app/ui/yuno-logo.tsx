import { ChevronLeft, PanelRightOpen, Ship } from "lucide-react";
import Link from "next/link";
import { plus } from "./fonts";

export default function YunoLogo({
  isCollapsed,
  toggleSidebar,
}: {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}) {
  return (
    <div className="flex items-center justify-between gap-2 p-4 border-b border-slate-200">
      <div className={`flex items-center gap-2 cursor-pointer `} onClick={toggleSidebar}>
        <Ship
          width={40}
          height={40}
          className="text-[#6366f1] hover:rotate-[15deg] transition-all duration-300"
        />
        {!isCollapsed && (
          <div className="flex justify-center text-3xl">
            <div className={`flex flex-col ${plus.className}`}>
              <p className="font-bold">Yuno</p>
              <p className="text-[12px]">Steer Your Spending</p>
            </div>
          </div>
        )}
      </div>
      {!isCollapsed && (
        <button
          aria-label="Toggle sidebar"
          className="p-1"
          onClick={toggleSidebar}
        >
          <PanelRightOpen className="w-6 h-6 transition-transform duration-200 hover:bg-slate-100 hover:border-r rounded-md" />
        </button>
      )}
    </div>
  );
}
