import type { Metadata } from "next";
import { ThemeProvider } from "./context/ThemeContext";
import { PlayerProvider } from "./context/PlayerContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spotify Design System",
  description: "A Spotify-inspired music platform built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body>
        <ThemeProvider>
          <PlayerProvider>{children}</PlayerProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
