"use client";

import { useState, useRef, useEffect } from "react";

const CATEGORIES = [
  "ALL",
  "POPUP STORE",
  "EVENT",
  "PACKAGE",
  "WEB PAGE",
  "VMD",
  "FESTIVAL",
] as const;
type Category = (typeof CATEGORIES)[number];

const works = [
  {
    id: 1,
    title: "Metamong Playground & Pop-Pop Midnight",
    client: "Pokémon",
    year: "2026",
    category: "POPUP STORE",
    scope: "공간디자인",
    bg: "bg-violet-900",
  },
  {
    id: 2,
    title: "PLOOM Mobile Pop-up",
    client: "PLOOM",
    year: "2026",
    category: "POPUP STORE",
    scope: "공간디자인",
    bg: "bg-slate-800",
  },
  {
    id: 3,
    title: "STELLA ARTOIS 'Perfect Serve Awards'",
    client: "Stella Artois",
    year: "2026",
    category: "EVENT",
    scope: "행사디자인",
    bg: "bg-red-900",
  },
  {
    id: 4,
    title: "2025 Olive Young Awards Pop-up",
    client: "Olive Young",
    year: "2025",
    category: "POPUP STORE",
    scope: "공간디자인",
    bg: "bg-green-900",
  },
  {
    id: 5,
    title: "Color in Music Festival",
    client: "Color in Music",
    year: "2025",
    category: "FESTIVAL",
    scope: "부스디자인",
    bg: "bg-purple-800",
  },
  {
    id: 6,
    title: "하루애 시리즈 03 하루애28튼튼",
    client: "㈜아크",
    year: "2025",
    category: "PACKAGE",
    scope: "패키지디자인",
    bg: "bg-blue-900",
  },
  {
    id: 7,
    title: "하루애 시리즈 02 하루애치카",
    client: "㈜아크",
    year: "2025",
    category: "PACKAGE",
    scope: "패키지 & 상세페이지디자인",
    bg: "bg-cyan-900",
  },
  {
    id: 8,
    title: "하루애 시리즈 01 하루애육포",
    client: "㈜아크",
    year: "2025",
    category: "PACKAGE",
    scope: "패키지 & 상세페이지디자인",
    bg: "bg-amber-900",
  },
  {
    id: 9,
    title: "힐링펫푸드 영양제 & 의약외품",
    client: "힐링펫푸드",
    year: "2025",
    category: "WEB PAGE",
    scope: "상세페이지디자인",
    bg: "bg-teal-900",
  },
  {
    id: 10,
    title: "POKEMON STAY on JEJU",
    client: "롯데호텔 제주",
    year: "2025",
    category: "POPUP STORE",
    scope: "공간디자인",
    bg: "bg-emerald-900",
  },
  {
    id: 11,
    title: "ART-티끌 화성문화재단 성수저널 vol.1",
    client: "화성문화재단",
    year: "2024",
    category: "POPUP STORE",
    scope: "공간디자인 및 현장감리",
    bg: "bg-zinc-700",
  },
  {
    id: 12,
    title: "기업열전 오비맥주 연대기",
    client: "OB맥주",
    year: "2024",
    category: "POPUP STORE",
    scope: "공간디자인 및 현장감리",
    bg: "bg-blue-800",
  },
  {
    id: 13,
    title: "플룸 POP-UP 집기",
    client: "PLOOM",
    year: "2024",
    category: "POPUP STORE",
    scope: "집기디자인",
    bg: "bg-neutral-800",
  },
  {
    id: 14,
    title: "CULLINAN SERIES LAUNCHING EVENT",
    client: "Rolls-Royce",
    year: "2024",
    category: "POPUP STORE",
    scope: "공간디자인",
    bg: "bg-stone-800",
  },
  {
    id: 15,
    title: "Ballantine's HOUR LOUNGE",
    client: "Ballantine's",
    year: "2024",
    category: "POPUP STORE",
    scope: "공간디자인 및 현장감리",
    bg: "bg-sky-900",
  },
  {
    id: 16,
    title: "BREVILLE x 29CM",
    client: "Breville",
    year: "2024",
    category: "POPUP STORE",
    scope: "공간디자인 및 현장감리",
    bg: "bg-orange-900",
  },
  {
    id: 17,
    title: "원더플레이스 x 릴체리",
    client: "원더플레이스",
    year: "2024",
    category: "POPUP STORE",
    scope: "공간디자인",
    bg: "bg-pink-900",
  },
  {
    id: 18,
    title: "CASS & HANMAC",
    client: "OB맥주 / 밀락더마켓",
    year: "2024",
    category: "POPUP STORE",
    scope: "공간디자인 및 현장감리",
    bg: "bg-yellow-900",
  },
  {
    id: 19,
    title: "CASS x OLYMPIC DAY RUN",
    client: "CASS",
    year: "2024",
    category: "POPUP STORE",
    scope: "공간디자인 및 현장감리",
    bg: "bg-blue-950",
  },
  {
    id: 20,
    title: "CASS x GS RIGHT LIGHT BAR",
    client: "CASS / GS25",
    year: "2024",
    category: "POPUP STORE",
    scope: "공간디자인",
    bg: "bg-sky-800",
  },
  {
    id: 21,
    title: "POKEMON TOWN with LOTTE",
    client: "롯데백화점",
    year: "2024",
    category: "POPUP STORE",
    scope: "공간디자인 및 현장감리",
    bg: "bg-rose-900",
  },
  {
    id: 22,
    title: "HYBE LABELS ARTIST POP-UP",
    client: "HYBE",
    year: "2024",
    category: "POPUP STORE",
    scope: "공간디자인 및 현장감리",
    bg: "bg-indigo-900",
  },
  {
    id: 23,
    title: "Ballantine's 이동식 바 테이블",
    client: "Ballantine's",
    year: "2024",
    category: "VMD",
    scope: "집기디자인",
    bg: "bg-zinc-600",
  },
  {
    id: 24,
    title: "STUDIO MNG CALENDAR",
    client: "studio mng.",
    year: "2024",
    category: "WEB PAGE",
    scope: "상세페이지디자인",
    bg: "bg-zinc-500",
  },
  {
    id: 25,
    title: "WORLE OF TEQUILA",
    client: "World of Tequila",
    year: "2024",
    category: "VMD",
    scope: "집기디자인",
    bg: "bg-lime-900",
  },
  {
    id: 26,
    title: "PLAY DINO CHEW",
    client: "㈜아크",
    year: "2022",
    category: "PACKAGE",
    scope: "패키지디자인",
    bg: "bg-lime-800",
  },
  {
    id: 27,
    title: "수송 파우치",
    client: "Petlets",
    year: "2022",
    category: "PACKAGE",
    scope: "패키지디자인",
    bg: "bg-amber-800",
  },
];

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
            <div key={work.id} className="group cursor-pointer">
              {/* Image placeholder */}
              <div
                className={`${work.bg} aspect-[4/3] relative overflow-hidden mb-4`}
              >
                {/* Category badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[9px] tracking-[0.15em] uppercase bg-[#E5F200] text-black px-2 py-1 font-bold">
                    {work.category}
                  </span>
                </div>
                {/* Year watermark */}
                <div className="absolute inset-0 flex items-end p-5">
                  <p className="text-white/20 text-6xl font-black uppercase leading-none tracking-tight group-hover:text-white/35 transition-colors duration-300">
                    {work.year}
                  </p>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#E5F200]/0 group-hover:bg-[#E5F200]/10 transition-all duration-300" />
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
