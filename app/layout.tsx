import type { Metadata } from "next";
import { Geist, Geist_Mono, Flow_Circular } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Accredian Enterprise",
  description: "Cultivate high-performance teams through expert learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FFFFFF]">
        {/* Render Navbar globally at the top */}
        <Navbar />
        {/* Main content takes the remaining space */}
        <main className="grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}