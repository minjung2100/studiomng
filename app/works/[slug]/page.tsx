import Nav from "@/components/Nav";
import Contact from "@/components/Contact";
import Link from "next/link";
import { getWorkBySlug, works } from "@/lib/works-data";
import { notFound } from "next/navigation";

function ImageGrid({ images, alt, columns = 2, imageGap }: { images: string[]; alt: string; columns?: 2 | 3; imageGap?: string }) {
  const size = Math.ceil(images.length / columns);
  const cols = Array.from({ length: columns }, (_, c) =>
    images.slice(c * size, c * size + size)
  );
  const alignments = columns === 3
    ? ["items-start", "items-center", "items-end"]
    : ["items-start", "items-end"];

  return (
    <div className="flex flex-col md:flex-row gap-4 items-start">
      {cols.map((col, c) => (
        <div key={c} className={`w-full md:flex-1 flex flex-col gap-4 ${columns === 3 ? alignments[c] : ""}`}>
          {col.map((src, i) => (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              key={i}
              src={src}
              alt={`${alt} ${c * size + i + 1}`}
              style={{ width: columns === 3 ? "85%" : "100%" }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }));
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) notFound();

  const placeholderCount = 4;

  return (
    <>
      <Nav />
      <main className="bg-white min-h-screen">
        {/* Back link */}
        <div className="px-8 md:px-16 pt-32 pb-10">
          <Link
            href="/#works"
            className="inline-block text-[11px] tracking-[0.2em] uppercase text-gray-400 hover:text-black transition-colors"
          >
            ← Our Works
          </Link>
        </div>

        {/* Sticky yellow band — direct child of main so it sticks the full page */}
        <div className="sticky top-24 z-30 bg-[#E5F200] mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between px-8 md:px-16 py-6 md:py-8 gap-3 md:gap-8">
            <h1 className="text-2xl md:text-5xl font-black leading-tight text-black">
              {work.title}
            </h1>
            <div className="flex flex-col md:items-end gap-1 md:text-right md:shrink-0">
              <p className="text-[11px] tracking-[0.2em] uppercase text-black/50">
                {work.category}
              </p>
              <p className="text-[18px] md:text-[22px] font-bold text-black">{work.client}</p>
              <p className="text-[13px] text-black/60">{work.year}</p>
            </div>
          </div>
        </div>

        {/* Description */}
        {work.description && (
          <div className="px-8 md:px-16 mb-12 flex flex-col gap-5">
            {work.description.split("\n\n").map((para, i) => (
              <p key={i} className="text-[12px] text-gray-400 leading-relaxed whitespace-pre-line">
                {para}
              </p>
            ))}
          </div>
        )}

        {/* Image gallery */}
        <section className="px-8 md:px-16 pb-32 flex flex-col gap-4">
          {/* Full-width images before grid */}
          {work.fullWidthFirst && work.fullWidthImages && work.fullWidthImages.map((src, i) => (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img key={i} src={src} alt={`${work.title} full ${i + 1}`} className="w-full" />
          ))}
          {work.galleryGroups ? (
            <div className="flex flex-col gap-16">
              {work.galleryGroups.map((group, gi) => {
                const colAlignments = group.columns.length === 3
                  ? ["items-start", "items-center", "items-end"]
                  : ["items-start", "items-end"];
                return (
                  <div key={gi} className="flex flex-col md:flex-row gap-4 items-start">
                    {group.columns.map((col, ci) => (
                      <div key={ci} className={`w-full md:flex-1 flex flex-col gap-4 ${colAlignments[ci] ?? "items-start"}`}>
                        {col.map((src, ii) => (
                          /* eslint-disable-next-line @next/next/no-img-element */
                          <img
                            key={ii}
                            src={src}
                            alt={`${work.title} ${gi + 1}-${ci + 1}-${ii + 1}`}
                            style={{ width: "85%" }}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          ) : work.sections ? (
            <div className="flex flex-col gap-16">
              {work.sections.map((section) => (
                <div key={section.label}>
                  <p className="text-[12px] font-bold text-black mb-6">{section.label}</p>
                  <ImageGrid images={section.images} alt={`${work.title} ${section.label}`} />
                </div>
              ))}
            </div>
          ) : work.images.length > 0 ? (
            <ImageGrid images={work.images} alt={work.title} columns={work.galleryColumns} imageGap={work.galleryImageGap} />
          ) : !work.fullWidthImages ? (
            <div className="flex gap-4">
              <div className="flex-1 flex flex-col gap-4">
                {Array.from({ length: Math.ceil(placeholderCount / 2) }).map((_, i) => (
                  <div key={i} className={`${work.bg} aspect-[4/3] flex items-center justify-center`}>
                    <p className="text-white/20 text-xs tracking-[0.2em] uppercase">Image {i * 2 + 1}</p>
                  </div>
                ))}
              </div>
              <div className="flex-1 flex flex-col gap-4">
                {Array.from({ length: Math.floor(placeholderCount / 2) }).map((_, i) => (
                  <div key={i} className={`${work.bg} aspect-[4/3] flex items-center justify-center`}>
                    <p className="text-white/20 text-xs tracking-[0.2em] uppercase">Image {i * 2 + 2}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {/* Full-width images — before grid when fullWidthFirst, otherwise after */}
          {!work.fullWidthFirst && work.fullWidthImages && work.fullWidthImages.map((src, i) => (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img key={i} src={src} alt={`${work.title} full ${i + 1}`} className="w-full" />
          ))}
        </section>
        <Contact />
      </main>
    </>
  );
}
