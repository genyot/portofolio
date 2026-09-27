import Image from "next/image";

const designs = [
  {
    title: "Typography 01",
    category: "Typography",
    image: "/images/typography/typography%2001.jpeg",
    aspect: "aspect-[4/5]",
  },
  {
    title: "Typography 02",
    category: "Typography",
    image: "/images/typography/typography%2002.jpeg",
    aspect: "aspect-[3/4]",
  },
  {
    title: "Typography 03",
    category: "Typography",
    image: "/images/typography/typography%2003.jpeg",
    aspect: "aspect-square",
  },
  {
    title: "Typography 04",
    category: "Typography",
    image: "/images/typography/typography%2004.jpeg",
    aspect: "aspect-[4/5]",
  },
  {
    title: "Typography 05",
    category: "Typography",
    image: "/images/typography/typography%2005.jpeg",
    aspect: "aspect-[3/4]",
  },
  {
    title: "Typography 06",
    category: "Typography",
    image: "/images/typography/typography%2006.jpeg",
    aspect: "aspect-[4/5]",
  },
];

export default function DesignGallery() {
  return (
    <section id="design" className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-32">

        {/* Heading */}
        <div className="mb-16">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Typography Works
          </p>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
              Eksplorasi bentuk,
              <br />
              huruf, dan visual.
            </h2>

            <p className="max-w-sm text-sm leading-6 text-zinc-500">
              Kumpulan karya tipografi dan eksplorasi visual yang saya buat
              sebagai bagian dari proses kreatif.
            </p>
          </div>
        </div>

        {/* Masonry Gallery */}
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {designs.map((design) => (
            <article
              key={design.title}
              className="group mb-5 break-inside-avoid"
            >
              <div
                className={`relative overflow-hidden rounded-2xl bg-zinc-900 ${design.aspect}`}
              >
                <Image
                  src={design.image}
                  alt={design.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-5 opacity-0 transition duration-300 group-hover:opacity-100">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-zinc-400">
                      {design.category}
                    </p>

                    <h3 className="mt-1 text-lg font-medium text-white">
                      {design.title}
                    </h3>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}