import type { Metadata } from "next";
import { Inter, Red_Hat_Display } from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
  title: "Bujang Gadis",
  description: "Official Website Bujang Gadis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"font-redhatdisplay"}>{children}</body>
    </html>
  );
}
