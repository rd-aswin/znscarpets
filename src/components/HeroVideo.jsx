import RequestQuoteButton from "./RequestQuoteButton";
import HeroCard from "./HeroCard";

export default function HeroVideo() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <section className="relative w-full h-[calc(100dvh-106px)] sm:h-[calc(100dvh-120px)] md:h-[calc(100dvh-135px)] lg:h-[calc(100dvh-150px)] 2xl:h-[calc(100dvh-163px)] overflow-hidden bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover object-bottom block"
      >
        <source src={`${basePath}/hero.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 80% opacity gradient overlay from black (starting at 15% distance) to transparent right */}
      <div className="absolute inset-0 bg-gradient-to-r from-black from-[15%] to-transparent opacity-80 pointer-events-none" />

      {/* Vertical category labels spanning from viewport bottom to just below the header */}
      <div className="absolute left-2 sm:left-3 md:left-4 lg:left-6 2xl:left-[40px] bottom-0 z-10 -rotate-90 origin-bottom-left w-[calc(100dvh-106px)] sm:w-[calc(100dvh-120px)] md:w-[calc(100dvh-135px)] lg:w-[calc(100dvh-150px)] 2xl:w-[calc(100dvh-163px)] px-6 sm:px-8 2xl:px-10 flex items-center justify-between text-white text-[13px] sm:text-[14px] font-medium tracking-wide whitespace-nowrap select-none">
        <span className="underline underline-offset-4 cursor-pointer transition-opacity hover:opacity-80">
          Residential
        </span>
        <span className="inline-block h-3.5 w-[1px] bg-white/35" aria-hidden="true" />
        <span className="text-[#0066B3] underline underline-offset-4 cursor-pointer transition-opacity hover:opacity-80">
          Commercial
        </span>
        <span className="inline-block h-3.5 w-[1px] bg-white/35" aria-hidden="true" />
        <span className="underline underline-offset-4 cursor-pointer transition-opacity hover:opacity-80">
          Hospitality
        </span>
        <span className="inline-block h-3.5 w-[1px] bg-white/35" aria-hidden="true" />
        <span className="underline underline-offset-4 cursor-pointer transition-opacity hover:opacity-80">
          Outdoor
        </span>
      </div>

      {/* Headline in Nobile 50px, Subtitle in Inter 22px Medium, and Request Quote Button */}
      <div className="absolute left-14 sm:left-20 md:left-24 lg:left-28 2xl:left-[140px] bottom-6 sm:bottom-8 2xl:bottom-10 z-10 select-none">
        <h1 className="font-[family-name:var(--font-nobile)] font-medium text-[26px] sm:text-[34px] md:text-[40px] lg:text-[45px] 2xl:text-[50px] text-white leading-[1.18] tracking-normal">
          Trusted Flooring
          <br />
          Specialists in UAE &amp; GCC
        </h1>
        <p className="mt-3 sm:mt-4 2xl:mt-[18px] font-medium text-[15px] sm:text-[17px] md:text-[19px] 2xl:text-[22px] text-white">
          For Homes, Offices &amp; Commercial Spaces
        </p>
        <div className="mt-6 sm:mt-8 2xl:mt-[36px]">
          <RequestQuoteButton />
        </div>
      </div>

      {/* Hero Card placed 30px left of the floating contact icons, aligned at the bottom level */}
      <div className="absolute right-12 sm:right-[78px] md:right-[86px] lg:right-[98px] 2xl:right-[110px] bottom-6 sm:bottom-8 2xl:bottom-10 z-10">
        <HeroCard />
      </div>
    </section>
  );
}
