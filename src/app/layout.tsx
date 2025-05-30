"use client"

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from 'next/font/google'
import "./globals.css";
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [isDark, setIsDark] = useState(false)
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])
  return (
    <html lang="en">
      <title>Ichsanul Kamil Sudarmi</title>
      <body className={`${inter.className} bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100`}>
        <nav className="p-4 shadow bg-gray-100 dark:bg-gray-800 flex justify-between">
          {/* <div className="font-bold">Ichsanul Kamil Sudarmi</div> */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="text-sm border px-3 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {isDark ? 'Light Mode (in Develop)' : 'Dark Mode (in Develop)'}
          </button>
        </nav>
        {children}
      </body>
    </html>
  );
}
