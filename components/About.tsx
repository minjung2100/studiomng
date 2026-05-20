export default function About() {

  return (
    <>
      {/* Philosophy */}
      <section
        id="about"
        className="relative bg-white overflow-hidden"
      >
        <div className="relative z-10 px-8 md:px-16 flex flex-col md:flex-row md:items-center md:justify-between md:min-h-screen">
          <div className="relative min-h-screen md:min-h-0 flex items-center shrink-0">
            <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[65vw] h-[65vw] max-w-[750px] max-h-[750px] bg-[#E5F200] rounded-full -z-10" />
            <h1 className="text-[18vw] md:text-[13vw] font-black leading-[0.85] uppercase text-black">
              studio
              <br />
              mng.
            </h1>
          </div>

          <div className="max-w-full md:max-w-[45vw] pb-20 md:pb-0">
            <p className="text-[18px] md:text-[25px] font-black text-black leading-snug mb-6 md:mb-8">
              경계를 허물고,<br />
              디자인의 새로운 영역을 만들어갑니다.
            </p>
            <p className="text-[14px] md:text-[25px] text-black leading-relaxed mb-4 md:mb-0">
              studio mng는 브랜드의 선명한 아이덴티티 수립부터<br />
              머무는 공간의 입체적인 경험까지,<br />
              경계 없는 크리에이티브를 지향하는 디자인 스튜디오입니다.
            </p>
            <p className="text-[14px] md:text-[25px] text-black leading-relaxed">
              정형화된 틀에서 벗어나 형태를 짓고 시선을 디렉팅하며,<br />
              정적인 환경 안에 잊지 못할 서사를 불어넣습니다.<br />
              우리는 대담한 시각적 언어로 소비자의 일상에 신선한 영감을 선사하고,<br />
              나아가 다음 세대의 크리에이터들과 살아있는 통찰을 공유하며<br />
              디자인의 미래와 지평을 끊임없이 넓혀갑니다.
            </p>
          </div>
        </div>
      </section>

    </>
  );
}
