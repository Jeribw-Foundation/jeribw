import CrisisAlert from "../components/CrisisAlert";

export default function HomePage() {
  return (
    <>
      <CrisisAlert />

     <main style={{ maxWidth: "72rem", margin: "0 auto", padding: "3rem 1.5rem" }}>

         <section>
           <h1>JERIBW</h1>
           
            <p>
              Calm, verified information and family-first guidance, helping households
              everywhere navigate uncertainty with clarity, dignity, and support.
            </p>

            <p>
              <a href="/help">Request Help</a>
            </p>
          </section>

          <section>
            <h2>What We Provide</h2>

            <p>Family Briefs — simple explanations of current events</p>
            <p>Crisis guidance — practical steps when situations escalate</p>
            <p>Regional resources — verified help by location</p>
            <p>Calm updates — no sensational headlines</p>
          </section>

          <section className="community-section">
            <h2>You’re Not Alone</h2>

            <p>
              Families around the world are navigating uncertainty right now.
              JERIBW exists to share calm information, practical guidance, and quiet solidarity.
            </p>

            <p>
              We’re building a global family network — one region at a time.
            </p>

            <div className="image-placeholder"></div>

            <p>
              COMING SOON: regional family circles and shared support spaces.
            </p>
          </section>

          <section>
            <hr style={{ marginTop: "3rem" }} />

            <p style={{ fontSize: "0.9rem", opacity: 0.6 }}>
              JERIBW is a calm information platform for families worldwide. Version 1.0 live.
            </p>

            <p style={{ fontSize: "0.9rem" }}>
              Contact: <a href="mailto:help@jeribw.org">help@jeribw.org</a>
            </p>
          </section>

      </main>
    </>
  );
}
