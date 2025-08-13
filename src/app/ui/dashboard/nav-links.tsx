"use client";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {  plus } from "../fonts";

type LinkItem = {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

interface NavLinksProps {
  links: LinkItem[];
  isSecondary?: boolean;
  isCollapsed?: boolean;
}

export default function NavLinks({
  links,
  isSecondary = false,
  isCollapsed = false,
}: NavLinksProps) {
  const pathname = usePathname();
  console.log("Rendering with pathname:", pathname);
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        const isActive = pathname === link.href;
        const isSignOut = link.name === "Sign Out";

        return (
          <Link
            key={link.name}
            href={link.href}
            aria-current={isActive ? "page" : undefined}
            className={clsx(
              `group relative flex h-12  items-center justify-center rounded-md transition-colors duration-200 font-medium mx-2 ${
                plus.className
              } ,
              ${
                isCollapsed
                  ? "w-12 justify-center px-2 hover:scale-110 hover:shadow-lg hover:z-10 hover:bg-slate-100"
                  : "w-60 justify-start px-3"
              }
              `,
              {
                "bg-purple-50 border border-purple-300 text-purple-600":
                  isActive,
                "hover:bg-slate-50 hover:text-slate-900":
                  !isSecondary && !isSignOut && !isActive,
                "hover:bg-red-50 hover:text-red-600": isSignOut,
              }
            )}
          >
            <LinkIcon className="w-6 h-6" />
            {!isCollapsed && (
              <>
                <p className="md:block ml-2">{link.name}</p>

                {isActive && !isSecondary && (
                  <div className="ml-auto w-2 h-2 rounded-full bg-purple-600 hidden md:block" />
                )}
              </>
            )}
          </Link>
          
        );
        
      })}
    </>
  );
}
