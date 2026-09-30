import SectionWrapper from "../components/layout/SectionWrapper";
import SectionLabel from "../components/ui/SectionLabel";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function Work() {
  return (
    <>
      <main className="min-h-screen bg-ivory pt-28">
        <SectionWrapper className="pb-16">
          <div className="container-shell">
            <SectionLabel>Selected work</SectionLabel>
            <h1 className="display-font mt-2 max-w-3xl text-6xl font-semibold leading-[.9]">
              Projects built around real problems.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
              A selection of websites, commerce experiences and product
              concepts. Each case study focuses on the problem, the solution and
              the thinking behind the build.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {projects.map((p) => (
                <Link
                  key={p.id}
                  to={`/work/${p.slug}`}
                  className="group overflow-hidden rounded-3xl border border-border-warm bg-white/50"
                >
                  <div className="aspect-[16/9] overflow-hidden bg-navy">
                    <img
                      src={p.image}
                      alt=""
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold text-blue">
                      {p.category}
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold">{p.title}</h2>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-muted">
                      {p.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold">
                      View case study <ArrowUpRight size={13} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </main>
    </>
  );
}
