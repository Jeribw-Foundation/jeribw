import { crisisActive, crisisHeadline, crisisDetails } from "../data/crisis";
import Link from "next/link";

export default function CrisisAlert() {
  if (!crisisActive) return null;

  return (
    <div
      style={{
        background: "#7f1d1d",
        color: "white",
        padding: "1rem 0",
      }}
    >
      <div
        style={{
          maxWidth: "72rem",
          margin: "0 auto",
          padding: "0 1.5rem",
          textAlign: "center",
        }}
      >
        <Link href="/crisis" style={{ color: "white", textDecoration: "none" }}>
          <strong style={{ display: "block", marginBottom: "0.25rem" }}>
            ⚠️ {crisisHeadline}
          </strong>

          <span style={{ fontSize: "0.9rem", opacity: 0.9 }}>
            {crisisDetails}
          </span>
        </Link>
      </div>
    </div>
  );
}
