export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-white">
      <div className="max-w-8xl mx-auto px-6 py-10 text-sm text-gray-600">
        
        <h3 className="text-lg font-semibold text-jeribw-darkText">
          JERIBW FAMILY NEWS
        </h3>

        <p className="mt-2">
          Calm, verified information for families worldwide.
        </p>

        <p className="mt-2">
          Contact:{" "}
          <a
            href="mailto:family@jeribw.org"
            className="text-jeribw-primary hover:underline"
          >
            family@jeribw.org
          </a>
        </p>

        <nav className="mt-6 flex flex-wrap gap-6 text-sm">
          <a href="/" className="hover:text-jeribw-primary">
            Start Here
          </a>

          <a href="/resources" className="hover:text-jeribw-primary">
            Resources
          </a>

          <a href="/briefs" className="hover:text-jeribw-primary">
            Family Briefs
          </a>

          <a href="/pillars" className="hover:text-jeribw-primary">
            Pillars
          </a>

          <a href="/help" className="hover:text-jeribw-primary">
            Help
          </a>
        </nav>

        <div className="mt-6">
          <p>Region (coming soon)</p>
          <p className="font-medium">Global</p>
        </div>

        <small className="block mt-8 text-gray-400">
          © 2026 JERIBW Family News. All rights reserved.
        </small>
      </div>
    </footer>
  );
}
