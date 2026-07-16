import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "九州小仓・门司港高尔夫之旅",
  description: "上海往返福冈，日本九州小仓・门司港7天6夜4场高尔夫团体行程",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: { title: "九州小仓・门司港高尔夫之旅", description: "7天6夜・4场高尔夫团体行程", type: "website", images: [{ url: "/og.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: "九州小仓・门司港高尔夫之旅", description: "7天6夜・4场高尔夫团体行程", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hans"><body>{children}</body></html>;
}
