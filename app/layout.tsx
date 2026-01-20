export const metadata = {
  title: "JERIBW Family News",
  description: "Calm, verified information and real help for families worldwide",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "system-ui, -apple-system, sans-serif",
          backgroundColor: "#F4F1EC",
          color: "#1C1C1C",
        }}
      >
        {children}
      </body>
    </html>
  );
}
