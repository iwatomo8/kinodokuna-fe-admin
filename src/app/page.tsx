import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function CasesListPage() {
  const cases = [
    { id: 1, title: "子ども食堂の運営支援" },
    { id: 2, title: "高齢者向け配食サービス" },
    { id: 3, title: "学習支援ボランティア募集" },
    { id: 4, title: "フードバンク物資提供" },
    { id: 5, title: "地域清掃活動支援" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">案件一覧</h2>
        <Input type="search" placeholder="検索..." className="max-w-xs" />
      </div>

      <div className="border rounded-lg">
        <div className="p-4 border-b bg-slate-50">
          <h3 className="font-medium">案件名</h3>
        </div>
        <div className="divide-y">
          {cases.map((case_) => (
            <div
              key={case_.id}
              className="flex items-center p-4 hover:bg-slate-50"
            >
              <Checkbox id={`case-${case_.id}`} />
              <Link
                href={`/cases/${case_.id}`}
                className="ml-4 flex-1 hover:underline"
              >
                {case_.title}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Button variant="destructive">選択した案件を削除</Button>
    </div>
  );
}
