export default function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/7 px-3 py-1.5 text-[11px] font-medium text-white/85 backdrop-blur-md">
      <span className="h-1.5 w-1.5 rounded-full bg-status shadow-[0_0_12px_rgba(88,214,141,.8)]" />
      {children}
    </span>
  );
}
