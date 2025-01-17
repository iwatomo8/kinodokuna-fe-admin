"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FileText, Home, Menu, Settings, Users, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const links = [
    { href: "/", label: "案件一覧", icon: Home },
    { href: "/register", label: "案件登録", icon: FileText },
    { href: "/organizations", label: "団体一覧", icon: Users },
    { href: "/settings", label: "設定情報", icon: Settings },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Button
        variant="ghost"
        className={cn(
          "md:hidden fixed top-4 left-4 z-50",
          isOpen ? "hidden" : "block",
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="h-6 w-6" />
      </Button>
      <nav
        ref={sidebarRef}
        className={cn(
          "fixed inset-y-0 left-0 transform transition duration-200 ease-in-out z-40",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
          "w-64 bg-card text-card-foreground p-3 space-y-2 shadow-lg",
        )}
      >
        <div className="flex justify-end md:hidden">
          <Button variant="ghost" onClick={() => setIsOpen(false)}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors",
                pathname === link.href
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-accent hover:text-accent-foreground",
              )}
              onClick={() => setIsOpen(false)}
            >
              <Icon className="h-5 w-5" />
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
