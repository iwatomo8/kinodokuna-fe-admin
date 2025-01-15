import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Building2, MapPin, Users } from "lucide-react";

export default function OrganizationsPage() {
  const organizations = [
    {
      id: 1,
      name: "NPO法人 子ども支援センター",
      type: "NPO法人",
      location: "東京都新宿区",
      members: 25,
      activeProjects: 3,
      image: "/placeholder.svg",
    },
    {
      id: 2,
      name: "一般社団法人 シルバーケア協会",
      type: "一般社団法人",
      location: "東京都港区",
      members: 15,
      activeProjects: 2,
      image: "/placeholder.svg",
    },
    {
      id: 3,
      name: "社会福祉法人 みらい",
      type: "社会福祉法人",
      location: "東京都世田谷区",
      members: 40,
      activeProjects: 5,
      image: "/placeholder.svg",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <h2 className="text-2xl font-bold">団体一覧</h2>
        <div className="flex gap-4">
          <Input
            type="search"
            placeholder="団体を検索..."
            className="max-w-xs"
          />
          <Button>新規団体登録</Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {organizations.map((org) => (
          <Card key={org.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={org.image} alt={org.name} />
                <AvatarFallback>{org.name.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <CardTitle className="text-lg">{org.name}</CardTitle>
                <Badge variant="secondary">{org.type}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{org.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>{org.members}名</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-muted-foreground" />
                  <span>進行中の案件: {org.activeProjects}件</span>
                </div>
                <div className="pt-4">
                  <Button variant="outline" className="w-full">
                    詳細を見る
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
