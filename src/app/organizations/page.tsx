"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { mockOrganizations } from "@/lib/mock-data";
import { Building2, MapPin, Users } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function OrganizationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const organizations = mockOrganizations;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <h2 className="text-2xl font-bold">団体一覧</h2>
        <div className="flex gap-4">
          <Input
            type="search"
            placeholder="団体を検索..."
            className="max-w-xs"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button>新規団体登録</Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {organizations
          .filter(
            (org) =>
              org.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              org.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
              org.location.toLowerCase().includes(searchQuery.toLowerCase()),
          )
          .map((org) => (
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
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={`/organizations/${org.id}`}>詳細を見る</Link>
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
