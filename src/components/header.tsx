import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell } from "lucide-react";

export function Header() {
  return (
    <header className="border-b bg-slate-900 text-white">
      <div className="flex h-16 items-center px-6">
        <h1 className="text-lg font-semibold">きのどくなー 管理画面</h1>
        <div className="ml-auto flex items-center space-x-4">
          <button type="button" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-xs">
              7
            </span>
          </button>
          <Avatar>
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
