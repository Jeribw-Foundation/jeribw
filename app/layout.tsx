import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CrisisProvider } from "@/context/CrisisContext";
import CrisisBanner from "@/components/CrisisBanner";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JERIBW FAMILY NEWS",
  description: "Calm, verified information and real help for families worldwide.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
    
      <body
        className={`${inter.className} bg-jeribw-light dark:bg-jeribw-primary text-jeribw-darkText dark:text-white antialiased transition-colors duration-300`}
      >
        <CrisisProvider>
          <div className="min-h-screen flex flex-col">

            {/* 🚨 GLOBAL CRISIS BANNER */}
            <CrisisBanner />

            {/* HEADER */}
            <Header />

            {/* MAIN CONTENT */}
            <main className="flex-1">
              <div className="max-w-7xl mx-auto px-6">
                {children}
              </div>
            </main>

            <script
  dangerouslySetInnerHTML={{
    __html: `
      try {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        }
      } catch (e) {}
    `,
  }}
/>

            {/* FOOTER */}
            <Footer />

          </div>
        </CrisisProvider>
      </body>
    </html>
  );
}