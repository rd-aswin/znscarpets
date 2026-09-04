export default function RequestQuoteButton({ className = "", ...props }) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center w-[135px] sm:w-[155px] md:w-[170px] 2xl:w-[184px] h-[38px] sm:h-[42px] md:h-[46px] 2xl:h-[50px] border border-white bg-transparent text-[13px] sm:text-[14px] md:text-[15px] 2xl:text-[16px] font-[family-name:var(--font-manrope)] font-semibold text-white cursor-pointer rounded-[4px] transition-all hover:bg-white/10 ${className}`.trim()}
      {...props}
    >
      Request Quote
    </button>
  );
}
