import SectionWrapper from "../components/layout/SectionWrapper";
import SectionLabel from "../components/ui/SectionLabel";
import { services } from "../data/services";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <>
      <main className="min-h-screen bg-ivory pt-28">
        <SectionWrapper>
          <div className="container-shell">
            <SectionLabel>Services</SectionLabel>
            <h1 className="display-font mt-2 max-w-3xl text-6xl font-semibold leading-[.9]">
              Digital solutions designed around your goals.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
              From business websites to custom systems, the service starts with
              understanding what the product needs to accomplish.
            </p>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {services.map(({ title, description, icon: Icon }) => (
                <article
                  key={title}
                  className="rounded-3xl border border-border-warm bg-white/45 p-7"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-soft-blue text-blue">
                    <Icon />
                  </div>
                  <h2 className="mt-8 text-2xl font-semibold">{title}</h2>
                  <p className="mt-3 max-w-lg text-sm leading-6 text-muted">
                    {description}
                  </p>
                  <div className="mt-8 flex items-center gap-2 text-xs font-semibold text-blue">
                    Discuss this service <ArrowUpRight size={14} />
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-12 rounded-3xl bg-navy p-8 text-white md:p-12">
              <p className="section-kicker text-blue-300">
                Have a project in mind?
              </p>
              <h2 className="display-font mt-2 text-5xl font-semibold">
                Let's define what you actually need.
              </h2>
              <Link
                to="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-blue px-5 py-3 text-sm font-semibold"
              >
                Start a Project <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </SectionWrapper>
      </main>
    </>
  );
}
