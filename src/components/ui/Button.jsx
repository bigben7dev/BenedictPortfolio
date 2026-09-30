import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Button({
  children,
  to,
  href,
  variant = "primary",
  className = "",
  external = false,
  type = "button",
}) {
  const styles =
    variant === "primary"
      ? "bg-blue text-white border-blue hover:bg-[#236fdc]"
      : "bg-transparent text-current border-current/30 hover:border-blue hover:text-blue";
  const content = (
    <>
      {children}
      <ArrowUpRight size={16} />
    </>
  );
  const classes = `focus-ring inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-colors duration-300 ${styles} ${className}`;
  if (href)
    return (
      <a
        className={classes}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
      >
        {content}
      </a>
    );
  if (to)
    return (
      <Link className={classes} to={to}>
        {content}
      </Link>
    );
  return (
    <button type={type} className={classes}>
      {content}
    </button>
  );
}
