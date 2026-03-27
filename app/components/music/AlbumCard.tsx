"use client";
import Image from "next/image";
import Link from "next/link";
import { Album } from "@/data/tracks";
import { usePlayer } from "@/app/context/PlayerContext";

interface AlbumCardProps {
  album: Album;
}

export function AlbumCard({ album }: AlbumCardProps) {
  const { playTrack, addToQueue } = usePlayer();

  const handlePlay = (e: React.MouseEvent) => {
    e.preventDefault();
    if (album.tracks.length > 0) {
      album.tracks.forEach((t) => addToQueue(t));
      playTrack(album.tracks[0]);
    }
  };

  return (
    <Link href={`/album/${album.id}`}>
      <div
        className="p-4 rounded-lg cursor-pointer transition-all group relative"
        style={{ backgroundColor: "var(--bg-card)" }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.backgroundColor = "var(--bg-hover)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.backgroundColor = "var(--bg-card)";
        }}
      >
        <div className="relative w-full aspect-square rounded-md overflow-hidden shadow-lg mb-4">
          <Image
            src={album.cover}
            alt={album.title}
            fill
            className="object-cover"
          />
          {/* Play button overlay */}
          <button
            onClick={handlePlay}
            className="absolute bottom-2 right-2 w-10 h-10 rounded-full flex items-center justify-center text-black font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0"
            style={{ backgroundColor: "var(--accent)" }}
          >
            ▶
          </button>
        </div>
        <p className="font-semibold text-sm truncate" style={{ color: "var(--text)" }}>
          {album.title}
        </p>
        <p className="text-xs mt-1 truncate" style={{ color: "var(--text-muted)" }}>
          {album.year} • {album.artist}
        </p>
      </div>
    </Link>
  );
}
