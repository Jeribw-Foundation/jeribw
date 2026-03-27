export default function Footer() {
  return (
    <footer className="bg-jeribw-primary text-white py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        <div>
          <h3 className="font-semibold mb-3">
            JERIBW FAMILY NEWS
          </h3>
          <p className="text-sm opacity-80">
            Calm, verified information for families worldwide.
          </p>
        </div>

        <div className="text-sm space-y-2 opacity-90">
          <p>About</p>
          <p>Mission</p>
          <p>Resources</p>
        </div>

        <div className="text-sm space-y-2 opacity-90">
          <p>Privacy</p>
          <p>Transparency</p>
          <p>Contact</p>
        </div>

      </div>
    </footer>
  );
}
