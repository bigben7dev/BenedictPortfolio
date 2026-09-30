// Mirrors the @theme block in src/index.css. Import this wherever a
// component needs a raw value instead of a class — mainly Framer
// Motion variants, which can't consume Tailwind utility classes.

export const colors = {
  navy: "#0D1B24",
  navyLight: "#162733",
  ivory: "#F5F1E8",
  white: "#FFFFFF",
  blue: "#2F80FF",
  borderDark: "#33424B",
  borderWarm: "#DDD7CA",
  mutedText: "#687177",
  darkText: "#14202A",
  softBlue: "#DCE9FF",
  available: "#58D68D",
};

// Motion timings, taken directly from the spec's hero animation section.
// Keep entrances one-shot; only the portrait float and background
// drift are allowed to loop, and both must be disabled under
// prefers-reduced-motion (handled globally in index.css, but any
// component driving motion via JS — not CSS — should also check
// window.matchMedia("(prefers-reduced-motion: reduce)") itself).
export const motion = {
  portraitEntrance: {
    duration: 0.9, // 0.8–1.1s
    ease: [0.16, 1, 0.3, 1], // easeOut-style cubic-bezier
  },
  portraitFloat: {
    duration: 5, // 4–6s, loops
    distance: 8, // px, y: 0 -> -8 -> 0
  },
  headlineLineStagger: 0.1, // 0.08–0.15s between lines
  cardHover: {
    duration: 0.3, // 250–350ms
    lift: 6, // px, translateY(-6px)
  },
};
