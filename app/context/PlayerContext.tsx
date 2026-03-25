"use client";

import { createContext, useContext, useState, useRef } from "react";
import { Track } from "@/data/tracks";

interface PlayerContextType {
  currentTrack: Track | null;
  isPlaying: boolean;
  queue: Track[];
  volume: number;
  progress: number;
  playTrack: (track: Track) => void;
  togglePlay: () => void;
  nextTrack: () => void;
  prevTrack: () => void;
  setVolume: (v: number) => void;
  setProgress: (v: number) => void;
  addToQueue: (track: Track) => void;
  likedTracks: string[];
  toggleLike: (id: string) => void;
  isLiked: (id: string) => boolean;
}

const PlayerContext = createContext<PlayerContextType | null>(null);

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [queue, setQueue] = useState<Track[]>([]);
  const [volume, setVolumeState] = useState(70);
  const [progress, setProgressState] = useState(0);
  const [likedTracks, setLikedTracks] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("likedTracks");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startProgress = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setProgressState((prev) => {
        if (prev >= 100) {
          clearInterval(intervalRef.current!);
          return 0;
        }
        return prev + 0.5;
      });
    }, 200);
  };

  const playTrack = (track: Track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
    setProgressState(0);
    startProgress();
  };

  const togglePlay = () => {
    setIsPlaying((prev) => {
      if (!prev) {
        startProgress();
      } else {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
      return !prev;
    });
  };

  const nextTrack = () => {
    if (!currentTrack || queue.length === 0) return;
    const idx = queue.findIndex((t) => t.id === currentTrack.id);
    const next = queue[(idx + 1) % queue.length];
    playTrack(next);
  };

  const prevTrack = () => {
    if (!currentTrack || queue.length === 0) return;
    const idx = queue.findIndex((t) => t.id === currentTrack.id);
    const prev = queue[(idx - 1 + queue.length) % queue.length];
    playTrack(prev);
  };

  const setVolume = (v: number) => setVolumeState(v);
  const setProgress = (v: number) => setProgressState(v);

  const addToQueue = (track: Track) => {
    setQueue((prev) =>
      prev.find((t) => t.id === track.id) ? prev : [...prev, track]
    );
  };

  const toggleLike = (id: string) => {
    setLikedTracks((prev) => {
      const updated = prev.includes(id)
        ? prev.filter((t) => t !== id)
        : [...prev, id];
      localStorage.setItem("likedTracks", JSON.stringify(updated));
      return updated;
    });
  };

  const isLiked = (id: string) => likedTracks.includes(id);

  return (
    <PlayerContext.Provider
      value={{
        currentTrack,
        isPlaying,
        queue,
        volume,
        progress,
        playTrack,
        togglePlay,
        nextTrack,
        prevTrack,
        setVolume,
        setProgress,
        addToQueue,
        likedTracks,
        toggleLike,
        isLiked,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  const context = useContext(PlayerContext);
  if (!context) throw new Error("usePlayer must be used inside PlayerProvider");
  return context;
}
