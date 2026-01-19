export const metadata = {
  title: "JERIBW Family News",
  description: "Calm, verified global family news and resources",
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
Add root layout for Next.js app router
