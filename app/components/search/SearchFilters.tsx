"use client";
import { useEffect, useState } from "react";

interface SearchFiltersProps {
  onFilterChange: (filters: Filters) => void;
}

interface Filters {
  query: string;
  genre: string;
  year: string;
}

const genres = ["All", "Pop", "Hip-Hop", "R&B", "Indie", "Alternative", "Rock"];
const years = ["All", "2023", "2022", "2021", "2020", "2019", "2018", "2017"];

export function SearchFilters({ onFilterChange }: SearchFiltersProps) {
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("All");
  const [year, setYear] = useState("All");

  useEffect(() => {
    onFilterChange({ query, genre, year });
  }, [query, genre, year]);

  const selectStyle = {
    backgroundColor: "var(--bg-hover)",
    color: "var(--text)",
    border: "1px solid #535353",
  };

  return (
    <div className="flex flex-wrap items-center gap-3 mb-6">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search tracks or artists..."
        className="flex-1 min-w-48 px-4 py-2 rounded-full text-sm outline-none transition-all"
        style={{
          backgroundColor: "var(--bg-hover)",
          color: "var(--text)",
          border: "1px solid #535353",
        }}
      />
      <select
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        className="px-4 py-2 rounded-full text-sm outline-none cursor-pointer"
        style={selectStyle}
      >
        {genres.map((g) => (
          <option key={g} value={g}>{g}</option>
        ))}
      </select>
      <select
        value={year}
        onChange={(e) => setYear(e.target.value)}
        className="px-4 py-2 rounded-full text-sm outline-none cursor-pointer"
        style={selectStyle}
      >
        {years.map((y) => (
          <option key={y} value={y}>{y}</option>
        ))}
      </select>
    </div>
  );
}
