export type Track = {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  durationSec: number;
  cover: string;
  genre: string;
  year: number;
  plays: number;
};

export type Album = {
  id: string;
  title: string;
  artist: string;
  cover: string;
  year: number;
  genre: string;
  tracks: Track[];
};

export const tracks: Track[] = [
  {
    id: "1",
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    duration: "3:20",
    durationSec: 200,
    cover: "/img2.avif",
    genre: "Pop",
    year: 2020,
    plays: 3500000000,
  },
  {
    id: "2",
    title: "Shape of You",
    artist: "Ed Sheeran",
    album: "÷ (Divide)",
    duration: "3:53",
    durationSec: 233,
    cover: "/img3.avif",
    genre: "Pop",
    year: 2017,
    plays: 3200000000,
  },
  {
    id: "3",
    title: "Sunflower",
    artist: "Post Malone",
    album: "Hollywood's Bleeding",
    duration: "2:38",
    durationSec: 158,
    cover: "/img5.avif",
    genre: "Hip-Hop",
    year: 2018,
    plays: 2900000000,
  },
  {
    id: "4",
    title: "Bad Guy",
    artist: "Billie Eilish",
    album: "When We All Fall Asleep",
    duration: "3:14",
    durationSec: 194,
    cover: "/img2.avif",
    genre: "Alternative",
    year: 2019,
    plays: 2700000000,
  },
  {
    id: "5",
    title: "Watermelon Sugar",
    artist: "Harry Styles",
    album: "Fine Line",
    duration: "2:54",
    durationSec: 174,
    cover: "/img3.avif",
    genre: "Pop",
    year: 2019,
    plays: 2400000000,
  },
  {
    id: "6",
    title: "Levitating",
    artist: "Dua Lipa",
    album: "Future Nostalgia",
    duration: "3:23",
    durationSec: 203,
    cover: "/img5.avif",
    genre: "Pop",
    year: 2020,
    plays: 2200000000,
  },
  {
    id: "7",
    title: "Stay",
    artist: "The Kid LAROI & Justin Bieber",
    album: "F*CK LOVE 3",
    duration: "2:21",
    durationSec: 141,
    cover: "/img2.avif",
    genre: "Pop",
    year: 2021,
    plays: 2100000000,
  },
  {
    id: "8",
    title: "Peaches",
    artist: "Justin Bieber",
    album: "Justice",
    duration: "3:18",
    durationSec: 198,
    cover: "/img3.avif",
    genre: "R&B",
    year: 2021,
    plays: 1900000000,
  },
  {
    id: "9",
    title: "Heat Waves",
    artist: "Glass Animals",
    album: "Dreamland",
    duration: "3:59",
    durationSec: 239,
    cover: "/img5.avif",
    genre: "Indie",
    year: 2020,
    plays: 1800000000,
  },
  {
    id: "10",
    title: "As It Was",
    artist: "Harry Styles",
    album: "Harry's House",
    duration: "2:37",
    durationSec: 157,
    cover: "/img2.avif",
    genre: "Pop",
    year: 2022,
    plays: 1700000000,
  },
  {
    id: "11",
    title: "Anti-Hero",
    artist: "Taylor Swift",
    album: "Midnights",
    duration: "3:21",
    durationSec: 201,
    cover: "/img3.avif",
    genre: "Pop",
    year: 2022,
    plays: 1600000000,
  },
  {
    id: "12",
    title: "Flowers",
    artist: "Miley Cyrus",
    album: "Endless Summer Vacation",
    duration: "3:20",
    durationSec: 200,
    cover: "/img5.avif",
    genre: "Pop",
    year: 2023,
    plays: 1500000000,
  },
];

export const featuredAlbums: Album[] = [
  {
    id: "a1",
    title: "After Hours",
    artist: "The Weeknd",
    cover: "/img2.avif",
    year: 2020,
    genre: "Pop",
    tracks: tracks.slice(0, 3),
  },
  {
    id: "a2",
    title: "÷ Divide",
    artist: "Ed Sheeran",
    cover: "/img3.avif",
    year: 2017,
    genre: "Pop",
    tracks: tracks.slice(1, 4),
  },
  {
    id: "a3",
    title: "Future Nostalgia",
    artist: "Dua Lipa",
    cover: "/img5.avif",
    year: 2020,
    genre: "Pop",
    tracks: tracks.slice(4, 7),
  },
  {
    id: "a4",
    title: "Hollywood's Bleeding",
    artist: "Post Malone",
    cover: "/img2.avif",
    year: 2019,
    genre: "Hip-Hop",
    tracks: tracks.slice(2, 5),
  },
  {
    id: "a5",
    title: "Midnights",
    artist: "Taylor Swift",
    cover: "/img3.avif",
    year: 2022,
    genre: "Pop",
    tracks: tracks.slice(9, 12),
  },
  {
    id: "a6",
    title: "Dreamland",
    artist: "Glass Animals",
    cover: "/img5.avif",
    year: 2020,
    genre: "Indie",
    tracks: tracks.slice(7, 10),
  },
];

export const playlists = [
  { id: "p1", title: "Today's Top Hits", cover: "/img2.avif", trackCount: 50 },
  { id: "p2", title: "Chill Vibes", cover: "/img3.avif", trackCount: 32 },
  { id: "p3", title: "Workout Beats", cover: "/img5.avif", trackCount: 28 },
  { id: "p4", title: "Late Night Drive", cover: "/img2.avif", trackCount: 20 },
  { id: "p5", title: "Throwback Hits", cover: "/img3.avif", trackCount: 45 },
  { id: "p6", title: "Study Focus", cover: "/img5.avif", trackCount: 60 },
];
