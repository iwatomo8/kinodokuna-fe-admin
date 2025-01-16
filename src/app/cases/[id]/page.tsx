import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText } from "lucide-react";
import Link from "next/link";

type Params = Promise<{ id: string }>;

export default async function CaseDetailsPage({ params }: { params: Params }) {
  const { id } = await params;
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>案件詳細</CardTitle>
        <div className="space-x-2">
          <Button variant="outline" asChild>
            <Link href={`/organizations/${id}/edit`}>
              <FileText className="h-4 w-4 mr-2" />
              編集
            </Link>
          </Button>
          <Button variant="destructive">削除</Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="details" className="space-y-4">
          <TabsList>
            <TabsTrigger value="details">基本情報</TabsTrigger>
            <TabsTrigger value="applications">応募状況</TabsTrigger>
            <TabsTrigger value="messages">メッセージ</TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="space-y-4">
            <div>
              <h3 className="font-medium text-sm text-muted-foreground">
                案件名
              </h3>
              <p className="mt-1">子ども食堂の運営支援</p>
            </div>

            <div>
              <h3 className="font-medium text-sm text-muted-foreground">
                案件詳細
              </h3>
              <p className="mt-1">
                地域の子どもたちに温かい食事を提供する子ども食堂の運営をサポートしていただける団体を募集しています。
              </p>
            </div>

            <div>
              <h3 className="font-medium text-sm text-muted-foreground">
                必要な支援
              </h3>
              <p className="mt-1">
                食材の提供、調理ボランティア、会場の提供など
              </p>
            </div>

            <div>
              <h3 className="font-medium text-sm text-muted-foreground">
                募集期限
              </h3>
              <p className="mt-1">2024年3月31日</p>
            </div>
          </TabsContent>

          <TabsContent value="applications">
            <p>応募状況の内容がここに表示されます</p>
          </TabsContent>

          <TabsContent value="messages">
            <p>メッセージのやり取りがここに表示されます</p>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
