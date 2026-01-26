export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-[#F4F1EC] py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        <div>
          <h3 className="font-semibold mb-2">JERIBW Family News</h3>
          <p className="text-sm">
            Calm, verified information for families worldwide.
          </p>

          <p className="text-sm mt-3">
            Contact:{" "}
            <a href="mailto:family@jeribw.org" className="underline">
              family@jeribw.org
            </a>
          </p>
        </div>

        <div className="text-sm space-y-2">
          <a href="/start" className="block hover:underline">Start Here</a>
          <a href="/resources" className="block hover:underline">Resources</a>
          <a href="/briefs" className="block hover:underline">Family Briefs</a>
          <a href="/help" className="block hover:underline">Help</a>
        </div>

        <div className="text-sm space-y-2">
          <p className="font-semibold">Region (coming soon)</p>
          <p>Global</p>

          <p className="mt-4 text-xs opacity-70">
            © {new Date().getFullYear()} JERIBW Family News. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
