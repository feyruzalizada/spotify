"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function TopBar() {
  const router = useRouter();

  return (
    <header
      className="flex items-center justify-between px-8 py-4 sticky top-0 z-10"
      style={{ backgroundColor: "var(--bg)" }}
    >
      {/* Nav arrows */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => router.back()}
          className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white transition-opacity hover:opacity-70"
          style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
        >
          ‹
        </button>
        <button
          onClick={() => router.forward()}
          className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white transition-opacity hover:opacity-70"
          style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
        >
          ›
        </button>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        <Link
          href="/search"
          className="px-4 py-1.5 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-80"
          style={{ backgroundColor: "var(--bg-hover)" }}
        >
          Search
        </Link>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
          style={{ backgroundColor: "var(--accent)", color: "#000" }}
        >
          F
        </div>
      </div>
    </header>
  );
}
