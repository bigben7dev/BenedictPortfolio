import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

import ThemeToggle from "../ui/ThemeToggle";
import { useTheme } from "../../context/ThemeContext";

const links = [
  ["/", "Home"],
  ["/services", "Services"],
  ["/work", "Work"],
  ["/about", "About"],
  ["/contact", "Contact"],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const { theme } = useTheme();
  const isDark = theme === "dark";

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

  return (
    <>
      {/* =================================
          MOBILE TOP CONTROLS
      ================================== */}

      <div
        className={`
          fixed left-5 right-5 top-5 z-50
          flex items-center justify-between
          lg:hidden
          transition-all duration-300
          ${
            scrolled
              ? "pointer-events-none -translate-y-3 opacity-0"
              : "translate-y-0 opacity-100"
          }
        `}
      >
        <Link
          to="/"
          aria-label="Ben Ekeh — Home"
          className="inline-flex items-center gap-3"
          tabIndex={scrolled ? -1 : 0}
        >
          <img
            src="/images/logo.png"
            alt="Ben Ekeh"
            className="block h-10 w-auto max-w-[150px] object-contain object-left"
          />

          <span className="text-xl font-bold text-dark-text dark:text-white">
            BENEDICT EKEH
          </span>
        </Link>

        <ThemeToggle />
      </div>

      {/* =================================
          DESKTOP HEADER
      ================================== */}

      <header
        className={`
          fixed inset-x-0 top-0 z-50
          hidden lg:block
          transition-all duration-500
          ${scrolled ? "py-3" : "py-5"}
        `}
      >
        <div
          className={`
            container-shell mx-auto
            flex items-center justify-between
            rounded-2xl
            px-5 py-3
            transition-all duration-500

            ${
              scrolled
                ? isDark
                  ? "border border-white/10 bg-navy/80 shadow-lg backdrop-blur-xl"
                  : "border border-border-warm bg-ivory/90 shadow-sm backdrop-blur-xl"
                : ""
            }
          `}
        >
          {/* =================================
              DESKTOP LOGO
          ================================== */}

          <Link
            to="/"
            aria-label="Ben Ekeh — Home"
            className="
              focus-ring
              inline-flex shrink-0
              items-center gap-3
              transition-colors duration-300
                "
          >
            <img
              src="/images/logo.png"
              alt="Ben Ekeh"
              className="block h-10 w-auto max-w-[180px] object-contain"
            />

            <span className="text-xl font-bold text-dark-text dark:text-white">
              BENEDICT EKEH
            </span>
          </Link>

          {/* =================================
              DESKTOP NAVIGATION
          ================================== */}

          <nav aria-label="Main navigation" className="flex items-center gap-7">
            {links.map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                style={({ isActive }) => ({
                  color: isActive ? "#2F80FF" : isDark ? "#FFFFFF" : "#1F2933",
                })}
                onMouseEnter={(e) => {
                  const isActive =
                    e.currentTarget.getAttribute("aria-current") === "page";

                  if (!isActive) {
                    e.currentTarget.style.color = isDark
                      ? "#FFFFFF"
                      : "#1F2933";
                  }
                }}
                onMouseLeave={(e) => {
                  const isActive =
                    e.currentTarget.getAttribute("aria-current") === "page";

                  if (!isActive) {
                    e.currentTarget.style.color = isDark
                      ? "#FFFFFF"
                      : "#1F2933";
                  }
                }}
                className="
                   flex items-center justify-center
                      rounded-xl px-1 py-2
                     text-[17px]
                     transition-opacity duration-200
                       hover:opacity-80
                    "
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* =================================
              DESKTOP ACTIONS
          ================================== */}

          <div className="flex items-center gap-3">
            <ThemeToggle />

            <Link
              to="/contact"
              className="
                focus-ring
                inline-flex shrink-0
                items-center gap-2
                rounded-full
                bg-white
                px-4 py-2.5
                text-xs font-semibold
                text-navy
                transition
                hover:bg-soft-blue
              "
            >
              Start a Project
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
