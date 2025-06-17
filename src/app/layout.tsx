/* eslint-disable @next/next/next-script-for-ga */
import type {Metadata} from "next";
import {Geist,Geist_Mono} from "next/font/google";
import "./globals.css";
import {Toaster} from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RankyAds Waitlist — Generate Ads Faster with AI",
  description: "RankyAds lets you generate high-converting ads instantly with AI. Create powerful campaigns in seconds , faster, smarter, and effortlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3J41NZQEY3" />
        <script dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];

          function gtag(){dataLayer.push(arguments);}  
          gtag('js', new Date());

          gtag('config', 'G-3J41NZQEY3');  
        `}} />
      </head>
      <body cz-shortcut-listen="true"

        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        <Toaster />
      </body>
    </html>
  );
}
