import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Customers from "@/components/Customers";
import RecentCases from "@/components/RecentCases";
import Team from "@/components/Team";
import Blog from "@/components/Blog";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "K.Narayanaraj Portfolio",
  description: "K.Narayanaraj Portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        {/* <Team/> */}
        {/* <Blog/> */}
        {/* <Customers/> */}
        <Contact/>
        <Footer/>
        <div>
          <ScrollToTopButton/>
        </div>
      </body>
    </html>
  );
}
