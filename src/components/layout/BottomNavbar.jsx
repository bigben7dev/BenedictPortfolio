import { NavLink } from "react-router-dom";
import {
  House,
  BriefcaseBusiness,
  Layers3,
  UserRound,
  MessageCircle,
} from "lucide-react";

const navItems = [
  { to: "/", label: "Home", Icon: House, end: true },
  { to: "/services", label: "Services", Icon: Layers3 },
  { to: "/work", label: "Work", Icon: BriefcaseBusiness },
  { to: "/about", label: "About", Icon: UserRound },
];

export function BottomNavbar() {
  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed inset-x-3 bottom-3 z-50 lg:hidden"
    >
      <div className="mx-auto flex max-w-xl items-center justify-around rounded-2xl border border-navy/90 bg-white/90 px-2 py-2 shadow-2xl backdrop-blur-1xl">
        {navItems.map(({ to, label, Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `flex min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-xl px-1 py-2 text-[10px] transition-colors duration-200 ${
                isActive ? "text-blue" : "text-white/65 hover:text-white"
              }`
            }
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
          className={({ isActive }) =>
            `flex min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-xl px-1 py-2 text-[10px] transition-colors duration-200 ${
              isActive ? "text-white" : "text-blue"
            }`
          }
        >
          <MessageCircle size={20} aria-hidden="true" />
          <span>Contact</span>
        </NavLink>
      </div>
    </nav>
  );
}
