import type { Metadata } from "next";
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
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
        <div style={{ minHeight: "100vh" }}>

          {/* FULL WIDTH HEADER */}
          <Header />

          {/* MASTER CONTAINER */}
          <div className="container">

            <main>{children}</main>

            <Footer />

          </div>
        </div>
      </body>
    </html>
  );
}
