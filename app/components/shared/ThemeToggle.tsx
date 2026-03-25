"use client";
import { useTheme } from "@/app/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all"
      style={{
        backgroundColor: "var(--bg-hover)",
        color: "var(--text-muted)",
      }}
    >
      {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}
