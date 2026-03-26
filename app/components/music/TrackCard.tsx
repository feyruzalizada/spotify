"use client";
import Image from "next/image";
import { Track } from "@/data/tracks";
import { usePlayer } from "@/app/context/PlayerContext";

interface TrackCardProps {
  track: Track;
  index?: number;
  showIndex?: boolean;
}

function formatPlays(n: number) {
  if (n >= 1_000_000_000) return `${(n / 1_000_000_000).toFixed(1)}B`;
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(0)}M`;
  return n.toLocaleString();
}

export function TrackCard({ track, index, showIndex }: TrackCardProps) {
  const { playTrack, currentTrack, isPlaying, addToQueue, isLiked, toggleLike } = usePlayer();
  const isActive = currentTrack?.id === track.id;

  return (
    <div
      className="flex items-center gap-4 px-4 py-2 rounded-md group transition-all cursor-pointer"
      style={{
        backgroundColor: isActive ? "var(--bg-hover)" : "transparent",
      }}
      onMouseEnter={(e) => {
        if (!isActive) (e.currentTarget as HTMLDivElement).style.backgroundColor = "var(--bg-hover)";
      }}
      onMouseLeave={(e) => {
        if (!isActive) (e.currentTarget as HTMLDivElement).style.backgroundColor = "transparent";
      }}
      onClick={() => {
        playTrack(track);
        addToQueue(track);
      }}
    >
      {/* Index / Play icon */}
      <div className="w-6 text-center flex-shrink-0">
        {isActive && isPlaying ? (
          <div className="playing-indicator flex items-end gap-0.5 h-4">
            <span /><span /><span /><span />
          </div>
        ) : (
          <span
            className="text-sm group-hover:hidden"
            style={{ color: isActive ? "var(--accent)" : "var(--text-muted)" }}
          >
            {showIndex ? index : "♫"}
          </span>
        )}
        <span
          className="text-white text-sm hidden group-hover:inline"
        >
          ▶
        </span>
      </div>

      {/* Cover */}
      <div className="relative w-10 h-10 flex-shrink-0 rounded overflow-hidden">
        <Image src={track.cover} alt={track.title} fill className="object-cover" />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p
          className="text-sm font-medium truncate"
          style={{ color: isActive ? "var(--accent)" : "var(--text)" }}
        >
          {track.title}
        </p>
        <p className="text-xs truncate" style={{ color: "var(--text-muted)" }}>
          {track.artist}
        </p>
      </div>

      {/* Album */}
      <p className="text-sm hidden md:block truncate w-36" style={{ color: "var(--text-muted)" }}>
        {track.album}
      </p>

      {/* Plays */}
      <p className="text-sm w-16 text-right hidden lg:block" style={{ color: "var(--text-muted)" }}>
        {formatPlays(track.plays)}
      </p>

      {/* Like */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleLike(track.id);
        }}
        className="w-8 text-center text-sm flex-shrink-0 transition-transform hover:scale-110 opacity-0 group-hover:opacity-100"
        style={{ color: isLiked(track.id) ? "var(--accent)" : "var(--text-muted)" }}
      >
        {isLiked(track.id) ? "♥" : "♡"}
      </button>

      {/* Duration */}
      <p className="text-sm w-10 text-right flex-shrink-0" style={{ color: "var(--text-muted)" }}>
        {track.duration}
      </p>
    </div>
  );
}
