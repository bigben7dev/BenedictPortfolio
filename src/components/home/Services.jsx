import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "../../data/services";
import SectionWrapper from "../layout/SectionWrapper";
import SectionLabel from "../ui/SectionLabel";

export default function Services() {
  return (
    <SectionWrapper
      className="
        bg-white
        text-dark-text
        transition-colors
        duration-300
        dark:bg-[#14202A]
        dark:text-white
      "
    >
      <div className="container-shell">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <SectionLabel>What I do</SectionLabel>

            <h2 className="display-font mt-2 text-4xl font-semibold leading-none sm:text-5xl">
              Services I Offer
            </h2>

            <p
              className="
                mt-4 max-w-xl text-sm leading-6
                text-muted transition-colors duration-300
                dark:text-white/60
                sm:text-base
              "
            >
              I create digital solutions that solve real business problems and
              create lasting value.
            </p>
          </div>

          <a
            href="#work"
            className="
              hidden text-xs font-semibold text-blue
              transition-opacity duration-200 hover:opacity-80
              md:inline-flex md:items-center md:gap-1
            "
          >
            View all services <ArrowUpRight size={13} />
          </a>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="
                  group rounded-2xl
                  border border-border-warm
                  bg-white/35
                  p-6
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-blue/50
                  hover:bg-white/65

                  dark:border-white/10
                  dark:bg-[#0D1B24]
                  dark:hover:border-blue/40
                  dark:hover:bg-[#162733]
                "
              >
                <div
                  className="
                    mb-12 grid h-11 w-11 place-items-center
                    rounded-xl bg-soft-blue text-blue
                    transition-colors duration-300
                    dark:bg-blue/10
                  "
                >
                  <Icon size={20} />
                </div>

                <h3 className="text-base font-semibold text-dark-text dark:text-white">
                  {service.title}
                </h3>

                <p
                  className="
                    mt-3 text-sm leading-6
                    text-muted transition-colors duration-300
                    dark:text-white/60
                  "
                >
                  {service.description}
                </p>

                <div
                  className="
                    mt-6 grid h-8 w-8 place-items-center
                    rounded-full
                    border border-border-warm
                    text-dark-text
                    transition-all duration-200

                    group-hover:border-blue
                    group-hover:bg-blue
                    group-hover:text-white

                    dark:border-white/15
                    dark:text-white/80
                  "
                >
                  <ArrowUpRight size={14} />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
