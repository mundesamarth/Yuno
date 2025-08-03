"use client";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { manrope } from "../fonts";

type LinkItem = {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

interface NavLinksProps {
  links: LinkItem[];
  isSecondary?: boolean;
}

export default function NavLinks({ links, isSecondary = false }: NavLinksProps) {
  const pathname = usePathname();
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
              `flex w-64 h-[48px] max-w-full items-center justify-center gap-3 rounded-md md:flex-none md:justify-start md:p-2 md:px-2 ${manrope.className} font-medium mx-2 box-border`,
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
            <p className="hidden md:block font-medium">{link.name}</p>
            {isActive && !isSecondary && (
              <div className="ml-auto w-2 h-2 rounded-full bg-purple-600" />
            )}
          </Link>
        );
      })}
    </>
  );
}