"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function SignInPage() {
  const handleSignIn = () => {
    signIn("google", { callbackUrl: "/" });
  };

  return (
    <div className="container flex min-h-screen items-center justify-center px-4 py-8">
      <Card className="w-full max-w-[350px] sm:w-[350px]">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">ログイン</CardTitle>
          <CardDescription>
            以下のサービスでログインしてください。
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <Button variant="outline" onClick={handleSignIn} className="w-full">
              <Image
                src="/google.svg"
                width={20}
                height={20}
                alt="Google"
                className="mr-2"
              />
              Googleでログイン
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
