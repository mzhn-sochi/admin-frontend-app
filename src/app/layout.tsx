import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MyNavigationMenu } from "@/components/my-navigation";
import { MyFooter } from "@/components/my-footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Для Администрации",
  description: "Административный портал для тикетов",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MyNavigationMenu />
        {children}
        <MyFooter />
      </body>

    </html>
  );
}
