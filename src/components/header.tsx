"use client";

import { LoginButton } from "@/components/login-button";
import { Notifications } from "@/components/notifications";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";

export function Header() {
  const { data: session } = useSession();

  return (
    <header className="border-b bg-card text-card-foreground shadow-sm">
      <div className="flex h-16 items-center px-6 md:px-6 pl-16 md:pl-6">
        <h1 className="text-lg font-semibold md:ml-64">
          きのどくなー 管理画面
        </h1>
        <div className="ml-auto flex items-center space-x-4">
          {session && <Notifications />}
          <LoginButton />
          {session?.user && (
            <Avatar>
              <AvatarImage
                src={session.user.image || "/placeholder.svg"}
                alt={session.user.name || "ユーザーアバター"}
              />
              <AvatarFallback>
                {session.user.name ? session.user.name[0] : "U"}
              </AvatarFallback>
            </Avatar>
          )}
        </div>
      </div>
    </header>
  );
}
