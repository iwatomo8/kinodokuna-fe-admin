"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">設定情報</h2>

      <Tabs defaultValue="organization" className="space-y-4">
        <TabsList>
          <TabsTrigger value="organization">団体情報</TabsTrigger>
          <TabsTrigger value="notifications">通知設定</TabsTrigger>
          <TabsTrigger value="security">セキュリティ</TabsTrigger>
        </TabsList>

        <TabsContent value="organization">
          <Card>
            <CardHeader>
              <CardTitle>団体情報設定</CardTitle>
              <CardDescription>団体の基本情報を設定します</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="org-name">団体名</Label>
                <Input
                  id="org-name"
                  defaultValue="NPO法人 子ども支援センター"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="org-type">団体種別</Label>
                <Select defaultValue="npo">
                  <SelectTrigger>
                    <SelectValue placeholder="団体種別を選択" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="npo">NPO法人</SelectItem>
                    <SelectItem value="general">一般社団法人</SelectItem>
                    <SelectItem value="welfare">社会福祉法人</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">団体概要</Label>
                <Textarea
                  id="description"
                  rows={4}
                  defaultValue="子どもたちの健やかな成長を支援する活動を行っています。"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">所在地</Label>
                <Input id="address" defaultValue="東京都新宿区○○町1-2-3" />
              </div>

              <Button>変更を保存</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>通知設定</CardTitle>
              <CardDescription>
                メールやアプリ内通知の設定を管理します
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>新規応募通知</Label>
                  <p className="text-sm text-muted-foreground">
                    案件への新規応募があった際の通知
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>メッセージ通知</Label>
                  <p className="text-sm text-muted-foreground">
                    新規メッセージを受信した際の通知
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>期限通知</Label>
                  <p className="text-sm text-muted-foreground">
                    案件の募集期限が近づいた際の通知
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <Button>設定を保存</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>セキュリティ設定</CardTitle>
              <CardDescription>
                アカウントのセキュリティ設定を管理します
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="current-password">現在のパスワード</Label>
                <Input id="current-password" type="password" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="new-password">新しいパスワード</Label>
                <Input id="new-password" type="password" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirm-password">
                  新しいパスワード（確認）
                </Label>
                <Input id="confirm-password" type="password" />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>二段階認証</Label>
                  <p className="text-sm text-muted-foreground">
                    ログイン時に追加の認証を要求
                  </p>
                </div>
                <Switch />
              </div>

              <Button>変更を保存</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
