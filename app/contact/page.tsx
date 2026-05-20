import Nav from "@/components/Nav";

export default function ContactPage() {
  return (
    <>
      <Nav />
      <section className="relative bg-white overflow-hidden">
        <div className="relative z-10 px-8 md:px-16 flex flex-col md:flex-row md:items-center md:justify-between md:min-h-screen">
          {/* h1 + circle — full screen height on mobile, matches Hero alignment */}
          <div className="relative min-h-screen md:min-h-0 flex items-center shrink-0">
            <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[65vw] h-[65vw] max-w-[750px] max-h-[750px] bg-[#E5F200] rounded-full -z-10" />
            <h1 className="text-[18vw] md:text-[13vw] font-black leading-[0.85] uppercase text-black">
              studio
              <br />
              mng.
            </h1>
          </div>

          <div className="flex flex-col gap-6 md:gap-8 text-right pb-20 md:pb-0">
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
        </div>
      </section>
    </>
  );
}
