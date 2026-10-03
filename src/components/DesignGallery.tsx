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
    <section className="mx-auto max-w-6xl px-6 py-12">
      {/* Masonry Gallery */}
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {designs.map((design) => (
          <article
            key={design.title}
            className="group mb-5 break-inside-avoid animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            <div
              className={`glass-card relative overflow-hidden ${design.aspect}`}
            >
              <Image
                src={design.image}
                alt={design.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#05050a]/80 via-[#05050a]/30 to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div>
                  <p className="text-xs uppercase tracking-widest text-cyan-400">
                    {design.category}
                  </p>

                  <h3 className="mt-1 font-serif text-lg text-white">
                    {design.title}
                  </h3>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 flex justify-center animate-fade-up animation-delay-300">
        <button className="glass-button rounded-lg px-8 py-3 text-sm font-medium text-white">
          View More
        </button>
      </div>
    </section>
  );
}