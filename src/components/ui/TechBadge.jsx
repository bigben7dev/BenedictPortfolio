export default function TechBadge({ children }) {
  return (
    <span
      className="rounded-full
        border
        border-border-warm
        bg-white/60
        px-2.5
        py-1
        text-[10px]
        font-medium
        text-dark-text
        transition-colors
        duration-300
        dark:border-white/10
        dark:bg-white/5
        dark:text-white/75"
    >
      {children}
    </span>
  );
}
