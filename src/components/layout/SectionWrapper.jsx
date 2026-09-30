export default function SectionWrapper({ children, className = "", ...props }) {
  return (
    <section {...props} className={`py-20 md:py-28 ${className}`}>
      {children}
    </section>
  );
}
