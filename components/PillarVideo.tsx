export default function PillarVideo({ src }: { src: string }) {
  return (
    <section
      style={{
        maxWidth: "72rem",
        margin: "4rem auto",
        padding: "0 1.5rem",
      }}
    >
      <div style={{ position: "relative", paddingTop: "56.25%" }}>
        <iframe
          src={src}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "8px",
          }}
          allowFullScreen
        />
      </div>
    </section>
  );
}
