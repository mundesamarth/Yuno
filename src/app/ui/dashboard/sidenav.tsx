"use client";
import NavLinks from "./nav-links";
import YunoLogo from "../yuno-logo";
import AiPart from "@/app/dashboard/ai-part";
import { ChartLine, Goal, LayoutDashboard, Plus, LogOut, Settings } from "lucide-react";

const primaryLinks = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Add Transaction", href: "/dashboard/addtransaction", icon: Plus },
  { name: "Reports", href: "/dashboard/reports", icon: ChartLine },
  { name: "Goals", href: "/dashboard/goals", icon: Goal },
];

const secondaryLinks = [
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
  { name: "Sign Out", href: "/", icon: LogOut },
];

export default function SideNav() {
  return (
    <aside className="h-screen overflow-y-auto">
      <nav className="h-full shadow-sm" aria-label="Main navigation">
        <YunoLogo />
        <div className="my-6 space-y-2">
          <NavLinks links={primaryLinks} />
        </div>
        <hr className="border-t border-slate-200" />
        <NavLinks links={secondaryLinks} isSecondary />
        <hr className="border-t border-slate-200 my-6" />
        <div className="flex items-center justify-center mx-4 mt-24">
          <AiPart />
        </div>
      </nav>
    </aside>
  );
}