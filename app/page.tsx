import CrisisAlert from "../components/CrisisAlert";
export default function HomePage() {
  return (
    <>
      <CrisisAlert />

      <main style={{ padding: "3rem 2rem" }}>
        <h1>JERIBW</h1>

<p>
  Calm, verified information and family-first guidance — helping households
  everywhere navigate uncertainty with clarity, dignity, and support.
</p>
     <p>
  <a href="/help">Request Help</a>
</p>
    <hr style={{ marginTop: "3rem" }} />

<p style={{ fontSize: "0.9rem", opacity: 0.6 }}>
JERIBW is a calm information platform for families worldwide. Version 1.0 live.
</p>  
   <p style={{ fontSize: "0.9rem" }}>
Contact: <a href="mailto:help@jeribw.org">help@jeribw.org</a>
</p>   
      </main>
    </>
  );
}
