import RequestQuoteButton from "./RequestQuoteButton";
import HeroCard from "./HeroCard";
import FloatingActions from "./FloatingActions";

export default function HeroVideo() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <section className="relative w-full h-[calc(100dvh-126px)] sm:h-[calc(100dvh-142px)] md:h-[calc(100dvh-157px)] lg:h-[calc(100dvh-172px)] 2xl:h-[830px] overflow-hidden bg-black">
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

      {/* Vertical category labels with 32px left padding, 100px gap from lower header and 100px gap from video bottom */}
      <div className="absolute left-2 sm:left-3 md:left-4 lg:left-6 2xl:left-[32px] top-[calc(100%-24px)] sm:top-[calc(100%-40px)] md:top-[calc(100%-56px)] lg:top-[calc(100%-72px)] 2xl:top-[calc(100%-100px)] z-10 -rotate-90 origin-top-left w-[calc(100dvh-226px)] sm:w-[calc(100dvh-262px)] md:w-[calc(100dvh-297px)] lg:w-[calc(100dvh-332px)] 2xl:w-[630px] flex items-center justify-between text-white text-[14px] sm:text-[16px] md:text-[18px] 2xl:text-[20px] font-normal tracking-wide whitespace-nowrap select-none">
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

      {/* Headline in Nobile 56px, Subtitle in Inter 25px Medium (40px gap), and Request Quote Button (70px gap) with 100px gap from vertical text */}
      <div className="absolute left-16 sm:left-24 md:left-28 lg:left-32 2xl:left-[160px] bottom-6 sm:bottom-10 md:bottom-14 lg:bottom-18 2xl:bottom-[100px] z-10 select-none">
        <h1 className="font-[family-name:var(--font-nobile)] font-medium text-[26px] sm:text-[34px] md:text-[40px] lg:text-[46px] 2xl:text-[56px] text-white leading-[1.18] tracking-normal">
          Trusted Flooring
          <br />
          Specialists in UAE &amp; GCC
        </h1>
        <p className="mt-4 sm:mt-6 md:mt-8 2xl:mt-[40px] font-medium text-[15px] sm:text-[18px] md:text-[20px] 2xl:text-[25px] text-white">
          For Homes, Offices &amp; Commercial Spaces
        </p>
        <div className="mt-6 sm:mt-10 md:mt-12 2xl:mt-[70px]">
          <RequestQuoteButton />
        </div>
      </div>

      {/* Hero Card placed 55px left of the floating contact icons, aligned at the 100px bottom level */}
      <div className="absolute right-12 sm:right-[78px] md:right-[86px] lg:right-[98px] 2xl:right-[143px] bottom-6 sm:bottom-10 md:bottom-14 lg:bottom-18 2xl:bottom-[100px] z-10">
        <HeroCard />
      </div>

      {/* Floating Contact Actions placed 40px from right, aligned at the exact same 100px bottom level */}
      <div className="absolute right-3 sm:right-5 md:right-6 lg:right-8 2xl:right-[40px] bottom-6 sm:bottom-10 md:bottom-14 lg:bottom-18 2xl:bottom-[100px] z-20">
        <FloatingActions />
      </div>
    </section>
  );
}
