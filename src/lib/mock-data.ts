export const mockCases = [
  { id: 1, title: "子ども食堂の運営支援", status: "進行中" },
  { id: 2, title: "高齢者向け配食サービス", status: "募集中" },
  { id: 3, title: "学習支援ボランティア募集", status: "募集中" },
  { id: 4, title: "フードバンク物資提供", status: "完了" },
  { id: 5, title: "地域清掃活動支援", status: "募集中" },
];

export const mockOrganizations = [
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

export const mockOrganizationDetails = {
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

export const mockNotifications = [
  {
    id: "1",
    title: "新規案件応募",
    description: "「子ども食堂の運営支援」に新しい応募がありました。",
    date: "2023-06-15T10:00:00",
  },
  {
    id: "2",
    title: "メッセージ受信",
    description:
      "「高齢者向け配食サービス」に関する新しいメッセージがあります。",
    date: "2023-06-14T15:30:00",
  },
  {
    id: "3",
    title: "案件期限迫る",
    description:
      "「学習支援ボランティア募集」の募集期限が1週間後に迫っています。",
    date: "2023-06-13T09:15:00",
  },
];
