"use client";
import Image from "next/image";
import { usePlayer } from "@/app/context/PlayerContext";

export function MusicPlayer() {
  const {
    currentTrack,
    isPlaying,
    togglePlay,
    nextTrack,
    prevTrack,
    volume,
    setVolume,
    progress,
    setProgress,
    isLiked,
    toggleLike,
  } = usePlayer();

  return (
    <footer
      className="fixed bottom-0 left-0 right-0 z-50 px-4 py-3 flex items-center justify-between border-t"
      style={{
        backgroundColor: "#181818",
        borderColor: "#282828",
        height: "90px",
      }}
    >
      {/* Track info */}
      <div className="flex items-center gap-3 w-1/4 min-w-0">
        {currentTrack ? (
          <>
            <div className="relative w-14 h-14 rounded overflow-hidden flex-shrink-0 shadow-lg">
              <Image
                src={currentTrack.cover}
                alt={currentTrack.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="min-w-0">
              <p className="text-white text-sm font-semibold truncate">{currentTrack.title}</p>
              <p className="text-xs truncate" style={{ color: "var(--text-muted)" }}>
                {currentTrack.artist}
              </p>
            </div>
            <button
              onClick={() => toggleLike(currentTrack.id)}
              className="ml-2 text-lg flex-shrink-0 transition-transform hover:scale-110"
              style={{ color: isLiked(currentTrack.id) ? "var(--accent)" : "var(--text-muted)" }}
            >
              {isLiked(currentTrack.id) ? "♥" : "♡"}
            </button>
          </>
        ) : (
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            No track playing
          </p>
        )}
      </div>

      {/* Controls */}
      <div className="flex flex-col items-center gap-2 w-2/4">
        <div className="flex items-center gap-6">
          <button
            onClick={prevTrack}
            className="text-xl transition-opacity hover:opacity-70"
            style={{ color: "var(--text-muted)" }}
          >
            ⏮
          </button>
          <button
            onClick={togglePlay}
            className="w-8 h-8 rounded-full flex items-center justify-center text-black font-bold text-sm transition-transform hover:scale-105"
            style={{ backgroundColor: "#ffffff" }}
          >
            {isPlaying ? "⏸" : "▶"}
          </button>
          <button
            onClick={nextTrack}
            className="text-xl transition-opacity hover:opacity-70"
            style={{ color: "var(--text-muted)" }}
          >
            ⏭
          </button>
        </div>
        {/* Progress bar */}
        <div className="flex items-center gap-2 w-full max-w-md">
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            {currentTrack
              ? formatTime((progress / 100) * currentTrack.durationSec)
              : "0:00"}
          </span>
          <div className="flex-1 h-1 rounded-full relative group cursor-pointer" style={{ backgroundColor: "#535353" }}>
            <div
              className="h-full rounded-full transition-all"
              style={{ width: `${progress}%`, backgroundColor: "var(--accent)" }}
            />
            <input
              type="range"
              min={0}
              max={100}
              value={progress}
              onChange={(e) => setProgress(Number(e.target.value))}
              className="absolute inset-0 opacity-0 cursor-pointer w-full"
            />
          </div>
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            {currentTrack?.duration ?? "0:00"}
          </span>
        </div>
      </div>

      {/* Volume */}
      <div className="flex items-center gap-2 w-1/4 justify-end">
        <span className="text-sm" style={{ color: "var(--text-muted)" }}>🔊</span>
        <div className="w-24 h-1 rounded-full relative" style={{ backgroundColor: "#535353" }}>
          <div
            className="h-full rounded-full"
            style={{ width: `${volume}%`, backgroundColor: "var(--accent)" }}
          />
          <input
            type="range"
            min={0}
            max={100}
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="absolute inset-0 opacity-0 cursor-pointer w-full"
          />
        </div>
      </div>
    </footer>
  );
}

function formatTime(sec: number) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}
