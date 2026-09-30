export default function TechBadge({ children }) {
  return (
    <span className="rounded-full border border-border-warm bg-white/50 px-2.5 py-1 text-[10px] font-medium text-muted">
      {children}
    </span>
  );
}
