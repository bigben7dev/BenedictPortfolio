import { motion } from "framer-motion";
import { Check, ExternalLink } from "lucide-react";
import { certifications, technologies } from "../../data/technologies";
import SectionWrapper from "../layout/SectionWrapper";
import SectionLabel from "../ui/SectionLabel";

export default function AboutPreview() {
  return (
    <SectionWrapper
      className="
        bg-ivory
        text-dark-text
        transition-colors
        duration-300
        dark:bg-navy
        dark:text-white
      "
    >
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          {/* About introduction */}
          <div>
            <SectionLabel>About me</SectionLabel>

            <h2 className="display-font mt-2 text-4xl font-semibold leading-[.95] sm:text-5xl">
              The person behind the products.
            </h2>

            <p
              className="
                mt-5
                max-w-lg
                text-sm
                leading-7
                text-muted
                transition-colors
                duration-300
                dark:text-white/60
                sm:text-base
              "
            >
              I'm Benedict Ekeh, a web developer focused on building useful,
              responsive and scalable digital experiences. I enjoy clean code,
              modern design and user-friendly interfaces that turn ideas into
              useful products.
            </p>

            <a
              href="/about"
              className="
                mt-7
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-navy
                px-5
                py-3
                text-sm
                font-semibold
                !text-gray-400
                transition-all
                duration-200
                hover:bg-blue
                hover:gap-3
                focus:outline-none
                focus:ring-2
                focus:ring-blue/40
                dark:bg-white
                !dark:text-black
                dark:hover:bg-soft-blue
              "
            >
              More About Me
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Visual + credentials */}
          <div className="grid gap-8 md:grid-cols-[.9fr_1.1fr]">
            {/* Portrait */}
            <div
              className="
                relative
                flex
                min-h-[320px]
                items-end
                justify-center
                overflow-hidden
                rounded-[2rem]
                border
                border-border-warm
                bg-white/50
                transition-colors
                duration-300
                dark:border-white/10
                dark:bg-[#14202A]
                sm:min-h-[360px]
              "
            >
              {/* Decorative background shape */}
              <div
                className="
                  absolute
                  bottom-0
                  left-1/2
                  h-[78%]
                  w-[78%]
                  -translate-x-1/2
                  rounded-t-[45%]
                  bg-soft-blue/70
                  transition-colors
                  duration-300
                  dark:bg-blue/10
                "
              />

              {/* Portrait */}
              <img
                src="/images/pixnobg.png"
                alt="Ben Ekeh"
                className="
                  relative
                  z-10
                  h-[330px]
                  w-full
                  object-contain
                  object-bottom
                  transition-transform
                  duration-500
                  hover:scale-[1.02]
                  sm:h-[370px]
                "
              />
            </div>

            {/* Credentials */}
            <div>
              {/* Certifications */}
              <div>
                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[.16em]
                    text-muted
                    transition-colors
                    duration-300
                    dark:text-white/50
                  "
                >
                  Certifications
                </p>

                <div className="mt-4 space-y-3">
                  {certifications.map((c) => (
                    <div
                      key={c.title}
                      className="
                        flex
                        gap-3
                        border-b
                        border-border-warm
                        pb-3
                        transition-colors
                        duration-300
                        dark:border-white/10
                      "
                    >
                      <div
                        className="
                          mt-0.5
                          grid
                          h-7
                          w-7
                          shrink-0
                          place-items-center
                          rounded-lg
                          bg-soft-blue
                          text-blue
                          transition-colors
                          duration-300
                          dark:bg-blue/10
                        "
                      >
                        <Check size={14} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs font-semibold leading-5">
                          {c.title}
                        </p>

                        <p
                          className="
                            mt-0.5
                            text-[10px]
                            text-muted
                            transition-colors
                            duration-300
                            dark:text-white/50
                          "
                        >
                          {c.issuer} · {c.year}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mt-8">
                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[.16em]
                    text-muted
                    transition-colors
                    duration-300
                    dark:text-white/50
                  "
                >
                  Technical capabilities
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {technologies.map((t) => (
                    <motion.span
                      whileHover={{ y: -2 }}
                      key={t}
                      className="
                        rounded-full
                        border
                        border-border-warm
                        bg-white/60
                        px-3
                        py-2
                        text-[11px]
                        font-medium
                        transition-colors
                        duration-300
                        dark:border-white/10
                        dark:bg-white/5
                        dark:text-white/80
                      "
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
