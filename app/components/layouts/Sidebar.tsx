"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "../shared/ThemeToggle";

const navItems = [
  { href: "/", label: "Home", icon: "🏠" },
  { href: "/search", label: "Search", icon: "🔍" },
  { href: "/library", label: "Your Library", icon: "📚" },
  { href: "/liked", label: "Liked Songs", icon: "💚" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="flex flex-col w-64 min-h-screen p-6 gap-6"
      style={{ backgroundColor: "#000000" }}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 mb-2">
        <svg width="32" height="32" viewBox="0 0 168 168">
          <path
            fill="#1DB954"
            d="M84 0C37.6 0 0 37.6 0 84s37.6 84 84 84 84-37.6 84-84S130.4 0 84 0zm38.6 121.2c-1.5 2.5-4.8 3.3-7.3 1.8C97 112 76 109.4 51 114.9c-2.9.7-5.8-1.1-6.5-4-.7-2.9 1.1-5.8 4-6.5 27.5-6.3 51.1-3.6 70.3 8.5 2.6 1.6 3.4 4.8 1.8 7.3zm10.3-22.9c-2 3.1-6 4-9.1 2.1-17.1-10.5-43.2-13.5-63.5-7.4-3.4 1-7-.8-8-4.3-1-3.4.8-7 4.3-8 23.2-7 52.1-3.6 72 8.6 3 2 4 6 2 9.1v-.1zm.9-23.8C114.4 60.8 74.6 59.5 51 66.6c-4 1.2-8.3-1.1-9.5-5.1s1.1-8.3 5.1-9.5c27.2-8.2 72.4-6.7 100.9 10.2 3.6 2.1 4.7 6.7 2.5 10.3-2.1 3.5-6.7 4.7-10.3 2.5l.1-.1z"
          />
        </svg>
        <span className="text-white font-bold text-xl">Spotify</span>
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-4 px-3 py-2 rounded-md font-semibold text-sm transition-all hover:text-white"
              style={{
                color: active ? "#ffffff" : "var(--text-muted)",
                backgroundColor: active ? "var(--bg-hover)" : "transparent",
              }}
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Divider */}
      <div className="border-t border-gray-800 my-2" />

      {/* Playlists shortcuts */}
      <div className="flex flex-col gap-1">
        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--text-muted)" }}>
          Playlists
        </p>
        {["Today's Top Hits", "Chill Vibes", "Workout Beats", "Late Night Drive"].map((pl) => (
          <Link
            key={pl}
            href="/library"
            className="text-sm py-1 px-3 rounded hover:text-white transition-colors truncate"
            style={{ color: "var(--text-muted)" }}
          >
            {pl}
          </Link>
        ))}
      </div>

      <div className="mt-auto">
        <ThemeToggle />
      </div>
    </aside>
  );
}
