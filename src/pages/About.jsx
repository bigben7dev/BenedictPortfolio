import SectionWrapper from "../components/layout/SectionWrapper";
import SectionLabel from "../components/ui/SectionLabel";
import { certifications, technologies } from "../data/technologies";
import { Check } from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen bg-ivory pt-28 text-dark-text transition-colors duration-300 dark:bg-navy dark:text-white">
      <SectionWrapper>
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            {/* Portrait */}
            <div className="order-1 flex justify-center lg:order-2">
              <div className="relative flex h-[380px] w-full max-w-[330px] items-end justify-center overflow-hidden rounded-t-[160px] bg-gradient-to-b from-navy/10 to-transparent dark:from-white/10 sm:h-[460px] sm:max-w-[370px] lg:h-[560px] lg:max-w-[430px]">
                <img
                  src="/images/pixnobg.png"
                  alt="Ben Ekeh"
                  className="h-full w-full object-contain object-bottom"
                />
              </div>
            </div>

            {/* Text */}
            <div className="order-2 lg:order-1">
              <SectionLabel>About me</SectionLabel>

              <h1 className="display-font mt-2 text-5xl font-semibold leading-[0.95] sm:text-6xl">
                The person behind the products.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-muted dark:text-white/65">
                I'm Benedict Ekeh, a web developer focused on building useful,
                responsive and scalable digital experiences. My approach
                combines interface design, frontend development and product
                thinking to turn business ideas into functional web products.
              </p>

              <p className="mt-4 max-w-2xl text-base leading-8 text-muted dark:text-white/65">
                I care about clarity: clear goals, clear interfaces, clean
                implementation and a process clients can understand.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-border-warm bg-white/50 px-4 py-2 text-xs font-medium dark:border-white/10 dark:bg-white/5">
                  Frontend Development
                </span>

                <span className="rounded-full border border-border-warm bg-white/50 px-4 py-2 text-xs font-medium dark:border-white/10 dark:bg-white/5">
                  UI Implementation
                </span>

                <span className="rounded-full border border-border-warm bg-white/50 px-4 py-2 text-xs font-medium dark:border-white/10 dark:bg-white/5">
                  Product Thinking
                </span>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* =========================
          CERTIFICATIONS + TECHNOLOGY
      ========================== */}
      <SectionWrapper className="pt-0">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Certifications */}
          <section>
            <SectionLabel>Certifications</SectionLabel>

            <h2 className="display-font mt-2 text-4xl font-semibold leading-tight sm:text-5xl">
              Continuous learning, applied to real work.
            </h2>

            <div className="mt-8 space-y-4">
              {certifications.map((certification) => (
                <div
                  key={certification.title}
                  className="flex items-start gap-4 rounded-2xl border border-border-warm bg-white/40 p-5 transition-colors duration-300 dark:border-white/10 dark:bg-white/5"
                >
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-soft-blue text-blue">
                    <Check size={16} strokeWidth={2.2} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold">
                      {certification.title}
                    </h3>

                    <p className="mt-1 text-xs text-muted dark:text-white/50">
                      {certification.issuer} · {certification.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Technology */}
          <section>
            <SectionLabel>Technology</SectionLabel>

            <h2 className="display-font mt-2 text-4xl font-semibold leading-tight sm:text-5xl">
              Tools I use to build.
            </h2>

            <div className="mt-8 flex flex-wrap gap-3">
              {technologies.map((technology) => (
                <div
                  key={technology}
                  className="rounded-2xl border border-border-warm bg-white/50 px-4 py-3 text-sm font-medium transition-colors duration-300 dark:border-white/10 dark:bg-white/5"
                >
                  {technology}
                </div>
              ))}
            </div>
          </section>
        </div>
      </SectionWrapper>
    </main>
  );
}
