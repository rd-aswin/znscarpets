export default function HeroCard({ className = "" }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <div
      className={`w-[320px] sm:w-[380px] md:w-[440px] 2xl:w-[499px] h-[135px] sm:h-[155px] md:h-[175px] 2xl:h-[192px] bg-white rounded-[8px] pl-3 sm:pl-4 2xl:pl-[18px] pr-3 sm:pr-4 2xl:pr-[18px] flex items-center shadow-lg select-none ${className}`.trim()}
    >
      {/* Rectangular image masked to 180px x 138px with 8px border radius */}
      <img
        src={`${basePath}/hero_card.jpg`}
        alt="Hero Card"
        className="w-[125px] sm:w-[145px] md:w-[165px] 2xl:w-[180px] h-[96px] sm:h-[110px] md:h-[125px] 2xl:h-[138px] object-cover rounded-[8px] flex-shrink-0 block"
      />

      {/* Right content container */}
      <div className="flex-1 min-w-0 pl-3 sm:pl-4 2xl:pl-[18px]">
        {/* Ready for upcoming elements */}
      </div>
    </div>
  );
}
