import Nav from "@/components/Nav";

export default function ContactPage() {
  return (
    <>
      <Nav />
      <section className="relative min-h-screen bg-white flex flex-col overflow-hidden">
        {/* flex-1 div — identical structure to Hero */}
        <div className="relative z-10 px-8 md:px-16 flex-1 flex items-center">
          <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[65vw] h-[65vw] max-w-[750px] max-h-[750px] bg-[#E5F200] rounded-full -z-10" />
          <h1 className="text-[18vw] md:text-[13vw] font-black leading-[0.85] uppercase text-black">
            studio
            <br />
            mng.
          </h1>
        </div>

        {/* Contact info — in-flow below on mobile, absolute right on desktop */}
        <div className="relative z-10 px-8 pb-16 md:pb-0 text-right md:absolute md:right-16 md:top-1/2 md:-translate-y-1/2 flex flex-col gap-6 md:gap-8">
          <a
            href="mailto:STUDIOMNG@NAVER.COM"
            className="text-[5vw] md:text-[2.8vw] font-black uppercase text-black leading-none hover:text-[#E5F200] transition-colors"
          >
            STUDIOMNG@NAVER.COM
          </a>
          <address className="not-italic text-[3.5vw] md:text-[1.6vw] font-bold text-black leading-relaxed uppercase">
            4F-403, 234, GWANGGYOJUNGANG-RO,
            <br />
            YEONGTONG-GU, SUWON-SI,
            <br />
            GYEONGGI-DO, REPUBLIC OF KOREA
          </address>
        </div>
      </section>
    </>
  );
}
