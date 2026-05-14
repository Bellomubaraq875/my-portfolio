import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
// import Header from "../components/layout/Header";
// import Footer from "./components/layout/Footer";
// import { Providers } from "../lib/providers";
// import Header from "./layout/Header";
import Header from "./components/layout/Header";


/**
 * Configure Jost with specific weights used in your portfolio 
 * (300 for light body text, 400/500 for normal, 700+ for headers)
 */
const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mubarak Bello | Frontend Developer",
  description: "High-performance portfolio of Mubarak Bello, a Frontend Engineer specialized in sleek UI/UX and scalable architecture.",
  icons: {
    icon: "/logo/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jost.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className={`bg-[#050505] text-white font-sans antialiased selection:bg-port-sky/30`}>
      
        {/* <Providers> */}
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          {/* <Footer />
        </Providers> */}
      </body>
    </html>
  );
}