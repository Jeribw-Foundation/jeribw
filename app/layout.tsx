import type { Metadata } from "next";
import "@fontsource/inter/variable.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      <body className="bg-jeribw-light text-jeribw-darkText font-sans antialiased">
        
        <div className="min-h-screen flex flex-col">

          {/* FULL WIDTH HEADER */}
          <Header />

          {/* MAIN CONTENT AREA */}
          <main className="flex-1">
            <div className="max-w-8xl mx-auto px-6">
              {children}
            </div>
          </main>

          {/* FOOTER */}
          <Footer />

        </div>

      </body>
    </html>
  );
}
