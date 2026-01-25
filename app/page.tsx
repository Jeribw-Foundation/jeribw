import CrisisAlert from "../components/CrisisAlert";
export default function HomePage() {
  return (
    <>
      <CrisisAlert />

      <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
        <h1>JERIBW</h1>

        <p>
          Live. Verified. Built for families worldwide.
        </p>
     <p>
  <a href="/help">Request Help</a>
</p>
    <hr style={{ marginTop: "3rem" }} />

<p style={{ fontSize: "0.9rem", opacity: 0.6 }}>
JERIBW is a calm information platform for families worldwide. Version 1.0 live.
</p>  
      </main>
    </>
  );
}
