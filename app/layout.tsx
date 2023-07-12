import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import AuthContext from "@/Context/AuthContext";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Toaster />
        <AuthContext session={session}>{children}</AuthContext>
      </body>
    </html>
  );
}
