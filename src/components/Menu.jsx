export default function Menu() {
  return (
    <button
      type="button"
      className="flex h-[32px] sm:h-[36px] w-[88px] sm:w-[105px] items-center justify-between rounded-[5px] border border-[#0066B3] px-2.5 sm:px-[14px] cursor-pointer transition-opacity hover:opacity-85 shrink-0"
      aria-label="Open Menu"
    >
      <span className="font-[family-name:var(--font-manrope)] font-medium text-[12px] sm:text-[13px]">
        Menu
      </span>
      <div className="flex flex-col justify-center gap-[3px]">
        <span className="block h-[1.5px] w-[12px] sm:w-[14px] bg-current"></span>
        <span className="block h-[1.5px] w-[12px] sm:w-[14px] bg-current"></span>
        <span className="block h-[1.5px] w-[12px] sm:w-[14px] bg-current"></span>
      </div>
    </button>
  );
}
