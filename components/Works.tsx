"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { CATEGORIES, works, type Category } from "@/lib/works-data";

export default function Works() {
  const [active, setActive] = useState<Category>("ALL");
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const fit = () => {
      const el = headingRef.current;
      if (!el) return;
      el.style.fontSize = "100px";
      el.style.marginLeft = "0px";
      el.style.width = "fit-content";
      const textWidth = el.offsetWidth;
      el.style.width = "";
      const containerWidth = el.parentElement!.offsetWidth;
      const ratio = containerWidth / textWidth;
      const multiplier = 1.15;
      el.style.fontSize = `${100 * ratio * multiplier}px`;
      const scaledWidth = textWidth * ratio * multiplier;
      const overflow = scaledWidth - containerWidth;
      el.style.marginLeft = `-${overflow / 2}px`;
    };
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  const filtered =
    active === "ALL" ? works : works.filter((w) => w.category === active);

  return (
    <section id="works" className="bg-white pt-24 pb-28">
      {/* Sticky + clipping wrapper */}
      <div className="sticky top-24 z-40 overflow-hidden mb-6">
        <h2
          ref={headingRef}
          className="font-black uppercase leading-none text-[#E5F200] whitespace-nowrap block"
        >
          Our Works
        </h2>
      </div>
      <div className="px-8 md:px-16">
        <div className="flex items-center justify-end mb-14">
          <p className="text-xs tracking-[0.15em] text-gray-400 uppercase">
            {filtered.length} projects
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-14">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 text-xs tracking-[0.15em] uppercase border transition-colors cursor-pointer ${
                active === cat
                  ? "bg-[#E5F200] text-black border-[#E5F200]"
                  : "bg-black text-white border-black hover:bg-[#E5F200] hover:text-black hover:border-[#E5F200]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {filtered.map((work) => (
            <Link key={work.id} href={`/works/${work.slug}`} className="group cursor-pointer">
              {/* Image / placeholder */}
              <div className={`${!(work.thumbnailImages ?? work.thumbnail ?? work.images[0]) ? work.bg : ""} aspect-[4/3] relative overflow-hidden mb-4`}>
                {work.thumbnailImages ? (
                  <div className="absolute inset-0 flex">
                    {work.thumbnailImages.map((src, i) => (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img key={i} src={src} alt={`${work.title} ${i + 1}`} className="w-1/2 h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ))}
                  </div>
                ) : (work.thumbnail ?? work.images[0]) ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={work.thumbnail ?? work.images[0]}
                    alt={work.title}
                    className={`absolute inset-0 w-full h-full ${work.thumbnailFit === "contain" ? "object-contain" : "object-cover group-hover:scale-105 transition-transform duration-500"}`}
                  />
                ) : (
                  <>
                    {/* Year watermark */}
                    <div className="absolute inset-0 flex items-end p-5">
                      <p className="text-white/20 text-6xl font-black uppercase leading-none tracking-tight group-hover:text-white/35 transition-colors duration-300">
                        {work.year}
                      </p>
                    </div>
                  </>
                )}
                {/* Category badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[9px] tracking-[0.15em] uppercase bg-[#E5F200] text-black px-2 py-1 font-bold">
                    {work.category}
                  </span>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#E5F200]/0 group-hover:bg-[#E5F200]/10 transition-all duration-500" />
              </div>

              {/* Info */}
              <div>
                <p className="text-[10px] tracking-[0.15em] uppercase text-gray-400 mb-1.5">
                  {work.client} · {work.scope}
                </p>
                <h3 className="text-sm font-bold leading-snug group-hover:text-gray-500 transition-colors">
                  {work.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
