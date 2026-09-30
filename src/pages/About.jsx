import SectionWrapper from "../components/layout/SectionWrapper";
import SectionLabel from "../components/ui/SectionLabel";
import { certifications, technologies } from "../data/technologies";
import { Check } from "lucide-react";

export default function About() {
  return (
    <>
      <main className="bg-ivory pt-28">
        <SectionWrapper>
          <div className="container-shell">
            <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
              <div>
                <SectionLabel>About me</SectionLabel>
                <h1 className="display-font mt-2 text-6xl font-semibold leading-[.9]">
                  The person behind the products.
                </h1>
                <p className="mt-6 text-base leading-8 text-muted">
                  I'm Benedict Ekeh, a web developer focused on building useful,
                  responsive and scalable digital experiences. My approach
                  combines interface design, frontend development and product
                  thinking to turn business ideas into functional web products.
                </p>
                <p className="mt-4 text-base leading-8 text-muted">
                  I care about clarity: clear goals, clear interfaces, clean
                  implementation and a process clients can understand.
                </p>
              </div>
              <div className="relative flex min-h-[480px] items-end justify-center w-3/4 overflow-hidden rounded-[36px] border border-border-warm bg-white/50">
                <div className="absolute mb-5 items-center overflow-hidden rounded-[25%] ">
                  <img
                    src="/images/pixnobg.png"
                    alt="Ben Ekeh portrait placeholder"
                    className="relative z-10 h-[410px] rounded-[20px] w-full object-contain object-bottom"
                  />
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>
        <SectionWrapper className="pt-0">
          <div className="container-shell grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <SectionLabel>Certifications</SectionLabel>
              <h2 className="display-font mt-2 text-5xl font-semibold">
                Continuous learning, applied to real work.
              </h2>
              <div className="mt-8 space-y-4">
                {certifications.map((c) => (
                  <div
                    key={c.title}
                    className="flex items-start gap-4 rounded-2xl border border-border-warm bg-white/40 p-5"
                  >
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-soft-blue text-blue">
                      <Check size={16} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold">{c.title}</h3>
                      <p className="mt-1 text-xs text-muted">
                        {c.issuer} · {c.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionLabel>Technology</SectionLabel>
              <h2 className="display-font mt-2 text-5xl font-semibold">
                Tools I use to build.
              </h2>
              <div className="mt-8 flex flex-wrap gap-3">
                {technologies.map((t) => (
                  <div
                    key={t}
                    className="rounded-2xl border border-border-warm bg-white/50 px-4 py-3 text-sm font-medium"
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionWrapper>
      </main>
    </>
  );
}
