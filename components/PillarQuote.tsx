export default function PillarQuote({ text }: { text: string }) {
  return (
    <section
      style={{
        maxWidth: "60rem",
        margin: "4rem auto",
        padding: "2rem",
        background: "#f5f5f5",
        borderLeft: "4px solid #999",
        fontStyle: "italic",
      }}
    >
      {text}
    </section>
  );
}
