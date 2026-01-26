export default function ResourcesPage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
      <h1>Family Resources</h1>

      <p>
        Below are verified global organizations offering support to families.
        These organizations are trusted and active worldwide.
      </p>

      <ul>
        <li>
          <strong>UNICEF</strong> — Nutrition, education, child protection  
          <br />
          <a href="https://www.unicef.org">https://www.unicef.org</a>
        </li>

        <li>
          <strong>World Food Programme</strong> — Food aid and emergency relief  
          <br />
          <a href="https://www.wfp.org">https://www.wfp.org</a>
        </li>

        <li>
          <strong>UNHCR</strong> — Refugee shelter, legal aid, family reunification  
          <br />
          <a href="https://www.unhcr.org">https://www.unhcr.org</a>
        </li>

        <li>
          <strong>International Red Cross</strong> — Disaster response and medical aid  
          <br />
          <a href="https://www.icrc.org">https://www.icrc.org</a>
        </li>
      </ul>
    </main>
  );
}
