import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { projects } from "../../data/projects";
import TechBadge from "../ui/TechBadge";
import Button from "../ui/Button";

export default function ProjectCaseStudy() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  if (!project)
    return (
      <>
        <Navbar dark={false} />
        <main className="min-h-screen bg-ivory pt-36">
          <div className="container-shell">
            <h1 className="display-font text-6xl">Project not found.</h1>
            <Link
              to="/work"
              className="mt-6 inline-flex items-center gap-2 text-blue"
            >
              <ArrowLeft size={16} /> Back to work
            </Link>
          </div>
        </main>
      </>
    );
  return (
    <>
      <Navbar dark={false} />
      <main className="bg-ivory pt-28">
        <section className="py-14 md:py-20">
          <div className="container-shell">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-xs font-semibold text-muted hover:text-blue"
            >
              <ArrowLeft size={14} /> Back to work
            </Link>
            <p className="mt-12 text-xs font-semibold text-blue">
              {project.category}
            </p>
            <h1 className="display-font mt-2 max-w-4xl text-6xl font-semibold leading-[.9]">
              {project.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted">
              {project.description}
            </p>
            <div className="mt-10 overflow-hidden rounded-3xl border border-border-warm bg-navy">
              <img src={project.image} alt="" className="w-full" />
            </div>
            <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
              <div>
                <h2 className="display-font text-4xl font-semibold">
                  Overview
                </h2>
                <p className="mt-4 text-sm leading-7 text-muted">
                  This case study documents the product direction, design
                  decisions and implementation approach behind the project.
                </p>
                <div className="mt-10 grid gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="font-semibold">Challenge</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {project.challenge}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Solution</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {project.solution}
                    </p>
                  </div>
                </div>
                <h2 className="mt-12 display-font text-4xl font-semibold">
                  Key Features
                </h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {project.features.map((f) => (
                    <li
                      key={f}
                      className="rounded-xl border border-border-warm bg-white/45 p-4 text-sm"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <aside className="rounded-3xl border border-border-warm bg-white/45 p-6">
                <p className="text-xs font-semibold uppercase tracking-[.16em] text-muted">
                  Technology
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <TechBadge key={t}>{t}</TechBadge>
                  ))}
                </div>
                <p className="mt-10 text-xs font-semibold uppercase tracking-[.16em] text-muted">
                  Project links
                </p>
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue"
                  >
                    Visit live project <ArrowUpRight size={15} />
                  </a>
                ) : (
                  <p className="mt-4 text-sm text-muted">
                    Private / prototype project.
                  </p>
                )}
              </aside>
            </div>
            <div className="mt-16 rounded-3xl bg-navy p-8 text-white md:p-12">
              <h2 className="display-font text-5xl font-semibold">
                Need something similar?
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-white/55">
                Tell me what you're trying to build and we'll define the right
                scope for it.
              </p>
              <Button className="mt-7" to="/contact">
                Start a Similar Project
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
