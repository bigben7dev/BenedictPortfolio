import SectionWrapper from "../components/layout/SectionWrapper";
import SectionLabel from "../components/ui/SectionLabel";
import { services } from "../data/services";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <main
      className="
        min-h-screen
        bg-ivory
        pt-28
        text-dark-text
        transition-colors
        duration-300
        dark:bg-navy
        dark:text-white
      "
    >
      <SectionWrapper>
        <div className="container-shell">
          {/* Header */}
          <SectionLabel>Services</SectionLabel>

          <h1 className="display-font mt-2 max-w-3xl text-6xl font-semibold leading-[.9]">
            Digital solutions designed around your goals.
          </h1>

          <p
            className="
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-muted
              transition-colors
              duration-300
              dark:text-white/60
            "
          >
            From business websites to custom systems, the service starts with
            understanding what the product needs to accomplish.
          </p>

          {/* Services */}
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {services.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="
                  rounded-3xl
                  border border-border-warm
                  bg-white/60
                  p-7
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-md
                  dark:border-white/10
                  dark:bg-[#14202A]
                  dark:shadow-none
                  dark:hover:border-white/15
                  dark:hover:bg-[#162733]
                "
              >
                {/* Icon */}
                <div
                  className="
                    grid
                    h-12
                    w-12
                    place-items-center
                    rounded-xl
                    bg-soft-blue
                    text-blue
                    transition-colors
                    duration-300
                    dark:bg-blue/10
                    dark:text-blue
                  "
                >
                  <Icon size={21} strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h2 className="mt-8 text-2xl font-semibold">{title}</h2>

                {/* Description */}
                <p
                  className="
                    mt-3
                    max-w-lg
                    text-sm
                    leading-6
                    text-muted
                    transition-colors
                    duration-300
                    dark:text-white/60
                  "
                >
                  {description}
                </p>

                {/* Service CTA */}
                <Link
                  to="/contact"
                  className="
                    mt-8
                    inline-flex
                    items-center
                    gap-2
                    text-xs
                    font-semibold
                    text-blue
                    transition-all
                    duration-200
                    hover:gap-3
                  "
                >
                  Discuss this service
                  <ArrowUpRight size={14} />
                </Link>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div
            className="
              mt-12
              rounded-3xl
              bg-navy
              p-8
              text-white
              transition-colors
              duration-300
              dark:bg-[#162733]
              md:p-12
            "
          >
            <p className="section-kicker text-blue-300">
              Have a project in mind?
            </p>

            <h2 className="display-font mt-2 max-w-3xl text-5xl font-semibold">
              Let's define what you actually need.
            </h2>

            <Link
              to="/contact"
              className="
                mt-7
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-blue
                px-5
                py-3
                text-sm
                font-semibold
                text-white
                transition-all
                duration-200
                hover:bg-blue/90
                hover:gap-3
                focus:outline-none
                focus:ring-2
                focus:ring-blue/40
              "
            >
              Start a Project
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
