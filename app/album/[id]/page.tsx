import Image from "next/image";
import { Sidebar } from "@/app/components/layouts/Sidebar";
import { TopBar } from "@/app/components/layouts/TopBar";
import { MusicPlayer } from "@/app/components/player/MusicPlayer";
import { TrackCard } from "@/app/components/music/TrackCard";
import { featuredAlbums } from "@/data/tracks";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const album = featuredAlbums.find((a) => a.id === id);

  if (!album) {
    return (
      <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
        <h1 className="text-4xl font-bold">Album not found</h1>
      </div>
    );
  }

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
              background: "linear-gradient(135deg, #1a3a2a 0%, #121212 100%)",
            }}
          >
            <div className="relative w-52 h-52 rounded-lg overflow-hidden shadow-2xl flex-shrink-0">
              <Image src={album.cover} alt={album.title} fill className="object-cover" />
            </div>
            <div>
              <p className="text-white text-sm font-semibold uppercase tracking-widest mb-2">
                Album
              </p>
              <h1 className="text-white text-5xl font-black mb-2">{album.title}</h1>
              <p className="text-white font-semibold">{album.artist}</p>
              <p style={{ color: "var(--text-muted)" }} className="mt-1 text-sm">
                {album.year} • {album.tracks.length} songs • {album.genre}
              </p>
            </div>
          </div>

          <div className="px-8 pt-6">
            {/* Track table header */}
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

            {album.tracks.map((track, i) => (
              <TrackCard key={track.id} track={track} index={i + 1} showIndex />
            ))}
          </div>
        </main>
      </div>
      <MusicPlayer />
    </div>
  );
};

export default Page;
