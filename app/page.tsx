import CrisisAlert from "../components/CrisisAlert";

export default function HomePage() {
  return (
    <>
      <CrisisAlert />

      <main>
        <section>
          <div className="container">
            <h1>JERIBW</h1>

            <p>
              Calm, verified information and family-first guidance — helping households
              everywhere navigate uncertainty with clarity, dignity, and support.
            </p>

            <p>
              <a href="/help">Request Help</a>
            </p>
          </div>
        </section>

        <section>
          <div className="container">
            <h2>What We Provide</h2>

            <p>
              • Family Briefs — simple explanations of current events<br />
              • Crisis guidance — practical steps when situations escalate<br />
              • Regional resources — verified help by location<br />
              • Calm updates — no sensational headlines
            </p>
          </div>
        </section>

        <section>
          <div className="container community-section">
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
              Coming soon: regional family circles and shared support spaces.
            </p>
          </div>
        </section>

        <section>
          <div className="container">
            <hr style={{ marginTop: "3rem" }} />

            <p style={{ fontSize: "0.9rem", opacity: 0.6 }}>
              JERIBW is a calm information platform for families worldwide. Version 1.0 live.
            </p>

            <p style={{ fontSize: "0.9rem" }}>
              Contact: <a href="mailto:help@jeribw.org">help@jeribw.org</a>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
