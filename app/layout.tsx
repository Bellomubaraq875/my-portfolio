import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
// import { Providers } from "./providers"; 

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jost.variable} scroll-smooth`}>
      <body className="bg-[#0a0a0a] text-white font-sans antialiased">
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
      </body>
    </html>
  );
}