import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from '@/components/Navigation/NavBar'
import Footer from '@/components/Navigation/Footer' // Import your footer component


// Firebase Analytics initialization moved to a hook
import AnalyticsInit from "@/hooks/firebase/analyticsinit";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anya",
  description: "Adventist National Youth Association",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen max-w-[1280px] m-auto!`}
      >
        <NavBar />
        <main className="flex-1">
          {children}
          <AnalyticsInit />
        </main>
        <Footer />
      </body>
    </html>
  );
}