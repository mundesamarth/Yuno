"use client";
import NavLinks from "./nav-links";
import YunoLogo from "../yuno-logo";
import AiPart from "@/app/dashboard/ai-part";
import {
  ChartLine,
  Goal,
  LayoutDashboard,
  Plus,
  LogOut,
  Settings,
} from "lucide-react";
import { useState } from "react";

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
  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside
      className={`h-screen overflow-y-auto transition-all duration-300 ease-in-out ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      <nav
        className="h-full shadow-sm flex  flex-col justify-between"
        aria-label="Main navigation"
      >
        <YunoLogo toggleSidebar={toggleSidebar} isCollapsed={isCollapsed} />
        <div className="flex-1 overflow-y-auto">
          <div className="my-6 space-y-2">
            <NavLinks links={primaryLinks} isCollapsed={isCollapsed} />
          </div>
          <hr className="border-t border-slate-200" />
          <NavLinks
            links={secondaryLinks}
            isSecondary
            isCollapsed={isCollapsed}
          />
          <hr className="border-t border-slate-200 my-6" />
          {!isCollapsed && (
            <div className={`md:flex items-center justify-center mx-4 `}>
              <AiPart />
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
}
