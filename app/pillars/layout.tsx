import type { ReactNode } from "react";

export default function PillarsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <section
      style={{
        width: "100%",
        background: "#ffffff",
      }}
    >
      {children}
    </section>
  );
}
