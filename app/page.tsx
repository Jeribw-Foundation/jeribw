import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-[#F4F1EC] text-[#1C1C1C]">

      {/* ================= HERO ================= */}
      <section className="px-6 py-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
            Helping Families Everywhere Find Stability, Support, and Strength
          </h1>

          <p className="text-lg mb-8">
            JERIBW Family News filters global events, proven family systems,
            and verified resources so households can make calm, informed decisions.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Link
              href="/resources"
              className="bg-[#2F4A63] text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
            >
              Find Support for My Family
            </Link>

            <Link
              href="/pillars"
              className="border border-[#2F4A63] px-6 py-3 rounded-lg hover:bg-[#2F4A63] hover:text-white transition"
            >
              Explore The 7 Family Systems
            </Link>
          </div>
        </div>

        {/* HERO IMAGE PLACEHOLDER */}
        <div className="w-full h-80 bg-gray-300 rounded-xl shadow-sm" />
      </section>


      {/* ================= START HERE ================= */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-4">
            Start Here — You’re Not Alone
          </h2>

          <p className="mb-10">
            If your household feels uncertain or overwhelmed, begin here.
            Calm structure. Clear steps. No noise.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <Link href="/resources" className="p-6 border rounded-xl hover:shadow-md transition">
              <h3 className="font-semibold mb-2">I Need Help Now</h3>
              <p className="text-sm">
                Food, housing, health, education, legal aid.
              </p>
            </Link>

            <Link href="/pillars" className="p-6 border rounded-xl hover:shadow-md transition">
              <h3 className="font-semibold mb-2">Strengthen My Family</h3>
              <p className="text-sm">
                Leadership, stability, independence systems.
              </p>
            </Link>

            <Link href="/briefs/first-family-brief" className="p-6 border rounded-xl hover:shadow-md transition">
              <h3 className="font-semibold mb-2">Read a Family Brief</h3>
              <p className="text-sm">
                Calm updates structured for households.
              </p>
            </Link>
          </div>
        </div>
      </section>


      {/* ================= PILLARS PREVIEW ================= */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif mb-6 text-center">
          The 7 Family Systems
        </h2>

        <p className="text-center max-w-3xl mx-auto mb-12">
          Families do not stabilize by accident. They stabilize through systems.
          These are the frameworks households can implement to move from crisis
          toward independence.
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            "Leadership",
            "Stability",
            "Provision",
            "Community",
          ].map((item) => (
            <div key={item} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="h-24 bg-gray-300 rounded mb-4" />
              <h3 className="font-semibold">{item}</h3>
              <p className="text-sm mt-2">
                Practical structure for daily life.
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/pillars"
            className="bg-[#2F4A63] text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
          >
            Explore All Systems
          </Link>
        </div>
      </section>


      {/* ================= COMMUNITY ================= */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif mb-6">
              Families Learning From Families
            </h2>

            <p className="mb-6">
              Stability is strengthened through shared knowledge.
              Stories, lessons, and practical wisdom from households
              across the world.
            </p>

            <Link
              href="/briefs"
              className="text-[#2F4A63] font-semibold"
            >
              Visit Family Briefs →
            </Link>
          </div>

          {/* IMAGE / VIDEO PLACEHOLDER */}
          <div className="h-80 bg-gray-300 rounded-xl shadow-sm" />
        </div>
      </section>

    </div>
  );
}
