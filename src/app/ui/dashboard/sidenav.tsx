"use client";
import NavLinks from "./nav-links";
import YunoLogo from "../yuno-logo";
import {
  ChartLine,
  Goal,
  LayoutDashboard,
  Plus,
  LogOut,
  Settings,
  Brain,
} from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const primaryLinks = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  {name:'AI', href:'/dashboard/AIChat', icon: Brain},
  { name: "Add Transaction", href: "/dashboard/addtransaction", icon: Plus },
  { name: "Reports", href: "/dashboard/reports", icon: ChartLine },
  { name: "Goals", href: "/dashboard/goals", icon: Goal },
];

const secondaryLinks = [
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
  { name: "Sign Out", href: "/", icon: LogOut },
];

const allLinks = [...primaryLinks, ...secondaryLinks.filter(link => link.name !== "Sign Out")];

export default function SideNav() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <aside
        className={`md:block hidden h-screen overflow-y-auto transition-all duration-300 ease-in-out ${
          isCollapsed ? "w-16" : "w-64"
        }`}
      >
        <nav
          className="h-full shadow-sm flex flex-col justify-between"
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
          </div>
        </nav>
      </aside>

      {/* Mobile bottom navigation */}
      <nav
        className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-lg z-50"
        aria-label="Bottom Navigation"
      >
        <div className="flex justify-around items-center py-2 px-4">
          {allLinks.map((link) => {
            const IconComponent = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                href={link.href}
                key={link.name}
                className={`flex flex-col items-center justify-center p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200 min-w-0 flex-1 ${isActive ? ' border border-[#6366f1] text-[#6366f1]':''}`}
              >
               <div className={`flex flex-col  ${isActive ? 'border-[#6366f1]':''}`}>
               <IconComponent className={`flex align-middle justify-center h-5 w-5 text-bold ${isActive ? 'text-[#6366f1]' : ''}`} />
                {/* <span className={`text-xs  mt-1 truncate font-semibold ${isActive ? 'text-[#6366f1] ':'text-slate-600'}`}>
                  {link.name === "Add Transaction" ? "Add" : link.name}
                </span> */}
               </div>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
