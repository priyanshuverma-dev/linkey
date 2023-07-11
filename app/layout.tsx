import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Linkey",
  description: "A APi based url shortner",
  applicationName: "linkey",
  authors: {
    name: "Priyanshu & Team",
    url: "https://antrikshdev.tech",
  },
  creator: "Priyanshu Verma",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Toaster />
        {children}
        <Footer />
      </body>
    </html>
  );
}
