const playlists = [
  {
    id: "18khva2AzYg9gczkDLRmZe",
    title: "Bob Marley",
    subtitle: "Reggae Classics",
    color: "from-yellow-500/20 to-green-600/10",
    glow: "rgba(234,179,8,0.3)",
  },
  {
    id: "4xscepJB6tPFswikqLg52R",
    title: "Alpha Blondy",
    subtitle: "African Reggae",
    color: "from-orange-500/20 to-red-600/10",
    glow: "rgba(249,115,22,0.3)",
  },
];

export default function MusicPlayer() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-20 relative z-10 md:pb-32">
      <div className="mb-10 animate-fade-up text-center md:mb-14 md:text-left">
        <h2 className="font-serif text-3xl font-bold md:text-4xl">Music</h2>
        <p className="mt-3 text-sm text-gray-400">
          Reggae vibes yang menemani hari-hari.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {playlists.map((pl, i) => (
          <div
            key={pl.id}
            className="animate-fade-up glass-card overflow-hidden"
            style={{ animationDelay: `${i * 150}ms` }}
          >
            {/* Header card */}
            <div
              className={`flex items-center gap-4 bg-gradient-to-r ${pl.color} px-5 py-4`}
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-2xl shadow-lg"
                style={{ boxShadow: `0 0 20px ${pl.glow}` }}
              >
                🎵
              </div>
              <div>
                <p className="font-serif text-lg font-bold text-white">
                  {pl.title}
                </p>
                <p className="text-xs text-gray-400">{pl.subtitle}</p>
              </div>
            </div>

            {/* Spotify Embed */}
            <iframe
              src={`https://open.spotify.com/embed/playlist/${pl.id}?utm_source=generator&theme=0`}
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="border-0"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
