import { prisma } from "@/lib/prisma";
import Image from "next/image";

export default async function DesignGallery() {
  const designs = await prisma.portfolio.findMany({ orderBy: { order: 'asc' } });

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      {/* Masonry Gallery */}
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {designs.map((design) => (
          <article
            key={design.id}
            className="group mb-5 break-inside-avoid animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            <div
              className={`glass-card relative overflow-hidden ${design.aspect}`}
            >
              <span className={`absolute left-3 top-3 z-10 rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-md ${design.type === 'website' ? 'border-cyan-300/30 bg-cyan-950/80 text-cyan-200' : 'border-fuchsia-300/30 bg-fuchsia-950/80 text-fuchsia-200'}`}>
                {design.type === 'website' ? 'Website' : 'Desain / Foto'}
              </span>
              <Image
                src={design.image}
                alt={design.title}
                fill
                unoptimized
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#05050a]/90 via-[#05050a]/35 to-transparent p-4 opacity-100 transition-opacity duration-500 sm:p-6 sm:opacity-0 sm:group-hover:opacity-100">
                <div>
                  <p className="text-xs uppercase tracking-widest text-cyan-400">
                    {design.category}
                  </p>

                  <h3 className="mt-1 font-serif text-lg text-white">
                    {design.title}
                  </h3>
                  {design.description && <p className="mt-2 text-sm text-gray-300">{design.description}</p>}
                  {design.type === 'website' && design.demoUrl && <a href={design.demoUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex rounded-lg bg-cyan-400/20 px-4 py-2 text-sm font-medium text-cyan-200 hover:bg-cyan-400/30">Lihat Website<span className="sr-only"> {design.title}</span></a>}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>


    </section>
  );
}