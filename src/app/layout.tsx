import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingSidebar from "@/components/layout/FloatingSidebar";

export const metadata: Metadata = {
  title: "NovaPOS - Smart POS Solutions for Global Business",
  description: "Empowering merchants worldwide with cutting-edge POS terminals, payment solutions, and OEM/ODM services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen flex flex-col" style={{ fontFamily: 'var(--font-body)' }}>
        <Header />
        <main className="flex-1">{children}</main>
        <FloatingSidebar />
        <Footer />
      </body>
    </html>
  );
}
