import type { Metadata } from "next";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "JERIBW Family News",
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
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </div>
    </body>
  </html>
);
}
