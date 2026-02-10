export default function PillarHero({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle: string;
  image: string;
}) {
  return (
    <section
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "6rem 1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: "72rem",
          margin: "0 auto",
          color: "#fff",
          background: "rgba(0,0,0,0.55)",
          padding: "2rem",
          borderRadius: "8px",
        }}
      >
        <h1>{title}</h1>
        <p style={{ maxWidth: "40rem", opacity: 0.9 }}>
          {subtitle}
        </p>
      </div>
    </section>
  );
}
