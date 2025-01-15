"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";

export default function CaseRegistrationPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    router.push("/");
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>新規案件登録</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">案件名</Label>
            <Input id="title" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">案件詳細</Label>
            <Textarea id="description" rows={5} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="requirements">必要な支援</Label>
            <Textarea id="requirements" rows={3} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="deadline">募集期限</Label>
            <Input id="deadline" type="date" required />
          </div>

          <Button type="submit" className="w-full">
            登録する
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
