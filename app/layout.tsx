import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Nav from "@/components/nav";
import localFont from "next/font/local";

const Intergal = localFont({
  src: [
    {
      path: "/fonts/Fontspring-DEMO-integralcf-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/Fontspring-DEMO-integralcf-medium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "/fonts/Fontspring-DEMO-integralcf-bold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "/fonts/Fontspring-DEMO-integralcf-heavy.otf",
      weight: "900",
      style: "black",
    },
  ],
  variable: "--font-intergal",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reverse Digital",
  description: "Reverse Digital Agency - you imagine it, we build it",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${Intergal.variable} antialiased`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
