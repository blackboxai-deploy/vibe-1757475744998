import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Distinctive Academy - Cosmetology School Management",
  description: "Professional cosmetology education management platform for Distinctive Academy in Houston, Texas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 min-h-screen`}>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}