export const metadata = {
  title: "JERIBW Family News",
  description: "Calm, verified information and real help for families worldwide"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
