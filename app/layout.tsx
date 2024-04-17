import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { InitialPrice } from "@/components/intial-price";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gir Kesar Keri",
  description: "Gir Kesar Keri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`relative ${sans.className}`}>
        <InitialPrice />
        {children}
      </body>
    </html>
  );
}
