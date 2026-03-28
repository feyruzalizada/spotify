"use client";
import { Sidebar } from "../components/layouts/Sidebar";
import { TopBar } from "../components/layouts/TopBar";
import { MusicPlayer } from "../components/player/MusicPlayer";
import { AlbumCard } from "../components/music/AlbumCard";
import { featuredAlbums, playlists } from "@/data/tracks";

export default function LibraryPage() {
  return (
    <div className="flex min-h-screen" style={{ backgroundColor: "var(--bg)" }}>
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-y-auto pb-28 px-8 pt-6">
          <h1 className="text-3xl font-bold text-white mb-6">Your Library</h1>

          {/* Playlists */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-white mb-4">Playlists</h2>
            <div className="flex flex-col gap-2">
              {playlists.map((pl) => (
                <div
                  key={pl.id}
                  className="flex items-center gap-4 p-3 rounded-md cursor-pointer transition-all"
                  style={{ backgroundColor: "var(--bg-card)" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLDivElement).style.backgroundColor =
                      "var(--bg-hover)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLDivElement).style.backgroundColor =
                      "var(--bg-card)")
                  }
                >
                  <div className="text-2xl">🎵</div>
                  <div>
                    <p className="font-semibold text-white">{pl.title}</p>
                    <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                      Playlist • {pl.trackCount} songs
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Albums */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">Albums</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {featuredAlbums.map((album) => (
                <AlbumCard key={album.id} album={album} />
              ))}
            </div>
          </section>
        </main>
      </div>
      <MusicPlayer />
    </div>
  );
}
