import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Puzzle Zone",
  description: "Play all your favorite puzzle games here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}  p-4 relative bg-gradient-to-tr from-blue-950 to-cyan-200   pt-2 pb-10`}>{children}</body>
    </html>
  );
}
