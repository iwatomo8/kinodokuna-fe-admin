import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockOrganizationDetails } from "@/lib/mock-data";
import {
  Building2,
  FileText,
  Globe,
  Mail,
  MapPin,
  Phone,
  Users,
} from "lucide-react";
import Link from "next/link";

const organizationData = mockOrganizationDetails;

type Params = Promise<{ id: string }>;

export default async function OrganizationDetailsPage({
  params,
}: { params: Params }) {
  const { id } = await params;
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">団体詳細</h2>
        <Button variant="outline" asChild>
          <Link href="/organizations">団体一覧に戻る</Link>
        </Button>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <Avatar className="h-20 w-20">
            <AvatarImage
              src={organizationData.image}
              alt={organizationData.name}
            />
            <AvatarFallback>{organizationData.name.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-2xl">{organizationData.name}</CardTitle>
            <CardDescription className="flex items-center gap-2 mt-2">
              <Badge variant="secondary">{organizationData.type}</Badge>
              <span className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                {organizationData.members}名
              </span>
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="info" className="space-y-4">
            <TabsList>
              <TabsTrigger value="info">基本情報</TabsTrigger>
              <TabsTrigger value="projects">案件情報</TabsTrigger>
              <TabsTrigger value="contact">連絡先</TabsTrigger>
            </TabsList>
            <TabsContent value="info" className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">団体概要</h3>
                <p>{organizationData.description}</p>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>{organizationData.location}</span>
              </div>
            </TabsContent>
            <TabsContent value="projects" className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">進行中の案件</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold">
                      {organizationData.activeProjects}
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">完了した案件</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold">
                      {organizationData.completedProjects}
                    </p>
                  </CardContent>
                </Card>
              </div>
              <Button variant="outline" className="w-full" asChild>
                <Link href={`/organizations/${id}/projects`}>
                  全ての案件を見る
                </Link>
              </Button>
            </TabsContent>
            <TabsContent value="contact" className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{organizationData.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{organizationData.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <a
                    href={organizationData.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {organizationData.website}
                  </a>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <div className="flex justify-end space-x-4">
        <Button variant="outline" asChild>
          <Link href={`/organizations/${id}/edit`}>
            <FileText className="h-4 w-4 mr-2" />
            編集
          </Link>
        </Button>
        <Button variant="destructive">
          <Building2 className="h-4 w-4 mr-2" />
          削除
        </Button>
      </div>
    </div>
  );
}
