import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "支援マッチングシステム",
  description:
    "支援を必要とする団体と支援する団体をマッチングするプラットフォーム",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="min-h-screen flex bg-background text-foreground">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Header />
            <main className="flex-1 p-6 overflow-auto md:ml-64">
              <div className="max-w-7xl mx-auto animate-fade-in">
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
