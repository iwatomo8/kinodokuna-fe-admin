"use client";

import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export function LoginButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <Button variant="ghost" onClick={() => signOut()}>
        ログアウト
      </Button>
    );
  }
  return (
    <Button variant="ghost" asChild>
      <Link href="/login">ログイン</Link>
    </Button>
  );
}
