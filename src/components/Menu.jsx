export default function Menu() {
  return (
    <button
      type="button"
      className="flex h-[36px] w-[105px] items-center justify-between rounded-[5px] border border-[#0066B3] px-[14px] cursor-pointer transition-opacity hover:opacity-85"
      aria-label="Open Menu"
    >
      <span className="font-[family-name:var(--font-manrope)] font-medium text-[13px]">
        Menu
      </span>
      <div className="flex flex-col justify-center gap-[3px]">
        <span className="block h-[1.5px] w-[14px] bg-current"></span>
        <span className="block h-[1.5px] w-[14px] bg-current"></span>
        <span className="block h-[1.5px] w-[14px] bg-current"></span>
      </div>
    </button>
  );
}
