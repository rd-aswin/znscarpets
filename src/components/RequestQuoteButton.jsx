export default function RequestQuoteButton({ className = "", ...props }) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center w-[150px] sm:w-[165px] 2xl:w-[184px] h-[42px] sm:h-[46px] 2xl:h-[50px] border border-white bg-transparent text-[14px] sm:text-[15px] 2xl:text-[16px] font-[family-name:var(--font-manrope)] font-semibold text-white cursor-pointer rounded-[4px] transition-all hover:bg-white/10 ${className}`.trim()}
      {...props}
    >
      Request Quote
    </button>
  );
}
