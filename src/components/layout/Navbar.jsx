import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const links = [
  ["/", "Home"],
  ["/services", "Services"],
  ["/work", "Work"],
  ["/about", "About"],
  ["/contact", "Contact"],
];

export default function Navbar({ dark = true }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const text = dark ? "text-white" : "text-dark-text";

  return (
    <>
      {/* Standalone mobile logo */}
      <div
        className={`fixed left-5 top-5 z-40 transition-all duration-300 lg:hidden ${
          scrolled
            ? "pointer-events-none -translate-y-3 opacity-0"
            : "translate-y-0 opacity-100"
        }`}
      >
        <Link
          to="/"
          aria-label="Ben Ekeh — Home"
          className=" gap-4 inline-flex items-center"
          tabIndex={scrolled ? -1 : 0}
        >
          <img
            src="/images/logo.png"
            alt="Ben Ekeh"
            className="block h-10 w-auto max-w-[150px] object-contain object-left"
          />
          <span className="text-white font-bold text-xl">BENEDICT EKEH</span>
        </Link>
      </div>

      {/* Desktop glassmorphism header */}
      <header
        className={`fixed inset-x-0 top-0 z-50 hidden transition-all duration-500 lg:block ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div
          className={`container-shell !text-gray-700 font-2xl mx-auto flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
            scrolled
              ? dark
                ? "glass border border-white/10 bg-navy/80"
                : "border border-border-warm bg-ivory/85 shadow-sm backdrop-blur-xl"
              : ""
          }`}
        >
          <Link
            to="/"
            aria-label="Ben Ekeh — Home"
            className={`gap-4 focus-ring inline-flex shrink-0 items-center ${text}`}
          >
            <img
              src="/images/logo.png"
              alt="Ben Ekeh"
              className="block h-10 w-auto max-w-[180px] object-contain"
            />
            <span className="text-white font-bold text-xl">BENEDICT EKEH</span>
          </Link>

          <nav aria-label="Main navigation" className="flex items-center gap-7">
            {links.map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `focus-ring text-sm transition-colors ${
                    isActive
                      ? "text-blue"
                      : dark
                        ? "text-white/70 hover:text-white"
                        : "text-dark-text/70 hover:text-dark-text"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/contact"
            className="focus-ring inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-semibold text-navy transition hover:bg-soft-blue"
          >
            Start a Project
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </header>
    </>
  );
}
