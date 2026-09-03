export default function RequestQuoteButton({ className = "", ...props }) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center border border-white bg-transparent px-6 sm:px-8 py-2.5 sm:py-3 text-[14px] sm:text-[15px] 2xl:text-[16px] font-medium text-white cursor-pointer rounded-[4px] transition-all hover:bg-white/10 ${className}`.trim()}
      {...props}
    >
      Request Quote
    </button>
  );
}
