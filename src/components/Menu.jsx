export default function Menu() {
  return (
    <button
      type="button"
      className="flex h-[38px] sm:h-[42px] 2xl:h-[45.63px] w-[100px] sm:w-[115px] 2xl:w-[128px] items-center justify-between rounded-[6px] border border-[#0066B3] px-3 sm:px-4 2xl:px-[18px] cursor-pointer transition-opacity hover:opacity-85 shrink-0"
      aria-label="Open Menu"
    >
      <span className="font-[family-name:var(--font-manrope)] font-medium text-[14px] sm:text-[16px] 2xl:text-[18px]">
        Menu
      </span>
      <div className="flex flex-col justify-center gap-[3px] 2xl:gap-[4px]">
        <span className="block h-[1.5px] 2xl:h-[2px] w-[14px] 2xl:w-[16px] bg-current"></span>
        <span className="block h-[1.5px] 2xl:h-[2px] w-[14px] 2xl:w-[16px] bg-current"></span>
        <span className="block h-[1.5px] 2xl:h-[2px] w-[14px] 2xl:w-[16px] bg-current"></span>
      </div>
    </button>
  );
}
