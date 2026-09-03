import Link from "next/link";

export default function NavLink({ href = "#", children, className = "", ...props }) {
  return (
    <Link
      href={href}
      className={`text-[14px] font-medium ${className}`.trim()}
      {...props}
    >
      {children}
    </Link>
  );
}
