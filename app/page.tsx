import Link from "next/link";

export default function HomePage() {
  return (
    <div>

      {/* ================= HERO ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          
          <div>
            <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
              Helping Families Everywhere Find Stability, Support, and Strength
            </h1>

            <div className="h-1 w-16 bg-jeribw-gold mb-6"></div>

            <p className="text-lg text-gray-700 mb-10">
              JERIBW Family News filters global events, proven family systems,
              and verified resources so households can make calm, informed decisions.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Link
                href="/resources"
                className="bg-jeribw-primary text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
              >
                Find Support for My Family
              </Link>

              <Link
                href="/pillars"
                className="border border-jeribw-primary text-jeribw-primary px-6 py-3 rounded-lg hover:bg-jeribw-primary hover:text-white transition"
              >
                Explore The 7 Family Systems
              </Link>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="w-full h-80 bg-gray-200 rounded-2xl shadow-sm" />
        </div>
      </section>


      {/* ================= START HERE ================= */}
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif mb-4">
            Start Here — You’re Not Alone
          </h2>
          
          <div className="h-1 w-16 bg-jeribw-gold mb-6"></div>

          <p className="text-gray-700 mb-12">
            If your household feels uncertain or overwhelmed, begin here.
            Calm structure. Clear steps. No noise.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <Link href="/resources" className="p-6 border rounded-xl hover:shadow-md transition">
              <h3 className="font-semibold mb-2">I Need Help Now</h3>
              <p className="text-sm text-gray-600">
                Food, housing, health, education, legal aid.
              </p>
            </Link>

            <Link href="/pillars" className="p-6 border rounded-xl hover:shadow-md transition">
              <h3 className="font-semibold mb-2">Strengthen My Family</h3>
              <p className="text-sm text-gray-600">
                Leadership, stability, independence systems.
              </p>
            </Link>

            <Link href="/briefs/first-family-brief" className="p-6 border rounded-xl hover:shadow-md transition">
              <h3 className="font-semibold mb-2">Read a Family Brief</h3>
              <p className="text-sm text-gray-600">
                Calm updates structured for households.
              </p>
            </Link>
          </div>
        </div>
      </section>


      {/* ================= PILLARS PREVIEW ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-serif mb-6 text-center">
            The 7 Family Systems
          </h2>

          <div className="h-1 w-16 bg-jeribw-gold mx-auto mb-6"></div>

          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-16">
            Families do not stabilize by accident. They stabilize through systems.
            These are the frameworks households can implement to move from crisis
            toward independence.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {["Leadership", "Stability", "Provision", "Community"].map((item) => (
              <div key={item} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
                <div className="h-24 bg-gray-200 rounded-xl mb-4" />
                <h3 className="font-semibold">{item}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Practical structure for daily life.
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/pillars"
              className="bg-jeribw-primary text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
            >
              Explore All Systems
            </Link>
          </div>
        </div>
      </section>


      {/* ================= COMMUNITY ================= */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl font-serif mb-6">
              Families Learning From Families
            </h2>

            <div className="h-1 w-16 bg-jeribw-gold mx-auto mb-6"></div>

            <p className="text-gray-700 mb-6">
              Stability is strengthened through shared knowledge.
              Stories, lessons, and practical wisdom from households
              across the world.
            </p>

            <Link
              href="/briefs"
              className="text-jeribw-primary font-semibold"
            >
              Visit Family Briefs →
            </Link>
          </div>

          <div className="h-80 bg-gray-200 rounded-2xl shadow-sm" />
        </div>
      </section>

    </div>
  );
}
