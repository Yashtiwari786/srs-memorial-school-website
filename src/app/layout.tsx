import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "S.R.S. Memorial Kids Garden School | Learning with Joy, Growing with Values",
  description:
    "Welcome to S.R.S. Memorial Kids Garden School, Agra. Nurturing young minds through play-way learning, smart classrooms, qualified teachers, and active sports since 2013.",
  keywords: [
    "SRS Memorial School",
    "Kids Garden School Agra",
    "Agra Primary School",
    "SRS School Bihpura",
    "Best school in Agra",
    "Smart Classrooms school Agra",
  ],
  authors: [{ name: "S.R.S. Memorial Kids Garden School" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        {/* Additional premium fonts or head elements can go here */}
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-800">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
