"use client";
import React, { useState, useMemo } from "react";
import { TrackCard } from "./TrackCard";
import { SearchFilters } from "../search/SearchFilters";
import { tracks } from "@/data/tracks";

interface Filters {
  query: string;
  genre: string;
  year: string;
}

export function TrackList() {
  const [filters, setFilters] = useState<Filters>({
    query: "",
    genre: "All",
    year: "All",
  });

  const filtered = useMemo(() => {
    return tracks.filter((t) => {
      const matchQuery =
        t.title.toLowerCase().includes(filters.query.toLowerCase()) ||
        t.artist.toLowerCase().includes(filters.query.toLowerCase());
      const matchGenre = filters.genre === "All" || t.genre === filters.genre;
      const matchYear =
        filters.year === "All" || t.year.toString() === filters.year;
      return matchQuery && matchGenre && matchYear;
    });
  }, [filters]);

  return (
    <div>
      <SearchFilters onFilterChange={setFilters} />

      {/* Table header */}
      <div
        className="flex items-center gap-4 px-4 py-2 mb-2 border-b text-xs uppercase tracking-widest font-bold"
        style={{ color: "var(--text-muted)", borderColor: "#282828" }}
      >
        <div className="w-6">#</div>
        <div className="w-10" />
        <div className="flex-1">Title</div>
        <div className="hidden md:block w-36">Album</div>
        <div className="hidden lg:block w-16 text-right">Plays</div>
        <div className="w-8" />
        <div className="w-10 text-right">⏱</div>
      </div>

      <div className="flex flex-col">
        {filtered.length === 0 ? (
          <p className="text-center py-10" style={{ color: "var(--text-muted)" }}>
            No tracks found
          </p>
        ) : (
          filtered.map((track, i) => (
            <TrackCard
              key={track.id}
              track={track}
              index={i + 1}
              showIndex
            />
          ))
        )}
      </div>
    </div>
  );
}

export default React.memo(TrackList);
