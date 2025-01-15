"use client";
import { cn } from "@/lib/utils";
import { FileText, Home, Settings, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "案件一覧", icon: Home },
    { href: "/register", label: "案件登録", icon: FileText },
    { href: "/organizations", label: "団体一覧", icon: Users },
    { href: "/settings", label: "設定情報", icon: Settings },
  ];

  return (
    <nav className="w-64 min-h-screen bg-slate-800 text-white p-3 space-y-2">
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors",
              pathname === link.href
                ? "bg-blue-500 text-white"
                : "hover:bg-slate-700",
            )}
          >
            <Icon className="h-5 w-5" />
            <span>{link.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
