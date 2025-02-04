import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import 'react-toastify/dist/ReactToastify.css'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <footer className="bg-[#F45846] text-white py-4">
      <div className="container mx-auto text-center">
        <h1 className="text-sm font-semibold">@2025 - SMK TELKOM MALANG</h1>
      </div>
    </footer>
      </body>
    </html>
  );
}
