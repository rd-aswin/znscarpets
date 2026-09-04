import RequestQuoteButton from "./RequestQuoteButton";
import HeroCard from "./HeroCard";
import FloatingActions from "./FloatingActions";

export default function HeroVideo() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <section className="relative w-full h-[calc(100dvh-96px)] sm:h-[calc(100dvh-115px)] md:h-[calc(100dvh-134px)] lg:h-[calc(100dvh-149px)] 2xl:h-[830px] min-h-[500px] overflow-hidden bg-black">
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

      {/* Vertical category labels with 32px left padding, 100px gap from lower header and 100px gap from video bottom (visible on tablet and desktop) */}
      <div className="hidden md:flex absolute left-3 md:left-4 lg:left-6 2xl:left-[32px] top-[calc(100%-48px)] lg:top-[calc(100%-72px)] 2xl:top-[calc(100%-100px)] z-10 -rotate-90 origin-top-left w-[calc(100dvh-200px)] lg:w-[calc(100dvh-280px)] 2xl:w-[630px] items-center justify-between text-white text-[15px] lg:text-[18px] 2xl:text-[20px] font-normal tracking-wide whitespace-nowrap select-none">
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

      {/* Headline in Nobile 56px, Subtitle in Inter 25px Medium (40px gap), and Request Quote Button (70px gap) with responsive scaling */}
      <div className="absolute left-4 sm:left-6 md:left-24 lg:left-28 2xl:left-[160px] bottom-4 sm:bottom-6 md:bottom-10 lg:bottom-14 2xl:bottom-[100px] z-10 select-none max-w-[calc(100vw-70px)] sm:max-w-[480px] md:max-w-[560px] lg:max-w-[620px] 2xl:max-w-none">
        <h1 className="font-[family-name:var(--font-nobile)] font-medium text-[22px] xs:text-[26px] sm:text-[34px] md:text-[40px] lg:text-[46px] 2xl:text-[56px] text-white leading-[1.15] sm:leading-[1.18] tracking-normal">
          Trusted Flooring
          <br />
          Specialists in UAE &amp; GCC
        </h1>
        <p className="mt-2.5 sm:mt-4 md:mt-6 2xl:mt-[40px] font-medium text-[13px] xs:text-[15px] sm:text-[18px] md:text-[20px] 2xl:text-[25px] text-white">
          For Homes, Offices &amp; Commercial Spaces
        </p>
        <div className="mt-4 sm:mt-6 md:mt-10 2xl:mt-[70px]">
          <RequestQuoteButton />
        </div>
      </div>

      {/* Hero Card placed on desktop (visible on lg and 2xl screens) */}
      <div className="hidden lg:block absolute right-20 xl:right-28 2xl:right-[143px] bottom-14 2xl:bottom-[100px] z-10">
        <HeroCard />
      </div>

      {/* Floating Contact Actions aligned at the exact bottom level */}
      <div className="absolute right-2.5 sm:right-4 md:right-6 2xl:right-[40px] bottom-4 sm:bottom-6 md:bottom-10 lg:bottom-14 2xl:bottom-[100px] z-20">
        <FloatingActions />
      </div>
    </section>
  );
}
