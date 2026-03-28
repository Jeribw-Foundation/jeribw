"use client";

import { crisisData } from "@/data/crisis";
import Link from "next/link";

export default function CrisisBanner() {
  if (!crisisData.active) return null;

  return (
    <div className="bg-red-600 text-white text-sm px-4 py-2 text-center">
      <span>{crisisData.message}</span>
      <Link
        href={crisisData.link}
        className="ml-3 underline font-medium"
      >
        Get Help →
      </Link>
    </div>
  );
}