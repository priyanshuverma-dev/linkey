import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import AuthContext from "@/Context/AuthContext";

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
        <AuthContext>{children}</AuthContext>
        <Footer />
      </body>
    </html>
  );
}
