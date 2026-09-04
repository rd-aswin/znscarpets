import Link from "next/link";

export default function NavLink({ href = "#", children, className = "", ...props }) {
  return (
    <Link
      href={href}
      className={`text-[15px] xl:text-[16px] 2xl:text-[18px] font-medium whitespace-nowrap transition-colors hover:text-[#0066B3] ${className}`.trim()}
      {...props}
    >
      {children}
    </Link>
  );
}
