import { crisisActive, crisisHeadline, crisisDetails } from "../data/crisis";
import Link from "next/link";

export default function CrisisAlert() {
  if (!crisisActive) return null;

  return (
    <div
      style={{
        background: "#b91c1c",
        color: "white",
        padding: "12px",
        textAlign: "center",
        fontWeight: "600",
      }}
    >
      <Link href="/crisis" style={{ color: "white", textDecoration: "underline" }}>
        ⚠️ {crisisHeadline}
        <p>{crisisDetails}</p>
      </Link>
    </div>
  );
}
