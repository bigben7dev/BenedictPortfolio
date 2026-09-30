import { motion } from "framer-motion";
import SectionWrapper from "../layout/SectionWrapper";
import SectionLabel from "../ui/SectionLabel";
import { process } from "../../data/process";

export default function Process() {
  return (
    <SectionWrapper id="process" className="bg-navy text-white">
      <div className="container-shell">
        <div className="flex items-end justify-between gap-5">
          <div>
            <SectionLabel dark>How I work</SectionLabel>
            <h2 className="display-font mt-2 text-4xl font-semibold leading-none sm:text-5xl">
              A Simple & Focused Process
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-white/55">
              From idea to launch, I follow a clear process to keep the work
              focused, practical and collaborative.
            </p>
          </div>
          <span className="hidden text-xs text-white/40 md:block">
            Discover → Plan → Design → Develop → Launch
          </span>
        </div>
        <div className="relative mt-14 grid gap-9 md:grid-cols-5 md:gap-5">
          <div className="absolute left-0 right-0 top-5 hidden h-px bg-white/15 md:block" />
          {process.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <div className="relative z-10 grid h-10 w-10 place-items-center rounded-full border border-blue bg-navy text-xs font-semibold text-white shadow-[0_0_0_5px_rgba(13,27,36,1)]">
                {step.number}
              </div>
              <h3 className="mt-5 text-sm font-semibold">{step.title}</h3>
              <p className="mt-2 max-w-[180px] text-xs leading-5 text-white/50">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
