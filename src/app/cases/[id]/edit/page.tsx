"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DatePicker } from "@/components/ui/date-picker";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Save, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

// 仮のデータ（実際の実装では、APIからデータを取得します）
const initialCaseData = {
  id: "1",
  title: "子ども食堂の運営支援",
  description:
    "地域の子どもたちに温かい食事を提供する子ども食堂の運営をサポートしていただける団体を募集しています。",
  requirements: "食材の提供、調理ボランティア、会場の提供など",
  deadline: new Date("2024-03-31"),
};

type Params = Promise<{ id: string }>;

export default async function CaseEditPage({ params }: { params: Params }) {
  const { id } = await params;
  const router = useRouter();
  const [caseData, setCaseData] = useState(initialCaseData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setCaseData({ ...caseData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date: Date | undefined) => {
    if (date) {
      setCaseData({ ...caseData, deadline: date });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここで、更新されたデータをバックエンドに送信する処理を実装します
    console.log("Updated case data:", caseData);
    router.push(`/cases/${id}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">案件編集</h2>
        <Button variant="outline" onClick={() => router.push(`/cases/${id}`)}>
          <X className="h-4 w-4 mr-2" />
          キャンセル
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>案件ID: {caseData.id}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">案件名</Label>
              <Input
                id="title"
                name="title"
                value={caseData.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">案件詳細</Label>
              <Textarea
                id="description"
                name="description"
                value={caseData.description}
                onChange={handleChange}
                rows={5}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="requirements">必要な支援</Label>
              <Textarea
                id="requirements"
                name="requirements"
                value={caseData.requirements}
                onChange={handleChange}
                rows={3}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="deadline">募集期限</Label>
              <DatePicker
                id="deadline"
                selected={caseData.deadline}
                onSelect={handleDateChange}
              />
            </div>

            <div className="flex justify-end space-x-4">
              <Button type="submit">
                <Save className="h-4 w-4 mr-2" />
                変更を保存
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
