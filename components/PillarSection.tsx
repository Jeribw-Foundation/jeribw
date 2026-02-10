export default function PillarSection({
  title,
  children,
  image,
}: {
  title: string;
  children: React.ReactNode;
  image?: string;
}) {
  return (
    <section
      style={{
        maxWidth: "72rem",
        margin: "4rem auto",
        padding: "0 1.5rem",
        display: "grid",
        gridTemplateColumns: image ? "1fr 1fr" : "1fr",
        gap: "2rem",
      }}
    >
      <div>
        <h2>{title}</h2>
        {children}
      </div>

      {image && (
        <div>
          <img
            src={image}
            alt={title}
            style={{
              width: "100%",
              borderRadius: "8px",
            }}
          />
        </div>
      )}
    </section>
  );
}
