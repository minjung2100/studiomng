"use client";

import { useRef, useEffect } from "react";


export default function About() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const fit = () => {
      const el = titleRef.current;
      if (!el) return;
      el.style.fontSize = "100px";
      el.style.marginLeft = "0px";
      el.style.width = "fit-content";
      const textWidth = el.offsetWidth;
      el.style.width = "";
      const containerWidth = el.parentElement!.offsetWidth;
      const ratio = containerWidth / textWidth;
      const multiplier = 1.04;
      el.style.fontSize = `${100 * ratio * multiplier}px`;
      const scaledWidth = textWidth * ratio * multiplier;
      el.style.marginLeft = `-${(scaledWidth - containerWidth) / 2}px`;
    };

    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  return (
    <>
      {/* Philosophy */}
      <section
        id="about"
        className="relative min-h-screen bg-white flex flex-col justify-center overflow-hidden"
      >
        <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[65vw] h-[65vw] max-w-[750px] max-h-[750px] bg-[#E5F200] rounded-full" />

        <div className="relative z-10 px-8 md:px-16 flex items-center justify-between gap-8">
          <h1 className="text-[18vw] md:text-[13vw] font-black leading-[0.85] uppercase text-black shrink-0">
            studio
            <br />
            mng.
          </h1>

          <div className="max-w-[45vw]">
            <p className="text-[25px] font-black text-black leading-snug mb-8">
              경계를 허물고,<br />
              디자인의 새로운 영역을 만들어갑니다.
            </p>
            <p className="text-[25px] text-black leading-relaxed">
              studio mng는 브랜드의 선명한 아이덴티티 수립부터<br />
              머무는 공간의 입체적인 경험까지,<br />
              경계 없는 크리에이티브를 지향하는 디자인 스튜디오입니다.
            </p>
            <p className="text-[25px] text-black leading-relaxed">
              정형화된 틀에서 벗어나 형태를 짓고 시선을 디렉팅하며,<br />
              정적인 환경 안에 잊지 못할 서사를 불어넣습니다.<br />
              우리는 대담한 시각적 언어로 소비자의 일상에 신선한 영감을 선사하고,<br />
              나아가 다음 세대의 크리에이터들과 살아있는 통찰을 공유하며<br />
              디자인의 미래와 지평을 끊임없이 넓혀갑니다.
            </p>
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section className="bg-black pt-0 pb-24 overflow-hidden">
        {/* Title - full bleed like OUR WORKS */}
        <h2
          ref={titleRef}
          className="font-black uppercase leading-none text-[#E5F200] whitespace-nowrap block mb-16 -mt-[0.18em]"
        >
          WORK PROCESS
        </h2>

        {/* Steps - circles */}
        <div className="px-8 md:px-16 flex items-center justify-between">
          {/* OFFER */}
          <div className="w-[12vw] h-[12vw] max-w-[160px] max-h-[160px] rounded-full border border-white/20 flex items-center justify-center shrink-0">
            <span className="text-xs tracking-[0.2em] uppercase text-white/40 font-bold">OFFER</span>
          </div>

          <Arrow />

          {[
            { num: "01", label: "RESEARCH\n& ANALYSIS" },
            { num: "02", label: "CONCEPT" },
            { num: "03", label: "DESIGN" },
            { num: "04", label: "FEEDBACK\n& REVISION" },
          ].map((step, i, arr) => (
            <div key={step.num} className="flex items-center gap-4 md:gap-6">
              <div className="w-[12vw] h-[12vw] max-w-[160px] max-h-[160px] rounded-full bg-[#E5F200] flex flex-col items-center justify-center text-center px-3 shrink-0">
                <span className="text-[10px] text-black/50 mb-1 tracking-widest">{step.num}</span>
                <span className="text-[11px] md:text-[13px] font-black text-black uppercase leading-tight whitespace-pre-line">
                  {step.label}
                </span>
              </div>
              {i < arr.length - 1 && <Arrow />}
            </div>
          ))}

          <Arrow />

          {/* SUPPORT */}
          <div className="w-[12vw] h-[12vw] max-w-[160px] max-h-[160px] rounded-full border border-white/20 flex items-center justify-center shrink-0">
            <span className="text-xs tracking-[0.2em] uppercase text-white/40 font-bold">SUPPORT</span>
          </div>
        </div>
      </section>
    </>
  );
}

function Arrow() {
  return <span className="text-gray-600 text-2xl shrink-0 mt-1">→</span>;
}
