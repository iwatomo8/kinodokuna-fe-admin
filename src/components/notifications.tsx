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
import { Bell } from "lucide-react";
import * as React from "react";

type Notification = {
  id: string;
  title: string;
  description: string;
  date: string;
};

export function Notifications() {
  const [notifications, setNotifications] = React.useState<Notification[]>([
    {
      id: "1",
      title: "新規案件応募",
      description: "「子ども食堂の運営支援」に新しい応募がありました。",
      date: "2023-06-15T10:00:00",
    },
    {
      id: "2",
      title: "メッセージ受信",
      description:
        "「高齢者向け配食サービス」に関する新しいメッセージがあります。",
      date: "2023-06-14T15:30:00",
    },
    {
      id: "3",
      title: "案件期限迫る",
      description:
        "「学習支援ボランティア募集」の募集期限が1週間後に迫っています。",
      date: "2023-06-13T09:15:00",
    },
  ]);

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
