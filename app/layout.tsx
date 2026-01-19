import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lumentix - Stellar Event Platform",
  description: "Decentralized event management platform built on Stellar blockchain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
