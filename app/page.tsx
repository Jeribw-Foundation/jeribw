import CrisisAlert from "@/components/CrisisAlert";

export default function HomePage() {
  return (
    <>
      <CrisisAlert />

      <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
        <h1>JERIBW</h1>

        <p>
          Live. Verified. Built for families worldwide.
        </p>
      </main>
    </>
  );
}
