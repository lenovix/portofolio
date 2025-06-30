"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import Script from "next/script";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const defaultDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    setIsDark(defaultDark);
    document.documentElement.classList.toggle("dark", defaultDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        <title>Ichsanul Kamil Sudarmi</title>
      </Head>

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-F9EGFWG4J3"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
 window.dataLayer = window.dataLayer || [];
 function gtag(){dataLayer.push(arguments);}
 gtag('js', new Date());
 gtag('config', 'G-F9EGFWG4J3');
`}
      </Script>

      <body className="transition-colors duration-300 bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
        {children}
        <footer className="text-center text-sm text-gray-500 py-6">
          &copy; 2025 - {new Date().getFullYear()} Ichsanul Kamil Sudarmi. All
          rights reserved.
        </footer>
      </body>
    </html>
  );
}
