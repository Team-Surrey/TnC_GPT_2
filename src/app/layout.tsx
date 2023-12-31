
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import React from "react";
import { AuthProvider } from "@/context/AuthContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.className} h-full flex flex-row items-center justify-between`}
      >
        <AuthProvider>
          <Sidebar />
          <div className="m-auto gow items-center h-full w-full lg:w-[900px]">
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
