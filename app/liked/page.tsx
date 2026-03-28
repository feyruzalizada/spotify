"use client";
import { Sidebar } from "../components/layouts/Sidebar";
import { TopBar } from "../components/layouts/TopBar";
import { MusicPlayer } from "../components/player/MusicPlayer";
import { TrackCard } from "../components/music/TrackCard";
import { usePlayer } from "../context/PlayerContext";
import { tracks } from "@/data/tracks";

export default function LikedPage() {
  const { likedTracks, playTrack, addToQueue } = usePlayer();
  const liked = tracks.filter((t) => likedTracks.includes(t.id));

  const playAll = () => {
    if (liked.length === 0) return;
    liked.forEach((t) => addToQueue(t));
    playTrack(liked[0]);
  };

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: "var(--bg)" }}>
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-y-auto pb-28">
          {/* Hero */}
          <div
            className="flex items-end gap-6 px-8 py-12"
            style={{
              background: "linear-gradient(135deg, #4a0080 0%, #121212 100%)",
            }}
          >
            <div
              className="w-52 h-52 rounded-lg flex items-center justify-center text-6xl shadow-2xl flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #450af5, #c4efd9)" }}
            >
              💚
            </div>
            <div>
              <p className="text-white text-sm font-semibold uppercase tracking-widest mb-2">
                Playlist
              </p>
              <h1 className="text-white text-5xl font-black mb-4">
                Liked Songs
              </h1>
              <p style={{ color: "var(--text-muted)" }}>
                {liked.length} {liked.length === 1 ? "song" : "songs"}
              </p>
            </div>
          </div>

          <div className="px-8 pt-6">
            {liked.length > 0 && (
              <button
                onClick={playAll}
                className="w-14 h-14 rounded-full flex items-center justify-center text-black font-bold text-xl mb-6 transition-transform hover:scale-105 shadow-lg"
                style={{ backgroundColor: "var(--accent)" }}
              >
                ▶
              </button>
            )}

            {liked.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-4xl mb-4">💚</p>
                <p className="text-white text-xl font-bold mb-2">Songs you like will appear here</p>
                <p style={{ color: "var(--text-muted)" }}>
                  Save songs by tapping the heart icon.
                </p>
              </div>
            ) : (
              <div className="flex flex-col">
                {liked.map((track, i) => (
                  <TrackCard key={track.id} track={track} index={i + 1} showIndex />
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
      <MusicPlayer />
    </div>
  );
}
