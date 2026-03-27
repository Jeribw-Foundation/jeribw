import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    <html lang="en">
      <body
        className={`${inter.className} bg-jeribw-light dark:bg-jeribw-primary text-jeribw-darkText dark:text-white antialiased transition-colors duration-300`}
      >
        {/* ✅ TAILWIND TEST BLOCK */}
        <div className="bg-jeribw-primary text-white p-4 text-center">
        </div>

        <div className="min-h-screen flex flex-col">
          <Header />

          <main className="flex-1">
            <div className="max-w-7xl mx-auto px-6">
              {children}
            </div>
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}