import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideNav from "./components/SideNav";
import { ActiveSectionProvider } from "./components/ActiveSectionContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Ingeniero Civil en Informática",
  description:
    "Portfolio de desarrollo fullstack con Next.js, Angular, Python, FastAPI, HonoJS y más.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-zinc-100`}
      >
        <ActiveSectionProvider>
          <SideNav />
          <main>{children}</main>
        </ActiveSectionProvider>
      </body>
    </html>
  );
}
