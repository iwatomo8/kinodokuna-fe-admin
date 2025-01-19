"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { mockNotifications } from "@/lib/mock-data";
import { Bell } from "lucide-react";
import * as React from "react";

type Notification = {
  id: string;
  title: string;
  description: string;
  date: string;
};

export function Notifications() {
  const [notifications, setNotifications] = React.useState(mockNotifications);

  const unreadCount = notifications.length;

  const markAsRead = (id: string) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
              {unreadCount}
            </span>
          )}
          <span className="sr-only">通知を表示</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel>通知</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <DropdownMenuItem
              key={notification.id}
              className="flex flex-col items-start p-2"
            >
              <div className="flex w-full justify-between">
                <span className="font-medium">{notification.title}</span>
                <button
                  type="button"
                  onClick={() => markAsRead(notification.id)}
                  className="text-xs text-blue-500 hover:text-blue-700"
                >
                  既読にする
                </button>
              </div>
              <p className="text-sm text-gray-500">
                {notification.description}
              </p>
              <span className="text-xs text-gray-400">
                {new Date(notification.date).toLocaleString("ja-JP")}
              </span>
            </DropdownMenuItem>
          ))
        ) : (
          <DropdownMenuItem disabled>新しい通知はありません</DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
