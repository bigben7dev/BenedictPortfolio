import { motion } from "framer-motion";
import { Check, ExternalLink } from "lucide-react";
import { certifications, technologies } from "../../data/technologies";
import SectionWrapper from "../layout/SectionWrapper";
import SectionLabel from "../ui/SectionLabel";

export default function AboutPreview() {
  return (
    <SectionWrapper className="bg-ivory">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <SectionLabel>About me</SectionLabel>
            <h2 className="display-font mt-2 text-4xl font-semibold leading-[.95] sm:text-5xl">
              The person behind the products.
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-muted sm:text-base">
              I'm Benedict Ekeh, a web developer focused on building useful,
              responsive and scalable digital experiences. I enjoy clean code,
              modern design and user-friendly interfaces that turn ideas into
              useful products.
            </p>
            <a
              href="/about"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-gray-300 px-5 py-3 text-sm  hover:bg-white  font-semibold  text-white"
            >
              More About Me <ExternalLink size={14} />
            </a>
          </div>
          <div className="grid gap-8 md:grid-cols-[.9fr_1.1fr]">
            <div className="relative flex min-h-[300px] items-end justify-center overflow-hidden rounded-3xl border border-border-warm bg-white/50">
              <div className="absolute inset-6 rounded-[40%] bg-soft-blue/70" />
              <img
                src="/images/pixnobg.png"
                alt="Ben Ekeh portrait placeholder"
                className="relative z-10 h-[300px] w-full object-contain object-bottom"
              />
            </div>
            <div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.16em] text-muted">
                  Certifications
                </p>
                <div className="mt-4 space-y-3">
                  {certifications.map((c) => (
                    <div
                      key={c.title}
                      className="flex gap-3 border-b border-border-warm pb-3"
                    >
                      <div className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-soft-blue text-blue">
                        <Check size={14} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold leading-5">
                          {c.title}
                        </p>
                        <p className="mt-0.5 text-[10px] text-muted">
                          {c.issuer} · {c.year}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[.16em] text-muted">
                  Technical capabilities
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {technologies.map((t) => (
                    <motion.span
                      whileHover={{ y: -2 }}
                      key={t}
                      className="rounded-full border border-border-warm bg-white/60 px-3 py-2 text-[11px] font-medium"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
