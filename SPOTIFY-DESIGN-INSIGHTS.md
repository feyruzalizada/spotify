# Spotify Design System — Learning Insights

## Design System Architecture

Building a Spotify-caliber UI required thinking in tokens first. Every color, spacing unit, and transition is defined as a CSS custom property in `globals.css` rather than hardcoded inline. This makes theme switching instantaneous — the entire palette flips by swapping one `data-theme` attribute on `<html>`.

## Utility-First vs Component Styling

Tailwind handles layout, spacing, and responsive breakpoints. CSS custom properties handle semantics — `var(--accent)`, `var(--bg-card)`, `var(--text-muted)`. The two layers never fight each other. Tailwind positions things; design tokens color them.

## Interactive Design Patterns

The music player uses `setInterval` for progress simulation, clearing and restarting on play/pause to avoid drift. Volume and progress inputs are transparent range sliders overlaid on styled div tracks — a common pattern for custom-looking controls without a JS library.

## Context as State Architecture

Two contexts keep global state clean: `PlayerContext` owns all playback logic (current track, queue, liked songs, volume, progress), and `ThemeContext` owns appearance. Components only subscribe to what they need, keeping re-renders minimal.

## Component Organization

Following the Airbnb project's domain-based folder structure made scaling straightforward: `music/` for track and album cards, `player/` for the bottom bar, `layouts/` for sidebar and topbar, `search/` for filters, `shared/` for Toast and ErrorBoundary.
