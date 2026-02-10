import Link from "next/link";

export default function FamilySystemsPillar() {
  return (
    <main
      style={{
        maxWidth: "72rem",
        margin: "0 auto",
        padding: "3rem 1.5rem",
      }}
    >
      {/* HERO */}
      <section style={{ marginBottom: "3rem" }}>
        <h1>The 7 Family Systems That Create Stable Homes</h1>

        <p style={{ fontSize: "1.1rem", opacity: 0.85 }}>
          Across cultures, income levels, and family structures, stable families
          are not built on luck — they are built on systems.
        </p>
      </section>

      {/* FEATURE IMAGE / VIDEO PLACEHOLDER */}
      <section
        style={{
          background: "#f3f4f6",
          borderRadius: "12px",
          height: "360px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "3rem",
        }}
      >
        <p style={{ opacity: 0.6 }}>
          Image or video placeholder (family systems visual)
        </p>
      </section>

      {/* INTRO */}
      <section>
        <p>
          Families that thrive are not perfect. They still face pressure,
          disagreement, financial stress, and uncertainty. What separates them
          from families that collapse is not motivation — it is structure.
        </p>

        <p>
          Below are the seven foundational systems that stable families around
          the world quietly maintain. These systems are not rules. They are
          anchors — designed to help families stand on their own feet, not
          depend forever on outside support.
        </p>
      </section>

      {/* SYSTEM LIST */}
      <section style={{ marginTop: "3rem" }}>
        <h2>The 7 Founding Family Systems</h2>

        <ol>
          <li>
            <strong>Communication System</strong> — how families speak, listen,
            and repair.
          </li>
          <li>
            <strong>Time System</strong> — how priorities are protected.
          </li>
          <li>
            <strong>Financial System</strong> — how money supports stability,
            not anxiety.
          </li>
          <li>
            <strong>Conflict System</strong> — how disagreements are contained
            without damage.
          </li>
          <li>
            <strong>Care & Well-Being System</strong> — how health and emotional
            load are managed.
          </li>
          <li>
            <strong>Leadership System</strong> — how responsibility and
            direction are provided.
          </li>
          <li>
            <strong>Community System</strong> — how families stay connected and
            supported.
          </li>
        </ol>
      </section>

      {/* INDEPENDENCE FRAMING */}
      <section style={{ marginTop: "3rem" }}>
        <h2>Why Systems Create Independence</h2>

        <p>
          Support is sometimes necessary — but dependency is not the goal.
          Families that build systems reduce crisis, regain control, and free
          up support for others who need it.
        </p>

        <p>
          Strong systems turn help into a bridge, not a crutch.
        </p>
      </section>

      {/* CTA */}
      <section style={{ marginTop: "3rem" }}>
        <h2>Start Where You Are</h2>

        <p>
          You do not need all seven systems working perfectly. Begin with one.
          Strength builds through clarity, not urgency.
        </p>

        <p>
          <Link href="/resources">Explore Family Resources →</Link>
        </p>
      </section>

      {/* FOOTNOTE */}
      <section style={{ marginTop: "4rem", opacity: 0.6 }}>
        <hr />
        <p style={{ fontSize: "0.9rem" }}>
          This pillar is part of JERIBW’s Family Systems framework — designed to
          help families stabilize, grow independent, and make space for others
          to be helped.
        </p>
      </section>
    </main>
  );
}
