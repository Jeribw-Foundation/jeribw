"use client";
import { useEffect } from "react";
import { useCrisis } from "@/context/CrisisContext";
import Link from "next/link";
import SectionDivider from "@/components/SectionDivider";

export default function HomePage() {
  const { setCrisis } = useCrisis();

  useEffect(() => {
    setCrisis({
      active: true,
      message: "Emergency food support needed in multiple regions",
    });
  }, []);

  return (
    <div className="bg-jeribw-light">

      {/* ================= HERO ================= */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
              Helping Families Everywhere Find Stability, Support, and Strength
            </h1>

            <p className="text-lg mb-8 text-jeribw-muted">
              A calm information layer for families worldwide.
              Verified resources. Practical systems. Clear guidance.
            </p>

            <div className="flex gap-4">
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
                Explore Systems
              </Link>
            </div>
          </div>

          <div className="h-80 bg-gray-300 rounded-xl" />
        </div>
      </section>


      {/* ================= START HERE ================= */}
      <section id="start" className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          
          <h2 className="text-3xl font-serif">
            Start Here — You’re Not Alone
          </h2>
          <SectionDivider />

          <p className="mb-12 text-jeribw-muted">
            If you’re overwhelmed, we guide you step by step.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "I Need Help Now",
              "Strengthen My Family",
              "Community & Connection"
            ].map((item) => (
              <div key={item} className="p-6 border rounded-xl hover:shadow-sm transition bg-white">
                <h3 className="font-semibold mb-2">{item}</h3>
                <p className="text-sm text-jeribw-muted">
                  Structured, practical pathways forward.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= RESOURCES ================= */}
      <section id="resources" className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-serif">
            Family Resources
          </h2>
          <SectionDivider />

          <p className="mb-12 text-jeribw-muted">
            Verified global organizations providing support to families.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="p-6 bg-white rounded-xl shadow-sm">
                <div className="h-32 bg-gray-300 rounded mb-4" />
                <h3 className="font-semibold">Organization</h3>
                <p className="text-sm my-2 text-jeribw-muted">
                  Clear summary of assistance provided.
                </p>
                <Link
                  href="/resources"
                  className="text-jeribw-primary text-sm font-medium"
                >
                  View Resource →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= FAMILY SYSTEMS ================= */}
      <section id="systems" className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-serif">
            Family Systems
          </h2>
          <SectionDivider />

          <p className="mb-12 text-jeribw-muted">
            Practical frameworks families can implement immediately.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {["Leadership", "Stability", "The 4Ws", "Community"].map((item) => (
              <div key={item} className="p-6 border rounded-xl bg-white">
                <div className="h-24 bg-gray-300 rounded mb-4" />
                <h3 className="font-semibold">{item}</h3>
                <p className="text-sm mt-2 text-jeribw-muted">
                  Actionable structure for daily life.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= COMMUNITY ================= */}
      <section id="community" className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-serif">
            Community & Stories
          </h2>
          <SectionDivider />

          <p className="mb-12 text-jeribw-muted">
            Families learning from families across the world.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="h-64 bg-gray-300 rounded-xl" />
            <div className="h-64 bg-gray-300 rounded-xl" />
          </div>

          <div className="mt-10">
            <Link
              href="/briefs"
              className="bg-jeribw-primary text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
            >
              Enter Full Community Platform
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
