export default function HelpPage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "700px" }}>
      <h1>Request Help</h1>

      <p>
        This platform exists to support families during difficult moments.
        Please share what you are facing.
      </p>

      <form>
        <label>Full Name</label>
        <br />
        <input style={{ width: "100%", marginBottom: "1rem" }} />

        <label>Email Address</label>
        <br />
        <input style={{ width: "100%", marginBottom: "1rem" }} />

        <label>Country</label>
        <br />
        <input style={{ width: "100%", marginBottom: "1rem" }} />

        <label>Your Situation</label>
        <br />
        <textarea rows={5} style={{ width: "100%", marginBottom: "1rem" }} />

        <button type="submit">Submit Request</button>
      </form>

      <p style={{ marginTop: "2rem", fontSize: "0.9rem" }}>
        Note: This form currently records submissions locally. A verified response system is coming.
      </p>
    </main>
  );
}
