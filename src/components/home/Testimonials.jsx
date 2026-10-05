export default function Testimonials() {
  return (
    <section
      className="
        bg-ivory pb-10 text-dark-text
        transition-colors duration-300
        dark:bg-navy dark:text-white
        md:pb-16
      "
    >
      <div className="container-shell">
        <div
          className="
            rounded-3xl border border-border-warm bg-white/35 p-6
            shadow-sm transition-colors duration-300
            dark:border-white/10 dark:bg-[#14202A] dark:shadow-none
            md:p-8
          "
        >
          <p className="section-kicker text-blue">Trust & proof</p>

          <div className="mt-3 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h2 className="display-font text-4xl font-semibold">
                Selected Experience
              </h2>

              <p
                className="
                  mt-3 max-w-2xl text-sm leading-6 text-muted
                  transition-colors duration-300
                  dark:text-white/60
                "
              >
                Real projects, continuous learning and a practical approach to
                turning ideas into usable digital products.
              </p>
            </div>

            <a
              href="/about"
              className="
                text-xs font-semibold text-blue
                transition-opacity duration-200 hover:opacity-80
              "
            >
              View capabilities →
            </a>
          </div>

          <div className="mt-7 grid gap-3 md:grid-cols-3">
            <div
              className="
                rounded-2xl bg-ivory p-5
                transition-colors duration-300
                dark:bg-[#0D1B24]
              "
            >
              <p className="text-xs font-semibold">Business-first thinking</p>

              <p
                className="
                  mt-2 text-xs leading-5 text-muted
                  transition-colors duration-300
                  dark:text-white/60
                "
              >
                Start with the problem, audience and desired outcome before
                choosing the interface.
              </p>
            </div>

            <div
              className="
                rounded-2xl bg-ivory p-5
                transition-colors duration-300
                dark:bg-[#0D1B24]
              "
            >
              <p className="text-xs font-semibold">Responsive by default</p>

              <p
                className="
                  mt-2 text-xs leading-5 text-muted
                  transition-colors duration-300
                  dark:text-white/60
                "
              >
                Interfaces are designed for real devices and real usage, not
                just desktop screenshots.
              </p>
            </div>

            <div
              className="
                rounded-2xl bg-ivory p-5
                transition-colors duration-300
                dark:bg-[#0D1B24]
              "
            >
              <p className="text-xs font-semibold">Built to evolve</p>

              <p
                className="
                  mt-2 text-xs leading-5 text-muted
                  transition-colors duration-300
                  dark:text-white/60
                "
              >
                Components, data structures and project architecture leave room
                for future features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
