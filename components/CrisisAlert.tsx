import { crisisActive, crisisHeadline, crisisDetails } from "../data/crisis";
import Link from "next/link";

export default function CrisisAlert() {
  if (!crisisActive) return null;

  return (
    <div
      style={{
        background: "#b91c1c",
        color: "white",
        padding: "12px 0",
        fontWeight: "600",
      }}
    >
      <div className="container">
        <Link
          href="/crisis"
          style={{ color: "white", textDecoration: "underline" }}
        >
          ⚠️ {crisisHeadline}
          <p style={{ margin: "4px 0 0", fontWeight: "400" }}>
            {crisisDetails}
          </p>
        </Link>
      </div>
    </div>
  );
}
