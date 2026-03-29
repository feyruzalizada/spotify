# Welcome to 05 Styling
***

## Task
Build a Spotify-inspired music platform design system using Next.js, Tailwind CSS v4, and CSS custom properties. The challenge is to implement a cohesive design system with dark/light theming, a persistent music player, interactive track browsing, and Spotify's signature visual language — all while keeping components modular, accessible, and performant.

## Description
The project is structured as a Next.js 16 application with a sidebar navigation layout mirroring Spotify's desktop UI. Styling is handled through Tailwind CSS v4 utility classes combined with CSS custom properties (design tokens) defined in `globals.css`, which allows seamless theme switching between dark and light modes without a full re-render. State is managed via two React Context providers: `ThemeContext` for appearance and `PlayerContext` for playback, queue management, and liked tracks. Components are organized by domain — `music/`, `player/`, `layouts/`, `search/`, `shared/` — following the same pattern established in the Airbnb project. The music player is fixed at the bottom of the viewport and stays persistent across all pages. Track data lives in `data/tracks.ts` and is consumed by filterable list and card components.

## Installation

```
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

```
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
```

The app includes four main pages accessible from the sidebar:

- **Home** — Greeting banner, quick-pick playlist grid, featured albums, and full track list with filters
- **Search** — Live search across titles/artists/albums; genre category tiles when idle
- **Library** — All playlists and albums in one place
- **Liked Songs** — Tracks marked with ♥ from the player or track list

Click any track row or album play button to start playback. Use the bottom player bar to pause, skip, seek, and adjust volume.

### The Core Team


<span><i>Made at <a href='https://qwasar.io'>Qwasar SV -- Software Engineering School</a></i></span>
<span><img alt='Qwasar SV -- Software Engineering School&#39;s Logo' src='https://storage.googleapis.com/qwasar-public/qwasar-logo_50x50.png' width='20px' /></span>
