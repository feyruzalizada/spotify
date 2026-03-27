"use client";
import { AlbumCard } from "./components/music/AlbumCard";
import { TrackList } from "./components/music/TrackList";
import { Sidebar } from "./components/layouts/Sidebar";
import { TopBar } from "./components/layouts/TopBar";
import { MusicPlayer } from "./components/player/MusicPlayer";
import { ErrorBoundary } from "./components/shared/ErrorBoundary";
import { featuredAlbums, playlists } from "@/data/tracks";
import Image from "next/image";

export default function Home() {
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

  return (
    <ErrorBoundary>
      <div className="flex min-h-screen" style={{ backgroundColor: "var(--bg)" }}>
        <Sidebar />

        <div className="flex-1 flex flex-col overflow-hidden">
          <TopBar />

          <main
            className="flex-1 overflow-y-auto pb-28 px-8"
            style={{ backgroundColor: "var(--bg)" }}
          >
            {/* Greeting */}
            <h1 className="text-3xl font-bold mt-4 mb-6 text-white">
              {greeting}
            </h1>

            {/* Quick picks grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
              {playlists.slice(0, 6).map((pl) => (
                <div
                  key={pl.id}
                  className="flex items-center gap-4 rounded-md overflow-hidden cursor-pointer transition-all hover:opacity-80"
                  style={{ backgroundColor: "var(--bg-hover)" }}
                >
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <Image src={pl.cover} alt={pl.title} fill className="object-cover" />
                  </div>
                  <span className="font-semibold text-sm text-white truncate pr-2">
                    {pl.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Featured Albums */}
            <section className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-white">Featured Albums</h2>
                <a href="/library" className="text-sm font-semibold hover:underline" style={{ color: "var(--text-muted)" }}>
                  Show all
                </a>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {featuredAlbums.map((album) => (
                  <AlbumCard key={album.id} album={album} />
                ))}
              </div>
            </section>

            {/* Track list */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">All Tracks</h2>
              <TrackList />
            </section>
          </main>
        </div>
      </div>

      <MusicPlayer />
    </ErrorBoundary>
  );
}
