export default function SectionLabel({ children, dark = false }) {
  return (
    <div className={`section-kicker ${dark ? "text-blue-300" : "text-blue"}`}>
      {children}
    </div>
  );
}
