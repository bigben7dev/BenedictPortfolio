import { motion } from "framer-motion";
import { Target, Code2, Smartphone, ShieldCheck } from "lucide-react";
import SectionWrapper from "../layout/SectionWrapper";
import SectionLabel from "../ui/SectionLabel";

const items = [
  [
    "Business focused",
    "Every solution is designed around your business goals and real user needs.",
    Target,
  ],
  [
    "Modern stack",
    "Built with React, Vite and Tailwind CSS for speed, clarity and maintainability.",
    Code2,
  ],
  [
    "Mobile first",
    "Useful and functional experiences on every device, from day one.",
    Smartphone,
  ],
  [
    "Reliable & supportive",
    "Clean code, practical deployment and support when you need it.",
    ShieldCheck,
  ],
];

export default function Approach() {
  return (
    <SectionWrapper
      id="approach"
      className="
        bg-ivory
        text-dark-text
        transition-colors
        duration-300
        dark:bg-navy
        dark:text-white
      "
    >
      <div className="container-shell grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center">
        {/* Introduction */}
        <div>
          <SectionLabel>My approach</SectionLabel>

          <h2 className="display-font mt-2 text-5xl font-semibold leading-[.92] sm:text-6xl">
            Your website should do more than exist.
          </h2>

          <p
            className="
              mt-5
              max-w-xl
              text-sm
              leading-7
              text-muted
              transition-colors
              duration-300
              dark:text-white/60
              sm:text-base
            "
          >
            I create digital solutions that work as hard as you do, turning
            visitors into customers, and ideas into scalable products. Every
            project is built with your goals, your users and your long-term
            growth in mind.
          </p>
        </div>

        {/* Approach cards */}
        <div className="grid gap-3 sm:grid-cols-2">
          {items.map(([title, desc, Icon], i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="
                rounded-2xl
                border
                border-border-warm
                bg-white/50
                p-5
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
                  h-10
                  w-10
                  place-items-center
                  rounded-xl
                  bg-soft-blue
                  text-blue
                  transition-colors
                  duration-300
                  dark:bg-blue/10
                "
              >
                <Icon size={18} />
              </div>

              <h3 className="mt-5 text-sm font-semibold">{title}</h3>

              <p
                className="
                  mt-2
                  text-xs
                  leading-5
                  text-muted
                  transition-colors
                  duration-300
                  dark:text-white/60
                "
              >
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
