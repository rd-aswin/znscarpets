export default function HeroCard({ className = "" }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <div
      className={`w-[320px] sm:w-[350px] 2xl:w-[380px] h-[135px] sm:h-[148px] 2xl:h-[160px] bg-white rounded-[8px] p-2.5 sm:p-3 flex items-center shadow-lg select-none ${className}`.trim()}
    >
      {/* Rectangular image aligned to the left side with 8px border radius */}
      <img
        src={`${basePath}/hero_card.jpg`}
        alt="Hero Card"
        className="h-full w-[140px] sm:w-[155px] 2xl:w-[165px] object-cover rounded-[8px] flex-shrink-0 block"
      />

      {/* Right content container */}
      <div className="flex-1 min-w-0 pl-3 sm:pl-4">
        {/* Ready for upcoming elements */}
      </div>
    </div>
  );
}
