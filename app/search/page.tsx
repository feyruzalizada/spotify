"use client";
import { useState } from "react";
import { Sidebar } from "../components/layouts/Sidebar";
import { TopBar } from "../components/layouts/TopBar";
import { MusicPlayer } from "../components/player/MusicPlayer";
import { TrackCard } from "../components/music/TrackCard";
import { tracks } from "@/data/tracks";

const genres = ["Pop", "Hip-Hop", "R&B", "Indie", "Alternative", "Rock", "Jazz", "Classical"];
const genreColors = ["#E8115B", "#509BF5", "#1DB954", "#E91429", "#8D67AB", "#F59B23", "#27856A", "#148A08"];

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const results = query
    ? tracks.filter(
        (t) =>
          t.title.toLowerCase().includes(query.toLowerCase()) ||
          t.artist.toLowerCase().includes(query.toLowerCase()) ||
          t.album.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: "var(--bg)" }}>
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-y-auto pb-28 px-8 pt-6">
          <h1 className="text-3xl font-bold text-white mb-6">Search</h1>

          {/* Search bar */}
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="What do you want to listen to?"
            autoFocus
            className="w-full max-w-xl px-5 py-3 rounded-full text-base outline-none mb-8"
            style={{
              backgroundColor: "#ffffff",
              color: "#000000",
            }}
          />

          {query ? (
            <section>
              <h2 className="text-xl font-bold text-white mb-4">
                Results for &quot;{query}&quot;
              </h2>
              {results.length === 0 ? (
                <p style={{ color: "var(--text-muted)" }}>No results found.</p>
              ) : (
                <div className="flex flex-col">
                  {results.map((track, i) => (
                    <TrackCard key={track.id} track={track} index={i + 1} showIndex />
                  ))}
                </div>
              )}
            </section>
          ) : (
            <section>
              <h2 className="text-xl font-bold text-white mb-4">Browse categories</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {genres.map((genre, i) => (
                  <div
                    key={genre}
                    className="relative h-32 rounded-xl overflow-hidden cursor-pointer transition-all hover:scale-105"
                    style={{ backgroundColor: genreColors[i] }}
                    onClick={() => setQuery(genre)}
                  >
                    <span className="absolute top-4 left-4 text-white font-bold text-xl">
                      {genre}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
      <MusicPlayer />
    </div>
  );
}
