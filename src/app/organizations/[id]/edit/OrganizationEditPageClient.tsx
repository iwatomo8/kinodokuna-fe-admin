"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Save, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const organizationData = {
  id: 1,
  name: "NPO法人 子ども支援センター",
  type: "NPO法人",
  description:
    "子どもたちの健やかな成長を支援する活動を行っています。学習支援、食育活動、居場所づくりなど、多角的なアプローチで子どもたちの未来をサポートしています。",
  location: "東京都新宿区○○町1-2-3",
  members: 25,
  activeProjects: 3,
  completedProjects: 12,
  email: "info@kodomo-support.org",
  phone: "03-1234-5678",
  website: "https://www.kodomo-support.org",
  image: "/placeholder.svg",
};

interface OrganizationEditPageClientProps {
  id: string;
}

export default function OrganizationEditPageClient({
  id,
}: OrganizationEditPageClientProps) {
  const router = useRouter();
  const [organization, setOrganization] = useState(organizationData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setOrganization({ ...organization, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value: string, name: string) => {
    setOrganization({ ...organization, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updated organization:", organization);
    router.push(`/organizations/${id}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">団体情報編集</h2>
        <Button
          variant="outline"
          onClick={() => router.push(`/organizations/${id}`)}
        >
          <X className="h-4 w-4 mr-2" />
          キャンセル
        </Button>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src={organization.image} alt={organization.name} />
            <AvatarFallback>{organization.name.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-2xl">{organization.name}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">団体名</Label>
                  <Input
                    id="name"
                    name="name"
                    value={organization.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">団体種別</Label>
                  <Select
                    name="type"
                    value={organization.type}
                    onValueChange={(value) => handleSelectChange(value, "type")}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="団体種別を選択" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="NPO法人">NPO法人</SelectItem>
                      <SelectItem value="一般社団法人">一般社団法人</SelectItem>
                      <SelectItem value="社会福祉法人">社会福祉法人</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">団体概要</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={organization.description}
                  onChange={handleChange}
                  rows={4}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">所在地</Label>
                <Input
                  id="location"
                  name="location"
                  value={organization.location}
                  onChange={handleChange}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="members">メンバー数</Label>
                  <Input
                    id="members"
                    name="members"
                    type="number"
                    value={organization.members}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="activeProjects">進行中の案件数</Label>
                  <Input
                    id="activeProjects"
                    name="activeProjects"
                    type="number"
                    value={organization.activeProjects}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="completedProjects">完了した案件数</Label>
                  <Input
                    id="completedProjects"
                    name="completedProjects"
                    type="number"
                    value={organization.completedProjects}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">メールアドレス</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={organization.email}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">電話番号</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={organization.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">ウェブサイト</Label>
                <Input
                  id="website"
                  name="website"
                  value={organization.website}
                  onChange={handleChange}
                />
              </div>
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
