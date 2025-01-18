import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { mockCases } from "@/lib/mock-data";
import Link from "next/link";

export default function CasesListPage() {
  const cases = mockCases;

  return (
    <div className="space-y-6 animate-slide-in">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h2 className="text-3xl font-bold">案件一覧</h2>
        <div className="flex gap-4 w-full sm:w-auto">
          <Input type="search" placeholder="検索..." className="max-w-xs" />
          <Button>新規案件</Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>案件</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="divide-y">
            {cases.map((case_) => (
              <div
                key={case_.id}
                className="flex items-center py-4 hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors"
              >
                <Checkbox id={`case-${case_.id}`} className="ml-4" />
                <Link
                  href={`/cases/${case_.id}`}
                  className="ml-4 flex-1 flex items-center justify-between hover:underline"
                >
                  <span>{case_.title}</span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      case_.status === "進行中"
                        ? "bg-blue-100 text-blue-800"
                        : case_.status === "募集中"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {case_.status}
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between items-center">
        <Button variant="outline">選択した案件を削除</Button>
        <div className="space-x-2">
          <Button variant="outline" size="sm">
            前へ
          </Button>
          <Button variant="outline" size="sm">
            次へ
          </Button>
        </div>
      </div>
    </div>
  );
}
