import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JERIBW Family News",
  description: "Global family-focused news and intelligence platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
