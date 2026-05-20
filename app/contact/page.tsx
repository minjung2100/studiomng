import Nav from "@/components/Nav";

export default function ContactPage() {
  return (
    <>
      <Nav />
      <section className="relative min-h-screen bg-white flex flex-col justify-center overflow-hidden">
        <div className="relative z-10 px-8 md:px-16 flex items-center justify-between gap-8">
          {/* Yellow circle — anchored to heading container */}
          <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[65vw] h-[65vw] max-w-[750px] max-h-[750px] bg-[#E5F200] rounded-full -z-10" />
          <h1 className="text-[18vw] md:text-[13vw] font-black leading-[0.85] uppercase text-black shrink-0">
            studio
            <br />
            mng.
          </h1>
        </div>
      </section>
    </>
  );
}
