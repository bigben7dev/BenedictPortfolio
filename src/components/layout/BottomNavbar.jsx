import { NavLink } from "react-router-dom";
import {
  House,
  BriefcaseBusiness,
  Layers3,
  UserRound,
  MessageCircle,
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

const navItems = [
  { to: "/", label: "Home", Icon: House, end: true },
  { to: "/services", label: "Services", Icon: Layers3 },
  { to: "/work", label: "Work", Icon: BriefcaseBusiness },
  { to: "/about", label: "About", Icon: UserRound },
];

export function BottomNavbar() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const navbarStyle = {
    backgroundColor: isDark ? "#F5F1E8" : "#0D1B24",
    borderColor: isDark
      ? "rgba(31, 41, 51, 0.12)"
      : "rgba(255, 255, 255, 0.12)",
  };

  const inactiveColor = isDark ? "#1F2933" : "#FFFFFF";

  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed inset-x-3 bottom-3 z-50 lg:hidden"
    >
      <div
        style={navbarStyle}
        className="
          mx-auto flex max-w-xl items-center justify-around
          rounded-2xl border px-2 py-2
          shadow-2xl backdrop-blur-xl
          transition-colors duration-300
        "
      >
        {navItems.map(({ to, label, Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            style={({ isActive }) => ({
              color: isActive ? "#2F80FF" : inactiveColor,
            })}
            className="
              flex min-w-0 flex-1 flex-col
              items-center justify-center
              gap-1 rounded-xl px-1 py-2
              text-[10px]
              transition-opacity duration-200
              hover:opacity-70
            "
          >
            {({ isActive }) => (
              <>
                <Icon
                  size={20}
                  strokeWidth={isActive ? 2.4 : 1.8}
                  aria-hidden="true"
                />

                <span>{label}</span>
              </>
            )}
          </NavLink>
        ))}

        <NavLink
          to="/contact"
          style={({ isActive }) => ({
            color: isActive ? "#2F80FF" : inactiveColor,
          })}
          className="
            flex min-w-0 flex-1 flex-col
            items-center justify-center
            gap-1 rounded-xl px-1 py-2
            text-[10px]
            transition-opacity duration-200
            hover:opacity-70
          "
        >
          {({ isActive }) => (
            <>
              <MessageCircle
                size={20}
                strokeWidth={isActive ? 2.4 : 1.8}
                aria-hidden="true"
              />

              <span>Contact</span>
            </>
          )}
        </NavLink>
      </div>
    </nav>
  );
}
