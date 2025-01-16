import { Notifications } from "@/components/notifications";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Header() {
  return (
    <header className="border-b bg-slate-900 text-white">
      <div className="flex h-16 items-center px-6">
        <h1 className="text-lg font-semibold">きのどくなー 管理画面</h1>
        <div className="ml-auto flex items-center space-x-4">
          <Notifications />
          <Avatar>
            <AvatarImage src="/placeholder.svg" alt="ユーザーアバター" />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
