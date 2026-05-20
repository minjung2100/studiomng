export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-white flex flex-col overflow-hidden"
    >
      {/* studio mng. */}
      <div className="relative z-10 px-8 md:px-16 flex-none h-[65vh] flex items-center md:flex-1 md:h-auto">
        {/* Yellow circle — positioned relative to heading container so it always aligns with the text */}
        <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[65vw] h-[65vw] max-w-[750px] max-h-[750px] bg-[#E5F200] rounded-full -z-10" />
        <h1 className="text-[18vw] md:text-[13vw] font-black leading-[0.85] uppercase text-black">
          studio
          <br />
          mng.
        </h1>
      </div>

      {/* Bottom right text — flows below on mobile, absolute on desktop */}
      <div className="relative z-10 px-8 md:px-0 pb-12 md:pb-0 text-right md:absolute md:bottom-12 md:right-16 max-w-xl md:max-w-2xl">
        <p className="text-[22px] md:text-[32px] font-black text-black leading-tight mb-3">
          MAKING NEW GROUNDS
        </p>
        <p className="text-[14px] md:text-[18px] font-bold text-black leading-relaxed">
          is about challenging the boundaries of design. From the core identity
          of a brand to the physical environments we inhabit, we transform abstract
          visions into solid realities. We build the physical form, direct the visual gaze,
          and breathe unforgettable stories into space. Believing that true creation
          grows in value when shared, we pass on these living insights to shape the future.
          This is how MNG redefines the horizon of space and experience,
          and constantly making new grounds beyond.
        </p>
      </div>
    </section>
  );
}
