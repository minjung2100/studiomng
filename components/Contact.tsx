export default function Contact() {
  return (
    <section id="contact" className="bg-[#E5F200]">
      <div className="px-8 md:px-16 pt-5 pb-16">

        {/* Info row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-8">
          <a
            href="mailto:studiomng@naver.com"
            className="text-[18px] md:text-[30px] font-bold text-black hover:underline"
          >
            STUDIOMNG@NAVER.COM
          </a>
          <p className="text-[14px] md:text-[30px] font-bold text-black md:text-right leading-snug">
            4F-403, 234, GWANGGYOJUNGANG-RO,<br />
            YEONGTONG-GU, SUWON-SI,<br />
            GYEONGGI-DO, REPUBLIC OF KOREA
          </p>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8">
          <p className="text-[10px] tracking-[0.15em] text-black/40 uppercase">
            COPYRIGHT © STUDIO MNG Inc. ALL RIGHT RESERVED
          </p>
        </div>
      </div>
    </section>
  );
}
