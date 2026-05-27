import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingSidebar from "@/components/layout/FloatingSidebar";

export const metadata: Metadata = {
  title: {
    default: "NovaPOS - Smart POS Solutions for Global Business",
    template: "%s | NovaPOS",
  },
  description: "Empowering merchants worldwide with cutting-edge POS terminals, payment solutions, and OEM/ODM services.",
  keywords: ["POS terminal", "point of sale", "payment terminal", "smart POS", "mobile POS", "self-service kiosk", "OEM POS", "POS manufacturer"],
  authors: [{ name: "NovaPOS Technology" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "NovaPOS",
    title: "NovaPOS - Smart POS Solutions for Global Business",
    description: "Empowering merchants worldwide with cutting-edge POS terminals, payment solutions, and OEM/ODM services.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NovaPOS - Smart POS Solutions for Global Business",
    description: "Empowering merchants worldwide with cutting-edge POS terminals, payment solutions, and OEM/ODM services.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <FloatingSidebar />
        <Footer />
      </body>
    </html>
  );
}
