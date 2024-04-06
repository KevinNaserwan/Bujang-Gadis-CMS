import type { Metadata } from "next";
import { Inter, Red_Hat_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Bujang Gadis",
  description: "Official Website Bujang Gadis",
  authors: [
    {
      name: "Meets Indonesia",
      url: "https://www.instagram.com/meets.indonesia/",
    },
  ],
  keywords:
    "Bujang Gadis, Voting, Pemilihan Bujang Gadis, Bujang, Gadis, Bujang Gadis Unsri",
  viewport: { width: "device-Width", initialScale: 1 },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"font-redhatdisplay relative"}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
